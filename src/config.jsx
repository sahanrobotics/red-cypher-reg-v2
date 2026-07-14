import {
  AiOutlineDeploymentUnit, // Good for network/node mapping
  AiOutlineSafetyCertificate
} from "react-icons/ai";

import {
  MdSecurity,
  MdOutlineHub,
  MdLan,
  MdOutlineVpnLock
} from "react-icons/md";


export const NAVIGATION = [
  "Home",
  "About",
  "Challenges",
  "Prizes",
  "Timeline",
  "Memories",
  "FAQ",
];

export const SOCIAL_LINKS = [
  { label: "Facebook", link: "#" },
  { label: "Twitter", link: "#" },
  { label: "LinkedIn", link: "#" },
  { label: "Instagram", link: "#" }
];

export const SITE_CONFIG = {
  title: "Red Cypher 3.0",
};

export const HERO_SECTION = {
  logoPath: "/Logo Only.png",
  logoAlt: "Red Cypher Logo",
  title: "Sri Lanka's Ultimate Cybersecurity Battlegrounds",
  description: "Step into the terminal, test your limits, and claim your dominance. Brought to you alongside Coin Ceylon and the IEEE Computer Society.",
  tagline: ["DECRYPT", "DEFEND", "PREVAIL"],
  registerLink: "https://forms.gle/placeholder",
  registerText: "Register Your Team",
  exploreText: "Explore the Challenges"
};

export const STATS_SECTION = {
  participants: 450,
  universities: 24,
  teams: 120,
  statsLabels: {
    participants: "ACTIVE OPERATIVES--",
    participantsDesc: "Registered undergraduate hackers tracking live on the terminal grid.",
    universities: "INSTITUTIONS",
    universitiesDesc: "Top-tier universities across Sri Lanka deployed.",
    teams: "SQUADS FORMED",
    teamsDesc: "Elite 3-4 member teams locked down for battle."
  },
  partnerLogos: [
    { node: <MdLan />, title: "Network Map" },
    { node: <MdOutlineHub />, title: "Infrastructure" },
    { node: <AiOutlineDeploymentUnit />, title: "Deployment Node" },
    { node: <MdOutlineVpnLock />, title: "VPN/Tunneling" },
    { node: <MdSecurity />, title: "Cyber Security" },
    { node: <AiOutlineSafetyCertificate />, title: "Compliance" },
  ]
};

export const ABOUT_SECTION = {
  preTitle: "01 / OVERVIEW",
  title: "Beyond the Code: What is Red Cypher?",
  highlight: "Red Cypher 3.0 is the definitive Capture the Flag (CTF) competition for Sri Lanka's brightest undergraduate minds. Organized by the Faculty of Engineering, University of Ruhuna, in proud partnership with our Title Sponsor Coin Ceylon and the IEEE Computer Society, this is where theory meets raw, practical skill. We provide a dynamic, simulated arena for students to hunt down vulnerabilities, break codes, and solve real-world security puzzles.",
  legacyTitle: "The Legacy of Red Cypher",
  legacyText: "What started as a bold initiative has evolved into a highly anticipated national showdown. In our previous chapters, Red Cypher united hundreds of passionate tech enthusiasts, sparking intense rivalries and incredible displays of talent. Now, in version 3.0, the stakes are higher, the challenges are tougher, and the prize pool is bigger. The grid is readyare you?",
  eligibilityTitle: "Are You Ready to Hack? (Eligibility)",
  eligibilityList: [
    { title: "Undergraduate Students", desc: "Open to all undergraduates from recognized universities and institutes across Sri Lanka." },
    { title: "Team Players", desc: "Form a squad of fearless thinkers (3 to 4 members per team from the same university)." },
    { title: "All Skill Levels", desc: "Whether you are a seasoned terminal jockey or a curious beginner looking to step into cybersecurity, there is a challenge waiting for you." }
  ]
};

export const CHALLENGES_SECTION = {
  preTitle: "02 / DEPLOYMENT",
  title: "Choose Your Battleground",
  subtitle: "Prepare to be tested across every domain of cybersecurity. Our challenges are built to push your analytical and technical skills to the absolute edge. Drag to investigate.",
  tracks: [
    { title: "Binary Exploitation", desc: "Find the flaws, write the exploits, and bend compiled programs to your will.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600", alt: "Binary Exploitation" },
    { title: "Cryptography", desc: "Break complex ciphers and decode hidden messages using mathematical mastery.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600", alt: "Cryptography" },
    { title: "Reverse Engineering", desc: "Tear apart malware and compiled code to uncover how they tick inside.", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600", alt: "Reverse Engineering" },
    { title: "Steganography", desc: "Hunt down the secrets hiding in plain sight within images, audio, and files.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600", alt: "Steganography" },
    { title: "Web Exploitation", desc: "Exploit modern web application vulnerabilities to bypass security controls.", image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=600", alt: "Web Exploitation" },
    { title: "Networking & Forensics", desc: "Analyze packets, investigate breaches, trace footprints, and recover lost data.", image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=600", alt: "Networking & Forensics" },
    { title: "MISC", desc: "Expect the unexpected. Wildcard challenges that defy traditional categories.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600", alt: "MISC" }
  ]
};
export const PRIZES_SECTION = {
  preTitle: "03 / REWARDS",
  title: "The Spoils of War",
  subtitle: "Glory and bragging rights are the foundation. Prove your technical dominance, climb the leaderboard, and claim your share of the prize pool.",
  tiers: [
    { rank: "FIRST PLACE", title: "Champions", prize: "5 × 10⁴ LKR", prizeColor: "linear-gradient(135deg, #FFE259 0%, #FFA751 100%)", desc: "The ultimate reward for the absolute masters of the network grid.", glowColor: "0 97 50", colors: ["#D80606", "#820303", "#4B0101"], intensity: 1.5 },
    { rank: "SECOND PLACE", title: "Runners Up", prize: "3 × 10⁴ LKR", prizeColor: "linear-gradient(135deg, #E3E3E3 0%, #9F9F9F 100%)", desc: "Exceptional technical execution deserves elite recognition.", glowColor: "0 0 50", colors: ["#820303", "#4B0101", "#000000"], intensity: 1.0 },
    { rank: "THIRD PLACE", title: "Second Runners", prize: "2 × 10⁴ LKR", prizeColor: "linear-gradient(135deg, #F09819 0%, #EDDE5D 100%)", desc: "A true testament to resilience and strategic problem-solving.", glowColor: "0 0 30", colors: ["#4B0101", "#820303", "#000000"], intensity: 0.8 }
  ]
};

export const TIMELINE_SECTION = {
  preTitle: "04 / OPERATIONS",
  title: "The Road to Victory",
  logoPath: "/Logo Only.png",
  events: [
    { phase: "01", title: "Registration Opens", date: "TBA", description: "Assemble your squad and secure your strategic spot on the operational grid." },
    { phase: "02", title: "The Awareness Sessions", date: "TBA", description: "Level up your skills with exclusive technical deep-dive workshops led by cybersecurity industry professionals." },
    { phase: "03", title: "The Qualifiers", date: "TBA", description: "A grueling online jeopardy-style CTF sandbox built to separate the best from the rest." },
    { phase: "04", title: "The Grand Finale", date: "TBA", description: "The top-tier engineering teams battle it out in a high-stakes, real-time onsite showdown to crown the absolute champions." }
  ]
};

export const MEMORIES_SECTION = {
  preTitle: "05 / FLASHBACKS",
  title: "Past Memories",
  subtitle: "Glimpses from the previous iterations. Relive the intensity, the struggle, and the ultimate glory of Red Cypher.",
  images: [
    { title: "Red Cypher 1.0 - Moment 3", desc: "Past Memory", image: "/rc1/3.jpg" },
    { title: "Red Cypher", desc: "Decrypt Defend Prevail", image: "/Logo Only.png" },
    { title: "Red Cypher 2.0 - Moment 1", desc: "Past Memory", image: "/rc2/1.jpg" },
    { title: "Red Cypher 1.0 - Moment 5", desc: "Past Memory", image: "/rc1/5.jpg" },
    { title: "Red Cypher 2.0 - Moment 4", desc: "Past Memory", image: "/rc2/4.jpg" },
    { title: "Red Cypher", desc: "Decrypt Defend Prevail", image: "/Logo Only.png" },
    { title: "Red Cypher 1.0 - Moment 2", desc: "Past Memory", image: "/rc1/2.jpg" },
    { title: "Red Cypher 2.0 - Moment 2", desc: "Past Memory", image: "/rc2/2.jpg" },
    { title: "Red Cypher 1.0 - Moment 1", desc: "Past Memory", image: "/rc1/1.jpg" },
    { title: "Red Cypher", desc: "Decrypt Defend Prevail", image: "/Logo Only.png" },
    { title: "Red Cypher 2.0 - Moment 5", desc: "Past Memory", image: "/rc2/5.jpg" },
    { title: "Red Cypher 1.0 - Moment 4", desc: "Past Memory", image: "/rc1/4.jpg" },
    { title: "Red Cypher 2.0 - Moment 3", desc: "Past Memory", image: "/rc2/3.jpg" }
  ]
};

export const FAQ_DATA = [
  { q: "What exactly is a Capture the Flag (CTF) competition?", a: "In cybersecurity, a CTF is an operational competition where participants solve targeted security challenges to discover hidden cryptographic text strings called 'flags.' Submitting these verified flags instantly earns your team points on the leaderboard." },
  { q: "Do I need to be a cybersecurity expert to participate?", a: "Not at all! While some advanced tracks are configured for experts, we have plenty of beginner-friendly puzzles deployed. Plus, our structured awareness sessions will help you safely get up to speed before the launch." },
  { q: "Is there a registration fee?", a: "No, registration is completely free of charge for all eligible undergraduate students across recognized Sri Lankan universities!" },
  { q: "How many members can be in one team?", a: "Each operational squad must consist of 3 to 4 members explicitly from the same university or higher education institute." }
];

export const FOOTER_SECTION = {
  brandTitle: "RED CYPHER 3.0",
  brandTagline: "DECRYPT • DEFEND • PREVAIL",
  organizedByTitle: "Organized By",
  organizedByText: "Faculty of Engineering, University of Ruhuna",
  partnershipTitle: "In Partnership With",
  partners: [
    { title: "Title Sponsor", name: "Coin Ceylon", logoPath: "public/logo.png" },
    { title: "Official Partner", name: "IEEE Computer Society", logoPath: "public\IEEE-CS_LogoTM-orange.webp" }
  ],
  quickLinksTitle: "Quick Links",
  quickLinks: [
    { label: "Home", link: "#home" },
    { label: "Rules & Regulations", link: "#about" },
    { label: "Code of Conduct", link: "#about" },
    { label: "Leaderboard", link: "#prizes" }
  ],
  contactTitle: "Contact Us",
  contactEmail: "info.redcypher@gmail.com",
  contactPhone: "+94717383208",
  copyright: "© 2026 Red Cypher 3.0 | Faculty of Engineering, University of Ruhuna. All Rights Reserved."
};

export const CO_CHAIRS = {
  title: "Project Co-Chairs",
  members: [
    {
      name: "Sahan Manthreerathna",
      email: "shnofficialmail@gmail.com",
      phone: "+94717383208",
      whatsapp: "+94717383208",
      image: "/Co-Chairs/co-chair-1.jpg"
    },
    {
      name: "Sayuru Priyanjana",
      email: "sayurupriyanjana41@gmail.com",
      phone: "+94703132527",
      whatsapp: "+94703132527",
      image: "/Co-Chairs/Co-chair-2.jpeg"
    }
  ]
};

export const COOKIE_CONSENT = {
  title: "We value your privacy",
  description: "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies and agree to our ",
  linkText: "Terms & Conditions",
  linkUrl: "#about",
  acceptButton: "Accept All"
};