const tickets = ["お夜食券", "仲直り券"];
const list = document.getElementById("historyList");

tickets.forEach(ticket => {
  const history = JSON.parse(localStorage.getItem(ticket) || "[]");
  const item = document.createElement("div");
  item.innerHTML = `<h3>${ticket}</h3><ul>` +
    history.map(ts => {
      const date = new Date(ts);
      return `<li>${date.toLocaleString()}</li>`;
    }).join("") + "</ul>";
  list.appendChild(item);
});
