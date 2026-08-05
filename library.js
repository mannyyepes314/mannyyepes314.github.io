// ============================================================
//  LIBRARY DATA
//
//  BOOKS live in this file — edit them by hand (see below).
//
//  ARTICLES come from your Google Sheet. Paste the published
//  CSV link between the quotes on the next line. Until you do,
//  the site falls back to the ARTICLES list at the bottom of
//  this file. It also falls back automatically if the sheet is
//  ever unreachable, so the page never breaks.
// ============================================================

const ARTICLES_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRWK0Itd0bkWbd44I_6-HNiLMX41ejREOuL7PhRK9_khITVl4pd3FFn4JSlQ2KuffjZjAR36jxAGJ6H/pub?gid=617232519&single=true&output=csv";

// ------------------------------------------------------------
//  ADD A BOOK: copy any block below, paste it in, change the
//  fields. Keep the comma after each closing brace except the
//  last one. If a blurb contains a double quote, put a
//  backslash before it (see the Zweig entry).
//
//  COVERS: fetched automatically from Open Library using the
//  isbn. If a book shows a text placeholder instead, Open
//  Library doesn't have that edition — upload your own image
//  to the images folder and add a line to that book:
//        cover: "images/zweig.jpg",
//  A cover line always wins over the isbn lookup.
// ------------------------------------------------------------

const BOOKS = [
  {
    title: "Foucault's Pendulum",
    author: "Umberto Eco",
    isbn: "9780099287153",
    cover: "images/eco.jpg",
    link: "https://www.amazon.com/dp/0099287153",
    blurb: "I bought this at Blackwell's in Oxford in July 2026. I'm always interested when people try to compare an author's first, very popular work with their second, also very popular but different work. Is it better? Can it ever be better, if it came second? Think Breaking Bad and Better Call Saul, for example."
  },
  {
    title: "The Death of Ivan Ilyich and Other Stories",
    author: "Leo Tolstoy",
    isbn: "0307388867",
    link: "https://www.amazon.com/dp/0307388867",
    blurb: "I picked up this collection of short stories at a bookstore at Ponce City Market. I went through a heavy Russian literature period of my life a while back, but couldn't remember if I'd ever actually read The Death of Ivan Ilyich. The fact that I couldn't remember was enough of a reason to convince me to pick this copy up. The collection also includes The Kreutzer Sonata, which I've wanted to read ever since I added the sonata as background music to a five minute film I made about War and Peace for a class in college. I wonder whether I, or we, think about dying on a regular enough basis."
  },
  {
    title: "I Regret Almost Everything",
    author: "Keith McNally",
    isbn: "1668017644",
    link: "https://www.amazon.com/dp/1668017644",
    blurb: "I bought this book the summer of 2025 at a bookstore in Manhattan. I got distracted halfway through by LSAT studying at the time, but finally picked it back up again. I first found out about Keith McNally, as many others probably did, through his Instagram page, where he posts, among other things, his restaurant managers' dinner reports from the various restaurants he owns."
  },
  {
    title: "Crack-Up Capitalism: Market Radicals and the Dream of a World Without Democracy",
    author: "Quinn Slobodian",
    isbn: "1250753899",
    link: "https://www.amazon.com/dp/1250753899",
    blurb: "I got this book in the fall of 2024 in London (I believe the Waterstones near Picadilly). I've heard of Slobodian way too much to never have read this, but I guiltily did not start this book until nearly two years later. He puns more than I expected."
  },
  {
    title: "El Mundo de Ayer (The World of Yesterday)",
    author: "Stefan Zweig",
    isbn: "9788466378970",
    // cover: "images/zweig.jpg",   // <- uncomment to use your own image
    link: "https://www.penguinlibros.com/es/literatura-contemporanea/390664-libro-el-mundo-de-ayer-9788466378970",
    blurb: "I bought this at Libreria Lerner in La Candelaria, Bogotá. Zweig had come up three times in conversations throughout the week, which is my limit for the number of times someone or something can come up before I feel the need to do something about it. It's fascinating to hear him reminisce about a \"pre-war\" Europe knowing he had yet to see WWII break out."
  }
];

// ------------------------------------------------------------
//  FALLBACK ARTICLES — only shown if the Google Sheet isn't
//  set up or can't be reached. Once the sheet is live you can
//  leave this list alone.
// ------------------------------------------------------------

const ARTICLES = [
  {
    title: "Brad DeLong asks what America can learn from its past bouts of inflation",
    author: "Brad DeLong",
    publication: "The Economist",
    link: "https://www.economist.com/by-invitation/2022/07/05/brad-delong-asks-what-america-can-learn-from-its-past-bouts-of-inflation"
  },
  {
    title: "What to read to understand the history of Western capitalism",
    author: "Brad DeLong",
    publication: "The Economist",
    link: "https://www.economist.com/economist-reads/2022/07/04/what-to-read-to-understand-the-history-of-western-capitalism"
  },
  {
    title: "Venture Capital's Reckoning",
    author: "Brad DeLong",
    publication: "The Economist",
    link: "https://www.economist.com/leaders/2022/06/30/venture-capitals-reckoning"
  }
];
