// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyAQq7LCv-QzeInj4OESLBIbuQ2QMjhj0aU",
    authDomain: "rotinafinal.firebaseapp.com",
    projectId: "rotinafinal",
    storageBucket: "rotinafinal.firebasestorage.app",
    messagingSenderId: "1069538363889",
    appId: "1:1069538363889:web:4cbc577834e288a0bf5c50",
    measurementId: "G-J0XB507S21"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
    console.log('Mensagem em segundo plano recebida:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
