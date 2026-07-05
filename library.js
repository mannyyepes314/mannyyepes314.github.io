// ============================================================
//  LIBRARY DATA
//  This is the only file you need to edit to add new reads.
//
//  To add a BOOK, copy one of the blocks below and change the
//  fields. The cover is fetched automatically from Open Library
//  using the ISBN (the 10- or 13-digit number on the book's
//  copyright page or in its Amazon URL). If Open Library doesn't
//  have the cover, a simple typographic placeholder appears
//  instead — or you can set  cover: "images/your-file.jpg"
//  to use your own image.
//
//  To add an ARTICLE, copy a block in the ARTICLES list.
// ============================================================

const BOOKS = [
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
    link: "https://www.penguinlibros.com/es/literatura-contemporanea/390664-libro-el-mundo-de-ayer-9788466378970",
    blurb: "I bought this at Libreria Lerner in La Candelaria, Bogotá. Zweig had come up three times in conversations throughout the week, which is my limit for the number of times someone or something can come up before I feel the need to do something about it. It's fascinating to hear him reminisce about a \"pre-war\" Europe knowing he had yet to see WWII break out."
  }
];

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
