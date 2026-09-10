// All copy lives here so the client can update it without touching layout code.
// Replace the placeholder items (marked below) with real, current details.

export const site = {
  name: "CAC Grace & Truth",
  fullName: "Christ Apostolic Church, Grace and Truth",
  tagline: "A place where destinies are fulfilled",
  intro:
    "We are a community in Walsall, Birmingham, committed to making disciples, helping people discover God's purpose, and reaching Europe with the message of the Supernatural.",
  address: {
    line1: "75 Stafford Street",
    line2: "Walsall, WS2 8DU",
    country: "United Kingdom",
  },
  phone: "07478 734631",
  email: "info@gtmbirmingham.com",
  socials: {
    facebook: "https://facebook.com/cacgracetruth",
    instagram: "https://instagram.com/cacgracetruth",
    youtube: "https://youtube.com/@cacgracetruth",
    twitter: "https://twitter.com/cacgracetruth",
  },
  // Placeholder — confirm the real weekly service time before launch.
  serviceTime: "Sundays, 10:00am",
  nav: [
    { label: "About Us", href: "/about-us" },
    { label: "Announcements", href: "/announcements" },
    { label: "Ministries", href: "/ministries" },
    { label: "Visit Us", href: "/visit-us" },
    { label: "Media", href: "/media" },
  ],
};

export const monthlyTheme = {
  label: "This month",
  // Placeholder — swap for the current month's theme.
  title: "An encounter with power",
};

export const upcomingEvents = [
  {
    // Placeholder dates — update each month.
    title: "72 Hrs With God",
    when: "This weekend",
  },
  {
    title: "Church Anniversary",
    when: "See announcements for dates",
  },
];

// lib/content.ts
export const about = {
  heading: "Welcome to CAC Grace & Truth",
  paragraphs: [
    "We're a Christ Apostolic Church community that started as an apostolic centre reaching the continent of Europe with the message of the Supernatural. Our mission is simple: to make disciples and help every member discover their God-given purpose — and today that mission lives on across four branches throughout the United Kingdom.",
  ],
};

export const giving = {
  verse:
    "Whoever is generous to the poor lends to the Lord, and he will repay him for his deed.",
  reference: "Proverbs 19:17",
};
