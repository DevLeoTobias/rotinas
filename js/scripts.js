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

// Solicitar permissão para enviar notificações
if (Notification.permission !== 'granted') {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            console.log('Permissão para notificações concedida.');
        } else {
            console.log('Permissão para notificações negada.');
        }
    });
}

// Função para disparar uma notificação
function enviarNotificacao() {
    if (Notification.permission === 'granted') {
        new Notification("Atividade Pendentes", {
            body: "Você tem atividades para concluir, não se esqueça de completar!"
            
        });
    } else {
        console.log("Notificações não permitidas.");
    }
}

// Testar a notificação ao carregar a página
window.onload = () => {
    enviarNotificacao();  // Envia uma notificação assim que a página carregar
};


//Checando o código de envio da notificação
window.onload = () => {
    // Espera a página carregar completamente antes de enviar a notificação
    setTimeout(() => {
        enviarNotificacao();  // Envia a notificação após o carregamento
    }, 2000);  // Atraso de 2 segundos para garantir que tudo carregue primeiro
};
