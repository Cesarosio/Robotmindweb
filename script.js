// Testimonios iniciales
let testimonials = [
    {
        name: "María González",
        comment: "Excelente trabajo en la automatización de nuestros procesos. Muy profesional y cumplidor.",
        date: "2024-11-15",
        rating: 5
    },
    {
        name: "Roberto Méndez",
        comment: "Las integraciones con APIs funcionan perfectamente. Superó nuestras expectativas.",
        date: "2024-10-28",
        rating: 5
    },
    {
        name: "Ana Rodríguez",
        comment: "El panel de control ha mejorado significativamente nuestra productividad. Altamente recomendado.",
        date: "2024-09-12",
        rating: 5
    }
];

let currentRating = 5;

// Cargar testimonios al inicio
document.addEventListener('DOMContentLoaded', function() {
    loadTestimonials();
    updateRatingStars();
});

// Scroll suave a sección
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Toggle formulario
function toggleForm() {
    const form = document.getElementById('testimonialForm');
    const button = document.getElementById('toggleButton');
    
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
        button.textContent = 'Cancelar';
    } else {
        form.classList.add('hidden');
        button.textContent = 'Agregar Comentario';
    }
}

// Establecer calificación
function setRating(rating) {
    currentRating = rating;
    updateRatingStars();
}

// Actualizar estrellas visuales
function updateRatingStars() {
    const stars = document.querySelectorAll('.star-btn');
    stars.forEach((star, index) => {
        if (index < currentRating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Agregar testimonio
function addTestimonial() {
    const name = document.getElementById('nameInput').value.trim();
    const comment = document.getElementById('commentInput').value.trim();
    
    if (name && comment) {
        const newTestimonial = {
            name: name,
            comment: comment,
            date: new Date().toISOString().split('T')[0],
            rating: currentRating
        };
        
        testimonials.unshift(newTestimonial);
        
        // Limpiar formulario
        document.getElementById('nameInput').value = '';
        document.getElementById('commentInput').value = '';
        currentRating = 5;
        updateRatingStars();
        
        // Ocultar formulario
        toggleForm();
        
        // Recargar testimonios
        loadTestimonials();
    } else {
        alert('Por favor completa todos los campos');
    }
}

// Cargar testimonios en el DOM
function loadTestimonials() {
    const container = document.getElementById('testimonialsList');
    container.innerHTML = '';
    
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow';
        
        let starsHTML = '';
        for (let i = 0; i < 5; i++) {
            if (i < testimonial.rating) {
                starsHTML += '<span class="text-yellow-400 text-xl">★</span>';
            } else {
                starsHTML += '<span class="text-gray-300 text-xl">★</span>';
            }
        }
        
        card.innerHTML = `
            <div class="flex mb-3">
                ${starsHTML}
            </div>
            <p class="text-gray-700 mb-4 italic">"${testimonial.comment}"</p>
            <div class="flex justify-between items-center text-sm">
                <p class="font-semibold text-gray-900">${testimonial.name}</p>
                <p class="text-gray-500">${testimonial.date}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Efecto de scroll para hero
window.addEventListener('scroll', function() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const scrolled = window.scrollY;
        if (scrolled > 50) {
            heroContent.style.opacity = '0';
        } else {
            heroContent.style.opacity = '1';
        }
    }
});