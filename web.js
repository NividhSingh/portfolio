// Replace these with your actual tldr data from tldrData.js if available.
const tldrItems = [
  {
    title: "Project Alpha",
    description: "A cutting-edge project that revolutionizes AI.",
    link: "https://example.com/project-alpha",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nbcnews.com%2Fsports%2Fnba%2Flebron-james-michael-jordans-30-point-games-rcna186233&psig=AOvVaw04oM6ps2q9pY62qDnM8lTe&ust=1743011599410000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDhq8DmpYwDFQAAAAAdAAAAABAE",
    type: "project",
    date: "2023-04-01",
    favorite: 5,
  },
  {
    title: "Internship Beta",
    description: "An internship where I built amazing web apps.",
    link: "https://example.com/internship-beta",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2025-01/250104-LeBron-James-ch-0953-26ecee.jpg",
    type: "internship",
    date: "2022-08-15",
    favorite: 4,
  },
  {
    title: "Project Gamma",
    description: "An innovative project on IoT devices.",
    link: "https://example.com/project-gamma",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2025-01/250104-LeBron-James-ch-0953-26ecee.jpg",
    type: "project",
    date: "2023-01-20",
    favorite: 3,
  },
  {
    title: "Internship Delta",
    description: "I improved performance in a major system.",
    link: "https://example.com/internship-delta",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/190903111552-01-lamborghini-sian.jpg?q=w_5028,h_2836,x_0,y_0,c_fill",
    type: "internship",
    date: "2021-12-05",
    favorite: 5,
  },
];
let currentFilter = "all"; // "all", "project", "internship"
let currentSort = "recent"; // "recent" or "favorite"

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
              <h3 class="text-xl font-bold text-white mb-2">tldr <span>${item.title}</span></h3>
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
