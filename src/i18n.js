import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
         welcome: "Welcome on my page!",
         language: "English",
         home: "Home",
         projects: "Projects",
         summary: "Summary",
         descWelcome: "My name is Tomasz Wiejak and I have a engineering degree of Computer Science. Programming gives me a lot of enjoyment and is one of the things I do in my spare time. I created this page to present sample projects created by me and to show the technologies that I mainly use. I invite you to watch this site!",
         descTower: "A Tower Defense game that uses procedural generation mechanism. The game was written in Java with the LibGDX framework. Based on random seed, a map, waves of enemies and rewards for defeating them are generated. The game has an advanced system of passive upgrades that pass between successive games on the same profile. There's a possibility to save both locally and in the cloud due to use Spring Boot framework.",
         titleStatistics: "Statistics site",
         descStatistics: "A website designed to present statistics of marriages and divorces in individual provinces based on the population density of a given province. The data is downloaded via API from the local data bank from the website of the Central Statistical Office (Polish GOV site). Recharts is responsible for generating charts. Server based on Express.js framework and is hosted on Microsoft Azure platform.",
         descSummary: "Thank you for visiting my website. Below is my CV in Polish and English. In addition, there is nearby a technology stack that I mainly use in the form of a scratch card. You can reveal them by scratching them or clicking the appropriate button.",
         descCV1: "CV in Polish",
         descCV2: "CV in English",
         Reveal: "Reveal"
        }
      },

      pl: {
        translation: {
         welcome: "Witaj na mojej stronie!",
         language: "Polski",
         home: "Pocz??tek ",
         projects: "Projekty",
         summary: "Podsumowanie",
         descWelcome: "Nazywam si?? Tomasz Wiejak i mam tytu?? in??yniera informatyki. Programowanie sprawia mi du??o przyjemno??ci i jest jedn?? z rzeczy, kt??re robi?? w wolnym czasie. Stworzy??em t?? stron??, aby przedstawi?? przyk??adowe projekty stworzone przez mnie i pokaza?? technologie, z kt??rych g????wnie korzystam. Zapraszam do obejrzenia tej strony!",
         descTower: "Gra typu Tower Defense wykorzystuj??ca mechanizm generowania proceduralnego. Gra zosta??a napisana w Javie na szkielecie programistycznym LibGDX. Na podstawie losowego ziarna tworzona jest mapa, fale przeciwnik??w, nagrody za ich pokonanie i tym podobne. Gra zawiera zaawansowany system ulepsze?? pasywnych przechodz??cy pomi??dzy kolejnymi rozgrywkami na tym samym profilu. Istnieje mo??liwo???? zapisu zar??wno lokalnie, jak i w chmurze dzi??ki u??yciu frameworku Spring Boot.",
         titleStatistics: "Strona ze statystykami",
         descStatistics: "Strona maj??ca za zadanie obrazowa?? statystki ma????e??stw i rozwod??w w poszczeg??lnych wojew??dztwach na podstawie g??sto??ci zaludnienia danego wojew??dztwa. Dane s?? pobierane przez API z banku danych lokalnych ze strony G????wnego Urz??du Statystycznego. Za generowanie wykres??w odpowiada biblioteka Recharts. Serwer na frameworku Express.js i hostowany na platformie Microsoft Azure.",
         descSummary: "Dzi??kuj?? Ci, ??e odwiedzi??e??/a?? moj?? stron??. Poni??ej znajduje si?? moje CV w j??zyku polskim i angielskim. Dodatkowo obok znajduje si?? zbi??r technologii, kt??rymi si?? g????wnie pos??uguj?? w formie zdrapki. Mo??na je ods??oni?? zdrapuj??c lub klikaj??c odpowiedni przycisk.",
         descCV1: "CV w j??zyku polskim",
         descCV2: "CV w j??zyku angielskim",
         Reveal: "Ods??o??"
        }
      },
    }
  });

export default i18n;