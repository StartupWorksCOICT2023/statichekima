//npm i list.js
//docs https://listjs.com/api/
const filterOptions = {
  valueNames: ["item"],
  page: 10,
  pagination: true
};

const searchOptions = {
  valueNames: ['productName'],
}
const priceList = new List("applications_list", filterOptions);

const searchList = new List('category-products-list',searchOptions);