let currentFilter = "all"; // "all", "project", "internship"
let currentSort = "recent"; // "recent" or "favorite"

document.addEventListener("DOMContentLoaded", function () {
  // ... your other initialization code
  renderNavbarDropdowns();

  // Set the default active filter as "all"
  updateActiveFilter("filter-all");

  // If you haven't already rendered the cards, you might call renderCards() here too.

  const scrollBtn = document.getElementById("scroll-down");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      // Scroll to the Projects & Internships Section using its unique ID.
      const nextSection = document.getElementById("projects-section");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

function renderCards() {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  // Filter items based on currentFilter
  let filteredItems = tldrItems.filter((item) => {
    if (currentFilter === "all") return true;
    return item.type === currentFilter;
  });

  // Sort items based on currentSort
  if (currentSort === "recent") {
    filteredItems.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (currentSort === "favorite") {
    filteredItems.sort((a, b) => b.favorite - a.favorite);
  }

  filteredItems.forEach((item) => {
    const card = document.createElement("a");
    card.href = item.link;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    // Card container: group for hover effects, fixed aspect ratio, rounded corners
    card.className =
      "group block rounded overflow-hidden shadow-lg transition-shadow duration-300";
    card.innerHTML = `
          <div class="relative aspect-[3/2]">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
              <h3 class="text-xl font-bold text-white mb-2 text-center"><span>${item.title}</span></h3>
              <p class="text-white text-sm">${item.description}</p>
            </div>
          </div>
        `;
    container.appendChild(card);
  });
}

function renderSidebarMenus() {
  const internshipMenu = document.getElementById("internship-menu");
  const projectsMenu = document.getElementById("projects-menu");
  if (internshipMenu) internshipMenu.innerHTML = "";
  if (projectsMenu) projectsMenu.innerHTML = "";

  tldrItems
    .filter((item) => item.type === "internship")
    .forEach((item) => {
      const link = document.createElement("a");
      link.href = item.link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "block text-sm px-2 py-1 hover:bg-gray-800 rounded";
      link.textContent = item.title;
      if (internshipMenu) internshipMenu.appendChild(link);
    });

  tldrItems
    .filter((item) => item.type === "project")
    .forEach((item) => {
      const link = document.createElement("a");
      link.href = item.link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "block text-sm px-2 py-1 hover:bg-gray-800 rounded";
      link.textContent = item.title;
      if (projectsMenu) projectsMenu.appendChild(link);
    });
}

function updateActiveFilter(selectedId) {
  const ids = ["filter-all", "filter-projects", "filter-internships"];
  ids.forEach((id) => {
    const btn = document.getElementById(id);
    if (id === selectedId) {
      // Active state: e.g., blue background
      btn.classList.remove("bg-gray-800", "hover:bg-gray-700");
      btn.classList.add("bg-blue-500", "hover:bg-blue-600");
    } else {
      btn.classList.remove("bg-blue-500", "hover:bg-blue-600");
      btn.classList.add("bg-gray-800", "hover:bg-gray-700");
    }
  });
}

function renderNavbarDropdowns() {
  // Get the dropdown container elements by their IDs
  const internshipMenu = document.getElementById("navbar-internships-menu");
  const projectMenu = document.getElementById("navbar-projects-menu");

  if (internshipMenu) {
    internshipMenu.innerHTML = "";
    tldrItems
      .filter((item) => item.type === "internship")
      .forEach((item) => {
        const a = document.createElement("a");
        a.href = item.link;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "block px-4 py-2 hover:bg-gray-700 rounded";
        a.textContent = item.title;
        internshipMenu.appendChild(a);
      });
  }

  if (projectMenu) {
    projectMenu.innerHTML = "";
    tldrItems
      .filter((item) => item.type === "project")
      .forEach((item) => {
        const a = document.createElement("a");
        a.href = item.link;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "block px-4 py-2 hover:bg-gray-700 rounded";
        a.textContent = item.title;
        projectMenu.appendChild(a);
      });
  }
}

document.getElementById("filter-all").addEventListener("click", () => {
  currentFilter = "all";
  renderCards();
  updateActiveFilter("filter-all");
});
document.getElementById("filter-projects").addEventListener("click", () => {
  currentFilter = "project";
  renderCards();
  updateActiveFilter("filter-projects");
});
document.getElementById("filter-internships").addEventListener("click", () => {
  currentFilter = "internship";
  renderCards();
  updateActiveFilter("filter-internships");
});

// Sort select event listener
document.getElementById("sort-select").addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderCards();
});

// Initial render of cards and sidebar menus
renderCards();
renderSidebarMenus();

// Mobile menu toggle functionality
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuClose = document.getElementById("mobile-menu-close");
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
});
mobileMenuClose.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
});

// Toggle mobile submenu for Internships
const mobileInternshipsToggle = document.getElementById(
  "mobile-internships-toggle"
);
const mobileInternshipsMenu = document.getElementById(
  "mobile-internships-menu"
);
mobileInternshipsToggle.addEventListener("click", () => {
  mobileInternshipsMenu.classList.toggle("hidden");
});

// Toggle mobile submenu for Projects
const mobileProjectsToggle = document.getElementById("mobile-projects-toggle");
const mobileProjectsMenu = document.getElementById("mobile-projects-menu");
mobileProjectsToggle.addEventListener("click", () => {
  mobileProjectsMenu.classList.toggle("hidden");
});

// Function to render mobile sidebar menus dynamically from tldrItems
function renderMobileSidebarMenus() {
  const internshipMenu = document.getElementById("mobile-internships-menu");
  const projectsMenu = document.getElementById("mobile-projects-menu");

  if (internshipMenu) {
    internshipMenu.innerHTML = "";
    tldrItems
      .filter((item) => item.type === "internship")
      .forEach((item) => {
        const a = document.createElement("a");
        a.href = item.link;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "block text-sm px-4 py-2 hover:bg-gray-700 rounded";
        a.textContent = item.title;
        internshipMenu.appendChild(a);
      });
  }

  if (projectsMenu) {
    projectsMenu.innerHTML = "";
    tldrItems
      .filter((item) => item.type === "project")
      .forEach((item) => {
        const a = document.createElement("a");
        a.href = item.link;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "block text-sm px-4 py-2 hover:bg-gray-700 rounded";
        a.textContent = item.title;
        projectsMenu.appendChild(a);
      });
  }
}

// Call this function when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Other initialization code...
  renderMobileSidebarMenus();
});
