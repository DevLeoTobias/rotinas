/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// daqui pra cima eh bootstrap
//
//
//
// para manter os check boxes marcados
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os checkboxes da tabela
    const checkboxes = document.querySelectorAll('.form-check-input');

    // Função para carregar o estado salvo no localStorage
    function carregarEstadoCheckboxes() {
        checkboxes.forEach(checkbox => {
            const id = checkbox.id;
            const estadoSalvo = localStorage.getItem(id);

            if (estadoSalvo === "true") {
                checkbox.checked = true;
                checkbox.closest("td").classList.add("table-success"); // Muda a cor da célula
            } else {
                checkbox.checked = false;
                checkbox.closest("td").classList.remove("table-success");
            }
        });
    }

    // Função para salvar o estado dos checkboxes no localStorage
    function salvarEstadoCheckboxes() {
        checkboxes.forEach(checkbox => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    }

    // Evento para salvar sempre que o usuário clicar no checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            salvarEstadoCheckboxes();

            // Altera a cor da célula quando marcado/desmarcado
            if (this.checked) {
                this.closest("td").classList.add("table-success");
            } else {
                this.closest("td").classList.remove("table-success");
            }
        });
    });

    // Carregar estado ao iniciar a página
    carregarEstadoCheckboxes();
});


//notificacao
//firebase
// Certifique-se de carregar o Firebase antes de usar
const firebaseConfig = {
    apiKey: "AIzaSyAQq7LCv-QzeInj4OESLBIbuQ2QMjhj0aU",
    authDomain: "rotinafinal.firebaseapp.com",
    projectId: "rotinafinal",
    storageBucket: "rotinafinal.firebasestorage.app",
    messagingSenderId: "1069538363889",
    appId: "1:1069538363889:web:4cbc577834e288a0bf5c50",
    measurementId: "G-J0XB507S21"
  };

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Solicita permissão para notificações
document.addEventListener("DOMContentLoaded", () => {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            console.log("Permissão para notificações concedida.");

            // Obter Token FCM com sua chave VAPID
            messaging.getToken({ vapidKey: "BFR7bfDqqgBENKOH4AoNmJCpZ_7k1TPan2MQhDB2_M_k_PA9ilI7Lkh7Fy8QA1sa-9p0q5_kdfxFt5fcTiZVQr4" })
                .then(token => {
                    if (token) {
                        console.log("Token FCM:", token);
                        // Você pode enviar esse token para o seu backend para notificar o usuário
                    } else {
                        console.log("Nenhum token disponível.");
                    }
                })
                .catch(error => {
                    console.error("Erro ao obter token:", error);
                });

        } else {
            console.log("Notificações não permitidas.");
        }
    });
});

// Receber notificações enquanto a aba estiver aberta
messaging.onMessage(payload => {
    console.log("Notificação recebida:", payload);

    new Notification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.icon || "https://via.placeholder.com/150"
    });
});

