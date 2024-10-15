
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const listOfItems = document.querySelectorAll(`.item`);
const initialItems = document.getElementById('initial-items');



searchButton.addEventListener('click', () => {

  let generatedHTML = '';

  listOfItems.forEach(item => {

    // checks the search bar
    // looks for matching name and user input
    if ( item.innerText.toLowerCase().includes(`${searchBar.value}`) ) {
      generatedHTML += `
        <div class="item">
          ${item.innerHTML}
        </div>
      `;
    }
  });

  initialItems.innerHTML = generatedHTML;
  generatedHTML = '';
});
// where we left
// filter system done