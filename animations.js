  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(
      ".section-1-container, .section-2-container, .section-3-container, .section-4-container, .section-certifications"
    );

    function revealOnScroll() {
      const windowHeight = window.innerHeight;
      const revealPoint = 100; 

      sections.forEach(sec => {
        const secTop = sec.getBoundingClientRect().top;
        const secBottom = sec.getBoundingClientRect().bottom;

        if (secTop < windowHeight - revealPoint && secBottom > 0) {
          sec.classList.add("show");
        } else {
          sec.classList.remove("show"); 
        }
      });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 
  });