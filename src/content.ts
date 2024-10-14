import browser from 'webextension-polyfill';

function createMicButton() {
  const button = document.createElement('button');
  button.innerHTML = '🎤';
  button.style.cssText = `
    position: absolute;
    z-index: 9999;
    background: white;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `;

  button.addEventListener('click', () => {
    browser.runtime.sendMessage({ action: 'startRecording' });
  });

  return button;
}

const micButton = createMicButton();
document.body.appendChild(micButton);

document.addEventListener('focusin', (e) => {
  const target = e.target as HTMLElement;
  if (target.tagName === 'TEXTAREA' || (target.tagName === 'INPUT' && target.getAttribute('type') === 'text')) {
    const rect = target.getBoundingClientRect();
    micButton.style.display = 'flex';
    micButton.style.top = `${rect.top + window.scrollY}px`;
    micButton.style.left = `${rect.right + window.scrollX + 5}px`;
  }
});

document.addEventListener('focusout', () => {
  micButton.style.display = 'none';
});

browser.runtime.onMessage.addListener((message) => {
  if (message.action === 'insertText') {
    const activeElement = document.activeElement as HTMLInputElement | HTMLTextAreaElement;
    if (activeElement && (activeElement.tagName === 'TEXTAREA' || activeElement.tagName === 'INPUT')) {
      const startPos = activeElement.selectionStart || 0;
      const endPos = activeElement.selectionEnd || 0;
      activeElement.value = 
        activeElement.value.substring(0, startPos) +
        message.text +
        activeElement.value.substring(endPos);
      activeElement.selectionStart = activeElement.selectionEnd = startPos + message.text.length;
    }
  }
});