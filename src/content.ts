import "@fontsource/barlow-condensed/800.css";
import type { Site } from "./lib";

const ALL: [number, number][] = [[0, 24]];

export const SITE: Site = {
  name: "MD Fitness World",
  sub: { en: "Open 24 hours · Raipur, Sohna", hi: "24 घंटे खुला · रायपुर, सोहना" },
  banner: { en: "Open 24 hours, 7 days a week: WhatsApp to plan your first visit", hi: "हफ़्ते के सातों दिन 24 घंटे खुला: पहली विज़िट के लिए व्हाट्सऐप करें" },
  phone: "918607672721",
  phoneDisplay: "+91 86076 72721",
  lat: 28.2248045,
  lon: 77.0637203,
  hours: [ALL, ALL, ALL, ALL, ALL, ALL, ALL],
  theme: {
    dark: true,
    bg: "#0d0c08",
    bg2: "#15130c",
    panel: "#1c1a10",
    ink: "#f8f4e6",
    ink2: "#cdc7b0",
    ink3: "#8d8770",
    line: "#2a2716",
    accent: "#ffc21a",
    onAccent: "#2a1d00",
    display: "Barlow Condensed",
    weight: 800,
    upper: true,
  },
  scene: "barbell",
  align: "left",
  hero: {
    title: [
      { en: "Train at any hour.", hi: "किसी भी समय ट्रेनिंग।" },
      { en: "Sohna's 24-hour gym.", hi: "सोहना का 24 घंटे वाला जिम।" },
    ],
    proof: {
      en: "4.9 on Google from 48 reviews. Members call it the most advanced gym in Sohna: big floor, smooth machines, and clean.",
      hi: "गूगल पर 48 रिव्यू से 4.9। मेंबर्स इसे सोहना का सबसे एडवांस जिम कहते हैं: बड़ी जगह, स्मूद मशीनें, और साफ़-सुथरा।",
    },
    fallback: "/img/p1.jpg",
  },
  marquee: ["Open 24 hours", "Strength", "Machines", "Cardio", "Clean floor", "Big space", "Sohna"],
  dishes: {
    title: { en: "What members come for", hi: "मेंबर किसलिए आते हैं" },
    body: { en: "Every line is quoted from a Google review.", hi: "हर लाइन गूगल रिव्यू से ली गई है।" },
    layout: "cards",
    items: [
      { name: { en: "Advanced", hi: "एडवांस" }, quote: "Most advance gym in sohna", img: "/img/p14.jpg" },
      { name: { en: "Smooth machines", hi: "स्मूद मशीनें" }, quote: "Best gym in sohna ..machine is very smooth ..gym is very clean", img: "/img/p5.jpg" },
      { name: { en: "Space", hi: "जगह" }, quote: "Very big spece available here  all new equipment", img: "/img/p9.jpg" },
      { name: { en: "Air", hi: "हवा" }, quote: "It has very friendly and energetic environment and good ventilation also" },
      { name: { en: "Trainer", hi: "ट्रेनर" }, quote: "Trainer is very supportive and gym is very clean" },
      { name: { en: "Hard sessions", hi: "तगड़ी वर्कआउट" }, quote: "Bhot hard gym h mza aa gya" },
    ],
  },
  gallery: {
    title: { en: "Inside MD Fitness World", hi: "MD फ़िटनेस वर्ल्ड के अंदर" },
    layout: "mosaic",
    photos: [
      { src: "/img/p1.jpg", alt: "Main floor at MD Fitness World", wide: true },
      { src: "/img/p14.jpg", alt: "Rows of machines" },
      { src: "/img/p5.jpg", alt: "Strength machines" },
      { src: "/img/p9.jpg", alt: "Open training space", wide: true },
      { src: "/img/p11.jpg", alt: "Weights area" },
      { src: "/img/p13.jpg", alt: "Gym entrance" },
    ],
  },
  feature: {
    kind: "occasions",
    title: { en: "Why Sohna trains here", hi: "सोहना यहाँ क्यों ट्रेनिंग करता है" },
    body: { en: "Big, clean and run by an owner members describe as hands-on.", hi: "बड़ा, साफ़, और ऐसे मालिक जो ख़ुद साथ रहते हैं।" },
    img: "/img/p13.jpg",
    items: [
      { label: { en: "Size", hi: "साइज़" }, quote: "Biggest gym in sohna or owner of this gym great 👍🏻" },
      { label: { en: "Owner", hi: "मालिक" }, quote: "The owner is very supportive and ready to help whenever you need." },
      { label: { en: "Upkeep", hi: "रखरखाव" }, quote: "All machine are good in condition and good vibes" },
    ],
  },
  reviews: {
    title: { en: "Sohna's best gym, say members", hi: "मेंबर्स कहते हैं, सोहना का बेस्ट जिम" },
    rating: 4.9,
    dist: [46, 0, 0, 1, 1],
    quotes: [
      { quote: "Most advance gym in sohna", stars: 5 },
      { quote: "best gym in sohna town ...trainer is very supportive", stars: 5 },
      { quote: "Good trainer and clean gym", stars: 5 },
      { quote: "Gym is very clean and best", stars: 5 },
    ],
  },
  visit: {
    title: { en: "Raipur, near Sohna", hi: "रायपुर, सोहना के पास" },
    img: "/img/p13.jpg",
    alt: "Entrance to MD Fitness World",
    address: { en: "Raipur, near Sohna, Haryana", hi: "रायपुर, सोहना के पास, हरियाणा" },
    note: { en: "Open 24 hours, every day of the week.", hi: "हफ़्ते के हर दिन, 24 घंटे खुला।" },
  },
  story: [
    { kicker: { en: "Hours", hi: "समय" }, title: { en: "Night shift? Still open.", hi: "नाइट शिफ़्ट? तब भी खुला।" } },
    { kicker: { en: "Kit", hi: "मशीनें" }, title: { en: "Smooth, new, looked after.", hi: "स्मूद, नई, संभाल कर रखी।" }, quote: "Best gym in sohna ..machine is very smooth ..gym is very clean" },
    { kicker: { en: "Space", hi: "जगह" }, title: { en: "Members call it Sohna's biggest.", hi: "मेंबर्स इसे सोहना का सबसे बड़ा कहते हैं।" }, quote: "Biggest gym in sohna or owner of this gym great 👍🏻" },
  ],
  build: {
    title: { en: "Plan your first visit", hi: "अपनी पहली विज़िट प्लान करें" },
    body: { en: "Pick a goal and a time, day or night. It goes to WhatsApp exactly as you see it.", hi: "लक्ष्य और समय चुनें, दिन हो या रात। मैसेज व्हाट्सऐप पर ठीक ऐसे ही जाएगा।" },
    pick: { label: { en: "Goal", hi: "लक्ष्य" }, options: [
      { name: { en: "Weight loss", hi: "वज़न कम करना" } },
      { name: { en: "Muscle gain", hi: "मसल बनाना" } },
      { name: { en: "General fitness", hi: "जनरल फ़िटनेस" } },
      { name: { en: "Just starting out", hi: "अभी शुरुआत" } },
    ] },
    when: true,
    hello: { en: "Hi MD Fitness World, I'd like to visit:", hi: "नमस्ते MD फ़िटनेस वर्ल्ड, मुझे विज़िट करनी है:" },
  },
  waHello: {
    en: "Hi MD Fitness World, I'd like to know about joining. Goal: , preferred time: ",
    hi: "नमस्ते MD फ़िटनेस वर्ल्ड, मुझे जॉइन करने के बारे में जानना है। लक्ष्य: , पसंदीदा समय: ",
  },
  order: ["dishes", "feature", "build", "reviews", "gallery", "visit"],
};
