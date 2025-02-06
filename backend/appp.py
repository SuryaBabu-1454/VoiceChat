import os
import sys
import queue
import json
import sounddevice as sd
import vosk
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend requests

model_path = "vosk-model-small-en-us-0.15"
if not os.path.exists(model_path):
    print("Please download the model from https://alphacephei.com/vosk/models")
    sys.exit(1)

model = vosk.Model(model_path)
q = queue.Queue()

def callback(indata, frames, time, status):
    if status:
        print(status, file=sys.stderr)
    q.put(bytes(indata))


@app.route('/')
def index():
    return "Speech-to-Text Server"

@app.route("/start", methods=["GET"])
def start_recognition():
    with sd.RawInputStream(samplerate=16000, blocksize=16000, dtype="int16",
                       channels=1, callback=callback):

         rec = vosk.KaldiRecognizer(model, 16000)
        #  rec.SetWords(True)  # Enable word-level detection
        #  rec.SetPartialWords(True)  # Show real-time results
        #  rec.SetMaxAlternatives(3)  # Get multiple word options
       
         while True:
            data = q.get()
            if rec.AcceptWaveform(data):
                result = json.loads(rec.Result())["text"]
                return jsonify({"text": result})





if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
