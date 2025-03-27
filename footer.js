document.addEventListener("DOMContentLoaded", function () {
  // Update socials from bioData (assumes bioData.socials exists)
  if (typeof bioData !== "undefined" && bioData.socials) {
    document.getElementById("github-link").href = bioData.socials.github || "#";
    document.getElementById("linkedin-link").href =
      bioData.socials.linkedin || "#";
    document.getElementById("instagram-link").href =
      bioData.socials.instagram || "#";

    // // And if you create new anchor elements dynamically, for example:
    // const a = document.createElement("a");
    // a.href = item.link;
    // a.target = "_blank";
    // a.rel = "noopener noreferrer";
    // a.textContent = item.title;
    // a.className = "hover:underline";
  }

  // Populate Projects and Internships from tldrItems (assumes tldrItems is defined)
  const projectsList = document.getElementById("footer-projects");
  const internshipsList = document.getElementById("footer-internships");

  if (typeof tldrItems !== "undefined") {
    tldrItems.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = item.title;
      a.className = "hover:underline";
      li.appendChild(a);

      if (item.type === "project") {
        projectsList.appendChild(li);
      } else if (item.type === "internship") {
        internshipsList.appendChild(li);
      }
    });
  }
});
