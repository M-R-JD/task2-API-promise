function fetchData() {
  const url ="https://autocomplete.clearbit.com/v1/companies/suggest?query=segment";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      displayData(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function displayData(data) {
  const dataContainer = document.getElementById("data-container");
  dataContainer.innerHTML = "";
  const heading = document.createElement("h1");
  heading.textContent = "Fetched Data:";
  dataContainer.appendChild(heading);
  const list = document.createElement("ol");
  data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.name;
    list.appendChild(listItem);
  });
  dataContainer.appendChild(list);
}
window.onload = fetchData;