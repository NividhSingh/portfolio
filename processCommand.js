function processCommand(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      if (window.innerWidth < 768) {
        // Mobile version: each command and description in stacked blocks
        let output = "";
        helpCommands.forEach((item) => {
          output += `
            <div class="help-item mb-4">
              <div class="help-command text-purple-500 font-bold">${item.command}</div>
              <div class="help-description-mobile text-white">${item.description}</div>
            </div>`;
        });
        return output;
      } else {
        // Desktop version: table format
        let tableHTML = `<table class="help-table">`;
        helpCommands.forEach((item) => {
          tableHTML += `
            <tr>
              <td class="help-command text-purple-500 font-bold">${item.command}</td>
              <td class="help-description text-white">${item.description}</td>
            </tr>`;
        });
        tableHTML += `</table>`;
        return tableHTML;
      }

    case "about me":
      // Load ASCII art only if the screen is wide enough.
      return loadAsciiArt("ascii_art/headshot.txt").then((art) => {
        // Wrap the art in a <pre> tag with a specific class for styling.
        const artOutput = art
          ? `<pre class="ascii-art-large">${art}</pre><br>`
          : "";
        return artOutput + bioData.bio;
      });

    case "clear":
      if (typeof window.clearTerminal === "function") {
        window.clearTerminal();
      }
      return "";

    case "open resume":
      window.open(bioData.resumeLink, "_blank", "noopener,noreferrer");
      return `<a href="${bioData.resumeLink}" target="_blank" rel="noopener noreferrer">View Resume</a>`;

    case "email":
      return '<a href="mailto:nividh.singh@gmail.com?subject=Hello%20There&body=I%20wanted%20to%20reach%20out...">Email me (nividh.singh@gmail.com)</a>';

    case "open github":
      const githubLink = "https://github.com/NividhSingh/";
      window.open(githubLink, "_blank", "noopener,noreferrer");
      return `<a href="${githubLink}" target="_blank" rel="noopener noreferrer">View Github</a>`;

    case "open linkedin":
      const linkedinLink = "https://www.linkedin.com/in/nividh-singh/";
      window.open(linkedinLink, "_blank", "noopener,noreferrer");
      return `<a href="${linkedinLink}" target="_blank" rel="noopener noreferrer">View Linkedin</a>`;

    case "tldr":
      if (window.innerWidth < 768) {
        // Mobile version: stacked format
        let output = "";
        tldrItems.forEach((item) => {
          output += `
        <div class="tldr-item mb-4">
          <div class="tldr-command text-purple-500 font-bold">tldr ${item.title}</div>
          <div class="tldr-description text-white">${item.description}</div>
        </div>`;
        });
        return output;
      } else {
        // Desktop version: table format
        let tableHTML = `<table class="help-table">`;
        tldrItems.forEach((item) => {
          tableHTML += `
        <tr>
          <td class="tldr-command text-purple-500 font-bold">tldr ${item.title}</td>
          <td class="tldr-description text-white">${item.description}</td>
        </tr>`;
        });
        tableHTML += `</table>`;
        return tableHTML;
      }

    case "tldr projects":
      return generateTldrTable(
        tldrItems.filter((item) => item.type === "project")
      );

    case "tldr internships":
      return generateTldrTable(
        tldrItems.filter((item) => item.type === "internship")
      );

    case "other":
      return "I didn't literally mean other, I meant try using tab for autocomplete or arrow up for previous commands";

    case "exit":
      // Redirect to the web version
      window.location.href = "web.html";
      return "";

    case "web":
      // Redirect to the web version
      window.location.href = "web.html";
      return "";

    default:
      // Handle specific tldr commands, e.g., "tldr project alpha"
      if (cmd.toLowerCase().startsWith("tldr ")) {
        let query = cmd.slice(5).trim();
        let matchedItem = tldrItems.find(
          (item) => item.title.toLowerCase() === query.toLowerCase()
        );
        if (matchedItem) {
          if (matchedItem.ascii_image) {
            return loadAsciiArt(
              matchedItem.ascii_image,
              matchedItem.ascii_image_length
            ).then((art) => {
              const artOutput = art
                ? `<pre class="ascii-art-${matchedItem.asciiLargeOrSmall}">${art}</pre><br>`
                : "";

              return (
                artOutput +
                `<div class="tldr-specific">
                  <div class="tldr-description text-white">${matchedItem.description}</div>
                  <a href="${matchedItem.link}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline">More info</a>
                </div>`
              );
            });
          } else {
            // No ASCII image — just return the content
            return `<div class="tldr-specific">
              <div class="tldr-description text-white">${matchedItem.description}</div>
              <a href="${matchedItem.link}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline">More info</a>
            </div>`;
          }
        } else {
          return `No matching TLDR item found for "${query}".`;
        }
      }
      return 'Command not recognized. Type "help" for a list of commands.';
  }
}
