function toggleMenu() {
    const burgerMenu = document.querySelector('#burgerMenu')
    const mobileMenu = document.querySelector('#mobileMenu')
    const mainBody = document.querySelector('body')

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active')
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        mainBody.classList.toggle('overflow-hidden')
    })

    window.addEventListener('resize', () => {
        if(window.innerWidth > 768) {
            mobileMenu.classList.add('hidden')
            mobileMenu.classList.remove('flex')
            burgerMenu.classList.remove('active')
            mainBody.classList.remove('overflow-hidden')
        }
    })
}

toggleMenu()

// для второй страницы
const buttons = document.querySelectorAll("#faqToggle");

buttons.forEach((button) => {
  button.addEventListener("click", () =>
    button.parentElement.classList.toggle("active")
  );
});