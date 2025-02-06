# Vosk Voice Recognition Application

This project is a Voice Recognition Application built using Vosk for speech-to-text processing in the backend and React for the frontend. It uses Flask in the backend to handle API requests, SoundDevice for capturing microphone audio, and Vosk for speech-to-text conversion. The app is capable of recognizing speech and displaying the converted text in the frontend.

Additionally, the application can be packaged into a desktop application using Electron.

# Installation
To get started with the project, follow these steps:

 # 1. Clone the repository
 
     git clone https://github.com/your-username/your-repository-name.git
     cd your-repository-name

# 2. Install backend dependencies
In the backend folder, install the necessary Python dependencies:

    cd backend
    pip install  flask flask-cors vosk sounddevice

# 3. Install frontend dependencies
In the frontend folder, install the required dependencies for React:

    cd frontend
    npm install

    
 # Backend Setup
 
The backend is responsible for capturing audio from the microphone and converting it to text using the Vosk speech-to-text model. It's built using Flask, Vosk, and SoundDevice.

Steps to set up the backend:
Make sure to install all required Python dependencies as mentioned in the installation section.

Download the Vosk model (vosk-model-small-en-us-0.15) from the Vosk repository and place it in the backend directory.

# Run the backend server:

 ---->   python app.py

    
This will start the Flask server on port 5000, and it will listen for HTTP requests at http://localhost:5000/start.

# __________________________________________________________________________________________________________________________

# Frontend Setup
The frontend is a React application that allows the user to interact with the backend for speech recognition. It communicates with the backend via HTTP requests to get the recognized text.

# Steps to set up the frontend:
In the frontend folder, install the required dependencies:

------->    npm install
        
# Start the backend server first before starting the frontend.

Run the frontend application:

------->   npm run dev

This will start the frontend on http://localhost:3000. You can now interact with the frontend and press the "Start Voice Chat" button to begin voice recognition.


# __________________________________________________________________________________________________________________________

# Convert to Desktop App using Electron
1. Install Electron
Install Electron as a development dependency:

------->  npm install electron --save-dev

    
# Add Electron start script
In your package.json, add the following script to start Electron:

"scripts": {
  "start": "react-scripts start",
  "electron": "electron ."
}

# Run Electron Application

before running Electron app running Frontend

------> npm run dev

In a separate terminal, run Electron:

------->  npm run electron

This will open the application as a desktop app in an Electron window.
# _____________________________________________________________________________________________________________________


# Troubleshooting

Here are some common issues and their solutions:

# 1. The frontend is not connecting to the backend.

Solution: Ensure that the backend is running on the correct port (5000) and the frontend is sending requests to the correct URL (http://127.0.0.1:5000). You can update the backendURL in the frontend code to match the backend address if necessary.

# 2. Voice recognition is not working.
Solution: Make sure your microphone is working properly and that the correct permissions are granted. Ensure that the Vosk model is correctly loaded.

# oppo3. The app is not converting into a desktop application using Electron.
Solution: Make sure you have the electron package installed, and ensure you're running Electron with npm run electron after starting the React app with npm run dev.

