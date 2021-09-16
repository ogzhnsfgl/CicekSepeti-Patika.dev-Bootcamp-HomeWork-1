const cardList = document.querySelector(".card-list");
const searchResult = document.querySelector(".search-result");
const search = document
  .querySelector(".search")
  .addEventListener("input", onChange);
const spinner = document.querySelector(".loader");

/* FETCHING DATA */
//Reduced data store only 10 items.
let allData = [];
let reducedData = [];
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    //First 9 data of coming from fetch, copy to reducedData array.
    allData = data;
    let rnd = Math.trunc(Math.random() * 80);
    reducedData = data.slice(rnd, rnd + 10);
    listItem(reducedData);
  });

/* LISTING ITEMS */
const listItem = (data) => {
  spinner.classList.add("hide");
  //Every items in data use to create card.
  data.forEach((item, index) => {
    const cardItem = document.createElement("div");
    let rnd = Math.trunc(Math.random() * 100 + 1);

    cardItem.className = "card";
    cardItem.innerHTML = `     <div class="card-thumbnail">
                                    <img src="https://picsum.photos/id/${rnd}/250/200" alt="lorem pic" />
                                  </div>
                                  <div class="card-content">
                                    <p class="card-content-title">${item.title}</p>
                                    <p class="card-content-body">
                                      ${item.body}
                                    </p>
                                </div>
                                <div class="card-button">
                                <a href="https://jsonplaceholder.typicode.com/posts/${item.id}" target="_blank" rel="noopener noreferrer">Details</a></div>`;
    cardList.appendChild(cardItem);
  });
};

/* SEARCHBAR ONCHANGE */
function onChange(e) {
  //Get user input
  let input = e.target.value.toLowerCase();
  //Create new filtered list using user input
  filteredData = allData.filter(
    (item) => item.body.includes(input) || item.title.includes(input)
  );
  //Clear card list
  cardList.innerHTML = "";
  searchResult.innerHTML = "";
  //List filtered items
  if (filteredData.length > 0) {
    searchResult.innerHTML = `Showing results for: "${input}"`;
    listItem(filteredData.slice(0, 10));
  } else {
    searchResult.innerHTML = `No result for: "${input}`;
  }
  if (input.length === 0) {
    searchResult.innerHTML = "";
  }
}
