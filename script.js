document.addEventListener('DOMContentLoaded', function() {

    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (currentPath === href || (currentPath === "" && href === "index.html")) {
            link.style.color = "#00f3ff";
            link.style.textShadow = "0 0 10px #00f3ff, 0 0 20px #00f3ff";
            link.style.borderBottom = "2px solid #00f3ff";
        }
    });

    const greeting = document.querySelector('.main-greeting');
    if (greeting) {
        setInterval(() => {
            const shouldGlitch = Math.random() > 0.95;
            if (shouldGlitch) {
                greeting.style.textShadow = "2px 2px #ff00ff, -2px -2px #00ffff";
                greeting.style.transform = "translateX(" + (Math.random() * 4 - 2) + "px)";
                setTimeout(() => {
                    greeting.style.textShadow = "0 0 15px #00f3ff";
                    greeting.style.transform = "translateX(0)";
                }, 100);
            }
        }, 200);
    }

    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.filter = 'blur(10px)';
        container.style.transition = 'all 0.8s ease-out';

        setTimeout(() => {
            container.style.opacity = '1';
            container.style.filter = 'blur(0)';
        }, 100);
    }


    const infoItems = document.querySelectorAll('.personal-info li, .contact-list li');
    infoItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.borderLeftColor = "#bc13fe";
            item.style.boxShadow = "inset 5px 0 15px rgba(188, 19, 254, 0.3)";
            item.style.transform = "translateX(10px)";
            item.style.transition = "all 0.3s ease";
        });
        item.addEventListener('mouseleave', () => {
            item.style.boxShadow = "none";
            item.style.transform = "translateX(0)";
        });
    });

    const toggleBtn = document.getElementById('toggle-contact-btn');
    const contactBox = document.getElementById('contact-details');

    if (toggleBtn && contactBox) {
        toggleBtn.addEventListener('click', () => {
            const isHidden = contactBox.classList.toggle('hidden');

            toggleBtn.textContent = isHidden ? "> ACCESS_DENIED (RE-OPEN)" : "> DATA_DECRYPTED (CLOSE)";
            
            if (!isHidden) {
                contactBox.style.animation = "pulse 0.5s infinite alternate";
            }
        });
    }
});