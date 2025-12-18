# Fullstack Audio Transcription Assignment

This project is a **Fullstack Development Assignment** consisting of:

1. 🎧 **Frontend** – Circular Audio Equalizer UI using Web Audio API
2. 🔊 **Backend** – Real-time streaming transcription using Spring Boot (WebFlux + WebSocket)
3. 🧪 **UI/UX Audit** – Suggestions for improving [www.prepxl.app](http://www.prepxl.app)

This repository is prepared as part of a **pre-interview assignment**.

---

## 🛠 Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla)
* Web Audio API
* MediaStream API
* Canvas API

### Backend

* Java 17
* Spring Boot
* Spring WebFlux
* WebSocket
* Maven

---

## 📂 Project Structure

```
fullstack-audio-transcription/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── backend/
│   ├── pom.xml
│   ├── mvnw
│   └── src/main/java/com/example/audio/
│       ├── AudioApplication.java
│       ├── config/
│       │   └── WebSocketConfig.java
│       └── handler/
│           └── AudioWebSocketHandler.java
│
├── docs/
│   └── ui-ux-audit.md
│
└── README.md
```

---

## 🚀 How to Run the Project

### 1️⃣ Frontend (Audio Visualizer)

1. Open the `frontend` folder
2. Open `index.html` in a browser

   * OR use **Live Server** extension in VS Code
3. Click **Start Microphone**
4. Speak or play music → circular equalizer will react in real-time

---

### 2️⃣ Backend (WebSocket Server)

#### Prerequisites

* Java 17 installed
* Maven installed

#### Steps

```bash
cd backend
mvn spring-boot:run
```

Backend will start on:

```
http://localhost:8080
```

WebSocket endpoint:

```
ws://localhost:8080/ws/audio
```

---

## 🔄 Real-Time Streaming Flow

```
Microphone
   ↓
Frontend (Web Audio API)
   ↓ WebSocket
Spring Boot Backend
   ↓
Speech-to-Text API (Gemini – planned)
   ↓
Partial Transcription
   ↓
Frontend UI
```

> Note: Gemini API integration is mocked for demonstration and architecture clarity.

---

## 🧪 UI/UX Audit

* Located in `docs/ui-ux-audit.md`
* Includes:

  * Current UI issues
  * Improvement suggestions
  * UX recommendations

---

## 🎥 Demo Video (Submission)

The demo video includes:

* Circular audio visualizer walkthrough
* Backend WebSocket streaming explanation
* Real-time transcription flow

---

## 📌 Key Highlights

* Real-time audio processing
* Smooth 60 FPS animation
* Non-blocking backend (WebFlux)
* Clean project structure
* Beginner-friendly implementation

---

## 🧑‍💻 Author

**Jaydip Jujar**
Pre-Interview Assignment – Fullstack Development

---

## ✅ Submission Checklist

* [x] Frontend circular audio visualizer
* [x] Backend WebSocket streaming service
* [x] UI/UX audit document
* [x] GitHub repository
* [x] README documentation
* [ ] Demo video

---

Thank you for reviewing this assignment 🙌
