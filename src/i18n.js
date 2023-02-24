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
         home: "Początek ",
         projects: "Projekty",
         summary: "Podsumowanie",
         descWelcome: "Nazywam się Tomasz Wiejak i mam tytuł inżyniera informatyki. Programowanie sprawia mi dużo przyjemności i jest jedną z rzeczy, które robię w wolnym czasie. Stworzyłem tę stronę, aby przedstawić przykładowe projekty stworzone przez mnie i pokazać technologie, z których głównie korzystam. Zapraszam do obejrzenia tej strony!",
         descTower: "Gra typu Tower Defense wykorzystująca mechanizm generowania proceduralnego. Gra została napisana w Javie na szkielecie programistycznym LibGDX. Na podstawie losowego ziarna tworzona jest mapa, fale przeciwników, nagrody za ich pokonanie i tym podobne. Gra zawiera zaawansowany system ulepszeń pasywnych przechodzący pomiędzy kolejnymi rozgrywkami na tym samym profilu. Istnieje możliwość zapisu zarówno lokalnie, jak i w chmurze dzięki użyciu frameworku Spring Boot.",
         titleStatistics: "Strona ze statystykami",
         descStatistics: "Strona mająca za zadanie obrazować statystki małżeństw i rozwodów w poszczególnych województwach na podstawie gęstości zaludnienia danego województwa. Dane są pobierane przez API z banku danych lokalnych ze strony Głównego Urzędu Statystycznego. Za generowanie wykresów odpowiada biblioteka Recharts. Serwer na frameworku Express.js i hostowany na platformie Microsoft Azure.",
         descSummary: "Dziękuję Ci, że odwiedziłeś/aś moją stronę. Poniżej znajduje się moje CV w języku polskim i angielskim. Dodatkowo obok znajduje się zbiór technologii, którymi się głównie posługuję w formie zdrapki. Można je odsłonić zdrapując lub klikając odpowiedni przycisk.",
         descCV1: "CV w języku polskim",
         descCV2: "CV w języku angielskim",
         Reveal: "Odsłoń"
        }
      },
    }
  });

export default i18n;