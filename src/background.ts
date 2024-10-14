import browser from 'webextension-polyfill';

let recognition: SpeechRecognition | null = null;

browser.runtime.onMessage.addListener((message, sender) => {
  if (message.action === 'startRecording') {
    if (!recognition) {
      recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join(' ');

        browser.tabs.sendMessage(sender.tab!.id!, {
          action: 'insertText',
          text: transcript
        });
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
      };
    }

    recognition.start();
  } else if (message.action === 'stopRecording' && recognition) {
    recognition.stop();
  }
});