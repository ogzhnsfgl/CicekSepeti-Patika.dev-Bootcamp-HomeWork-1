const cardList = document.querySelector(".card-list");
const search = document
  .querySelector(".search")
  .addEventListener("input", onChange);

/* FETCHING DATA */
let allData = [];
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    listItem(data);
    allData = data;
  });

function onChange(e) {
  let input = e.target.value;
  filteredData = allData.filter(
    (item) => item.body.includes(input) || item.title.includes(input)
  );
  console.log(filteredData);
  cardList.innerHTML = "";
  listItem(filteredData);
}

/* LISTING ITEMS */
const listItem = (data) => {
  data.forEach((item, index) => {
    const cardItem = document.createElement("div");
    cardItem.className = "card";
    cardItem.innerHTML = `     <div class="card-thumbnail">
                <img src="https://picsum.photos/id/${
                  10 + index
                }/250/200" alt="lorem pic" />
              </div>
              <div class="card-content">
                <p class="card-content-title">${item.title}</p>
                <p class="card-content-body">
                  ${item.body}
                </p>
              </div>`;
    cardList.appendChild(cardItem);
  });
};
