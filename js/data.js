/**
 * CodeAtlas - Universal Programming Cheat Sheets
 * Data Source (js/data.js)
 * 
 * ARCHITECTURE NOTE:
 * This file is the single source of truth for all content on CodeAtlas.
 * To add a new programming language or technology, simply add an object 
 * to the CHEAT_SHEETS_DATA array. The application automatically generates
 * the UI cards, filters, search indexing, table of contents, and detail views.
 */

const CATEGORIES_DATA = [
  {
    id: "programming-languages",
    name: "Programming Languages",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    description: "Core syntax, paradigms, and idioms for modern and classic languages.",
    gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)"
  },
  {
    id: "web-development",
    name: "Web Development",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    description: "Front-end and back-end web standards, frameworks, and tools.",
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)"
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
    description: "Native and cross-platform mobile frameworks for iOS and Android.",
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)"
  },
  {
    id: "data-science",
    name: "Data Science",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    description: "Data manipulation, statistical analysis, and visual storytelling.",
    gradient: "linear-gradient(135deg, #10b981, #059669)"
  },
  {
    id: "artificial-intelligence",
    name: "Artificial Intelligence",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>`,
    description: "LLMs, prompt engineering, agentic workflows, and AI integration.",
    gradient: "linear-gradient(135deg, #ec4899, #db2777)"
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`,
    description: "Supervised & unsupervised learning, PyTorch, TensorFlow, and models.",
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)"
  },
  {
    id: "databases",
    name: "Databases",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    description: "Relational SQL, NoSQL document stores, vector DBs, and key-value caches.",
    gradient: "linear-gradient(135deg, #3b82f6, #2563eb)"
  },
  {
    id: "devops",
    name: "DevOps",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
    description: "Containers, CI/CD pipelines, orchestration, automation, and tooling.",
    gradient: "linear-gradient(135deg, #10b981, #047857)"
  },
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
    description: "Cloud architectures, serverless functions, AWS, Azure, and GCP services.",
    gradient: "linear-gradient(135deg, #0284c7, #0369a1)"
  },
  {
    id: "operating-systems",
    name: "Operating Systems",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    description: "Linux administration, shell scripting, terminal utilities, and kernel concepts.",
    gradient: "linear-gradient(135deg, #6366f1, #4f46e5)"
  },
  {
    id: "version-control",
    name: "Version Control",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
    description: "Git commands, branch workflows, rebasing, undoing errors, and GitHub actions.",
    gradient: "linear-gradient(135deg, #f97316, #ea580c)"
  },
  {
    id: "apis",
    name: "APIs",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>`,
    description: "RESTful endpoints, GraphQL schemas, gRPC protocols, and HTTP specifications.",
    gradient: "linear-gradient(135deg, #14b8a6, #0d9488)"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    description: "OWASP vulnerability prevention, cryptography, secure headers, and auth.",
    gradient: "linear-gradient(135deg, #ef4444, #dc2626)"
  },
  {
    id: "networking",
    name: "Networking",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>`,
    description: "TCP/IP, DNS, SSL/TLS certificates, reverse proxies, and socket protocols.",
    gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)"
  },
  {
    id: "data-structures",
    name: "Data Structures",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
    description: "Arrays, Linked Lists, Trees, Graphs, Heaps, and Hash Tables memory structures.",
    gradient: "linear-gradient(135deg, #06b6d4, #0284c7)"
  },
  {
    id: "algorithms",
    name: "Algorithms",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    description: "Sorting, searching, dynamic programming, Dijkstra, and Big-O complexities.",
    gradient: "linear-gradient(135deg, #a855f7, #9333ea)"
  },
  {
    id: "software-engineering",
    name: "Software Engineering",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    description: "Design patterns, SOLID principles, Clean Code architecture, and refactoring.",
    gradient: "linear-gradient(135deg, #3b82f6, #6366f1)"
  },
  {
    id: "ui-ux",
    name: "UI/UX",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`,
    description: "Responsive layouts, Flexbox, Grid, color theory, accessibility, and micro-interactions.",
    gradient: "linear-gradient(135deg, #ec4899, #be185d)"
  },
  {
    id: "testing",
    name: "Testing",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    description: "Unit testing, integration testing, end-to-end automation, and test fixtures.",
    gradient: "linear-gradient(135deg, #10b981, #0d9488)"
  },
  {
    id: "miscellaneous",
    name: "Miscellaneous",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    description: "Regex patterns, markdown formatting, licensing, and developer productivity tips.",
    gradient: "linear-gradient(135deg, #64748b, #475569)"
  }
];

const CHEAT_SHEETS_DATA = [
  // 1. PYTHON
  {
    id: "python",
    name: "Python",
    badge: "3.12+",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.008 2.753h5.815v.825H3.978S0 5.766 0 11.892c0 6.124 3.472 5.912 3.472 5.912h2.072v-2.898s-.112-3.473 3.413-3.473h5.864s3.308.053 3.308-3.238V2.656S18.57 0 11.914 0zm-3.26 1.838a1.077 1.077 0 1 1 0 2.155 1.077 1.077 0 0 1 0-2.155zm3.432 22.162c6.094 0 5.714-2.656 5.714-2.656l-.008-2.753H11.977v-.825h8.045s3.978.468 3.978-5.658c0-6.124-3.472-5.912-3.472-5.912h-2.072v2.898s.112 3.473-3.413 3.473H9.179s-3.308-.053-3.308 3.238v5.546s-.442 2.656 6.213 2.656zm3.26-1.838a1.077 1.077 0 1 1 0-2.155 1.077 1.077 0 0 1 0 2.155z"/></svg>`,
    color: "#387eb8",
    category: "Programming Languages",
    categoryId: "programming-languages",
    difficulty: "Beginner",
    popularity: 99,
    addedDate: "2026-01-10",
    description: "Versatile, readable high-level language universally loved for web development, scripting, data science, automation, and artificial intelligence.",
    tags: ["python", "py", "scripting", "backend", "ai", "machine-learning", "django", "fastapi"],
    quickReference: [
      {
        title: "Primitive Types",
        items: [
          { key: "int", val: "42, -7, 0x1F" },
          { key: "float", val: "3.1415, 1e-4" },
          { key: "str", val: "'hello', \"world\", f'{var}'" },
          { key: "bool", val: "True, False" },
          { key: "NoneType", val: "None (null equivalent)" }
        ]
      },
      {
        title: "Common Collections",
        items: [
          { key: "List (mutable)", val: "[1, 2, 'a', True]" },
          { key: "Tuple (immutable)", val: "(10, 20, 30)" },
          { key: "Dict (key-value)", val: "{'name': 'Ada', 'age': 32}" },
          { key: "Set (unique)", val: "{1, 2, 3, 3} -> {1, 2, 3}" }
        ]
      },
      {
        title: "Useful CLI Commands",
        items: [
          { key: "Run script", val: "python main.py" },
          { key: "Create venv", val: "python -m venv .venv" },
          { key: "Activate venv", val: "source .venv/bin/activate" },
          { key: "Install packages", val: "pip install -r requirements.txt" },
          { key: "Interactive REPL", val: "python -i" }
        ]
      }
    ],
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        topics: [
          {
            title: "What is Python?",
            explanation: "Python is an interpreted, object-oriented, dynamically typed programming language known for its clean, expressive syntax that reads like pseudo-code.",
            syntax: "# Python emphasizes indentation for block scoping rather than curly braces.",
            code: `# Hello world in Python
name = "Developer"
print(f"Welcome to CodeAtlas, {name}!")`,
            output: "Welcome to CodeAtlas, Developer!",
            notes: "Python 3 is the standard version. Avoid Python 2 as it reached End Of Life in 2020.",
            tips: "Use virtual environments (`venv`) for every new project to keep dependencies isolated."
          }
        ]
      },
      {
        id: "installation",
        title: "Installation & Setup",
        topics: [
          {
            title: "Setting Up Python and Virtual Environments",
            explanation: "Install Python using your system package manager or from python.org, then create an isolated environment.",
            syntax: "python -m venv <env_name>",
            code: `# Windows
python -m venv venv
.\\venv\\Scripts\\activate

# macOS / Linux
python3 -m venv venv
source venv/bin/activate

# Upgrade pip & install packages
pip install --upgrade pip
pip install requests rich`,
            output: "Successfully installed requests rich",
            notes: "Always commit `requirements.txt` (`pip freeze > requirements.txt`) to version control.",
            tips: "Modern tools like `uv` or `poetry` provide blazing fast dependency resolution."
          }
        ]
      },
      {
        id: "variables-data-types",
        title: "Variables & Data Types",
        topics: [
          {
            title: "Variable Assignment & Type Hinting",
            explanation: "Variables are dynamically typed, but modern Python supports optional type hints for IDE clarity and static checking.",
            syntax: "variable_name: type = value",
            code: `age: int = 25
price: float = 19.99
title: str = "Software Architect"
is_active: bool = True
tags: list[str] = ["ai", "python", "backend"]

# Multiple assignment & unpacking
x, y, z = 1, 2, 3
a, *rest, b = [10, 20, 30, 40, 50]

print(f"x={x}, y={y}, rest={rest}, b={b}")`,
            output: "x=1, y=2, rest=[20, 30, 40], b=50",
            notes: "Type hints do not enforce runtime checks by default; use libraries like Pydantic for validation.",
            tips: "Use snake_case for variable and function names according to PEP 8 standards."
          }
        ]
      },
      {
        id: "control-flow-loops",
        title: "Control Statements & Loops",
        topics: [
          {
            title: "Conditionals, Pattern Matching & Comprehensions",
            explanation: "Python features standard `if/elif/else`, structural pattern matching (`match/case`), and elegant list/dict comprehensions.",
            syntax: "match subject:\n    case pattern:\n        ...",
            code: `# Structural Pattern Matching (Python 3.10+)
status_code = 404

match status_code:
    case 200:
        message = "OK"
    case 404:
        message = "Not Found"
    case 500 | 502:
        message = "Server Error"
    case _:
        message = "Unknown Status"

# List Comprehension with filtering
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
evens_squared = [n ** 2 for n in numbers if n % 2 == 0]

print(f"Status: {message}")
print(f"Evens squared: {evens_squared}")`,
            output: "Status: Not Found\nEvens squared: [4, 16, 36, 64]",
            notes: "List comprehensions are faster and more readable than standard `for` loops appending to an empty list.",
            tips: "Use dictionary comprehensions: `{k: v for k, v in items}`."
          }
        ]
      },
      {
        id: "functions",
        title: "Functions & Lambdas",
        topics: [
          {
            title: "Defining Functions, Args, Kwargs & Decorators",
            explanation: "Functions support default arguments, variable positional arguments (*args), keyword arguments (**kwargs), and decorators.",
            syntax: "def func(*args, **kwargs):\n    return result",
            code: `def calculate_total(base_price: float, discount: float = 0.1, *fees, **metadata) -> float:
    total = (base_price * (1 - discount)) + sum(fees)
    if metadata.get("currency") == "EUR":
        total *= 0.92
    return round(total, 2)

# Simple decorator example
def announce(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}...")
        return func(*args, **kwargs)
    return wrapper

@announce
def greet(name: str):
    return f"Hello, {name}!"

print(calculate_total(100, 0.2, 5.0, 2.5, currency="USD"))
print(greet("Ada"))`,
            output: "Calling greet...\n87.5\nHello, Ada!",
            notes: "Never use mutable objects (like `[]` or `{}`) as default parameter values. Use `None` instead.",
            tips: "Use lambda for short one-line throwaway functions: `double = lambda x: x * 2`."
          }
        ]
      },
      {
        id: "oop",
        title: "Object-Oriented Programming",
        topics: [
          {
            title: "Classes, Dataclasses & Inheritance",
            explanation: "Classes encapsulate state and behavior. The `@dataclass` decorator simplifies boilerplate class definitions.",
            syntax: "@dataclass\nclass Name:\n    field: type",
            code: `from dataclasses import dataclass

@dataclass
class User:
    id: int
    username: str
    role: str = "member"

    def is_admin(self) -> bool:
        return self.role == "admin"

class SuperUser(User):
    def __init__(self, id: int, username: str):
        super().__init__(id, username, role="admin")
        self.super_powers = True

admin = SuperUser(1, "root_dev")
print(f"User: {admin.username}, Admin? {admin.is_admin()}")`,
            output: "User: root_dev, Admin? True",
            notes: "Dataclasses auto-generate `__init__`, `__repr__`, and `__eq__` methods.",
            tips: "Use `@property` for getters/setters without breaking public attribute syntax."
          }
        ]
      },
      {
        id: "error-file-handling",
        title: "Error & File Handling",
        topics: [
          {
            title: "Try/Except Blocks and Pathlib",
            explanation: "Handle runtime exceptions gracefully and use the modern `pathlib` module for cross-platform file system operations.",
            syntax: "try:\n    ...\nexcept Error as e:\n    ...\nfinally:\n    ...",
            code: `from pathlib import Path

# Safe file writing & reading with context manager
file_path = Path("sample.txt")

try:
    with file_path.open("w", encoding="utf-8") as f:
        f.write("Line 1: Hello CodeAtlas\\nLine 2: Ready for production")

    with file_path.open("r", encoding="utf-8") as f:
        content = f.read()
    print("Read success:")
    print(content)
except IOError as err:
    print(f"File error occurred: {err}")
finally:
    if file_path.exists():
        file_path.unlink() # cleanup`,
            output: "Read success:\nLine 1: Hello CodeAtlas\nLine 2: Ready for production",
            notes: "The `with` statement ensures files are closed automatically even if an exception occurs.",
            tips: "Catch specific exceptions (e.g., `FileNotFoundError`, `ValueError`) instead of a bare `except:`."
          }
        ]
      },
      {
        id: "best-practices",
        title: "Best Practices & Common Mistakes",
        topics: [
          {
            title: "Production Conventions",
            explanation: "Adhere to PEP 8 standards, avoid mutable defaults, and embrace readability.",
            syntax: "# Pro tips for production Python",
            code: `# BAD:
def add_item(item, target_list=[]): # mutable default!
    target_list.append(item)
    return target_list

# GOOD:
def add_item_fixed(item, target_list=None):
    if target_list is None:
        target_list = []
    target_list.append(item)
    return target_list

# Use enumerate instead of range(len(...))
items = ["apple", "banana", "cherry"]
for idx, fruit in enumerate(items, start=1):
    print(f"{idx}: {fruit}")`,
            output: "1: apple\n2: banana\n3: cherry",
            notes: "Default arguments are evaluated once when the function is defined, not each time it is called.",
            tips: "Run `ruff` or `flake8` and `black` in pre-commit hooks to automate formatting."
          }
        ]
      },
      {
        id: "interview-questions",
        title: "Interview Questions",
        topics: [
          {
            title: "Top Python Technical Interview Questions",
            explanation: "Common questions asked during senior and junior Python developer interviews.",
            syntax: "Q & A Format",
            code: `# Q1: How does Python manage memory?
# A: Python uses private heap space, reference counting, and a cyclic garbage collector.

# Q2: What is the GIL (Global Interpreter Lock)?
# A: A mutex that allows only one thread to execute Python bytecode at a time in CPython.

# Q3: What is the difference between deepcopy and shallow copy?
import copy
orig = [[1, 2], [3, 4]]
shallow = copy.copy(orig)
deep = copy.deepcopy(orig)

orig[0][0] = 999
print(f"Shallow affected: {shallow[0][0] == 999}")
print(f"Deep unaffected: {deep[0][0] != 999}")`,
            output: "Shallow affected: True\nDeep unaffected: True",
            notes: "Python 3.13 introduces experimental free-threaded mode (disabling the GIL).",
            tips: "Practice generator functions (`yield`) and memory efficiency questions."
          }
        ]
      }
    ]
  },

  // 2. JAVASCRIPT
  {
    id: "javascript",
    name: "JavaScript",
    badge: "ES2026",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.621-1.797-1.025-.114-.188-.14-.442-.095-.67.14-.658.89-1.018 1.636-.833.522.13.918.498 1.15.977l2.254-1.393c-.45-1.03-1.22-1.785-2.22-2.148-1.522-.55-3.328-.31-4.27.76-.787.892-.89 2.148-.285 3.22.68 1.205 2.062 1.767 3.242 2.235.845.337 1.564.67 1.758 1.137.28.667-.123 1.343-.888 1.547-.84.223-1.89-.08-2.39-1.02l-2.27 1.408c.55 1.298 1.635 2.19 2.94 2.535 2.17.575 4.34-.33 4.96-2.348l.028-.52zm-8.81-8.156h-2.73v9.388c0 1.26-.067 2.378-.887 3.037-.62.497-1.5.6-2.3.418-.75-.17-1.35-.61-1.72-1.21l-2.09 1.44c.66 1.26 1.78 2.07 3.09 2.32 1.62.31 3.42-.04 4.41-1.29.98-1.24.97-2.72.97-4.13V10.12h.257z"/></svg>`,
    color: "#f7df1e",
    category: "Web Development",
    categoryId: "web-development",
    difficulty: "Beginner",
    popularity: 98,
    addedDate: "2026-01-08",
    description: "The universal programming language of the web, powering interactive browser frontends and scalable backend servers with Node.js.",
    tags: ["javascript", "js", "es6", "frontend", "web", "node", "async", "dom"],
    quickReference: [
      {
        title: "Variable Declarations",
        items: [
          { key: "const", val: "Block-scoped, immutable binding" },
          { key: "let", val: "Block-scoped, reassignable" },
          { key: "var", val: "Function-scoped, hoisted (avoid)" }
        ]
      },
      {
        title: "Array Higher-Order Methods",
        items: [
          { key: "map()", val: "Transforms each item: [1,2].map(x => x*2)" },
          { key: "filter()", val: "Keeps matching items: [1,2,3].filter(x => x>1)" },
          { key: "reduce()", val: "Aggregates values: arr.reduce((acc, curr) => acc + curr, 0)" },
          { key: "find() / some()", val: "Returns first match or boolean check" }
        ]
      },
      {
        title: "Async Utilities",
        items: [
          { key: "Promise.all()", val: "Rejects if any reject; resolves all" },
          { key: "Promise.allSettled()", val: "Waits for all to finish, never rejects" },
          { key: "Async / Await", val: "Clean syntax for asynchronous promises" }
        ]
      }
    ],
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        topics: [
          {
            title: "Modern JavaScript (ES6+)",
            explanation: "JavaScript is a lightweight, single-threaded, event-driven language with first-class functions and prototypal inheritance.",
            syntax: "console.log(greeting);",
            code: `// Modern ES6+ syntax
const greet = (name = "World") => \`Hello, \${name}!\`;
console.log(greet("Developer"));`,
            output: "Hello, Developer!",
            notes: "Always enable strict mode or use ES Modules (`type=\"module\"`) which enables strict mode by default.",
            tips: "Avoid `var` entirely in modern applications; stick to `const` by default and `let` when mutation is required."
          }
        ]
      },
      {
        id: "syntax-data-types",
        title: "Variables, Types & Destructuring",
        topics: [
          {
            title: "Destructuring, Rest & Spread Operators",
            explanation: "Extract properties cleanly from objects and arrays, or combine collections using the spread operator (`...`).",
            syntax: "const { prop } = object; const [ first, ...rest ] = array;",
            code: `// Object & Array Destructuring
const developer = {
  name: "Sarah Chen",
  skills: ["JavaScript", "Rust", "Docker"],
  location: { city: "San Francisco", country: "USA" }
};

const { name, skills: [primarySkill], location: { city } } = developer;
const updatedProfile = { ...developer, level: "Senior", active: true };

console.log(\`\${name} is a \${primarySkill} developer from \${city}.\`);
console.log("Updated keys:", Object.keys(updatedProfile).join(", "));`,
            output: "Sarah Chen is a JavaScript developer from San Francisco.\nUpdated keys: name, skills, location, level, active",
            notes: "Destructuring supports default fallback values: `const { role = 'guest' } = user;`.",
            tips: "Use optional chaining (`?.`) and nullish coalescing (`??`) to avoid `Cannot read properties of undefined` errors."
          }
        ]
      },
      {
        id: "async-promises",
        title: "Async / Await & Promises",
        topics: [
          {
            title: "Handling Asynchronous Flow with Fetch",
            explanation: "Modern asynchronous code relies on Promises and the `async/await` syntax for clean, synchronous-looking readability.",
            syntax: "async function fetchResource() { const res = await fetch(url); return res.json(); }",
            code: `// Async fetch with error handling
async function fetchUser(userId) {
  try {
    // Simulated network response promise
    const response = await new Promise((resolve) => {
      setTimeout(() => resolve({ id: userId, username: "code_ninja", status: "online" }), 100);
    });
    return response;
  } catch (error) {
    console.error("Network error:", error.message);
    throw error;
  }
}

// Running concurrently
async function run() {
  const [user1, user2] = await Promise.all([
    fetchUser(101),
    fetchUser(102)
  ]);
  console.log("Fetched users:", user1.username, user2.username);
}

run();`,
            output: "Fetched users: code_ninja code_ninja",
            notes: "`Promise.all` fails immediately if any single promise rejects. Use `Promise.allSettled` to inspect all outcomes.",
            tips: "Remember that `async` functions always return a Promise."
          }
        ]
      },
      {
        id: "dom-events",
        title: "DOM Manipulation & Event Handling",
        topics: [
          {
            title: "Querying Elements and Event Delegation",
            explanation: "Attach handlers efficiently using event delegation on parent containers rather than attaching listeners to each child.",
            syntax: "parent.addEventListener('click', (e) => { if (e.target.matches('.item')) ... });",
            code: `// Modern DOM creation and event listener
const button = document.createElement("button");
button.textContent = "Click Me";
button.classList.add("btn-primary");

button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Button clicked!", event.target.tagName);
});

// Event Delegation on a list container
const list = document.querySelector("#todo-list");
if (list) {
  list.addEventListener("click", (event) => {
    const item = event.target.closest(".todo-item");
    if (item) {
      item.classList.toggle("completed");
    }
  });
}`,
            output: "// DOM nodes update dynamically without refreshing the page",
            notes: "Always remove event listeners or use AbortController signals when tearing down components in SPAs.",
            tips: "Use `element.closest()` to safely find ancestor elements during delegation."
          }
        ]
      },
      {
        id: "best-practices",
        title: "Best Practices & Common Pitfalls",
        topics: [
          {
            title: "Equality & Memory Leak Prevention",
            explanation: "Always use strict equality (`===`) and avoid closure leaks in global event listeners.",
            syntax: "a === b // checks value and type without coercion",
            code: `// BAD: Type coercion quirks
console.log("" == 0);       // true!
console.log(null == undefined); // true!

// GOOD: Strict equality
console.log("" === 0);      // false
console.log(null === undefined); // false

// Object immutability with Object.freeze
const CONFIG = Object.freeze({
  API_URL: "https://api.codeatlas.dev",
  TIMEOUT: 5000
});`,
            output: "true\ntrue\nfalse\nfalse",
            notes: "`Object.freeze()` is shallow; nested objects can still be mutated unless deeply frozen.",
            tips: "Use `structuredClone(obj)` for true native deep cloning without `JSON.parse(JSON.stringify(obj))` limitations."
          }
        ]
      }
    ]
  },

  // 3. TYPESCRIPT
  {
    id: "typescript",
    name: "TypeScript",
    badge: "5.5+",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM15.42 15.656l2.368-1.442c.49.885 1.144 1.488 2.052 1.488.948 0 1.543-.49 1.543-1.168 0-.825-.664-1.12-1.782-1.614l-.612-.27c-1.764-.78-2.94-1.765-2.94-3.565 0-2.028 1.572-3.564 3.996-3.564 1.764 0 3.036.756 3.864 2.22l-2.22 1.344c-.456-.756-.996-1.116-1.68-1.116-.768 0-1.296.48-1.296 1.092 0 .732.552 1.032 1.62 1.512l.624.276c2.04.888 3.144 1.836 3.144 3.732 0 2.28-1.776 3.696-4.308 3.696-2.316 0-3.84-1.164-4.476-2.616zm-7.692-7.896H3.612V5.532h9.792v2.228H9.288v10.74H7.728V7.76z"/></svg>`,
    color: "#3178c6",
    category: "Programming Languages",
    categoryId: "programming-languages",
    difficulty: "Intermediate",
    popularity: 96,
    addedDate: "2026-01-14",
    description: "A strongly typed superset of JavaScript that compiles to plain JavaScript, providing compile-time type safety and enterprise scalability.",
    tags: ["typescript", "ts", "types", "javascript", "interfaces", "generics"],
    quickReference: [
      {
        title: "Primitive & Top Types",
        items: [
          { key: "any", val: "Bypasses all type checks (avoid)" },
          { key: "unknown", val: "Type-safe counterpart of any; requires narrowing" },
          { key: "never", val: "Represents values that never occur" },
          { key: "void", val: "Absence of any return value" }
        ]
      },
      {
        title: "Utility Types",
        items: [
          { key: "Partial<T>", val: "Makes all properties optional" },
          { key: "Required<T>", val: "Makes all properties required" },
          { key: "Readonly<T>", val: "Makes all properties immutable" },
          { key: "Record<K, V>", val: "Constructs object type with keys K and values V" },
          { key: "Pick<T, K> / Omit<T, K>", val: "Selects or removes specific keys" }
        ]
      }
    ],
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        topics: [
          {
            title: "Why TypeScript?",
            explanation: "TypeScript adds static typing to JavaScript, catching bugs during development before code ever hits production.",
            syntax: "npm install -D typescript",
            code: `// Interfaces and Type Aliases
interface User {
  readonly id: string;
  name: string;
  email: string;
  age?: number; // optional
}

type Role = "admin" | "editor" | "viewer"; // Union type

function authorize(user: User, role: Role): boolean {
  console.log(\`Checking auth for \${user.name} as \${role}\`);
  return role === "admin";
}

const dev: User = { id: "u-101", name: "Alex", email: "alex@codeatlas.dev" };
authorize(dev, "admin");`,
            output: "Checking auth for Alex as admin",
            notes: "Use `unknown` over `any` when working with unverified inputs such as external JSON payloads.",
            tips: "Enable `strict: true` in your `tsconfig.json` for maximum type guarantees."
          }
        ]
      },
      {
        id: "generics",
        title: "Generics & Utility Types",
        topics: [
          {
            title: "Reusable Generic Functions and Constraints",
            explanation: "Generics allow you to write reusable, type-safe components that work across multiple data structures.",
            syntax: "function identity<T>(arg: T): T { return arg; }",
            code: `// Generic API Response Wrapper
interface ApiResponse<TData> {
  data: TData;
  status: number;
  timestamp: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
}

function createSuccessResponse<T>(payload: T): ApiResponse<T> {
  return {
    data: payload,
    status: 200,
    timestamp: Date.now()
  };
}

const productRes = createSuccessResponse<Product>({
  id: 42,
  title: "Mechanical Keyboard",
  price: 129.99
});

console.log(productRes.data.title, \`\$\${productRes.data.price}\`);`,
            output: "Mechanical Keyboard $129.99",
            notes: "You can constrain generic parameters with `extends`: `<T extends { id: string }>`.",
            tips: "Use `keyof T` to extract the union of keys of a type."
          }
        ]
      }
    ]
  },

  // 4. SQL
  {
    id: "sql",
    name: "SQL",
    badge: "ANSI/PostgreSQL",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    color: "#336791",
    category: "Databases",
    categoryId: "databases",
    difficulty: "Beginner",
    popularity: 97,
    addedDate: "2026-01-11",
    description: "Structured Query Language for managing and querying relational database management systems like PostgreSQL, MySQL, and SQLite.",
    tags: ["sql", "database", "postgres", "mysql", "queries", "joins", "indexes"],
    quickReference: [
      {
        title: "SQL Clause Order of Execution",
        items: [
          { key: "1. FROM / JOIN", val: "Determine target tables and relations" },
          { key: "2. WHERE", val: "Filter rows before grouping" },
          { key: "3. GROUP BY", val: "Group records into aggregate sets" },
          { key: "4. HAVING", val: "Filter grouped aggregates" },
          { key: "5. SELECT", val: "Compute expressions and columns" },
          { key: "6. ORDER BY / LIMIT", val: "Sort and slice final result" }
        ]
      },
      {
        title: "Join Types",
        items: [
          { key: "INNER JOIN", val: "Only matching rows in both tables" },
          { key: "LEFT JOIN", val: "All left rows + matched right rows (NULL if none)" },
          { key: "RIGHT JOIN", val: "All right rows + matched left rows" },
          { key: "FULL OUTER JOIN", val: "All rows from both tables" }
        ]
      }
    ],
    sections: [
      {
        id: "ddl-dml",
        title: "Table Creation & Manipulation (DDL/DML)",
        topics: [
          {
            title: "CREATE TABLE, Primary Keys & Foreign Keys",
            explanation: "Define schema structures with constraints to guarantee data integrity.",
            syntax: "CREATE TABLE table_name ( column_name data_type constraints );",
            code: `CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    amount DECIMAL(10, 2) NOT NULL CHECK (amount >= 0),
    status VARCHAR(20) DEFAULT 'pending'
);

-- Inserting Records
INSERT INTO users (email, full_name)
VALUES ('ada@codeatlas.dev', 'Ada Lovelace');

INSERT INTO orders (user_id, amount, status)
VALUES (1, 149.50, 'completed');`,
            output: "INSERT 0 1\nINSERT 0 1",
            notes: "`ON DELETE CASCADE` deletes related child records when parent row is removed.",
            tips: "Always create indexes on foreign key columns for faster join lookups."
          }
        ]
      },
      {
        id: "joins-aggregation",
        title: "Complex Queries, Joins & Aggregations",
        topics: [
          {
            title: "LEFT JOIN with GROUP BY and HAVING",
            explanation: "Aggregate data across multiple related tables while summarizing metrics.",
            syntax: "SELECT ... FROM a JOIN b ON a.id = b.a_id GROUP BY ... HAVING ...",
            code: `SELECT 
    u.id AS user_id,
    u.full_name,
    COUNT(o.order_id) AS total_orders,
    COALESCE(SUM(o.amount), 0.00) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at >= '2026-01-01'
GROUP BY u.id, u.full_name
HAVING COUNT(o.order_id) > 0
ORDER BY total_spent DESC
LIMIT 10;`,
            output: "user_id | full_name    | total_orders | total_spent\n--------+--------------+--------------+------------\n1       | Ada Lovelace | 1            | 149.50",
            notes: "Use `COALESCE(val, default)` to handle `NULL` sums from left joins.",
            tips: "Use Common Table Expressions (`WITH cte AS (...)`) for clean, readable multi-step queries."
          }
        ]
      }
    ]
  },

  // 5. DOCKER
  {
    id: "docker",
    name: "Docker",
    badge: "v27+",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 2.714h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm0-2.714h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185h-2.119a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.955 2.714h2.12a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.083.185.185.185zm0-2.714h2.12a.187.187 0 00.185-.186V6.29a.185.185 0 00-.185-.185h-2.12a.186.186 0 00-.185.185v1.887c0 .102.083.186.185.186zm18.368 5.093c-.4-.25-1.25-.37-2.16-.37-.35 0-.7.02-1.02.06-.52-.89-1.42-1.39-2.58-1.39-.75 0-1.44.22-1.99.63l-.36-.36-1.55 1.55.33.33c-.2.34-.32.74-.32 1.18 0 1.25.95 2.27 2.18 2.37l.08.01c.21 0 .42-.02.62-.07.41.6 1.04.99 1.78.99 1.18 0 2.15-.96 2.18-2.14.71-.16 1.43-.53 1.95-1.12.33-.37.54-.83.6-1.32-.44.02-.75.05-1.03.05-.28 0-.54-.04-.79-.11z"/></svg>`,
    color: "#2496ed",
    category: "DevOps",
    categoryId: "devops",
    difficulty: "Intermediate",
    popularity: 95,
    addedDate: "2026-01-12",
    description: "Industry-standard platform for building, packaging, shipping, and running distributed software applications inside lightweight containers.",
    tags: ["docker", "containers", "devops", "dockerfile", "compose", "images", "cloud"],
    quickReference: [
      {
        title: "Lifecycle Commands",
        items: [
          { key: "docker run -d -p 80:80 nginx", val: "Run detached container mapped to port 80" },
          { key: "docker ps -a", val: "List all running and stopped containers" },
          { key: "docker stop <id>", val: "Gracefully terminate container" },
          { key: "docker rm -f <id>", val: "Force remove container" }
        ]
      },
      {
        title: "Images & Cleanup",
        items: [
          { key: "docker build -t app:latest .", val: "Build image from Dockerfile" },
          { key: "docker images", val: "List local images" },
          { key: "docker system prune -a --volumes", val: "Remove all unused containers, images, caches" }
        ]
      }
    ],
    sections: [
      {
        id: "dockerfile",
        title: "Production Multi-Stage Dockerfile",
        topics: [
          {
            title: "Multi-Stage Build Pattern",
            explanation: "Keep production images minimal and secure by separating build dependencies from the final lightweight runtime image.",
            syntax: "FROM ... AS builder\n...\nFROM ... AS runner",
            code: `# Build Stage
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production Runner Stage
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist

# Run as non-root user for security
USER node
EXPOSE 3000
CMD ["node", "dist/main.js"]`,
            output: "Step 1/12 : FROM node:22-alpine AS builder\n... Successfully built and tagged app:production (Total size: 48MB)",
            notes: "Multi-stage builds can reduce image sizes from 1GB+ down to under 50MB.",
            tips: "Order commands from least frequently changed (package.json) to most frequently changed (source code) to maximize Docker layer caching."
          }
        ]
      },
      {
        id: "docker-compose",
        title: "Docker Compose Configuration",
        topics: [
          {
            title: "Multi-Service Orchestration",
            explanation: "Define and run multi-container applications (e.g., API + PostgreSQL + Redis) using a single declarative YAML file.",
            syntax: "docker compose up -d",
            code: `services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgres://app:secret@db:5432/app_db
    depends_on:
      db:
        condition: service_healthy

  db:
    image: postgres:17-alpine
    restart: unless-stopped
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: app_db
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app -d app_db"]
      interval: 5s
      retries: 5

volumes:
  pgdata:`,
            output: "[+] Running 2/2\n ✔ Container db   Healthy\n ✔ Container api  Started",
            notes: "Named volumes persist data even when containers are deleted.",
            tips: "Use `docker compose down -v` if you wish to wipe the volumes and reset database state."
          }
        ]
      }
    ]
  },

  // 6. GIT
  {
    id: "git",
    name: "Git & GitHub",
    badge: "v2.45+",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.61-.406V8.814c-.22-.086-.425-.223-.61-.406-.54-.539-.672-1.334-.408-1.99L7.546 3.633.454 10.725c-.604.604-.604 1.582 0 2.188l10.48 10.477c.604.604 1.582.604 2.186 0l10.426-10.271c.605-.603.605-1.582 0-2.189z"/></svg>`,
    color: "#f05032",
    category: "Version Control",
    categoryId: "version-control",
    difficulty: "Beginner",
    popularity: 99,
    addedDate: "2026-01-05",
    description: "The ubiquitous distributed version control system for tracking changes, branch management, code collaboration, and history auditing.",
    tags: ["git", "github", "vcs", "branching", "rebase", "merge", "commit"],
    quickReference: [
      {
        title: "Daily Commands",
        items: [
          { key: "git status -s", val: "Short status view" },
          { key: "git add -p", val: "Interactive patch staging" },
          { key: "git commit -m 'feat: msg'", val: "Conventional commit" },
          { key: "git switch -c <branch>", val: "Create & switch to new branch" },
          { key: "git log --oneline --graph", val: "Visual terminal tree log" }
        ]
      },
      {
        title: "Undoing Mistakes",
        items: [
          { key: "git restore .", val: "Discard unstaged working directory changes" },
          { key: "git restore --staged <file>", val: "Unstage file without losing edits" },
          { key: "git commit --amend --no-edit", val: "Add staged files to previous commit" },
          { key: "git reset --soft HEAD~1", val: "Undo commit, keep changes staged" }
        ]
      }
    ],
    sections: [
      {
        id: "daily-workflow",
        title: "Branching, Stashing & Merging",
        topics: [
          {
            title: "Feature Branch Workflow & Interactive Rebase",
            explanation: "Keep history clean and resolve conflicts effortlessly before opening a Pull Request.",
            syntax: "git rebase -i HEAD~3",
            code: `# Create and work on a feature
git switch -c feature/oauth-auth

# Stage & commit changes
git add src/auth/
git commit -m "feat(auth): implement GitHub OAuth provider"

# Pull latest main using rebase instead of merge commit
git switch main
git pull --rebase origin main

# Rebase feature onto main
git switch feature/oauth-auth
git rebase main

# Stash uncommitted work temporarily
git stash push -m "WIP token refresh"
git stash pop`,
            output: "Successfully rebased and updated refs/heads/feature/oauth-auth.",
            notes: "Never rebase commits that have already been pushed to a shared public branch.",
            tips: "Set `git config --global pull.rebase true` to automatically prevent unwanted merge commits when pulling."
          }
        ]
      }
    ]
  },

  // 7. LINUX
  {
    id: "linux",
    name: "Linux & Bash",
    badge: "POSIX",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.002 0c-4.484 0-8.12 3.636-8.12 8.12 0 1.258.291 2.451.808 3.518C3.064 12.651 2 14.71 2 17.062c0 3.826 3.109 6.938 6.938 6.938 1.488 0 2.871-.472 4.004-1.272 1.134.8 2.516 1.272 4.004 1.272 3.829 0 6.938-3.112 6.938-6.938 0-2.352-1.064-4.411-2.69-5.424.517-1.067.808-2.26.808-3.518C20.122 3.636 16.486 0 12.002 0zm0 2.12c3.313 0 6 2.687 6 6 0 1.378-.466 2.648-1.25 3.674a6.892 6.892 0 00-4.75-1.894 6.892 6.892 0 00-4.75 1.894C6.468 10.768 6.002 9.498 6.002 8.12c0-3.313 2.687-6 6-6z"/></svg>`,
    color: "#fcc624",
    category: "Operating Systems",
    categoryId: "operating-systems",
    difficulty: "Beginner",
    popularity: 94,
    addedDate: "2026-01-09",
    description: "Command-line mastery, shell scripting, file systems, permissions, process handling, and server administration fundamentals.",
    tags: ["linux", "bash", "cli", "shell", "terminal", "sysadmin", "ubuntu"],
    quickReference: [
      {
        title: "Navigation & Files",
        items: [
          { key: "ls -la", val: "List files with detailed permissions and hidden files" },
          { key: "find . -name '*.log' -size +10M", val: "Find logs larger than 10MB" },
          { key: "tar -czvf archive.tar.gz /path", val: "Create compressed tarball" },
          { key: "grep -rni 'pattern' .", val: "Recursive case-insensitive line number search" }
        ]
      },
      {
        title: "Process & System Stats",
        items: [
          { key: "htop / top", val: "Interactive process & CPU monitor" },
          { key: "df -h", val: "Disk filesystem usage human readable" },
          { key: "free -m", val: "Memory (RAM) usage in megabytes" },
          { key: "kill -9 <PID>", val: "Force kill process" }
        ]
      }
    ],
    sections: [
      {
        id: "permissions-processes",
        title: "File Permissions & Chmod",
        topics: [
          {
            title: "Understanding Octal and Symbolic Permissions",
            explanation: "Linux files have Read (4), Write (2), and Execute (1) permissions across User, Group, and Others.",
            syntax: "chmod [u/g/o/a][+/-/=][rwx] filename",
            code: `# Make script executable for owner
chmod +x deploy.sh

# Common permission codes:
# 755: rwxr-xr-x (standard for executables & directories)
# 644: rw-r--r-- (standard for readable files)
# 600: rw------- (strictly private keys like id_rsa)
chmod 600 ~/.ssh/id_rsa

# Change owner and group recursively
chown -R www-data:www-data /var/www/html`,
            output: "-rwx--x--x 1 deploy deploy 1024 Jan 15 10:00 deploy.sh",
            notes: "Never use `chmod 777` in production; it grants full write and execute access to every system user.",
            tips: "Use `lsof -i :8080` to discover which process is listening on port 8080."
          }
        ]
      }
    ]
  },

  // 8. RUST
  {
    id: "rust",
    name: "Rust",
    badge: "1.80+",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.834 11.236l-1.393-.418a9.42 9.42 0 00-.73-1.761l.93-1.127a.6.6 0 00-.07-.847l-1.428-1.198a.6.6 0 00-.846.071l-.932 1.13a9.412 9.412 0 00-1.761-.73l.418-1.393a.6.6 0 00-.428-.74l-1.796-.54a.6.6 0 00-.74.428l-.418 1.393a9.48 9.48 0 00-1.908 0l-.418-1.393a.6.6 0 00-.74-.428l-1.796.54a.6.6 0 00-.428.74l.418 1.393c-.618.196-1.21.442-1.761.73l-.932-1.13a.6.6 0 00-.846-.071L5.438 7.083a.6.6 0 00-.07.847l.93 1.127a9.42 9.42 0 00-.73 1.761l-1.393.418a.6.6 0 00-.428.74l.54 1.796a.6.6 0 00.74.428l1.393-.418a9.48 9.48 0 000 1.908l-1.393.418a.6.6 0 00-.428.74l.54 1.796a.6.6 0 00.74.428l1.393-.418c.196.618.442 1.21.73 1.761l-.93 1.127a.6.6 0 00.07.847l1.428 1.198a.6.6 0 00.846-.071l.932-1.13c.551.288 1.143.534 1.761.73l-.418 1.393a.6.6 0 00.428.74l1.796.54a.6.6 0 00.74-.428l.418-1.393a9.48 9.48 0 001.908 0l.418 1.393a.6.6 0 00.74.428l1.796-.54a.6.6 0 00.428-.74l-.418-1.393a9.412 9.412 0 001.761-.73l.932 1.13a.6.6 0 00.846.071l1.428-1.198a.6.6 0 00.07-.847l-.93-1.127c.288-.551.534-1.143.73-1.761l1.393.418a.6.6 0 00.74-.428l.54-1.796a.6.6 0 00-.428-.74l-1.393-.418a9.48 9.48 0 000-1.908l1.393-.418a.6.6 0 00.428-.74l-.54-1.796a.6.6 0 00-.74-.428zM12 17.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11z"/></svg>`,
    color: "#dea584",
    category: "Programming Languages",
    categoryId: "programming-languages",
    difficulty: "Advanced",
    popularity: 93,
    addedDate: "2026-01-16",
    description: "Empowering everyone to build reliable, memory-safe, and ultra-efficient systems software without a garbage collector.",
    tags: ["rust", "systems", "memory-safety", "concurrency", "cargo", "wasm"],
    quickReference: [
      {
        title: "Ownership Rules",
        items: [
          { key: "Rule 1", val: "Each value in Rust has an owner." },
          { key: "Rule 2", val: "There can only be one owner at a time." },
          { key: "Rule 3", val: "When the owner goes out of scope, value is dropped." },
          { key: "Borrowing", val: "Many immutable borrows (&T) OR one mutable borrow (&mut T)" }
        ]
      }
    ],
    sections: [
      {
        id: "ownership-borrowing",
        title: "Ownership, Borrowing & Match",
        topics: [
          {
            title: "Memory Safety without Garbage Collection",
            explanation: "Rust enforces memory safety at compile time using ownership, references, and pattern matching.",
            syntax: "fn calculate(s: &String) -> usize",
            code: `fn main() {
    let mut greeting = String::from("Hello");
    greeting.push_str(", CodeAtlas!");

    let length = calculate_length(&greeting);
    println!("'{}' has length {}", greeting, length);

    // Pattern matching with Option
    let config_val: Option<&str> = Some("production");
    match config_val {
        Some(mode) => println!("Running in {} mode", mode),
        None => println!("Defaulting to local"),
    }
}

fn calculate_length(s: &String) -> usize {
    s.len() // borrowed reference, ownership remains with caller
}`,
            output: "'Hello, CodeAtlas!' has length 18\nRunning in production mode",
            notes: "Rust eliminates dangling pointers, buffer overflows, and data races at compile time.",
            tips: "Use `cargo clippy` to get compiler recommendations for idiomatic Rust code."
          }
        ]
      }
    ]
  },

  // 9. REACT
  {
    id: "react",
    name: "React.js",
    badge: "v19+",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.11c1.04 0 1.89.85 1.89 1.89s-.85 1.89-1.89 1.89-1.89-.85-1.89-1.89.85-1.89 1.89-1.89zm11.96 1.89c0-.67-.2-1.33-.6-1.92-.85-1.27-2.42-2.19-4.38-2.61.42-.99.64-1.99.64-2.92 0-2.31-1.37-3.92-3.48-3.92-1.04 0-2.11.41-3.13 1.22-1.02-.81-2.09-1.22-3.13-1.22-2.11 0-3.48 1.61-3.48 3.92 0 .93.22 1.93.64 2.92-1.96.42-3.53 1.34-4.38 2.61-.4.59-.6 1.25-.6 1.92s.2 1.33.6 1.92c.85 1.27 2.42 2.19 4.38 2.61-.42.99-.64 1.99-.64 2.92 0 2.31 1.37 3.92 3.48 3.92 1.04 0 2.11-.41 3.13-1.22 1.02.81 2.09 1.22 3.13 1.22 2.11 0 3.48-1.61 3.48-3.92 0-.93-.22-1.93-.64-2.92 1.96-.42 3.53-1.34 4.38-2.61.4-.59.6-1.25.6-1.92z"/></svg>`,
    color: "#61dafb",
    category: "Web Development",
    categoryId: "web-development",
    difficulty: "Intermediate",
    popularity: 96,
    addedDate: "2026-01-18",
    description: "The declarative, component-based library for building user interfaces with hooks, server components, and state management.",
    tags: ["react", "jsx", "hooks", "frontend", "components", "nextjs", "web"],
    quickReference: [
      {
        title: "Essential Hooks",
        items: [
          { key: "useState(init)", val: "Declare state variable & updater function" },
          { key: "useEffect(fn, deps)", val: "Run side effects after render (sync with outside world)" },
          { key: "useMemo(fn, deps)", val: "Cache expensive calculation result" },
          { key: "useCallback(fn, deps)", val: "Cache function definition between renders" },
          { key: "useRef(initialVal)", val: "Reference value that does not trigger re-render" }
        ]
      }
    ],
    sections: [
      {
        id: "components-hooks",
        title: "Hooks & Component State",
        topics: [
          {
            title: "Custom Hook with Clean State Management",
            explanation: "Extract reusable component logic into custom hooks starting with the `use` prefix.",
            syntax: "const [state, setState] = useState(initial);",
            code: `import { useState, useEffect } from "react";

// Custom Hook to manage local storage sync
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export function Counter() {
  const [count, setCount] = useLocalStorage("codeatlas_counter", 0);
  return (
    <button onClick={() => setCount((c) => c + 1)}>
      Clicked {count} times
    </button>
  );
}`,
            output: "<button>Clicked 0 times</button>",
            notes: "Never call hooks inside loops, conditions, or nested functions.",
            tips: "Use functional updater: `setCount(prev => prev + 1)` when new state depends on previous state."
          }
        ]
      }
    ]
  },

  // 10. CSS FLEXBOX & GRID
  {
    id: "css-layout",
    name: "CSS Flexbox & Grid",
    badge: "CSS3",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    color: "#264de4",
    category: "UI/UX",
    categoryId: "ui-ux",
    difficulty: "Beginner",
    popularity: 95,
    addedDate: "2026-01-20",
    description: "Master modern responsive page layouts, 1D alignment with Flexbox, and complex 2D magazine-style positioning with CSS Grid.",
    tags: ["css", "flexbox", "grid", "responsive", "frontend", "ui", "styling"],
    quickReference: [
      {
        title: "Flexbox Centering One-Liner",
        items: [
          { key: "display: flex;", val: "Turns element into flex container" },
          { key: "justify-content: center;", val: "Centers along main axis" },
          { key: "align-items: center;", val: "Centers along cross axis" },
          { key: "gap: 1rem;", val: "Clean spacing between child items" }
        ]
      },
      {
        title: "Auto-Responsive Grid",
        items: [
          { key: "grid-template-columns", val: "repeat(auto-fit, minmax(280px, 1fr))" }
        ]
      }
    ],
    sections: [
      {
        id: "grid-flex-mastery",
        title: "Modern Layout Patterns",
        topics: [
          {
            title: "Responsive Card Grid without Media Queries",
            explanation: "Use `repeat(auto-fit, minmax(min, 1fr))` to create fluid cards that automatically wrap on mobile screens.",
            syntax: "display: grid;\ngrid-template-columns: repeat(auto-fit, minmax(250px, 1fr));",
            code: `/* Auto-wrapping responsive card grid */
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
}

/* Glassmorphism card styling */
.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -10px rgba(59, 130, 246, 0.3);
}`,
            output: "/* Renders perfectly across 320px mobile screens to 4K displays */",
            notes: "Flexbox is ideal for 1-dimensional components (navbars, button groups); Grid is optimal for 2-dimensional page structures.",
            tips: "Use CSS variables for theme colors and spacing scales to ensure consistency."
          }
        ]
      }
    ]
  },

  // 11. GO (GOLANG)
  {
    id: "golang",
    name: "Go (Golang)",
    badge: "1.23+",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.811 10.231c.337 0 .641.134.862.355.222.222.356.526.356.863s-.134.64-.356.862a1.22 1.22 0 01-.862.356c-.337 0-.641-.134-.863-.356A1.22 1.22 0 010 11.449c0-.337.134-.641.356-.863a1.22 1.22 0 01.863-.355h.592zm3.107-2.18c.49 0 .935.198 1.258.521.324.323.522.768.522 1.258s-.198.935-.522 1.258a1.776 1.776 0 01-1.258.522c-.49 0-.935-.198-1.258-.522A1.776 1.776 0 013.14 9.83c0-.49.198-.935.522-1.258a1.776 1.776 0 011.258-.522h-.002zm15.827 3.513c0-2.316-1.572-3.83-3.874-3.83-2.368 0-4.045 1.724-4.045 4.148 0 2.476 1.745 4.165 4.25 4.165 1.758 0 2.973-.78 3.553-1.897l-1.637-.923c-.394.673-1.077 1.053-1.882 1.053-1.196 0-2.083-.797-2.152-2.023h5.753c.017-.233.034-.486.034-.693zm-5.77-1.127c.137-.991.956-1.688 1.93-1.688.94 0 1.742.663 1.896 1.688h-3.826z"/></svg>`,
    color: "#00add8",
    category: "Cloud Computing",
    categoryId: "cloud-computing",
    difficulty: "Intermediate",
    popularity: 92,
    addedDate: "2026-01-22",
    description: "Fast, simple, compiled concurrent language built by Google, powering cloud backends, Kubernetes, Terraform, and modern microservices.",
    tags: ["go", "golang", "concurrency", "goroutines", "cloud", "backend"],
    quickReference: [
      {
        title: "Go CLI Tools",
        items: [
          { key: "go run main.go", val: "Compile and execute immediately" },
          { key: "go build -o app", val: "Compile statically linked binary" },
          { key: "go test ./...", val: "Run all tests recursively" },
          { key: "go mod tidy", val: "Clean up unused dependencies in go.mod" }
        ]
      }
    ],
    sections: [
      {
        id: "concurrency",
        title: "Goroutines, Channels & Error Handling",
        topics: [
          {
            title: "Explicit Error Return and Goroutines",
            explanation: "Go eschews exceptions in favor of returning explicit `(result, error)` tuples.",
            syntax: "go func() { ... }()",
            code: `package main

import (
	"fmt"
	"sync"
	"time"
)

func worker(id int, ch chan<- string, wg *sync.WaitGroup) {
	defer wg.Done()
	time.Sleep(50 * time.Millisecond)
	ch <- fmt.Sprintf("Worker %d finished", id)
}

func main() {
	var wg sync.WaitGroup
	ch := make(chan string, 3)

	for i := 1; i <= 3; i++ {
		wg.Add(1)
		go worker(i, ch, &wg)
	}

	wg.Wait()
	close(ch)

	for msg := range ch {
		fmt.Println(msg)
	}
}`,
            output: "Worker 1 finished\nWorker 2 finished\nWorker 3 finished",
            notes: "Goroutines are ultra-lightweight threads managed by the Go runtime, requiring only a few kilobytes of stack memory.",
            tips: "Always check `if err != nil` immediately after function calls."
          }
        ]
      }
    ]
  },

  // 12. REST APIS & HTTP
  {
    id: "rest-apis",
    name: "REST APIs & HTTP",
    badge: "HTTP/2 & HTTP/3",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>`,
    color: "#10b981",
    category: "APIs",
    categoryId: "apis",
    difficulty: "Beginner",
    popularity: 97,
    addedDate: "2026-01-24",
    description: "Architectural principles for clean REST endpoints, HTTP methods, status code semantics, headers, and token authentication.",
    tags: ["api", "rest", "http", "json", "endpoints", "status-codes", "jwt"],
    quickReference: [
      {
        title: "HTTP Status Code Classes",
        items: [
          { key: "2xx Success", val: "200 OK, 201 Created, 204 No Content" },
          { key: "3xx Redirection", val: "301 Moved Permanently, 304 Not Modified" },
          { key: "4xx Client Error", val: "400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests" },
          { key: "5xx Server Error", val: "500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable" }
        ]
      },
      {
        title: "Idempotent vs Non-Idempotent",
        items: [
          { key: "GET / HEAD", val: "Safe & Idempotent (read only)" },
          { key: "PUT", val: "Idempotent (replaces entire resource)" },
          { key: "DELETE", val: "Idempotent (repeated deletes yield same state)" },
          { key: "POST", val: "Non-idempotent (creates new record on each call)" }
        ]
      }
    ],
    sections: [
      {
        id: "rest-design",
        title: "Endpoint Conventions & Best Practices",
        topics: [
          {
            title: "Standard RESTful URL Structure",
            explanation: "Use nouns instead of verbs in paths, and use HTTP verbs to indicate the action.",
            syntax: "METHOD /api/v1/resources/:id",
            code: `/* RESTful Routing Best Practices */

// 1. Fetch paginated list
GET /api/v1/articles?page=1&limit=20&status=published

// 2. Fetch single resource
GET /api/v1/articles/42

// 3. Create new article (Returns 201 Created)
POST /api/v1/articles
Body: { "title": "Understanding REST", "category_id": 5 }

// 4. Update specific fields (Returns 200 OK)
PATCH /api/v1/articles/42
Body: { "title": "Updated Title" }

// 5. Delete resource (Returns 204 No Content)
DELETE /api/v1/articles/42`,
            output: "Status: 201 Created\nLocation: /api/v1/articles/42\n{\n  \"id\": 42,\n  \"title\": \"Understanding REST\",\n  \"created_at\": \"2026-01-24T10:00:00Z\"\n}",
            notes: "401 means unauthenticated (who are you?), while 403 means unauthorized (you lack permission).",
            tips: "Always version your APIs in the URI (e.g. `/v1/`) to avoid breaking existing clients."
          }
        ]
      }
    ]
  },

  // 13. CYBERSECURITY
  {
    id: "cybersecurity",
    name: "Web Security & OWASP",
    badge: "OWASP Top 10",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    color: "#ef4444",
    category: "Cybersecurity",
    categoryId: "cybersecurity",
    difficulty: "Intermediate",
    popularity: 91,
    addedDate: "2026-01-25",
    description: "Practical guide to defending web apps against SQL injection, XSS, CSRF, and misconfigured HTTP security headers.",
    tags: ["security", "owasp", "xss", "csrf", "sqli", "auth", "headers", "jwt"],
    quickReference: [
      {
        title: "Essential Security Headers",
        items: [
          { key: "Content-Security-Policy", val: "Restricts script and asset origins" },
          { key: "Strict-Transport-Security", val: "Forces HTTPS connections (HSTS)" },
          { key: "X-Content-Type-Options", val: "nosniff (prevents MIME confusion)" },
          { key: "X-Frame-Options", val: "DENY or SAMEORIGIN (prevents clickjacking)" }
        ]
      }
    ],
    sections: [
      {
        id: "vulnerabilities",
        title: "Preventing Common Attacks",
        topics: [
          {
            title: "SQL Injection & XSS Defense",
            explanation: "Never concatenate raw user input into SQL queries or unescaped HTML strings.",
            syntax: "Parameterized Query: db.query('SELECT * FROM users WHERE id = $1', [id])",
            code: `// VULNERABLE TO SQL INJECTION (DO NOT DO THIS!):
// const query = "SELECT * FROM users WHERE email = '" + req.body.email + "'";

// SECURE: Parameterized Query
const query = "SELECT id, email, password_hash FROM users WHERE email = $1";
const result = await db.query(query, [req.body.email]);

// SECURE Password Hashing with Argon2 or bcrypt
import bcrypt from "bcrypt";
const saltRounds = 12;
const hashedPassword = await bcrypt.hash(rawPassword, saltRounds);

// Checking password
const isValid = await bcrypt.compare(candidatePassword, hashedPassword);`,
            output: "Password matched: true",
            notes: "Store sensitive session tokens in `HttpOnly; Secure; SameSite=Strict` cookies, never in localStorage where XSS can read them.",
            tips: "Use automated dependency vulnerability scanners (`npm audit`, `snyk`, `cargo audit`)."
          }
        ]
      }
    ]
  },

  // 14. DATA STRUCTURES & ALGORITHMS
  {
    id: "data-structures-algorithms",
    name: "Data Structures & Big-O",
    badge: "Computer Science",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    color: "#a855f7",
    category: "Algorithms",
    categoryId: "algorithms",
    difficulty: "Intermediate",
    popularity: 98,
    addedDate: "2026-01-26",
    description: "Time & space complexity cheat sheet, arrays, linked lists, trees, graphs, sorting algorithms, and coding interview patterns.",
    tags: ["algorithms", "dsa", "big-o", "sorting", "binary-search", "graphs", "interview"],
    quickReference: [
      {
        title: "Big-O Time Complexity Hierarchy",
        items: [
          { key: "O(1) - Constant", val: "Hash table lookup, array index access" },
          { key: "O(log n) - Logarithmic", val: "Binary search in sorted array" },
          { key: "O(n) - Linear", val: "Single loop scan through array" },
          { key: "O(n log n) - Linearithmic", val: "Merge Sort, Quick Sort (average)" },
          { key: "O(n²) - Quadratic", val: "Nested loops, Bubble Sort" },
          { key: "O(2ⁿ) - Exponential", val: "Recursive Fibonacci without memoization" }
        ]
      }
    ],
    sections: [
      {
        id: "binary-search",
        title: "Binary Search & Two-Pointer Pattern",
        topics: [
          {
            title: "Binary Search Algorithm (O(log n))",
            explanation: "Find the position of a target value within a sorted array by halving the search range each step.",
            syntax: "while (left <= right) { mid = left + Math.floor((right - left) / 2); }",
            code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Prevent integer overflow in lower level languages
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      return mid; // Found index
    }
    if (arr[mid] < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }

  return -1; // Not found
}

const sortedNumbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log("Index of 23:", binarySearch(sortedNumbers, 23));
console.log("Index of 99:", binarySearch(sortedNumbers, 99));`,
            output: "Index of 23: 5\nIndex of 99: -1",
            notes: "Binary search requires the input array to be sorted beforehand.",
            tips: "Always use `left + (right - left) / 2` instead of `(left + right) / 2` to prevent potential integer overflow."
          }
        ]
      }
    ]
  }
];

const RESOURCES_DATA = [
  {
    title: "Official Documentation",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    badge: "Official",
    description: "Direct references, language specifications, API standard libraries, and release notes straight from the creators.",
    links: [
      { name: "MDN Web Docs", url: "https://developer.mozilla.org", tag: "Web" },
      { name: "Python 3 Docs", url: "https://docs.python.org/3/", tag: "Python" },
      { name: "Docker Docs", url: "https://docs.docker.com", tag: "Containers" },
      { name: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/", tag: "SQL" }
    ]
  },
  {
    title: "Interactive Practice",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
    badge: "Interactive",
    description: "Solve hands-on coding exercises, build real-world portfolio challenges, and prepare for interviews.",
    links: [
      { name: "LeetCode", url: "https://leetcode.com", tag: "DSA" },
      { name: "Exercism.org", url: "https://exercism.org", tag: "Mentored" },
      { name: "Frontend Mentor", url: "https://www.frontendmentor.io", tag: "UI/UX" },
      { name: "Codewars", url: "https://www.codewars.com", tag: "Katas" }
    ]
  },
  {
    title: "Community & Support",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    badge: "Community",
    description: "Ask questions, share breakthroughs, and learn alongside millions of global developers.",
    links: [
      { name: "Stack Overflow", url: "https://stackoverflow.com", tag: "Q&A" },
      { name: "Dev.to Community", url: "https://dev.to", tag: "Articles" },
      { name: "Reddit r/programming", url: "https://reddit.com/r/programming", tag: "News" },
      { name: "GitHub Discussions", url: "https://github.com", tag: "Open Source" }
    ]
  },
  {
    title: "Developer Roadmaps & Repos",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`,
    badge: "Curated",
    description: "Step-by-step career path guides, free textbooks, and awesome lists for software engineers.",
    links: [
      { name: "Developer Roadmaps", url: "https://roadmap.sh", tag: "Careers" },
      { name: "Free Programming Books", url: "https://ebookfoundation.github.io/free-programming-books/", tag: "Books" },
      { name: "Awesome Cheatsheets", url: "https://github.com/sindresorhus/awesome", tag: "Lists" }
    ]
  }
];

const FAQS_DATA = [
  {
    question: "What is a cheat sheet?",
    answer: "A cheat sheet is a concise, highly organized reference tool that summarizes syntax, commands, shortcuts, best practices, and code patterns for a programming language or tool. It helps you recall key concepts instantly without wading through hundreds of pages of documentation."
  },
  {
    question: "How do I use this website?",
    answer: "You can search for any topic or keyword using the live search bar (`Ctrl+K`), browse cards by categories, filter by difficulty (Beginner, Intermediate, Advanced), or sort alphabetically and by popularity. Click 'Open Cheat Sheet' on any card to view detailed code snippets, explanations, outputs, and quick reference tables."
  },
  {
    question: "Which language should I learn first?",
    answer: "If you're completely new to programming, **Python** is widely recommended for its clean, English-like syntax and vast applications in scripting, automation, web development, and AI. If you want to build websites and web apps immediately, start with **HTML/CSS** and **JavaScript**."
  },
  {
    question: "Can I contribute new cheat sheets?",
    answer: "Yes! CodeAtlas is built on a data-driven architecture. Adding a new language or tool only requires adding a simple JavaScript object to `js/data.js` without altering any HTML or application logic. Check our GitHub repository or contact us to submit a PR."
  },
  {
    question: "Is this beginner friendly?",
    answer: "Absolutely. Every cheat sheet includes labeled difficulty levels, line-by-line code explanations, realistic terminal outputs, pro tips, common beginner mistakes, and interview questions to accelerate your learning journey."
  },
  {
    question: "Can I use CodeAtlas offline or bookmark favorites?",
    answer: "Yes! CodeAtlas saves your favorite cheat sheets and recently viewed items directly in your browser's Local Storage. The site is 100% static with no backend dependencies, meaning it can run offline or be saved locally."
  }
];

// Attach to window object for global browser access
if (typeof window !== "undefined") {
  window.CATEGORIES_DATA = CATEGORIES_DATA;
  window.CHEAT_SHEETS_DATA = CHEAT_SHEETS_DATA;
  window.RESOURCES_DATA = RESOURCES_DATA;
  window.FAQS_DATA = FAQS_DATA;
}

