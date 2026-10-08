export const brand = {
  name: "kabuka",
  tagline: "Everything for everyone",
  siteUrl: "https://kabuka-six.vercel.app/",
  liveUrl: "https://www.kabuka.in/",
  copyright: "© 2026 Manusmriti. All rights reserved.",
};

export const nav = [
  { label: "Angadi", href: "#angadi", hue: "red" },
  { label: "Adda", href: "#adda", hue: "yellow" },
  { label: "Abhaya", href: "#abhaya", hue: "blue" },
  { label: "Grow", href: "#grow", hue: "orange" },
];

export const products = [
  {
    id: "angadi",
    name: "Angadi",
    hue: "red",
    image: "/images/angadi.jpg",
    cta: "Shop now",
    href: "#grow",
    body: "Manage your business on web and sell groceries, essentials, and more on mobile with ease.",
  },
  {
    id: "adda",
    name: "Adda",
    hue: "yellow",
    image: "/images/adda.jpg",
    cta: "Explore services",
    href: "#grow",
    body: "Join as a partner to offer professional services or delivery.",
  },
  {
    id: "abhaya",
    name: "Abhaya",
    hue: "blue",
    image: "/images/abhaya.jpg",
    cta: "Get support",
    href: "#offers",
    body: "Trusted help for the moments that need professional care.",
  },
];

export const chittiHints = [
  { keys: ["shop", "grocery", "market", "angadi", "store"], target: "#angadi" },
  { keys: ["repair", "salon", "service", "delivery", "adda"], target: "#adda" },
  { keys: ["care", "support", "abhaya", "help"], target: "#abhaya" },
  { keys: ["rent", "vehicle", "transport", "travel"], target: "#travel" },
  { keys: ["work", "job", "partner", "workforce"], target: "#workforce" },
  { keys: ["hire", "specialist", "moving"], target: "#hire" },
  { keys: ["grow", "sell", "business"], target: "#grow" },
];

export const categories = {
  image: "/images/categories.jpg",
  items: [
    { name: "Local Market", note: "Nearby stores" },
    { name: "Groceries", note: "Daily essentials" },
    { name: "Electronics", note: "Devices & gear" },
    { name: "Dairy", note: "Fresh staples" },
  ],
};

export const growCards = [
  {
    id: "angadi-portal",
    product: "Angadi",
    hue: "red",
    image: "/images/angadi-portal.jpg",
    title: "Angadi",
    body: "Manage your business on web and sell groceries, essentials, and more on mobile with ease.",
    points: [
      "Business autonomy — your business, your rules.",
      "Create your digital business identity with us.",
      "One powerful platform for everything.",
    ],
    cta: "Web portal",
    href: "https://angadi.net/",
  },
  {
    id: "adda-app",
    product: "Adda",
    hue: "yellow",
    image: "/images/adda-partner.jpg",
    title: "Adda mobile application",
    body: "Join as a partner to offer professional services or delivery.",
    points: [
      "Professional services (repairs, salon, and more)",
      "Delivery partners for food and packages",
      "Verified customers and flexible scheduling",
    ],
    cta: "Join as partner",
    href: "https://www.kabuka.in/",
  },
];

export const offers = [
  {
    id: "workforce",
    kicker: "Partner with us",
    title: "Join our workforce",
    hue: "green",
    image: "/images/workforce.jpg",
    body: "Become part of our reliable and trusted kabuka network. We offer growth, stability, and a community that values your hard work.",
    cta: "Get started",
    href: "https://www.kabuka.in/",
  },
  {
    id: "travel",
    kicker: "Rentals & logistics",
    title: "Travel & transport",
    hue: "indigo",
    image: "/images/travel.jpg",
    body: "Travel or transport — rent the vehicle you need. From compact cars to heavy-duty logistics, we've got your journey covered.",
    cta: "Book a vehicle",
    href: "https://www.kabuka.in/",
  },
  {
    id: "hire",
    kicker: "Professional services",
    title: "Hire trusted help",
    hue: "violet",
    image: "/images/hire.jpg",
    body: "Need help with moving or on-demand tasks? Hire trusted Kabuka specialists who treat your requirements with professional care.",
    cta: "Hire specialists",
    href: "https://www.kabuka.in/",
  },
];

export const footer = {
  blurb: "Everything for everyone",
  explore: [
    { label: "Angadi", href: "#angadi" },
    { label: "Adda", href: "#adda" },
    { label: "Abhaya", href: "#abhaya" },
  ],
  company: [
    { label: "About", href: "#grow" },
    { label: "Contact", href: "#closer" },
    { label: "Privacy policy", href: "https://www.kabuka.in/" },
    { label: "Terms & conditions", href: "https://www.kabuka.in/" },
  ],
  social: ["Facebook", "Twitter", "Instagram", "LinkedIn", "YouTube"],
};

export const hueToken = {
  red: "var(--color-hue-red)",
  orange: "var(--color-hue-orange)",
  yellow: "var(--color-hue-yellow)",
  green: "var(--color-hue-green)",
  blue: "var(--color-hue-blue)",
  indigo: "var(--color-hue-indigo)",
  violet: "var(--color-hue-violet)",
};
