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

    case "aboutme":
      return `Hi! My name I'm a sophomore at Olin College of Engineering near Boston. 
            I’ve been building software for 6 years. I love building cool stuff and challenging myself, whether that be making a self-balancing cube or completing an Ironman. In my free time I enjoy watching and playing basketball and F1, riding horses, and gokarting.`;

    case "clear":
      // Call the global clearTerminal function—make sure it's defined globally!
      if (typeof window.clearTerminal === "function") {
        window.clearTerminal();
      }
      return "";

    case "open resume":
      const resumeLink = "https://google.com";
      window.open(resumeLink, "_blank", "noopener,noreferrer");
      return `<a href="${resumeLink}" target="_blank" rel="noopener noreferrer">View Resume</a>`;

    case "open github":
      const githubLink = "https://github.com/NividhSingh/";
      window.open(resumeLink, "_blank", "noopener,noreferrer");
      return `<a href="${resumeLink}" target="_blank" rel="noopener noreferrer">View Resume</a>`;

    case "open github":
      const linkedinLink = "https://www.linkedin.com/in/nividh-singh/";
      window.open(resumeLink, "_blank", "noopener,noreferrer");
      return `<a href="${resumeLink}" target="_blank" rel="noopener noreferrer">View Resume</a>`;

    default:
      return 'Command not recognized. Type "help" for a list of commands.';
  }
}
