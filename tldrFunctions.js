// tldrFunctions.js
function generateTldrTable(items) {
  let tableHTML = `<table class="help-table">`;
  items.forEach((item) => {
    tableHTML += `
      <tr>
        <td class="help-command">tldr <span class="tldr-highlight">${item.title}</span></td>
        <td class="help-description">
          <a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.link}</a>
        </td>
      </tr>`;
  });
  tableHTML += `</table>`;
  return tableHTML;
}
