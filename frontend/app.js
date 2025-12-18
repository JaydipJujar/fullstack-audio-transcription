let socket;
const transcriptEl = document.getElementById("transcript");

const canvas = document.getElementById("visualizer");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;

const startBtn = document.getElementById("startBtn");

let audioCtx;
let analyser;
let dataArray;

startBtn.onclick = async () => {

  socket = new WebSocket("ws://localhost:8080/ws/audio");

  socket.onopen = () => {
    console.log("WebSocket connected");
  };

  socket.onmessage = (event) => {
    transcriptEl.innerText = event.data;
  };

  socket.onerror = (err) => {
    console.error("WebSocket error", err);
  };

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  audioCtx = new AudioContext();
  const source = audioCtx.createMediaStreamSource(stream);

  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 256;

  dataArray = new Uint8Array(analyser.frequencyBinCount);
  source.connect(analyser);

  startSendingAudio(stream);
  draw();
};


function draw() {
  requestAnimationFrame(draw);
  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 120;
  const bars = dataArray.length;

  for (let i = 0; i < bars; i++) {
    const angle = (i / bars) * Math.PI * 2;
    const barHeight = dataArray[i] / 2;

    const x1 = centerX + Math.cos(angle) * radius;
    const y1 = centerY + Math.sin(angle) * radius;
    const x2 = centerX + Math.cos(angle) * (radius + barHeight);
    const y2 = centerY + Math.sin(angle) * (radius + barHeight);

    ctx.strokeStyle = `hsl(${i * 4}, 100%, 50%)`;
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
}
function startSendingAudio(stream) {
  const audioContext = new AudioContext();
  const source = audioContext.createMediaStreamSource(stream);
  const processor = audioContext.createScriptProcessor(4096, 1, 1);

  source.connect(processor);
  processor.connect(audioContext.destination);

  processor.onaudioprocess = (e) => {
    if (socket.readyState === WebSocket.OPEN) {
      const audioData = e.inputBuffer.getChannelData(0);

      // Convert Float32Array to simple string (mock)
      socket.send(audioData.slice(0, 100).toString());
    }
  };
}
