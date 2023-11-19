export const contentData = [
  { label: "Fun", value: "fun" },
  { label: "Education", value: "education" },
  { label: "Sports", value: "sports" },
  { label: "News", value: "news" },
  { label: "Investment", value: "investment" },
  { label: "Facts", value: "facts" },
];

export const contentMapping: Record<string, string> = {
  fun: "Fun",
  education: "Education",
  sports: "Sports",
  news: "News",
  investment: "Investment",
  facts: "Facts",
};

const funData = [
  { label: "Board games revival", value: "board-games-revival" },
  { label: "Comedy trends", value: "comedy-trends" },
  { label: "Amusement parks", value: "amusement-parks" },
  { label: "Escape rooms", value: "escape-rooms" },
  { label: "Street performances", value: "street-performances" },
  { label: "Online challenges", value: "online-challenges" },
  { label: "Festivals impact", value: "festivals-impact" },
  { label: "Crafting movement", value: "crafting-movement" },
  { label: "Social gaming", value: "social-gaming" },
  { label: "Virtual reality", value: "virtual-reality" },
];

const educationData = [
  { label: "Gamified learning", value: "gamified-learning" },
  { label: "Education systems", value: "education-systems" },
  { label: "Bilingual benefits", value: "bilingual-benefits" },
  { label: "Standardized testing", value: "standardized-testing" },
  { label: "Arts in schools", value: "arts-in-schools" },
  { label: "Tech bootcamps", value: "tech-bootcamps" },
  { label: "Homeschooling dynamics", value: "homeschooling-dynamics" },
  { label: "Mentorship importance", value: "mentorship-importance" },
  { label: "Educational equity", value: "educational-equity" },
  { label: "Mobile learning", value: "mobile-learning" },
];

const sportsData = [
  { label: "Sports medicine", value: "sports-medicine" },
  { label: "Team sociology", value: "team-sociology" },
  { label: "Olympic economics", value: "olympic-economics" },
  { label: "Gender parity", value: "gender-parity" },
  { label: "Fandom psychology", value: "fandom-psychology" },
  { label: "Extreme sports", value: "extreme-sports" },
  { label: "Sports business", value: "sports-business" },
  { label: "Youth athletics", value: "youth-athletics" },
  { label: "Data analytics", value: "data-analytics" },
  { label: "Doping ethics", value: "doping-ethics" },
];

const newsData = [
  { label: "Citizen journalism", value: "citizen-journalism" },
  { label: "Whistleblower influence", value: "whistleblower-influence" },
  { label: "Fake news", value: "fake-news" },
  { label: "Print media survival", value: "print-media-survival" },
  { label: "Social media news", value: "social-media-news" },
  { label: "Cybersecurity news", value: "cybersecurity-news" },
  { label: "Democratic media", value: "democratic-media" },
  { label: "News deserts", value: "news-deserts" },
  { label: "News economics", value: "news-economics" },
  { label: "Broadcast evolution", value: "broadcast-evolution" },
];

const investmentData = [
  { label: "Robo-advising", value: "robo-advising" },
  { label: "Geopolitical impacts", value: "geopolitical-impacts" },
  { label: "Index funds", value: "index-funds" },
  { label: "Real estate trends", value: "real-estate-trends" },
  { label: "Startup investing", value: "startup-investing" },
  { label: "Social trading", value: "social-trading" },
  { label: "Tax strategies", value: "tax-strategies" },
  { label: "Emerging markets", value: "emerging-markets" },
  { label: "Financial literacy", value: "financial-literacy" },
  { label: "Pension futures", value: "pension-futures" },
];

const factsData = [
  { label: "Animal oddities", value: "animal-oddities" },
  { label: "Everyday science", value: "everyday-science" },
  { label: "Historical obscurities", value: "historical-obscurities" },
  { label: "Science myths", value: "science-myths" },
  { label: "Human body facts", value: "human-body-facts" },
  { label: "Oceanic discoveries", value: "oceanic-discoveries" },
  { label: "Space exploration", value: "space-exploration" },
  { label: "Ancient tech", value: "ancient-tech" },
  { label: "World laws", value: "world-laws" },
  { label: "Bizarre news", value: "bizarre-news" },
];
export interface IOption {
  value: string;
  label: string;
}

export const contentOptions: Record<string, IOption[]> = {
  fun: funData,
  education: educationData,
  sports: sportsData,
  news: newsData,
  investment: investmentData,
  facts: factsData,
};
