export type Category = {
  id: string;
  name: string;
  tint: string;
};

export type Service = {
  id: string;
  title: string;
  tab: "popular" | "cleaning" | "appliance" | "beauty";
  rating: number;
  reviews: string;
  duration: string;
  price: number;
  includes: string[];
  tint: string;
};

export type Promo = {
  id: string;
  title: string;
  copy: string;
  badge: string;
  cta: string;
  tint: string;
};

export const CITIES = [
  "Bengaluru",
  "Mumbai",
  "Delhi NCR",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
];

export const CATEGORIES: Category[] = [
  { id: "womens-salon", name: "Women's Salon & Spa", tint: "tint-rose" },
  { id: "mens-salon", name: "Men's Salon & Massage", tint: "tint-amber" },
  { id: "ac-repair", name: "AC & Appliance Repair", tint: "tint-blue" },
  { id: "cleaning", name: "Cleaning & Pest Control", tint: "tint-mint" },
  { id: "trades", name: "Electricians, Plumbers & Carpenters", tint: "tint-violet" },
  { id: "painting", name: "Painting & Home Renovation", tint: "tint-sky" },
];

export const PROMOS: Promo[] = [
  {
    id: "plus",
    title: "Pipull Plus Membership",
    copy: "Save 15% on every order, priority slots and free rescheduling.",
    badge: "15% OFF",
    cta: "Join Plus",
    tint: "tint-blue",
  },
  {
    id: "first",
    title: "First booking on us",
    copy: "Flat ₹200 off your very first service with code PIPULL200.",
    badge: "₹200 OFF",
    cta: "Claim offer",
    tint: "tint-mint",
  },
  {
    id: "summer",
    title: "Summer AC tune-up",
    copy: "Deep-clean service by certified appliance technicians.",
    badge: "UP TO 30%",
    cta: "Book now",
    tint: "tint-amber",
  },
  {
    id: "spa",
    title: "Salon at home, redefined",
    copy: "Premium in-home spa rituals with single-use kits.",
    badge: "NEW",
    cta: "Explore",
    tint: "tint-rose",
  },
];

export const TABS = [
  { id: "popular", label: "Most Popular" },
  { id: "cleaning", label: "Cleaning" },
  { id: "appliance", label: "Appliance" },
  { id: "beauty", label: "Beauty" },
] as const;

export const SERVICES: Service[] = [
  {
    id: "ac-service",
    title: "AC service & deep clean",
    tab: "popular",
    rating: 4.8,
    reviews: "2.1k",
    duration: "45 mins",
    price: 499,
    includes: ["Foam-jet deep clean", "Gas pressure check", "30-day warranty"],
    tint: "tint-blue",
  },
  {
    id: "full-home",
    title: "Full home deep cleaning",
    tab: "popular",
    rating: 4.9,
    reviews: "4.6k",
    duration: "4 hrs",
    price: 1499,
    includes: ["Kitchen degreasing", "Bathroom sanitisation", "Floor scrubbing"],
    tint: "tint-mint",
  },
  {
    id: "salon-classic",
    title: "Salon at home — Classic",
    tab: "popular",
    rating: 4.8,
    reviews: "3.2k",
    duration: "60 mins",
    price: 699,
    includes: ["Waxing & threading", "Single-use disposables", "Trained beautician"],
    tint: "tint-rose",
  },
  {
    id: "electrician",
    title: "Electrician visit",
    tab: "popular",
    rating: 4.7,
    reviews: "1.4k",
    duration: "30 mins",
    price: 299,
    includes: ["Fault diagnosis", "Switch & socket fixes", "Upfront quote"],
    tint: "tint-violet",
  },
  {
    id: "bathroom-clean",
    title: "Bathroom deep cleaning",
    tab: "cleaning",
    rating: 4.8,
    reviews: "2.7k",
    duration: "90 mins",
    price: 599,
    includes: ["Hard water stain removal", "Tile & grout scrub", "Sanitised fittings"],
    tint: "tint-mint",
  },
  {
    id: "sofa-clean",
    title: "Sofa & carpet shampooing",
    tab: "cleaning",
    rating: 4.7,
    reviews: "980",
    duration: "75 mins",
    price: 799,
    includes: ["Vacuum extraction", "Stain treatment", "Fabric-safe foam"],
    tint: "tint-sky",
  },
  {
    id: "pest",
    title: "Cockroach & ant control",
    tab: "cleaning",
    rating: 4.6,
    reviews: "1.1k",
    duration: "60 mins",
    price: 849,
    includes: ["Odourless gel", "Kid & pet safe", "60-day protection"],
    tint: "tint-amber",
  },
  {
    id: "washing-machine",
    title: "Washing machine repair",
    tab: "appliance",
    rating: 4.7,
    reviews: "1.9k",
    duration: "50 mins",
    price: 449,
    includes: ["Drum & motor check", "Genuine spares", "Service warranty"],
    tint: "tint-blue",
  },
  {
    id: "fridge",
    title: "Refrigerator check-up",
    tab: "appliance",
    rating: 4.8,
    reviews: "860",
    duration: "40 mins",
    price: 399,
    includes: ["Cooling diagnosis", "Coil cleaning", "Gas top-up quote"],
    tint: "tint-sky",
  },
  {
    id: "chimney",
    title: "Chimney deep clean",
    tab: "appliance",
    rating: 4.6,
    reviews: "540",
    duration: "60 mins",
    price: 549,
    includes: ["Filter degreasing", "Motor servicing", "Duct wipe-down"],
    tint: "tint-violet",
  },
  {
    id: "facial",
    title: "Hydrating facial ritual",
    tab: "beauty",
    rating: 4.9,
    reviews: "2.4k",
    duration: "70 mins",
    price: 899,
    includes: ["Skin analysis", "Premium serums", "Neck & shoulder massage"],
    tint: "tint-rose",
  },
  {
    id: "haircut-men",
    title: "Men's haircut & beard",
    tab: "beauty",
    rating: 4.7,
    reviews: "3.9k",
    duration: "45 mins",
    price: 349,
    includes: ["Style consult", "Sanitised tools", "Hot towel finish"],
    tint: "tint-amber",
  },
  {
    id: "massage",
    title: "Stress-relief massage",
    tab: "beauty",
    rating: 4.8,
    reviews: "1.6k",
    duration: "60 mins",
    price: 799,
    includes: ["Aroma oils", "Certified therapist", "Portable massage bed"],
    tint: "tint-mint",
  },
];
