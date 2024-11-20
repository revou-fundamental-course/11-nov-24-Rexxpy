// Script Navbar Toggler
window.addEventListener("DOMContentLoaded", () => {
    const toggler = document.getElementById("navbar-toggler");
    const offCanvas = document.getElementById("off-canvas");
    const closeBtn = document.getElementById("close-btn");

    toggler.addEventListener("click", (e) => {
        e.stopPropagation(); 
        offCanvas.classList.toggle("open");
    });

    closeBtn.addEventListener("click", () => {
        offCanvas.classList.remove("open");
    });

    document.addEventListener("click", (e) => {
        if (!offCanvas.contains(e.target) && e.target !== toggler) {
            offCanvas.classList.remove("open");
        }
    });
});

// Script Validasi Input
const submitButton = document.getElementById('submitButton');
const namaInput = document.getElementById('nama');
const emailInput = document.getElementById('email');
const optionSelect = document.getElementById('option');

const namaPlaceholder = namaInput.getAttribute('placeholder');
const emailPlaceholder = emailInput.getAttribute('placeholder');
const optionSelectPlaceholder = optionSelect.querySelector('option').textContent;

const modal = document.getElementById('modal');
const modalNama = document.getElementById('modalNama');
const modalEmail = document.getElementById('modalEmail');
const modalOption = document.getElementById('modalOption');

function showModal() {
    modal.style.visibility = 'visible';
    modal.classList.add('open'); 
}

function closeModal() {
    modal.classList.remove('open'); 
    
    setTimeout(() => {
        modal.style.visibility = 'hidden'; 
    }, 300);
}

submitButton.addEventListener('click', function () {
    namaInput.classList.remove('input-error');
    emailInput.classList.remove('input-error');
    optionSelect.classList.remove('input-error');
    
    namaInput.setAttribute('placeholder', namaPlaceholder);
    emailInput.setAttribute('placeholder', emailPlaceholder);
    optionSelect.querySelector('option').textContent = optionSelectPlaceholder;

    let valid = true;

    if (!namaInput.value.trim()) {
        valid = false;
        namaInput.classList.add('input-error');
        namaInput.setAttribute('placeholder', '*Nama wajib diisi!'); 
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value)) {
        valid = false;
        emailInput.classList.add('input-error');
        emailInput.setAttribute('placeholder', '*Email tidak valid!'); 
        emailInput.value = "";
    }

    if (optionSelect.value === 'select') {
        valid = false;
        optionSelect.classList.add('input-error');
        optionSelect.querySelector('option').textContent = '*Pilih salah satu opsi!'; 
    } 

    if (valid) {
        modalNama.innerHTML = namaInput.value;
        modalEmail.innerHTML = emailInput.value;
        modalOption.innerHTML = optionSelect.value;

        namaInput.value = "";
        emailInput.value = "";
        optionSelect.value = 'select';

        showModal(); 

        setTimeout(closeModal, 2000);
    }
});

// Script Back Button
window.addEventListener('scroll', function() {
    let backToTopButton = document.getElementById('back-to-top');
    
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

// Script Banner AutoSlide
let currentIndex = 0;
const slides = document.querySelectorAll('.banner-autoslide');
const totalSlides = slides.length;

function changeSlide() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    changeSlide();
}

setInterval(nextSlide, 3000);



  
  
