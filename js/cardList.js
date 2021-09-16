const cardList = document.querySelector(".card-list");
const search = document
  .querySelector(".search")
  .addEventListener("input", onChange);

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
                                </div>`;
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
  //List filtered items
  listItem(filteredData.slice(0, 10));
}
