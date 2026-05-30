export const ME = {
  name: "Md. Safin",
  title: "Software Engineer",
  location: "Dhaka, Bangladesh",
  email: "Ahmedshafinshafi@gmail.com",
  phone: "+880 1738314895",
  github: "https://github.com/iammdsafin",
  linkedin: "https://linkedin.com/in/md-safin",
  bio: "I’m a Software Engineer with 3+ years of experience building and supporting backend systems. I resolve production‑critical issues, optimize complex SQL queries, and work with large-scale datasets to ensure data accuracy and system reliability.\n\nI currently work as a Technical Services Engineer at JustGo, where I handle production incidents, improve system stability, and support business‑critical backend services. I’m skilled in C#, ASP.NET, PHP (Laravel), T‑SQL, stored procedures, views, functions, MSSQL, and MySQL.\n\nFocused on problem-solving, backend technologies, and continuously expanding technical knowledge and expertise."
};

export const SKILLS = [
  { cat: "Database & SQL",   color: "#00c87a", items: ["MSSQL Server","T-SQL","Stored Procedures","Query Optimization","Indexing","Execution Plans","Data Integrity","MySQL","Views & Functions"] },
  { cat: "Backend",          color: "#4da6ff", items: ["C#","ASP.NET",".NET Core","PHP","Laravel","OOP","REST APIs"] },
  { cat: "Frontend",         color: "#f472b6", items: ["JavaScript","React","HTML5","CSS3","Tailwind CSS","Figma"] },
  { cat: "Tools & Workflow", color: "#fbbf24", items: ["Git","GitHub","Jira","Agile","Scrum","Data Analysis"] },
];

export const EXP = [
  {
    role: "Technical Services Engineer", co: "JustGo",
    loc: "Dhaka · Hybrid", period: "Mar 2024 — Present", now: true,
    tags: ["MSSQL","T-SQL","Data Analysis","Backend"],
    points: [
      "Advanced L2 production support — diagnose complex issues via SQL, stored procedures, and backend analysis.",
      "Write, optimize and debug T-SQL queries, stored procedures, functions and views; deliver SQL reports for high-impact cases.",
      "Improve report and stored procedure performance via indexing strategies and execution plan analysis.",
      "Investigate large production datasets to identify root causes and ensure data integrity.",
      "Import and validate millions of records ensuring accuracy and schema compatibility.",
      "Collaborate with backend, frontend, and product teams on fixes and deployments.",
    ],
  },
  {
    role: "Participant — Learnathon 2.0", co: "Vivasoft Limited",
    loc: "Dhaka · Hybrid", period: "Sep 2023 — Feb 2024", now: false,
    tags: ["React","JavaScript","Tailwind","API"],
    points: [
      "Built reusable front-end components from Figma designs using React, Tailwind CSS, and HTML5.",
      "Integrated APIs, ensured cross-browser compatibility, and implemented responsive layouts.",
      "Tested features, resolved bugs, and collaborated in Agile/Scrum sprints.",
    ],
  },
  {
    role: "Software Developer Intern", co: "We Tech Global Pte. Ltd.",
    loc: "Singapore · Remote", period: "Mar 2023 — Aug 2023", now: false,
    tags: ["C#","PHP","Laravel","MySQL"],
    points: [
      "Developed features and APIs using C#, PHP, Laravel, HTML5, CSS3, JavaScript, and .NET Framework.",
      "Designed and optimized MSSQL and MySQL databases to enhance performance.",
      "Debugged software issues, implemented OOP principles, and maintained version control via Git.",
      "Participated in team and scrum meetings across time zones.",
    ],
  },
];

export const EDU = [
  { yr: "2023", deg: "BSc — Computer Science & Engineering", school: "American International University – Bangladesh", loc: "Dhaka" },
  { yr: "2018", deg: "Higher Secondary Certificate", school: "Rajshahi University School", loc: "Rajshahi" },
  { yr: "2016", deg: "Secondary School Certificate", school: "Rajshahi University School", loc: "Rajshahi" },
];

export const CERTS = [
  { name: "SQL (Intermediate)", from: "HackerRank",   color: "#00c87a" },
  { name: "CSS",                from: "HackerRank",   color: "#4da6ff" },
  { name: "Foundational C# with Microsoft", from: "freeCodeCamp", color: "#f472b6" },
  { name: "Get Started with Jira", from: "Coursera",  color: "#fbbf24" },
];

export const NAV = [
  { id: "about",      label: "About",      icon: "M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5z" },
  { id: "skills",     label: "Skills",     icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" },
  { id: "experience", label: "Work",       icon: "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z" },
  { id: "education",  label: "Education",  icon: "M12 3L2 9l10 6 10-6-10-6zm0 13l-7-4.2V17c0 2.2 3.1 4 7 4s7-1.8 7-4v-5.2L12 16z" },
  { id: "contact",    label: "Contact",    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
];
