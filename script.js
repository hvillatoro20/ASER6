document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa para móviles
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí iría la lógica para enviar el formulario
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            this.reset();
        });
    }
    
    // Chatbot
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const userInput = document.getElementById('userInput');
    const sendMessage = document.getElementById('sendMessage');
    
    // Mostrar/ocultar chatbot
    chatbotToggle.addEventListener('click', function() {
        chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
    });
    
    closeChatbot.addEventListener('click', function() {
        chatbotWindow.style.display = 'none';
    });
    
    // Enviar mensaje
    function addMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(`${sender}-message`);
        
        const messageP = document.createElement('p');
        messageP.textContent = message;
        
        messageDiv.appendChild(messageP);
        chatbotMessages.appendChild(messageDiv);
        
        // Scroll al final de los mensajes
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function sendUserMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        addMessage('user', message);
        userInput.value = '';
        
        // Simular respuesta del bot (en un caso real, llamarías a la API de DeepSeek)
        setTimeout(() => {
            const responses = [
                "Para registrar una empresa en Honduras necesitas: 1) Nombre comercial, 2) RTN, 3) Escritura pública ante notario.",
                "El costo aproximado para constituir una Sociedad de Responsabilidad Limitada (S. de R.L.) es de $500-$1000 USD.",
                "Te recomiendo contratar un contador para llevar adecuadamente tus impuestos y obligaciones fiscales.",
                "Los requisitos básicos son: Acta constitutiva, RTN, inscripción en la municipalidad y permisos según tu giro comercial.",
                "El tiempo promedio para registrar una empresa es de 2 a 4 semanas, dependiendo de la complejidad.",
                "ASER puede ayudarte con todo el proceso de constitución, incluyendo redacción de estatutos y trámites legales."
            ];
            
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage('bot', randomResponse);
        }, 1000);
    }
    
    sendMessage.addEventListener('click', sendUserMessage);
    
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });
    
    // Aquí iría la integración real con la API de DeepSeek
    /*
    async function callDeepSeekAPI(message) {
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TU_API_KEY'
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [
                    {
                        role: "system",
                        content: "Eres un asesor experto en creación y gestión de empresas en Honduras. Responde de forma clara y práctica."
                    },
                    {
                        role: "user",
                        content: message
                    }
                ]
            })
        });
        
        const data = await response.json();
        return data.choices[0].message.content;
    }
    */
    
    // Efecto de scroll en la barra de navegación
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = 'none';
        }
    });
});