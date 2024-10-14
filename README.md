# Speech-to-Text Browser Extension

This cross-browser extension provides speech-to-text functionality, allowing users to transcribe spoken words into text within any text area on their system.

## Features

- Transcribe spoken words into text within any text area
- Small, unobtrusive microphone button appears when focusing on a text area
- Voice recording activates when the microphone button is clicked
- Accurate transcription of recorded speech into text
- Compatible with Chrome, Firefox, and other major browsers
- Seamless user experience across different browsers and applications
- Privacy and security measures to protect user data

## Installation

1. Clone this repository or download the source code.
2. Install dependencies:
   ```
   npm install
   ```
3. Build the extension:
   ```
   npm run build
   ```
4. Load the extension in your browser:
   - Chrome: Go to `chrome://extensions/`, enable "Developer mode", click "Load unpacked", and select the `dist` folder.
   - Firefox: Go to `about:debugging#/runtime/this-firefox`, click "Load Temporary Add-on", and select any file in the `dist` folder.

## Usage

1. Focus on any text area or input field on a webpage.
2. A small microphone button will appear near the text area.
3. Click the microphone button to start recording.
4. Speak clearly into your microphone.
5. The transcribed text will be inserted into the text area.
6. Click the microphone button again to stop recording.

## Privacy and Security

- This extension only accesses the microphone when explicitly activated by the user.
- No audio data is stored or transmitted; transcription happens locally in the browser.
- The extension only operates on the current active tab and does not access any other browser data.

## Development

To run the extension in development mode:

```
npm run dev
```

This will start a development server and watch for changes in the source files.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.