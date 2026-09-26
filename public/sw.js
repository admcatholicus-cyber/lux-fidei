// Este arquivo permite que o navegador reconheça o site como um Aplicativo instalável
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Necessário para o PWA funcionar, mesmo que vazio
});