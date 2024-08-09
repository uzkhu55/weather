// // Check if the browser supports the Web Speech API
// if (!("webkitSpeechRecognition" in window)) {
//   alert(
//     "Your browser does not support the Web Speech API. Please use Chrome or a compatible browser."
//   );
// } else {
//   const recognition = new webkitSpeechRecognition();
//   recognition.continuous = false;
//   recognition.interimResults = false;
//   recognition.lang = "en-US";

//   const voiceButton = document.getElementById("voiceButton");
//   const status = document.getElementById("status");

//   voiceButton.addEventListener("click", () => {
//     recognition.start();
//     status.textContent = "Listening...";
//   });

//   recognition.onresult = (event) => {
//     const transcript = event.results[0][0].transcript;
//     status.textContent = `Recognized: ${transcript}`;
//     // Construct the Google search URL
//     const searchUrl = `https://www.youtube.com/search?q=${encodeURIComponent(
//       transcript
//     )}`;
//     // Redirect to the Google search page
//     window.open(searchUrl, "_blank");
//   };

//   recognition.onerror = (event) => {
//     status.textContent = `Error occurred: ${event.error}`;
//   };

//   recognition.onend = () => {
//     status.textContent = "Click the button and speak your search query.";
//   };
// }

// Check if the browser supports the Web Speech API
if (!("webkitSpeechRecognition" in window)) {
  alert(
    "Your browser does not support the Web Speech API. Please use Chrome or a compatible browser."
  );
} else {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-EN";

  const voiceButton = document.getElementById("voiceButton");
  const status = document.getElementById("status");

  voiceButton.addEventListener("click", () => {
    recognition.start();
    status.textContent = "Listening...";
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    status.textContent = `Recognized: ${transcript}`;

    const video = document.querySelector("video");

    // if (transcript === "camera") {
    //   navigator.mediaDevices
    //     .getUserMedia({ video: true })
    //     .then((stream) => (video.srcObject = stream));
    // }

    // Construct the Google search URL
    const message = new SpeechSynthesisUtterance(` ${transcript}, `);

    message.lang = "en-EN";

    speechSynthesis.speak(message);

    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      transcript
    )}`;
    // Redirect to the Google search page
    window.open(searchUrl, "_blank");
  };

  recognition.onerror = (event) => {
    status.textContent = `Error occurred: ${event.error}`;
  };

  recognition.onend = () => {
    status.textContent = "Click the button and speak your search query.";
  };
}
