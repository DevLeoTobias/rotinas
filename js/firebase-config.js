// Importação correta do Firebase no Service Worker
importScripts("https://www.gstatic.com/firebasejs/10.3.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.3.1/firebase-messaging-compat.js");

// Configuração do Firebase (substitua pelos seus dados)
const firebaseConfig = {
    apiKey: "AIzaSyAQq7LCv-QzeInj4OESLBIbuQ2QMjhj0aU",
    authDomain: "rotinafinal.firebaseapp.com",
    projectId: "rotinafinal",
    storageBucket: "rotinafinal.firebasestorage.app",
    messagingSenderId: "1069538363889",
    appId: "1:1069538363889:web:4cbc577834e288a0bf5c50",
    measurementId: "G-J0XB507S21"
  };

// Inicializa o Firebase no Service Worker
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Evento para receber mensagens em segundo plano
messaging.onBackgroundMessage(payload => {
    console.log("Notificação recebida em background:", payload);
    
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.icon || "https://via.placeholder.com/150"
    });
});