document.getElementById("meuFormulario").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('https://apidp-production.up.railway.app/sendEmail', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    alert(result.success || result.error);
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".a_nav_bar").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

        const slides = document.querySelectorAll(".carousel img");
        const totalSlides = slides.length;
        let index = Math.floor(totalSlides / 2);

        function updateCarousel() {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add("active");
                } else {
                    slide.classList.remove("active");
                }
            });
        }

        function nextSlide() {
            index = (index + 1) % totalSlides;
            updateCarousel();
        }

        function prevSlide() {
            index = (index - 1 + totalSlides) % totalSlides;
            updateCarousel();
        };

        updateCarousel();8