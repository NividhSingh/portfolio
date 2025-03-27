document.addEventListener("click", () => {
  const commandInputs = document.querySelectorAll(".command");
  const lastCommand = commandInputs[commandInputs.length - 1];
  if (lastCommand) {
    lastCommand.focus();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const terminalBody = document.getElementById("terminal-body");
  let commandHistory = [];
  let historyIndex = -1;

  // Create the initial prompt on page load
  clearTerminal();

  // Use event delegation to handle keydown events on any .command element
  terminalBody.addEventListener("keydown", function (e) {
    if (e.target.classList.contains("command")) {
      if (e.key === "Enter") {
        e.preventDefault();
        const currentLine = e.target.parentElement;

        // Read and trim the input text
        const input = e.target.textContent.trim();
        if (input !== "") {
          // Push the command into history and reset history index
          commandHistory.push(input);
          historyIndex = commandHistory.length;

          // Echo the command above the prompt
          addLine(
            `<span class="prompt"><span class="guest">guest@portfolio</span><span class="dollar">:~$</span>&nbsp;${input}</span>`
          );

          // Process the command and output the response
          const output = processCommand(input);

          // If output is a promise, wait for it to resolve
          if (output instanceof Promise) {
            output.then((resolvedOutput) => {
              if (resolvedOutput) {
                addLine(`<span class="output">${resolvedOutput}</span>`);
              }
            });
          } else {
            if (output) {
              addLine(`<span class="output">${output}</span>`);
            }
          }
        }

        // Clear the current input
        e.target.innerHTML = "";
      } else if (e.key === "ArrowUp") {
        console.log("Up");
        e.preventDefault();
        // Only if there's history available
        if (commandHistory.length > 0) {
          // Move history index up, but not below 0
          if (historyIndex > 0) {
            historyIndex--;
          }
          e.target.innerHTML = commandHistory[historyIndex];
          setCaretToEnd(e.target);
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        // If going down in history, increase index if not at the last command.
        if (commandHistory.length > 0) {
          if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            e.target.innerHTML = commandHistory[historyIndex];
          } else {
            // Clear if at the bottom of history
            historyIndex = commandHistory.length;
            e.target.innerHTML = "";
          }
          setCaretToEnd(e.target);
        }
      }
    }
  });

  // Function to create a new prompt line at the bottom of the terminal
  function createPrompt() {
    const promptLine = document.createElement("div");
    promptLine.className = "line";
    promptLine.innerHTML = `<span class="prompt"><span class="guest">guest@portfolio</span><span class="dollar">:~$</span>&nbsp;</span>
                            <span class="command" contenteditable="true"></span>`;
    terminalBody.appendChild(promptLine);

    // Scroll to the bottom and focus the new command span
    terminalBody.scrollTop = terminalBody.scrollHeight;
    const commandSpan = promptLine.querySelector(".command");
    commandSpan.focus();
  }

  // Function to insert a new line above the current prompt
  function addLine(content) {
    const line = document.createElement("div");
    line.className = "line";
    line.innerHTML = content;
    // Insert above the last child (current prompt)
    terminalBody.insertBefore(line, terminalBody.lastElementChild);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  // Process commands and return a response string (in processCommand.js)
  // This function is now defined in processCommand.js.

  // Clear all lines and create a new prompt
  function clearTerminal() {
    while (terminalBody.firstChild) {
      terminalBody.removeChild(terminalBody.firstChild);
    }
    // Load the ASCII art and then add it along with the welcome message
    loadAsciiArt("ascii_art/NS.txt", 235).then((ascii) => {
      if (ascii) {
        const artDiv = document.createElement("div");
        artDiv.className = "ascii-art";
        artDiv.innerHTML = `<pre class="ascii-art-small">${ascii}</pre>`;
        terminalBody.appendChild(artDiv);
      }
      const welcome = document.createElement("div");
      welcome.className = "welcome";
      welcome.innerHTML = `Welcome to Nividh Singh's Portfolio. Type <span class="command-highlight">help</span> to get started or type <span class="command-highlight">exit</span> for the web version.`;
      terminalBody.appendChild(welcome);
      createPrompt();
    });
  }

  // Utility function to set the caret at the end of a contentEditable element
  function setCaretToEnd(el) {
    let range = document.createRange();
    let sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
    el.focus();
  }

  // Make sure clearTerminal is accessible to processCommand (attach it to window)
  window.clearTerminal = clearTerminal;
});
