const iframe = document.getElementById('editorFrame');
const executeButton = document.getElementById('executeButton');
const homeTab = document.getElementById('homeTab');
const scriptsTab = document.getElementById('scriptsTab');
const aboutTab = document.getElementById('aboutTab');
const settingsButton = document.getElementById('settingsButton');
const logoutButton = document.getElementById('logoutButton');
const header = document.getElementById('hr');

// Listen for messages from the iframe
window.addEventListener('message', (event) => {
    if (event.data.type === 'monacoEditorValue') {
        sendToWebSocket(event.data.value);
    }
});

// Request value from the iframe when the button is clicked
executeButton.addEventListener('click', () => {
    if (iframe.contentWindow) {
        iframe.contentWindow.postMessage({ type: 'requestEditorValue' }, '*');
    }
});

// WebSocket setup
const ws = new WebSocket('ws://localhost:1827/exec');

ws.addEventListener('open', () => {
    console.log('Connected to WebSocket server');
    header.style.color = '#00ff00';
});

ws.addEventListener('error', (error) => {
    console.error('WebSocket Error:', error);
});

ws.addEventListener('close', () => {
    console.log('WebSocket closed');
    header.style.color = '#ff0000';
});

// Function to send editor content to WebSocket
function sendToWebSocket(code) {
    console.log(`Sending: ${code}`);
    ws.send(code);
}

// Sidebar navigation tabs
[homeTab, scriptsTab, aboutTab].forEach(tab => {
    tab.addEventListener('click', () => {
        const activeTab = document.querySelector('.sidebar-item.active');
        if (activeTab) activeTab.classList.remove('active');
        tab.classList.add('active');
        iframe.src = tab.id === 'homeTab' ? 'ValiantRosplocoEditor.html' : `${tab.id}.html`;
    });
});

// Settings and Logout buttons
settingsButton.addEventListener('click', () => {
    alert('Settings functionality is under development.');
});

logoutButton.addEventListener('click', () => {
    alert('there\'s no need to log out.');
    ws.close();
});

// Initialize
homeTab.click();  // Default to Home tab
