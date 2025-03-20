document.addEventListener('DOMContentLoaded', function(){
    const terminalBody = document.getElementById('terminal-body');
  
    // Create the initial prompt on page load
    createPrompt();
  
    // Use event delegation to handle Enter key on any .command element
    terminalBody.addEventListener('keydown', function(e) {
      if(e.target.classList.contains('command') && e.key === 'Enter'){
        e.preventDefault();
        const currentLine = e.target.parentElement;
        
        // Remove blinking cursor from current prompt
        const cursor = currentLine.querySelector('.blinking-cursor');
        if(cursor) cursor.remove();
        
        const input = e.target.textContent.trim();
        if(input !== ""){
          // Echo the command above the current prompt line
          addLine(`<span class="prompt"><span class="guest">guest@portfolio</span><span class="dollar">:~$</span> ${input}</span>`);
          
          // Process the command and output the response if any
          const output = processCommand(input);
          if(output){
            console.log(output)
            addLine(`<span class="output">${output}</span>`);
          }
        }
        
        currentLine.querySelector('.command').innerHTML = "";

        // // Create a new prompt line and clear the previous input
        // createPrompt();
      }
    });
  
    // Function to create a new prompt line
    function createPrompt(){
      const promptLine = document.createElement('div');
      promptLine.className = 'line';
      promptLine.innerHTML = `<span class="prompt"><span class="guest">guest@portfolio</span><span class="dollar">:~$ </span></span>
                              <span class="command" contenteditable="true"></span>`;
                              //<span class="blinking-cursor"></span>`;
      terminalBody.appendChild(promptLine);
      
      // Scroll to bottom and focus the new command span
      terminalBody.scrollTop = terminalBody.scrollHeight;
      const commandSpan = promptLine.querySelector('.command');
      commandSpan.focus();
    }
  
    // Function to insert a new line above the current prompt
    function addLine(content){
      const line = document.createElement('div');
      line.className = 'line';
      line.innerHTML = content;
      // Insert before the last child (current prompt)
      terminalBody.insertBefore(line, terminalBody.lastElementChild);
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  
    // Process commands and return a response string
    function processCommand(cmd){
      switch(cmd.toLowerCase()){
        case 'help':
          return 'Available commands: help, about, clear';
        case 'about':
          return 'This is your interactive terminal portfolio. Customize it as needed!';
        case 'clear':
          clearTerminal();
          return '';
        default:
          return 'Command not recognized. Type "help" for a list of commands.';
      }
    }
  
    // Clear all lines and create a new prompt
    function clearTerminal(){
      while(terminalBody.firstChild){
        terminalBody.removeChild(terminalBody.firstChild);
      }
      createPrompt();
    }
  });
  