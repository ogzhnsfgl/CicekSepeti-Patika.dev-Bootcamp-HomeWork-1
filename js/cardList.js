const cardList = document.querySelector(".card-list");
const search = document
  .querySelector(".search")
  .addEventListener("input", onChange);

/* FETCHING DATA */
//Reduced data store only 9 items.
let reducedData = [];
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    //First 9 data of coming from fetch, copy to reducedData array.
    reducedData = data.slice(0, 9);
    listItem(reducedData);
  });

/* LISTING ITEMS */
const listItem = (data) => {
  //Every items in data use to create card.
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

/* SEARCHBAR ONCHANGE */
function onChange(e) {
  //Get user input
  let input = e.target.value;
  //Create new filtered list using user input
  filteredData = reducedData.filter(
    (item) => item.body.includes(input) || item.title.includes(input)
  );
  //Clear card list
  cardList.innerHTML = "";
  //List filtered items
  listItem(filteredData);
}
