/**
 * CodeAtlas - Universal Programming Cheat Sheets
 * Application Logic (js/app.js)
 * 
 * Features:
 * - Data-driven architecture (renders entirely from js/data.js)
 * - Deep linking with hash routing (#sheet/<id>)
 * - Live instant search with debouncing & keyboard shortcuts (Ctrl+K, /)
 * - Multi-criteria filtering (Category, Difficulty, Search term)
 * - Flexible sorting (Popular, A-Z, Z-A, Recent, Topics count)
 * - LocalStorage persistence for Dark/Light Theme, Favorites, and Recently Viewed
 * - Pure Vanilla JS syntax highlighter for code snippets
 * - Copy-to-clipboard with tooltip & toast feedback
 * - Table of contents generation with scrollspy
 * - FAQ animated accordion
 * - Accessible contact form validation with toasts
 */

// ==========================================================================
// 1. GLOBAL STATE & STORAGE KEYS
// ==========================================================================

const STORAGE_KEYS = {
  THEME: "codeatlas_theme",
  FAVORITES: "codeatlas_favorites",
  RECENT: "codeatlas_recent"
};

const state = {
  searchQuery: "",
  selectedCategory: "all",
  selectedDifficulty: "all",
  sortOption: "popular",
  activeViewTab: "all", // 'all' | 'favorites' | 'recent'
  activeSheetId: null,
  favorites: JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITES) || "[]"),
  recentlyViewed: JSON.parse(localStorage.getItem(STORAGE_KEYS.RECENT) || "[]")
};

// ==========================================================================
// 2. SYNTAX HIGHLIGHTING ENGINE (Pure Vanilla Regex Highlighter)
// ==========================================================================

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Highlights programming language code strings safely into HTML spans
 */
function highlightCode(rawCode) {
  if (!rawCode) return "";

  // Split into lines to safely parse comments and strings
  const lines = rawCode.split("\n");
  const highlightedLines = lines.map(line => {
    // 1. Comments: #, //, --
    const commentMatch = line.match(/^(\s*)(#|\/\/|--)(.*)$/);
    if (commentMatch) {
      return `${commentMatch[1]}<span class="tok-comment">${escapeHtml(commentMatch[2] + commentMatch[3])}</span>`;
    }

    let processed = escapeHtml(line);

    // Decorators like @dataclass or @property
    processed = processed.replace(/(@\w+)/g, '<span class="tok-decorator">$1</span>');

    // Strings: "..." or '...' or `...`
    processed = processed.replace(/(&quot;.*?&quot;|&#039;.*?&#039;|`.*?`)/g, '<span class="tok-string">$1</span>');

    // Keywords
    const keywordsRegex = /\b(def|class|function|const|let|var|if|else|elif|for|while|return|import|from|as|export|default|async|await|try|except|catch|finally|throw|raise|in|of|match|case|struct|impl|fn|pub|use|let mut|SELECT|FROM|WHERE|INSERT|INTO|UPDATE|DELETE|JOIN|LEFT|RIGHT|INNER|GROUP|BY|ORDER|HAVING|CREATE|TABLE|ALTER|DROP|PRIMARY|KEY|REFERENCES|CASCADE|TRUE|FALSE|True|False|None|null|undefined|package|go|chan|defer|switch)\b/g;
    processed = processed.replace(keywordsRegex, '<span class="tok-keyword">$1</span>');

    // Types & Builtins
    const typesRegex = /\b(int|str|float|bool|list|dict|set|tuple|Option|Result|String|Vec|usize|i32|u32|i64|u64|boolean|number|void|any|unknown|never|print|println|console|len|sum|range|enumerate|min|max)\b/g;
    processed = processed.replace(typesRegex, '<span class="tok-type">$1</span>');

    // Function calls: name(...)
    processed = processed.replace(/\b([a-zA-Z_]\w*)\s*(?=\()/g, '<span class="tok-func">$1</span>');

    // Numbers
    processed = processed.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="tok-number">$1</span>');

    return processed;
  });

  return highlightedLines.join("\n");
}

// ==========================================================================
// 3. INITIALIZATION & DOM READY
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCategories();
  initResources();
  initFAQs();
  initTerminalPreviewTabs();
  initEventListeners();
  updateTabBadges();
  renderCheatSheets();
  handleUrlRouting();
  initScrollSpy();
});

// ==========================================================================
// 4. THEME MANAGEMENT (Dark / Light Mode)
// ==========================================================================

function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeButtonLabels(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
  updateThemeButtonLabels(newTheme);
  showToast(`Switched to ${newTheme} mode`, "info");
}

function updateThemeButtonLabels(theme) {
  const mobileLabel = document.querySelector(".theme-status-text");
  if (mobileLabel) {
    mobileLabel.textContent = theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
  }
}

// ==========================================================================
// 5. RENDERING CATEGORIES & RESOURCES & FAQS
// ==========================================================================

function initCategories() {
  const container = document.getElementById("categories-container");
  const selectFilter = document.getElementById("filter-category");
  if (!container) return;

  container.innerHTML = "";

  CATEGORIES_DATA.forEach(cat => {
    // Count how many cheat sheets belong to this category
    const count = CHEAT_SHEETS_DATA.filter(sheet => sheet.categoryId === cat.id || sheet.category === cat.name).length;

    // Card Element
    const card = document.createElement("div");
    card.className = "category-card";
    card.setAttribute("role", "listitem");
    card.style.setProperty("--category-gradient", cat.gradient);

    card.innerHTML = `
      <div class="category-header">
        <div class="category-icon-wrapper">
          ${cat.icon}
        </div>
        <span class="category-count-badge">${count} ${count === 1 ? 'Sheet' : 'Sheets'}</span>
      </div>
      <h3 class="category-title">${cat.name}</h3>
      <p class="category-desc">${cat.description}</p>
      <div class="category-arrow">
        <span>Browse sheets</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    `;

    card.addEventListener("click", () => {
      setCategoryFilter(cat.id);
      const target = document.getElementById("cheat-sheets");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });

    container.appendChild(card);

    // Also populate category dropdown filter
    if (selectFilter) {
      const option = document.createElement("option");
      option.value = cat.id;
      option.textContent = `${cat.name} (${count})`;
      selectFilter.appendChild(option);
    }
  });
}

function initResources() {
  const container = document.getElementById("resources-container");
  if (!container) return;

  container.innerHTML = RESOURCES_DATA.map(res => `
    <div class="resource-card">
      <div class="resource-card-header">
        <div class="resource-icon">${res.icon}</div>
        <span class="resource-badge">${res.badge}</span>
      </div>
      <h3 class="resource-title">${res.title}</h3>
      <p class="resource-desc">${res.description}</p>
      <div class="resource-links-list">
        ${res.links.map(l => `
          <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="resource-link-item">
            <span>${l.name}</span>
            <span class="resource-link-tag">${l.tag}</span>
          </a>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function initFAQs() {
  const container = document.getElementById("faq-accordion");
  if (!container) return;

  container.innerHTML = FAQS_DATA.map((faq, index) => `
    <div class="faq-item" id="faq-item-${index}">
      <button class="faq-question-btn" aria-expanded="false" aria-controls="faq-ans-${index}">
        <span>${faq.question}</span>
        <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer-pane" id="faq-ans-${index}">
        <div class="faq-answer-content">
          ${faq.answer}
        </div>
      </div>
    </div>
  `).join("");

  // Attach accordion click toggles
  const buttons = container.querySelectorAll(".faq-question-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const pane = item.querySelector(".faq-answer-pane");
      const isOpen = item.classList.contains("active");

      // Optional: Close others
      container.querySelectorAll(".faq-item.active").forEach(other => {
        if (other !== item) {
          other.classList.remove("active");
          other.querySelector(".faq-question-btn").setAttribute("aria-expanded", "false");
          other.querySelector(".faq-answer-pane").style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove("active");
        btn.setAttribute("aria-expanded", "false");
        pane.style.maxHeight = null;
      } else {
        item.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
        pane.style.maxHeight = pane.scrollHeight + 30 + "px";
      }
    });
  });
}

// ==========================================================================
// 6. CHEAT SHEETS CATALOG FILTERING, SORTING & RENDERING
// ==========================================================================

function getFilteredSheets() {
  let list = [...CHEAT_SHEETS_DATA];

  // 1. Filter by Active View Tab (All / Favorites / Recent)
  if (state.activeViewTab === "favorites") {
    list = list.filter(s => state.favorites.includes(s.id));
  } else if (state.activeViewTab === "recent") {
    // Preserve recently viewed order
    list = state.recentlyViewed
      .map(id => list.find(s => s.id === id))
      .filter(Boolean);
  }

  // 2. Filter by Search Query
  if (state.searchQuery.trim() !== "") {
    const q = state.searchQuery.toLowerCase().trim();
    list = list.filter(s => {
      const matchName = s.name.toLowerCase().includes(q);
      const matchCat = s.category.toLowerCase().includes(q);
      const matchDesc = s.description.toLowerCase().includes(q);
      const matchTags = s.tags.some(t => t.toLowerCase().includes(q));
      const matchSectionTitles = s.sections?.some(sec => sec.title.toLowerCase().includes(q));
      return matchName || matchCat || matchDesc || matchTags || matchSectionTitles;
    });
  }

  // 3. Filter by Category
  if (state.selectedCategory !== "all") {
    list = list.filter(s => s.categoryId === state.selectedCategory || s.category === state.selectedCategory);
  }

  // 4. Filter by Difficulty
  if (state.selectedDifficulty !== "all") {
    list = list.filter(s => s.difficulty.toLowerCase() === state.selectedDifficulty.toLowerCase());
  }

  // 5. Sorting
  if (state.activeViewTab !== "recent") {
    list.sort((a, b) => {
      if (state.sortOption === "az") {
        return a.name.localeCompare(b.name);
      } else if (state.sortOption === "za") {
        return b.name.localeCompare(a.name);
      } else if (state.sortOption === "recent") {
        return new Date(b.addedDate) - new Date(a.addedDate);
      } else if (state.sortOption === "topics") {
        const countA = a.sections ? a.sections.reduce((acc, s) => acc + (s.topics?.length || 0), 0) : 0;
        const countB = b.sections ? b.sections.reduce((acc, s) => acc + (s.topics?.length || 0), 0) : 0;
        return countB - countA;
      } else {
        // "popular" default
        return (b.popularity || 0) - (a.popularity || 0);
      }
    });
  }

  return list;
}

function renderCheatSheets() {
  const container = document.getElementById("sheets-container");
  const emptyState = document.getElementById("empty-state");
  const countLabel = document.getElementById("results-count-text");
  if (!container) return;

  const filtered = getFilteredSheets();
  updateActiveFilterChips();

  // Update counter text
  if (countLabel) {
    countLabel.textContent = `Showing ${filtered.length} of ${CHEAT_SHEETS_DATA.length} cheat sheets`;
  }

  if (filtered.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  container.innerHTML = filtered.map(sheet => {
    const isFav = state.favorites.includes(sheet.id);
    const topicsCount = sheet.sections ? sheet.sections.reduce((acc, s) => acc + (s.topics?.length || 0), 0) : 0;
    const diffClass = `diff-${sheet.difficulty.toLowerCase()}`;

    return `
      <article class="sheet-card" data-id="${sheet.id}" style="--sheet-accent-color: ${sheet.color}; --sheet-accent-subtle: ${sheet.color}22">
        <div class="sheet-card-top">
          <div class="sheet-logo-name">
            <div class="sheet-icon-box">
              ${sheet.icon}
            </div>
            <div>
              <h3 class="sheet-card-title">
                ${sheet.name}
                ${sheet.badge ? `<span class="sheet-badge">${sheet.badge}</span>` : ""}
              </h3>
            </div>
          </div>
          <button class="sheet-fav-btn ${isFav ? 'favorited' : ''}" data-fav-id="${sheet.id}" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}" aria-label="Toggle favorite">
            <svg viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </button>
        </div>

        <p class="sheet-card-desc">${sheet.description}</p>

        <div class="sheet-meta-badges">
          <span class="meta-badge meta-badge-cat">${sheet.category}</span>
          <span class="meta-badge ${diffClass}">${sheet.difficulty}</span>
          <span class="meta-badge meta-badge-topics">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
            ${topicsCount} Topics
          </span>
        </div>

        <div class="sheet-card-footer">
          <span class="text-muted" style="font-size: 0.78125rem;">Popularity ${sheet.popularity}%</span>
          <button class="open-sheet-btn" data-open-id="${sheet.id}">
            <span>Open Cheat Sheet</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </article>
    `;
  }).join("");

  // Attach favorite toggle listeners
  container.querySelectorAll(".sheet-fav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-fav-id");
      toggleFavorite(id);
    });
  });

  // Attach open sheet buttons
  container.querySelectorAll(".open-sheet-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-open-id");
      openCheatSheetModal(id);
    });
  });

  // Entire card can also be clicked
  container.querySelectorAll(".sheet-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (!e.target.closest(".sheet-fav-btn")) {
        const id = card.getAttribute("data-id");
        openCheatSheetModal(id);
      }
    });
  });
}

function updateTabBadges() {
  const allBadge = document.getElementById("badge-count-all");
  const favBadge = document.getElementById("badge-count-fav");
  const recBadge = document.getElementById("badge-count-recent");

  if (allBadge) allBadge.textContent = CHEAT_SHEETS_DATA.length;
  if (favBadge) favBadge.textContent = state.favorites.length;
  if (recBadge) recBadge.textContent = state.recentlyViewed.length;
}

function updateActiveFilterChips() {
  const container = document.getElementById("active-filter-chips");
  if (!container) return;

  const chips = [];

  if (state.searchQuery.trim() !== "") {
    chips.push({
      label: `Search: "${state.searchQuery}"`,
      clear: () => {
        state.searchQuery = "";
        const s1 = document.getElementById("hero-live-search");
        const s2 = document.getElementById("catalog-filter-search");
        if (s1) s1.value = "";
        if (s2) s2.value = "";
        document.getElementById("search-clear-btn").style.display = "none";
      }
    });
  }

  if (state.selectedCategory !== "all") {
    const catObj = CATEGORIES_DATA.find(c => c.id === state.selectedCategory);
    chips.push({
      label: `Category: ${catObj ? catObj.name : state.selectedCategory}`,
      clear: () => {
        setCategoryFilter("all");
      }
    });
  }

  if (state.selectedDifficulty !== "all") {
    chips.push({
      label: `Difficulty: ${state.selectedDifficulty}`,
      clear: () => {
        state.selectedDifficulty = "all";
        const el = document.getElementById("filter-difficulty");
        if (el) el.value = "all";
      }
    });
  }

  if (state.activeViewTab !== "all") {
    chips.push({
      label: `View: ${state.activeViewTab === 'favorites' ? '★ Favorites' : '🕒 Recently Viewed'}`,
      clear: () => {
        setViewTab("all");
      }
    });
  }

  container.innerHTML = chips.map((chip, idx) => `
    <span class="filter-chip">
      <span>${chip.label}</span>
      <span class="chip-remove" data-chip-idx="${idx}">&times;</span>
    </span>
  `).join("");

  container.querySelectorAll(".chip-remove").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-chip-idx"), 10);
      if (chips[idx]) {
        chips[idx].clear();
        renderCheatSheets();
      }
    });
  });
}

function setCategoryFilter(categoryId) {
  state.selectedCategory = categoryId;
  const select = document.getElementById("filter-category");
  if (select) select.value = categoryId;
  renderCheatSheets();
}

function setViewTab(tabKey) {
  state.activeViewTab = tabKey;
  document.querySelectorAll(".view-tab").forEach(tab => {
    const isSelected = tab.getAttribute("data-view") === tabKey;
    tab.classList.toggle("active", isSelected);
    tab.setAttribute("aria-selected", isSelected ? "true" : "false");
  });
  renderCheatSheets();
}

function resetAllFilters() {
  state.searchQuery = "";
  state.selectedCategory = "all";
  state.selectedDifficulty = "all";
  state.sortOption = "popular";
  state.activeViewTab = "all";

  const s1 = document.getElementById("hero-live-search");
  const s2 = document.getElementById("catalog-filter-search");
  const cat = document.getElementById("filter-category");
  const diff = document.getElementById("filter-difficulty");
  const sort = document.getElementById("sort-select");
  const clearBtn = document.getElementById("search-clear-btn");

  if (s1) s1.value = "";
  if (s2) s2.value = "";
  if (cat) cat.value = "all";
  if (diff) diff.value = "all";
  if (sort) sort.value = "popular";
  if (clearBtn) clearBtn.style.display = "none";

  setViewTab("all");
  showToast("All filters have been reset", "info");
}

// ==========================================================================
// 7. FAVORITES & RECENTLY VIEWED (LocalStorage)
// ==========================================================================

function toggleFavorite(id) {
  const index = state.favorites.indexOf(id);
  let isFav = false;

  if (index > -1) {
    state.favorites.splice(index, 1);
    isFav = false;
    showToast("Removed from favorites", "info");
  } else {
    state.favorites.push(id);
    isFav = true;
    showToast("Added to favorites!", "success");
  }

  localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(state.favorites));
  updateTabBadges();
  renderCheatSheets();

  // Also update modal favorite button if open
  const modalFav = document.getElementById("modal-fav-btn");
  const endFav = document.getElementById("end-fav-btn");
  if (modalFav) {
    modalFav.classList.toggle("favorited", isFav);
  }
  if (endFav) {
    endFav.textContent = isFav ? "★ In Favorites" : "★ Add to Favorites";
  }
}

function addRecentlyViewed(id) {
  state.recentlyViewed = state.recentlyViewed.filter(x => x !== id);
  state.recentlyViewed.unshift(id); // Place at start

  // Keep top 20
  if (state.recentlyViewed.length > 20) {
    state.recentlyViewed.pop();
  }

  localStorage.setItem(STORAGE_KEYS.RECENT, JSON.stringify(state.recentlyViewed));
  updateTabBadges();
}

// ==========================================================================
// 8. CHEAT SHEET READER MODAL (Deep-Linked via #sheet/<id>)
// ==========================================================================

function openCheatSheetModal(id) {
  const sheet = CHEAT_SHEETS_DATA.find(s => s.id === id);
  if (!sheet) return;

  state.activeSheetId = id;
  addRecentlyViewed(id);

  // Set URL hash without scrolling
  if (window.location.hash !== `#sheet/${id}`) {
    history.pushState(null, "", `#sheet/${id}`);
  }

  const modal = document.getElementById("sheet-modal");
  const iconContainer = document.getElementById("modal-sheet-icon");
  const titleContainer = document.getElementById("modal-sheet-title");
  const badgesContainer = document.getElementById("modal-sheet-badges");
  const descContainer = document.getElementById("modal-sheet-desc");
  const tagsContainer = document.getElementById("modal-sheet-tags");
  const quickRefGrid = document.getElementById("quick-ref-cards-container");
  const sectionsWrapper = document.getElementById("sheet-sections-container");
  const tocNav = document.getElementById("sheet-toc-nav");
  const favBtn = document.getElementById("modal-fav-btn");
  const endFavBtn = document.getElementById("end-fav-btn");

  const isFav = state.favorites.includes(id);

  // 1. Header info
  iconContainer.innerHTML = sheet.icon;
  iconContainer.style.color = sheet.color;
  titleContainer.textContent = sheet.name;
  descContainer.textContent = sheet.description;

  badgesContainer.innerHTML = `
    <span class="meta-badge meta-badge-cat">${sheet.category}</span>
    <span class="meta-badge diff-${sheet.difficulty.toLowerCase()}">${sheet.difficulty}</span>
    ${sheet.badge ? `<span class="sheet-badge">${sheet.badge}</span>` : ""}
  `;

  if (favBtn) favBtn.classList.toggle("favorited", isFav);
  if (endFavBtn) endFavBtn.textContent = isFav ? "★ In Favorites" : "★ Add to Favorites";

  tagsContainer.innerHTML = sheet.tags.map(t => `<span class="sheet-tag-item">#${t}</span>`).join("");

  // 2. Quick Reference Cards
  if (sheet.quickReference && sheet.quickReference.length > 0) {
    quickRefGrid.innerHTML = sheet.quickReference.map(ref => `
      <div class="ref-card">
        <h4 class="ref-card-title">${ref.title}</h4>
        <div class="ref-items-list">
          ${ref.items.map(item => `
            <div class="ref-item-row">
              <span class="ref-key">${escapeHtml(item.key)}</span>
              <span class="ref-val">${escapeHtml(item.val)}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");
    document.getElementById("quick-ref-section").style.display = "block";
  } else {
    document.getElementById("quick-ref-section").style.display = "none";
  }

  // 3. Sections & Topics Rendering
  let tocItemsHtml = `
    <a href="#quick-ref-section" class="toc-link" data-target="quick-ref-section">
      ⚡ Quick Reference
    </a>
  `;

  let sectionsHtml = "";

  if (sheet.sections && sheet.sections.length > 0) {
    sheet.sections.forEach(sec => {
      const secSlug = `sec-${sec.id}`;
      tocItemsHtml += `
        <a href="#${secSlug}" class="toc-link" data-target="${secSlug}">
          ${sec.title}
        </a>
      `;

      sectionsHtml += `
        <section class="sheet-section-block" id="${secSlug}">
          <h3 class="sheet-section-title">${sec.title}</h3>
          <div class="section-topics-list">
            ${(sec.topics || []).map(topic => renderTopicCard(topic, sheet.name)).join("")}
          </div>
        </section>
      `;
    });
  }

  tocNav.innerHTML = tocItemsHtml;
  sectionsWrapper.innerHTML = sectionsHtml;

  // TOC Jump Smooth Links
  tocNav.querySelectorAll(".toc-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-target");
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Attach Copy Code Buttons in Modal
  sectionsWrapper.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const codeBlock = btn.closest(".code-block-wrapper").querySelector("code");
      if (codeBlock) {
        copyToClipboard(codeBlock.textContent, btn);
      }
    });
  });

  // Show Modal & Prevent Body Scroll
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function renderTopicCard(topic, languageName) {
  const highlightedCode = highlightCode(topic.code);

  return `
    <div class="topic-card">
      <h4 class="topic-title">${topic.title}</h4>
      <p class="topic-explanation">${topic.explanation}</p>

      ${topic.syntax ? `
        <div class="topic-syntax-box">${escapeHtml(topic.syntax)}</div>
      ` : ""}

      ${topic.code ? `
        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span class="code-lang-label">${languageName}</span>
            <button class="copy-btn" title="Copy code snippet">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copy</span>
            </button>
          </div>
          <pre class="code-pre"><code>${highlightedCode}</code></pre>
        </div>
      ` : ""}

      ${topic.output ? `
        <div class="output-box-wrapper">
          <div class="output-label">Terminal Output</div>
          <pre class="output-pre">${escapeHtml(topic.output)}</pre>
        </div>
      ` : ""}

      ${(topic.notes || topic.tips) ? `
        <div class="callout-row">
          ${topic.notes ? `
            <div class="callout-card callout-note">
              <span class="callout-icon">📌</span>
              <div><strong>Note:</strong> ${topic.notes}</div>
            </div>
          ` : ""}
          ${topic.tips ? `
            <div class="callout-card callout-tip">
              <span class="callout-icon">💡</span>
              <div><strong>Pro Tip:</strong> ${topic.tips}</div>
            </div>
          ` : ""}
        </div>
      ` : ""}
    </div>
  `;
}

function closeSheetModal() {
  const modal = document.getElementById("sheet-modal");
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  state.activeSheetId = null;

  // Clear hash without jump
  if (window.location.hash.startsWith("#sheet/")) {
    history.pushState(null, "", window.location.pathname + window.location.search);
  }
}

// ==========================================================================
// 9. COPY TO CLIPBOARD & TOAST NOTIFICATIONS
// ==========================================================================

function copyToClipboard(text, triggerButton) {
  if (!navigator.clipboard) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  } else {
    navigator.clipboard.writeText(text);
  }

  if (triggerButton) {
    const originalText = triggerButton.innerHTML;
    triggerButton.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>Copied!</span>
    `;
    triggerButton.style.color = "var(--color-accent-emerald)";

    setTimeout(() => {
      triggerButton.innerHTML = originalText;
      triggerButton.style.color = "";
    }, 2000);
  }

  showToast("Code snippet copied to clipboard!", "success");
}

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  const iconSvg = type === "success" 
    ? `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    : `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

  toast.innerHTML = `
    ${iconSvg}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Auto remove after 3.2 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3200);
}

// ==========================================================================
// 10. URL HASH ROUTING & DEEP LINKING (#sheet/<id>)
// ==========================================================================

function handleUrlRouting() {
  const hash = window.location.hash;
  if (hash && hash.startsWith("#sheet/")) {
    const sheetId = hash.replace("#sheet/", "");
    openCheatSheetModal(sheetId);
  } else if (!hash || !hash.startsWith("#sheet/")) {
    if (state.activeSheetId) {
      closeSheetModal();
    }
  }
}

window.addEventListener("hashchange", handleUrlRouting);

// ==========================================================================
// 11. INTERACTIVE HERO TERMINAL CODE TABS
// ==========================================================================

const TERMINAL_PREVIEWS = {
  python: {
    filename: "python_cheat_sheet.py",
    code: `# CodeAtlas: Python High-Performance Cheat Sheet
from dataclasses import dataclass

@dataclass
class CheatSheet:
    tech: str
    category: str
    ready: bool = True

    def launch(self) -> str:
        return f"🚀 Ready to master {self.tech}!"

atlas = CheatSheet(tech="Python", category="Languages")
print(atlas.launch())
# Output: 🚀 Ready to master Python!`
  },
  javascript: {
    filename: "javascript_modern.js",
    code: `// CodeAtlas: Modern JavaScript (ES2026)
const fetchTechnologies = async () => {
  const catalog = ["TypeScript", "Rust", "Docker", "SQL"];
  const formatted = catalog.map(tech => \`⚡ \${tech.toUpperCase()}\`);
  return { success: true, count: formatted.length, data: formatted };
};

const { data } = await fetchTechnologies();
console.log("Loaded stacks:", data.join(" | "));
// Output: Loaded stacks: ⚡ TYPESCRIPT | ⚡ RUST | ⚡ DOCKER | ⚡ SQL`
  },
  docker: {
    filename: "Dockerfile",
    code: `# Multi-stage Production Container
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
USER node
EXPOSE 3000
CMD ["node", "dist/main.js"]`
  },
  sql: {
    filename: "query_analytics.sql",
    code: `-- Top Performing Topics Query
SELECT 
    category,
    COUNT(sheet_id) AS total_sheets,
    ROUND(AVG(popularity), 1) AS avg_popularity
FROM programming_cheat_sheets
WHERE is_active = TRUE
GROUP BY category
HAVING COUNT(sheet_id) > 0
ORDER BY avg_popularity DESC;`
  },
  rust: {
    filename: "main.rs",
    code: `// High-Speed Concurrent Systems
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();
    
    thread::spawn(move || {
        let msg = String::from("Rust memory safety without GC!");
        tx.send(msg).unwrap();
    });

    println!("Received: {}", rx.recv().unwrap());
}`
  }
};

function initTerminalPreviewTabs() {
  const tabs = document.querySelectorAll(".terminal-tab");
  const tabName = document.getElementById("terminal-tab-name");
  const terminalCode = document.getElementById("hero-terminal-code");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const lang = tab.getAttribute("data-lang");
      const preview = TERMINAL_PREVIEWS[lang];

      if (preview && tabName && terminalCode) {
        tabName.textContent = preview.filename;
        const highlighted = highlightCode(preview.code);
        terminalCode.innerHTML = `<pre class="code-editor-preview"><code>${highlighted}</code></pre>`;
      }
    });
  });
}

// ==========================================================================
// 12. EVENT LISTENERS & SEARCH
// ==========================================================================

function initEventListeners() {
  // Theme Toggle buttons
  const themeBtn = document.getElementById("theme-toggle");
  const mobileThemeBtn = document.getElementById("mobile-theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
  if (mobileThemeBtn) mobileThemeBtn.addEventListener("click", toggleTheme);

  // Mobile Hamburger Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.toggle("active");
      mobileMenuBtn.classList.toggle("open", isOpen);
      mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close drawer when clicking a mobile link
    mobileDrawer.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("active");
        mobileMenuBtn.classList.remove("open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Quick Search Pill Trigger
  const quickSearchBtn = document.getElementById("quick-search-btn");
  const heroSearchInput = document.getElementById("hero-live-search");
  const catalogSearchInput = document.getElementById("catalog-filter-search");
  const searchClearBtn = document.getElementById("search-clear-btn");
  const quickResultsBox = document.getElementById("search-quick-results");

  if (quickSearchBtn) {
    quickSearchBtn.addEventListener("click", () => {
      if (heroSearchInput) {
        heroSearchInput.scrollIntoView({ behavior: "smooth" });
        heroSearchInput.focus();
      }
    });
  }

  // Keyboard shortcut: Ctrl+K or '/' focuses search
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey && e.key === "k") || (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA")) {
      e.preventDefault();
      if (heroSearchInput) {
        heroSearchInput.focus();
        heroSearchInput.select();
      }
    }
    // Escape closes modal
    if (e.key === "Escape" && state.activeSheetId) {
      closeSheetModal();
    }
  });

  // Hero Live Search handler
  if (heroSearchInput) {
    heroSearchInput.addEventListener("input", (e) => {
      const val = e.target.value;
      state.searchQuery = val;
      if (catalogSearchInput) catalogSearchInput.value = val;
      if (searchClearBtn) searchClearBtn.style.display = val ? "flex" : "none";

      renderCheatSheets();
      updateSearchDropdown(val, quickResultsBox);
    });

    // Hide dropdown on click outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".hero-search-wrapper") && quickResultsBox) {
        quickResultsBox.classList.remove("active");
      }
    });
  }

  // Catalog Filter Search input handler
  if (catalogSearchInput) {
    catalogSearchInput.addEventListener("input", (e) => {
      const val = e.target.value;
      state.searchQuery = val;
      if (heroSearchInput) heroSearchInput.value = val;
      if (searchClearBtn) searchClearBtn.style.display = val ? "flex" : "none";
      renderCheatSheets();
    });
  }

  // Search Clear button
  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      state.searchQuery = "";
      if (heroSearchInput) heroSearchInput.value = "";
      if (catalogSearchInput) catalogSearchInput.value = "";
      searchClearBtn.style.display = "none";
      if (quickResultsBox) quickResultsBox.classList.remove("active");
      renderCheatSheets();
    });
  }

  // Category filter select
  const catSelect = document.getElementById("filter-category");
  if (catSelect) {
    catSelect.addEventListener("change", (e) => {
      state.selectedCategory = e.target.value;
      renderCheatSheets();
    });
  }

  // Difficulty filter select
  const diffSelect = document.getElementById("filter-difficulty");
  if (diffSelect) {
    diffSelect.addEventListener("change", (e) => {
      state.selectedDifficulty = e.target.value;
      renderCheatSheets();
    });
  }

  // Sort select
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortOption = e.target.value;
      renderCheatSheets();
    });
  }

  // View tabs (All / Favorites / Recent)
  document.querySelectorAll(".view-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const view = tab.getAttribute("data-view");
      setViewTab(view);
    });
  });

  // Reset Filters Buttons
  const resetBtn = document.getElementById("reset-filters-btn");
  const emptyResetBtn = document.getElementById("empty-reset-btn");
  if (resetBtn) resetBtn.addEventListener("click", resetAllFilters);
  if (emptyResetBtn) emptyResetBtn.addEventListener("click", resetAllFilters);

  // Modal Actions (Back, Close, Fav, Share, Print)
  const modalBackBtn = document.getElementById("modal-back-btn");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalFavBtn = document.getElementById("modal-fav-btn");
  const endFavBtn = document.getElementById("end-fav-btn");
  const modalShareBtn = document.getElementById("modal-share-btn");
  const modalPrintBtn = document.getElementById("modal-print-btn");

  if (modalBackBtn) modalBackBtn.addEventListener("click", closeSheetModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeSheetModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeSheetModal);

  if (modalFavBtn) {
    modalFavBtn.addEventListener("click", () => {
      if (state.activeSheetId) toggleFavorite(state.activeSheetId);
    });
  }

  if (endFavBtn) {
    endFavBtn.addEventListener("click", () => {
      if (state.activeSheetId) toggleFavorite(state.activeSheetId);
    });
  }

  if (modalShareBtn) {
    modalShareBtn.addEventListener("click", () => {
      const shareUrl = window.location.href;
      copyToClipboard(shareUrl, modalShareBtn);
      showToast("Shareable link copied to clipboard!", "success");
    });
  }

  if (modalPrintBtn) {
    modalPrintBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // TOC In-Sheet Filter
  const tocSearch = document.getElementById("sheet-toc-search");
  if (tocSearch) {
    tocSearch.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll("#sheet-toc-nav .toc-link").forEach(link => {
        const text = link.textContent.toLowerCase();
        link.style.display = text.includes(q) ? "block" : "none";
      });
    });
  }

  // Contact Form Validation & Submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit);
  }

  // Back to top button
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// ==========================================================================
// 13. SEARCH AUTOCOMPLETE DROPDOWN IN HERO
// ==========================================================================

function updateSearchDropdown(query, container) {
  if (!container) return;

  const q = query.trim().toLowerCase();
  if (q.length === 0) {
    container.classList.remove("active");
    container.innerHTML = "";
    return;
  }

  const matches = CHEAT_SHEETS_DATA.filter(s => {
    return s.name.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.tags.some(t => t.toLowerCase().includes(q));
  }).slice(0, 5);

  if (matches.length === 0) {
    container.classList.remove("active");
    container.innerHTML = "";
    return;
  }

  container.innerHTML = matches.map(s => `
    <div class="search-result-item" data-id="${s.id}">
      <div class="search-result-left">
        <div class="search-result-icon" style="color: ${s.color};">
          ${s.icon}
        </div>
        <div>
          <div class="search-result-title">${s.name}</div>
          <div class="search-result-cat">${s.category} &bull; ${s.difficulty}</div>
        </div>
      </div>
      <span class="btn-ghost btn-sm" style="pointer-events: none;">Open &rarr;</span>
    </div>
  `).join("");

  container.querySelectorAll(".search-result-item").forEach(item => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("data-id");
      container.classList.remove("active");
      openCheatSheetModal(id);
    });
  });

  container.classList.add("active");
}

// ==========================================================================
// 14. CONTACT FORM VALIDATION (Client-Side, No Backend)
// ==========================================================================

function handleContactSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const messageInput = document.getElementById("contact-message");
  const submitBtn = document.getElementById("contact-submit-btn");

  let isValid = true;

  // Validate Name
  const nameGroup = nameInput.closest(".form-group");
  if (!nameInput.value.trim()) {
    nameGroup.classList.add("has-error");
    isValid = false;
  } else {
    nameGroup.classList.remove("has-error");
  }

  // Validate Email
  const emailGroup = emailInput.closest(".form-group");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailGroup.classList.add("has-error");
    isValid = false;
  } else {
    emailGroup.classList.remove("has-error");
  }

  // Validate Message
  const messageGroup = messageInput.closest(".form-group");
  if (messageInput.value.trim().length < 10) {
    messageGroup.classList.add("has-error");
    isValid = false;
  } else {
    messageGroup.classList.remove("has-error");
  }

  if (!isValid) return;

  // Simulate smooth sending state
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <span class="pulse-dot"></span>
    <span>Sending Message...</span>
  `;

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;

    showToast(`Thank you, ${nameInput.value.trim()}! Your suggestion has been received.`, "success");
    e.target.reset();
  }, 900);
}

// ==========================================================================
// 15. SCROLL PROGRESS & ACTIVE NAV LINK SPY
// ==========================================================================

function initScrollSpy() {
  const progressBar = document.getElementById("scroll-progress");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // 1. Scroll Progress Bar
    if (progressBar && docHeight > 0) {
      const progress = (scrollY / docHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }

    // 2. Active Section Spy
    let currentSectionId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentSectionId}`);
      });
    }
  }, { passive: true });
}

// Attach critical functions to window for inline HTML onclick attributes
if (typeof window !== "undefined") {
  window.setCategoryFilter = setCategoryFilter;
  window.closeSheetModal = closeSheetModal;
  window.openCheatSheetModal = openCheatSheetModal;
  window.toggleFavorite = toggleFavorite;
  window.resetAllFilters = resetAllFilters;
}

