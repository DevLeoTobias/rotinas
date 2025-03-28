// Importa o Firebase Messaging
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

// Inicializa o Firebase Messaging
const messaging = firebase.messaging();

// Recebe a notificação quando o navegador está em segundo plano ou fechado
messaging.onBackgroundMessage(function(payload) {
  console.log("Mensagem recebida em segundo plano: ", payload);

  // Exibe a notificação
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon || "https://via.placeholder.com/150"
  });
});
