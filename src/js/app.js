import dataJson from "./data.json";

const sortFields = ["id", "title", "year", "imdb"];
let sortIndex = 0;
let ascending = true;
const body = document.querySelector("body");
const table = document.createElement("table");
body.appendChild(table);

function createRow(el) {
  const tr = document.createElement("tr");
  tr.setAttribute("data-id", el.id);
  tr.setAttribute("data-title", el.title);
  tr.setAttribute("data-year", el.year);
  tr.setAttribute("data-imdb", el.imdb.toFixed(2));

  tr.innerHTML = `
      <td>#${el.id}</td>
      <td>${el.title}</td>
      <td>(${el.year})</td>
      <td>imdb: ${el.imdb.toFixed(2)}</td>
      </tr>
    `;
  return tr;
}

export default function renderTable(data) {
  const table = document.querySelector("table");
  table.innerHTML = "";
  data.forEach((movie) => table.appendChild(createRow(movie)));
}

function sortTable() {
  const table = document.querySelector("table");
  const rows = Array.from(table.querySelectorAll("tr"));

  const field = sortFields[sortIndex];

  rows.sort((a, b) => {
    let aValue = a.getAttribute(`data-${field}`);
    let bValue = b.getAttribute(`data-${field}`);

    if (field === "id" || field === "year" || field === "imdb") {
      aValue = parseFloat(aValue);
      bValue = parseFloat(bValue);
    }

    if (ascending) {
      return aValue > bValue ? 1 : -1;
    } else {
      return bValue > aValue ? 1 : -1;
    }
  });

  rows.forEach((row) => table.appendChild(row));

  ascending != ascending;

  if (!ascending) {
    sortIndex = (sortIndex + 1) % sortFields.length;
  }

  ascending = !ascending;

  console.log(sortIndex);
}

renderTable(dataJson);
setInterval(sortTable, 2000);
