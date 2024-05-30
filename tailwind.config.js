/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
  ] /*все html файлы будут взаимодействовать с фреймворком tailwindCSS*/,
  darkMode: "class" /*подключение темной темы*/,
  theme: {
    /*инициализация ключевых точек для адаптивной верстки*/
    screens: {
      lg: { max: "1280px" },
      md: { max: "1024px" },
      sm: { max: "768px" },
      xs: { max: "480px" },
    },
    extend: {
      /*создание собственной анимации появления*/
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
      },
      /*создание собственных цветов для работы по подготовленному дизайн-шаблону*/
      colors: {
        transBlack: "#00000570" /*свой полупрозрачный цвет для шапки*/,
        myGreen: "#173C4C" /*свой темно-зеленый*/,
        menuColor1: "#13333F" /*свой первый цвет для градиента мобильного меню*/,
        menuColor2: "#09191F" /*свой второй цвет для градиента мобильного меню*/,
        myPurple: "#9149E1" /*свой оттенок фиолетового*/,
        myBrown: "#595451" /*свой оттенок коричневого*/,
        myDarkRed: "#271427" /*свой оттенок темно-красного*/,
        /*свои цвета для темной темы*/  
        myDarkGreen: "#5ABCA4",
        myDarkGreenBg: "#0C2028",
        myDarkGreenFooter: "#061217",
        myDarkBrownBg: "#242220",
        myDarkBrownFooter: "#1D1B1A",
        myDarkRedFrom: "#090409",
        myPurpleDark: "#4A2177",
      },
      /*создание собственных фоновых изображений*/
      backgroundImage: {
        mainFirstPage:
          "url('/imgs/main_1st_page.jpg')" /*первое фото главной страницы*/,
        mainSecondPage:
          "url('/imgs/main_2nd_page.jpg')" /*перовое фото страницы о нас*/,
        reviewSecondPage:
          "url('/imgs/review_2nd_page.jpg')" /*фото для заднего плана первых отзывов*/,
        logoWhite: 
          "url('/imgs/logo_white.svg')" /*белое лого для шапки*/,
        mySale: 
          "url('/imgs/news_sale.png')" /*фото для акции скидки*/,
        myMatcha: 
          "url('/imgs/news_matcha.png')" /*фото для акции с матчей*/,
        myTeaCeremony:
          "url('/imgs/news_tea.png')" /*фото для новости про чайные церемонии*/,
        myReviewDark:
          "url('/imgs/review_2nd_page_dark.jpg')" /*фото темной темы первых отзывов*/,
        mainFirstDark:
          "url('/imgs/main_1st_page_dark.jpg')" /*фото темной темы для главной страницы*/,
        mainSecondDark:
          "url('/imgs/main_2nd_page_dark.jpg')" /*фото темной темы для второй страницы*/,
        mySaleDark:
          "url('/imgs/news_sale_dark.png')" /*теная тема акции скидки*/,
        myMatchaDark:
          "url('/imgs/news_matcha_dark.png')" /*темная тема акции с матчей*/,
        myTeaCeremonyDark:
          "url('/imgs/news_tea_dark.png')" /*темная тема для чаных церемоний*/,
      },
    },
  },
  /*плагин для сортировки классов и кода*/
  plugins: ["prettier-plugin-tailwindcss"],
};
