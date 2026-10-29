# CodeAtlas – Universal Programming Cheat Sheets

> **"Everything you need to code, all in one place."**

CodeAtlas is a fully responsive, modern developer reference website built with pure **HTML5, CSS3, and Vanilla JavaScript**—zero frameworks, zero build steps, and zero external dependencies.

Designed with a **100% data-driven architecture**, CodeAtlas lets you scale to hundreds of programming languages, frameworks, developer tools, and cloud platforms simply by appending a data object to `js/data.js`.

---

## ⚡ Key Features

- **Data-Driven Core**: Adding a new language, framework, or tool requires only adding an entry to `js/data.js`. The UI cards, categories, instant search indexing, table of contents, and detail views are generated automatically.
- **Dark Mode by Default & Light Mode Toggle**: Seamless CSS custom variables with user preference persisted in `localStorage`.
- **Live Instant Search**: Real-time multi-field search across titles, categories, tags, keywords, and code topics with `Ctrl + K` or `/` hotkey support.
- **Deep Linking with Hash Routing**: Bookmark or share direct links to any cheat sheet (e.g. `index.html#sheet/python`, `index.html#sheet/docker`). Supports browser forward/back buttons.
- **Auto-Generated Table of Contents**: Each cheat sheet builds a sidebar navigation with active scrollspy and an in-sheet search filter.
- **Quick Reference Cards**: Compact key-value tables for syntax shortcuts, CLI flags, built-ins, and rules.
- **Syntax Highlighting & Copy Code**: Built-in vanilla regex syntax highlighter with one-click "Copy Code" buttons and animated visual feedback.
- **Favorites & Recently Viewed**: Save your most-used cheat sheets locally with zero backend dependencies.
- **Glassmorphism & Micro-Interactions**: Modern developer aesthetics with backdrop blurs, subtle gradient borders, glowing hover effects, and smooth accordion transitions.
- **Fully Responsive**: Optimized fluid layout across mobile phones (with hamburger drawer), tablets, laptops, and ultra-wide displays.
- **Print & PDF Ready**: Dedicated `@media print` stylesheet for clean printing and PDF export.

---

## 📁 Project Structure

```
├── index.html          # Semantic HTML5 single-page application structure
├── css/
│   └── style.css       # Design tokens, dark/light themes, glassmorphism, responsive styles
├── js/
│   ├── data.js         # Single source of truth: cheat sheets, categories, resources, FAQs
│   └── app.js          # Modular vanilla JS: rendering, search, filters, modals, local storage
└── README.md           # Documentation and guide for adding new cheat sheets
```

---

## 🚀 How to Run Locally

Because CodeAtlas is 100% static, you don't need `npm install`, Node.js, or complex bundlers!

### Option 1: Direct File Open
Simply double-click `index.html` to open it in your favorite browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (VS Code Live Server or Python)
```bash
# Using Python
python -m http.server 3000

# Using Node (npx)
npx serve .
```
Then visit `http://localhost:3000` in your browser.

---

## ✍️ How to Add a New Cheat Sheet (Data-Driven Architecture)

To add a new technology or programming language, open `js/data.js` and append an object to `CHEAT_SHEETS_DATA`:

```javascript
{
  id: "kotlin",
  name: "Kotlin",
  badge: "v2.0+",
  icon: `<svg viewBox="0 0 24 24" fill="currentColor">...</svg>`,
  color: "#7f52ff",
  category: "Mobile Development",
  categoryId: "mobile-development",
  difficulty: "Intermediate", // "Beginner" | "Intermediate" | "Advanced"
  popularity: 90,
  addedDate: "2026-02-01",
  description: "Modern, concise programming language for Android, server-side, and multiplatform applications.",
  tags: ["kotlin", "android", "mobile", "jvm", "coroutines"],
  quickReference: [
    {
      title: "Key Declarations",
      items: [
        { key: "val", val: "Immutable reference (read-only)" },
        { key: "var", val: "Mutable variable" },
        { key: "null-safety", val: "String? (nullable), str?.length" }
      ]
    }
  ],
  sections: [
    {
      id: "syntax-variables",
      title: "Basic Syntax & Variables",
      topics: [
        {
          title: "Declaring Variables and String Templates",
          explanation: "Kotlin features type inference and native string interpolation.",
          syntax: "val name: String = \"value\"",
          code: `fun main() {\n    val greeting = "CodeAtlas"\n    println("Welcome to $greeting!")\n}`,
          output: "Welcome to CodeAtlas!",
          notes: "Prefer val over var wherever possible.",
          tips: "Use when expressions instead of switch statements."
        }
      ]
    }
  ]
}
```

That's it! CodeAtlas will **automatically**:
1. Index it in the live search bar.
2. Render its card in the cheat sheets catalog with its difficulty badge and topic count.
3. Update the category sheet count.
4. Generate the reader modal, table of contents, and quick reference cards.

---

## 🎨 Supported Categories

1. Programming Languages
2. Web Development
3. Mobile Development
4. Data Science
5. Artificial Intelligence
6. Machine Learning
7. Databases
8. DevOps
9. Cloud Computing
10. Operating Systems
11. Version Control
12. APIs
13. Cybersecurity
14. Networking
15. Data Structures
16. Algorithms
17. Software Engineering
18. UI/UX
19. Testing
20. Miscellaneous

---

## 📄 License

Open-source and free for developers, students, and educators.
