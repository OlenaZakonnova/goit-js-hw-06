const allCategoriesList = document.querySelectorAll("li.item");
console.log(`Number of categories: ${allCategoriesList.length}`);
const categoriesList = document.querySelector("#categories");
[...categoriesList.children].forEach((elem) => {
    console.dir(`Category: ${elem.firstElementChild.textContent}`);
    console.dir(`Elements: ${elem.lastElementChild.children.length}`);
})