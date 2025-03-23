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



//notificacao

// Verifica se a API de Notificação está disponível
if ("Notification" in window) {
    // Solicita permissão para enviar notificações
    Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
            console.log("Permissão concedida!");
        } else {
            console.log("Permissão negada.");
        }
    });
}

// Função para mostrar uma notificação
function mostrarNotificacao(titulo, corpo) {
    if (Notification.permission === "granted") {
        new Notification(titulo, {
            body: corpo
            
        });
    }
}

// Função para criar uma notificação para compromissos
function notificarCompromisso(horario, dia, atividade) {
    if (Notification.permission === "granted") {
        const titulo = `Lembrete: ${atividade}`;
        const corpo = `Você tem um compromisso de ${atividade} no dia ${dia} às ${horario}.`;
        mostrarNotificacao(titulo, corpo);
    }
}

// Função para agendar a notificação de um compromisso
function agendarNotificacao(horario, dia, atividade) {
    const now = new Date();

    // Parse da hora do compromisso para um objeto Date
    const horarioArray = horario.split(":");
    const dataCompromisso = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(horarioArray[0]), parseInt(horarioArray[1]));

    // Verifica se a data do compromisso já passou para agendar para o próximo dia, se necessário
    if (dataCompromisso <= now) {
        dataCompromisso.setDate(dataCompromisso.getDate() + 1); // Define o compromisso para o próximo dia
    }

    const delay = dataCompromisso - now;
    console.log(`Agendando notificação para ${atividade} em ${dataCompromisso.toLocaleString()}`);

    // Agenda a notificação
    setTimeout(() => {
        notificarCompromisso(horario, dia, atividade);
    }, delay);
}

// Agendando uma notificação de exemplo para 'Estudar JavaScript' no próximo Sábado às 07:30
agendarNotificacao('14:45', 'Domingo', 'Estudar JavaScript');

