/*МОБИЛЬНОЕ МЕНЮ*/
function toggleMenu() {
  const burgerMenu = document.querySelector("#burgerMenu");
  const mobileMenu = document.querySelector("#mobileMenu");
  const mainBody = document.querySelector("body");

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    mainBody.classList.toggle("overflow-hidden");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
      burgerMenu.classList.remove("active");
      mainBody.classList.remove("overflow-hidden");
    }
  });
}

toggleMenu(); /*запуск функции мобильного меню*/

/*БЛОК ВОПРОС-ОТВЕТ НА СТРАНИЦЕ О НАС*/
const buttons = document.querySelectorAll("#faqToggle");

buttons.forEach((button) => {
  button.addEventListener("click", () =>
    button.parentElement.classList.toggle("active"),
  );
});

/*ФОРМА ОТПРАВКИ*/
const form = document.querySelector("form");
const email = document.getElementById("email");
const mess = document.getElementById("message");
/*функция отправки сообщения на почту*/
function sendEmail() {
  const bodyMessage = `Почта отправителя: ${email.value} <br> Текст сообщения: <br> ${mess.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "barkovavika89@gmail.com",
    Password:
      "BD36661DD4DD085C0FB5D55D50A6FA9DF652" /*сгенерированный elasticemail пароль*/,
    To: "barkovavika89@gmail.com",
    From: "barkovavika89@gmail.com",
    Subject: "Письмо от чайной IROH",
    Body: bodyMessage,
  }).then((message) => {
    /*высплывающее окно при успешной отправке*/
    if (message == "OK") {
      Swal.fire({
        title: "Успешно!",
        text: "Ваше сообщение отправлено, ожидайте ответа!",
        icon: "success",
      });
    }
  });
}
/*проверка почты при помощи регулярного выражения*/
function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  if (!email.value.match(emailRegex)) {
    email.classList.add("errorInput");
  } else {
    email.classList.remove("errorInput");
  }
}
/*проверка всех вводов (почты и сообщения)*/
function checkInputs() {
  if (mess.value == "") {
    mess.classList.add("errorInput");
  }

  if (email.value != "") {
    checkEmail();
  }

  email.addEventListener("keyup", () => {
    checkEmail();
  });

  mess.addEventListener("keyup", () => {
    if (mess.value != "") {
      mess.classList.remove("errorInput");
    } else {
      mess.classList.add("errorInput");
    }
  });
}

/*чтение клика по форме, применение проверок и отправка*/
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  if (
    !email.classList.contains("errorInput") &&
    !mess.classList.contains("errorInput")
  ) {
    // alert('!')
    sendEmail();
  }
});
