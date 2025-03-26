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
      return `${bioData.bio}`;

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
      return generateTldrTable(tldrItems);

    case "tldr projects":
      return generateTldrTable(
        tldrItems.filter((item) => item.type === "project")
      );

    case "tldr internships":
      return generateTldrTable(
        tldrItems.filter((item) => item.type === "internship")
      );

    case "exit":
      // Redirect to the web version
      window.location.href = "web.html";
      return "";

    default:
      if (cmd.toLowerCase().startsWith("tldr ")) {
        return "Specific TLDR command not implemented yet.";
      }
      return 'Command not recognized. Type "help" for a list of commands.';
  }
}
