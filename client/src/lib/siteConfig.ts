/** Deccan House design data: update this configuration to adapt the template for another channel partner. */
export const siteConfig = {
  brand: "Agastya Elite Estate",
  shortBrand: "Agastya",
  city: "Pune",
  email: "hello@agastyaeliteestate.com",
  rera: "MahaRERA Registered Channel Partner",
hero: {
  eyebrow: "Pune home advisory",
  title: "Find a place\nthat makes room\nfor your life.",
  description:
    "Personal property guidance for Pune buyers who want more clarity before the site visit.",
  image: "/assets/images/hero.webp",
},

projects: [
  {
    id: "baner-courtyard",
    number: "01",
    name: "Courtyard Residences",
    location: "Baner, Pune",
    configuration: "2 & 3 BHK",
    price: "From ₹95 Lakh",
    type: "A quieter kind of city living",
    description:
      "Light-filled homes shaped around a planted courtyard, close to Baner’s everyday conveniences.",
    image: "/assets/images/second.webp",
  },
  {
    id: "hinjewadi-terraces",
    number: "02",
    name: "Terrace House",
    location: "Hinjewadi, Pune",
    configuration: "2 & 3 BHK",
    price: "From ₹82 Lakh",
    type: "Work, arrive, exhale",
    description:
      "Thoughtful layouts and green outlooks for a home that stays close to the rhythm of West Pune.",
    image: "/assets/images/thi.webp",
  },
  {
    id: "kharadi-house",
    number: "03",
    name: "The East House",
    location: "Kharadi, Pune",
    configuration: "3 & 4 BHK",
    price: "From ₹1.45 Cr",
    type: "Space that holds its value",
    description:
      "Generous family homes near Pune’s eastern business district, selected for daily ease and long-view value.",
    image: "/assets/images/four.webp",
  },
],
  areas: [
    "Baner",
    "Balewadi",
    "Wakad",
    "Hinjewadi",
    "Kharadi",
    "Hadapsar",
    "Magarpatta",
    "Kothrud",
  ],

  needs: [
    "First home",
    "Family residence",
    "Premium home",
    "Investment",
    "Commercial",
  ],

  faqs: [
    {
      question: "How does the consultation work?",
      answer:
        "We begin with your priorities—location, budget, timeline and home needs—then map out relevant next steps together.",
    },
    {
      question: "Can you help compare multiple projects?",
      answer:
        "Yes. We can help you compare shortlisted options around layout, location fit, pricing and the practical details that matter to you.",
    },
    {
      question: "Which Pune areas do you cover?",
      answer:
        "Our focus spans key residential micro-markets across West, East and central Pune, including Baner, Wakad, Hinjewadi, Kharadi and more.",
    },
    {
      question: "Can you arrange site visits?",
      answer:
        "Yes. Once your shortlist is ready, we can coordinate site visits around your schedule.",
    },
    {
      question: "Can you help with different budgets?",
      answer:
        "Absolutely. Clear budget context helps us focus the search on homes worth your time.",
    },
  ],
} as const;
