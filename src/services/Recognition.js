const Recognition = () => {
  const p = new Promise((resolve) => {
    if ('webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.interimResults = false;
      recognition.lang = 'tr-TR';
      recognition.start();
      recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        resolve(text.toLowerCase());
      };
    } else {
      // console.error('Speech recognition not supported!');
    }
  });
  return p;
};

export default Recognition;
