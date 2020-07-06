var fenabled = false; //enabled by default
var lenabled = false; //enabled by default
var myFButton = document.getElementById('ftoggle');
var myLButton = document.getElementById('ltoggle');
var myFText = document.getElementById('fstate');
var myLText = document.getElementById('lstate');

chrome.storage.local.get('fenabled', data => {
    fenabled = !!data.fenabled;
    myFButton.textContent = fenabled ? 'Disable' : 'Enable';
     myFText.textContent = fenabled ? 'Ratiogram is currently displaying follower count.' : 'Ratiogram is currently not displaying follower count.';
});

chrome.storage.local.get('lenabled', data => {
    lenabled = !!data.lenabled;
    myLButton.textContent = lenabled ? 'Disable' : 'Enable';
     myLText.textContent = lenabled ? 'Ratiogram is currently displaying like count.' : 'Ratiogram is currently not displaying like count.';
});

myFButton.onclick = () => {
    fenabled = !fenabled;
    myFButton.textContent = fenabled ? 'Disable' : 'Enable';
     myFText.textContent = fenabled ? 'Ratiogram is currently displaying follower count.' : 'Ratiogram is currently not displaying follower count.';
    chrome.storage.local.set({fenabled:fenabled});
};

myLButton.onclick = () => {
    lenabled = !lenabled;
    myLButton.textContent = lenabled ? 'Disable' : 'Enable';
     myLText.textContent = lenabled ? 'Ratiogram is currently displaying like count.' : 'Ratiogram is currently not displaying like count.';
    chrome.storage.local.set({lenabled:lenabled});
};