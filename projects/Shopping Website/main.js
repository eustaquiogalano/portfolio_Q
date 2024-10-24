
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const listOfAllProducts = document.querySelectorAll(`.item`);
const initialItems = document.getElementById('initial-items');



searchButton.addEventListener('click', () => {

  let generatedHTMLForDisplayingProducts = '';

  listOfAllProducts.forEach(product => {

    // check the text content of each element and its descendants for 
    // matching names inputted in the search bar 
    if ( product.innerText.toLowerCase().includes(`${searchBar.value}`) ) {
      generatedHTMLForDisplayingProducts += `
        <div class="item">
          ${product.innerHTML}
        </div>
      `;
    }
  });

  initialItems.innerHTML = generatedHTMLForDisplayingProducts;
  generatedHTMLForDisplayingProducts = '';
});
