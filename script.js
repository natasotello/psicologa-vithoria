document.querySelectorAll('.content').forEach((item) => {
    item.style.maxHeight = 0;
});

document.querySelectorAll('.acordion-btn').forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        
        const content = button.nextElementSibling
        const imgAcordion = button.querySelector('.img-acordion');

        if(button.classList.contains('active')){
            content.style.maxHeight = content.scrollHeight + 'px'
            imgAcordion.style.transform = 'rotate(90deg)';
        }else{
            content.style.maxHeight = 0;
            imgAcordion.style.transform = 'rotate(0deg)';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {

  const elementos = document.querySelectorAll(".animar");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("ativo");
        observer.unobserve(entry.target); // anima só uma vez
      }

    });
  }, {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  });

  elementos.forEach(el => observer.observe(el));

});