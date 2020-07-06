var disabled = false; //enabled by default
var myButton = document.getElementById('toggle');
var myText = document.getElementById('state');

chrome.storage.local.get('disabled', data => {
    disabled = !!data.disabled;
    myButton.textContent = disabled ? 'Enable' : 'Disable';
    myText.textContent = disabled ? 'Ratiogram is currently disabled.' : 'Ratiogram is currently enabled.';
});

myButton.onclick = () => {
    disabled = !disabled;
    myButton.textContent = disabled ? 'Disable' : 'Enable';
    myText.textContent = disabled ? 'Ratiogram is currently disabled.' : 'Ratiogram is currently enabled.';
    chrome.storage.local.set({disabled:disabled});
};