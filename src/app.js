// Red@ entrypoint for Mini RTS Sandbox
const root = document.getElementById('app');
const state = { project: 'mini-rts-sandbox', author: 'Red@', theme: 'games', milestones: 3 };
if (root) root.textContent = JSON.stringify(state, null, 2);
