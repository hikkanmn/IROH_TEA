/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'], /*все html файлы будут взаимодействовать с фреймворком tailwindCSS*/
  theme: {
    screens:{
      lg: {max: '1280px'},
      md: {max: '1024px'},
      sm: {max: '768px'},
      xs: {max: '480px'},
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
      },
      colors: {
        transBlack: '#00000570', /*свой полупрозрачный цвет для шапки*/
        myGreen: '#173C4C', /*свой темно-зеленый*/
        menuColor1: '#13333F', /*свой первый цвет для градиента мобильного меню*/
        menuColor2: '#09191F', /*свой второй цвет для градиента мобильного меню*/
        myPurple: '#9149E1', /*свой оттенок фиолетового*/
        myBrown: '#595451' /*свой оттенок коричневого*/

      },
      backgroundImage: {
        'mainFirstpage': "url('/imgs/main_1st_page.jpg')",
        'mainSecondpage': "url('/imgs/main_2nd_page.jpg')",
        'reviewSecondpage': "url('/imgs/review_2nd_page.jpg')",
        'logoWhite': "url('/imgs/logo_white.svg')"
      },
    },
  },
  plugins: [],
}
