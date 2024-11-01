
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const listOfAllProducts = document.querySelectorAll(`.item`);
const initialItemsContainer = document.getElementById('initial-items-container'); 
//const listOfRadioInputs = document.querySelector('#ratings-form #four-star'); 
const fiveStarRate = document.querySelector('#five-star');
const fourStarRate = document.querySelector('#four-star');
const threeStarRate = document.querySelector('#three-star');
const twoStarRate = document.querySelector('#two-star');
const oneStarRate = document.querySelector('#one-star');


////////////////////////////////////////////////////////////////////////////////////////

function getCurrentDisplayedItems(rate) {

  let generatedHTMLForDisplayingProducts = '';
  const listOfCurrentProductsDisplayed = document.querySelectorAll('.item')

  listOfCurrentProductsDisplayed.forEach(product => {
    if (product.textContent.includes(`${rate} `)) {
      generatedHTMLForDisplayingProducts += `
      <div class="item">
        ${product.innerHTML}
      </div>
    `;
    }
  })

  initialItemsContainer.innerHTML = generatedHTMLForDisplayingProducts;
  generatedHTMLForDisplayingProducts = '';
}



////////////////////////////////////////////////////////////////////////////////////////

searchButton.addEventListener('click', () => {

  let generatedHTMLForDisplayingProducts = '';

  listOfAllProducts.forEach(product => {

    // check the text content of each element and its descendants for 
    // matching names inputted in the search bar 
    if ( product.textContent.toLowerCase().includes(`${searchBar.value}`) ) {
      generatedHTMLForDisplayingProducts += `
        <div class="item">
          ${product.innerHTML}
        </div>
      `;
    }   
  });

  initialItemsContainer.innerHTML = generatedHTMLForDisplayingProducts;
  generatedHTMLForDisplayingProducts = '';

});

fiveStarRate.addEventListener('click', () => {
  getCurrentDisplayedItems(5);
});

fourStarRate.addEventListener('click', () => {
  getCurrentDisplayedItems(4);
});

threeStarRate.addEventListener('click', () => {
  getCurrentDisplayedItems(3);
});

twoStarRate.addEventListener('click', () => {
  getCurrentDisplayedItems(2);
});

oneStarRate.addEventListener('click', () => {
  getCurrentDisplayedItems(1);
});
