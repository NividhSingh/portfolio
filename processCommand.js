// processCommand.js
function processCommand(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      let tableHTML = `<table class="help-table">`;
      helpCommands.forEach((item) => {
        tableHTML += `
              <tr>
                <td class="help-command">${item.command}</td>
                <td class="help-description">${item.description}</td>
              </tr>`;
      });
      tableHTML += `</table>`;
      return tableHTML;

    case "about me":
      return `Hi! My name I'm a sophomore at Olin College of Engineering near Boston. 
  I’ve been building software for 6 years. I love building cool stuff and challenging myself, whether that be making a self-balancing cube or completing an Ironman. In my free time I enjoy watching and playing basketball and F1, riding horses, and gokarting.`;

    case "clear":
      if (typeof window.clearTerminal === "function") {
        window.clearTerminal();
      }
      return "";

    case "open resume":
      const resumeLink = "https://google.com";
      window.open(resumeLink, "_blank", "noopener,noreferrer");
      return `<a href="${resumeLink}" target="_blank" rel="noopener noreferrer">View Resume</a>`;

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
      // Return a table with all TLDR items
      return generateTldrTable(tldrItems);

    case "tldr projects":
      // Filter and return only projects
      return generateTldrTable(
        tldrItems.filter((item) => item.type === "project")
      );

    case "tldr internships":
      // Filter and return only internships
      return generateTldrTable(
        tldrItems.filter((item) => item.type === "internship")
      );

    default:
      // Optionally, if the command starts with "tldr " handle specific TLDR requests later
      if (cmd.toLowerCase().startsWith("tldr ")) {
        return "Specific TLDR command not implemented yet.";
      }
      return 'Command not recognized. Type "help" for a list of commands.';
  }
}
