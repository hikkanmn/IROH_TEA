function toggleMenu() {
    const burgerMenu = document.querySelector('#burgerMenu')
    const mobileMenu = document.querySelector('#mobileMenu')
    const mainBody = document.querySelector('body')
    const mainCarousel = document.querySelector('mainCarousel')

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
const buttons = document.querySelectorAll('#faqToggle');

buttons.forEach((button) => {
  button.addEventListener('click', () =>
    button.parentElement.classList.toggle('active')
  );
});

//для формы отправки
const form = document.querySelector('form')
const email = document.getElementById('email')
const mess = document.getElementById('message')

function sendEmail() {
  const bodyMessage = `Почта отправителя: ${email.value} <br> Текст сообщения: <br> ${mess.value}`

  Email.send({
    Host : 'smtp.elasticemail.com',
    Username : 'barkovavika89@gmail.com',
    Password : 'BD36661DD4DD085C0FB5D55D50A6FA9DF652',
    To : 'barkovavika89@gmail.com',
    From : 'barkovavika89@gmail.com',
    Subject : 'Письмо от чайной IROH',
    Body : bodyMessage
  }).then(
    message => {
      if (message == 'OK') {
        Swal.fire({
          title: 'Успешно!',
          text: 'Ваше сообщение отправлено, ожидайте ответа!',
          icon: 'success'
        });
      }
    }
  );
}

function checkInputs() {
  if (mess.value == "") {
    mess.classList.add('text-red')
  }

  if (email.value != "") {
    checkEmail()
  }

  mess.addEventListener('keyup', () => {
    if(mess.value != "") {
      mess.classList.remove('text-red')
    }
    else {
      mess.classList.add('text-red')
    }
  })
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  if (!email.value.match(emailRegex)) {
    email.classList.add('text-red')
  }
  else {
    email.classList.remove('text-red')
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInputs()

  // sendEmail()
})