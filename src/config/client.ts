export const client = {
  // Business Details
  name: "S W Gardening",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Bournemouth.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07369 211069",
  email: "",
  website: "",

  // Location
  address: "Bournemouth",
  city: "Bournemouth",
  county: "",
  postcode: "",
  basedIn: "Bournemouth",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Toby Tine", rating: 5, text: "Shaun and Peter dismantled and disposed of my old fencing which was not with the old concrete posts. The erected 10 new posts and 9 new panel. It was beautifully done, straight, level and they cleared up after the job as if they were never there. Gre", date: "9 months ago" },
    { name: "Gary Emmett", rating: 5, text: "Came to do a basic tidy of Front and back garden. And WOW what a great job they did , if this the level of just a basic tidy up. I would hate to think how good a full on tidy up be. Will definitely use SW gardening again. Thanks Gary +4 ", date: "3 years ago" },
    { name: "John Hinds", rating: 5, text: "Shaun and Peter are expert fence and decking specialists working to very high standards. Cannot fault their workmanship. Highly recommended. ", date: "3 months ago" },
    { name: "Gill Loveland", rating: 5, text: "From my first contact with Becky to job finished by Pete and Shaun the service couldn’t be better. I was provided with a quote, what deposit was required and why this was needed. Becky provided a start date and the guys turned up on time. …  ", date: "3 years ago" },
    { name: "Patricia Heritage", rating: 5, text: "Contacted this firm several weeks ago to cut my hedge after a week no quote contacted them told to send email so they could send quote completely ignored although I did contact them again never heard back, disgusting service. …  ", date: "Edited 9 months ago" },
    { name: "Andrew Hill", rating: 5, text: "Great reliable service by Shaun and Peter. Plus a superb job on some new fencing and landscaping. Thanks guys! ", date: "5 months ago" },
    { name: "Hazel", rating: 5, text: "Shaun and Pete have spent the entire week digging out mortar and repointing my patio in searing heat and have done such a great job, we're so impressed.  But more than that, I have to say they're the quietest, most considerate people we've …  ", date: "2 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "S W Gardening | Landscaper in Bournemouth",
    description: "Professional landscaper in Bournemouth. 5.0-star rated on Google. Call for a free quote.",
  },
};
