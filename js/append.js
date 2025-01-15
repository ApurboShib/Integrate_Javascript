// 1. Add a new list item to the list
// Find the element where to add
const placeList = document.getElementById('places-list');

// Create the list item and set its content
const li = document.createElement('li');
li.innerText = 'paharitoli bon';

// Append the new list item to the list
placeList.appendChild(li);

// 2. Add a new section with a food list
// Find the element where to add
const mainContent = document.getElementById('main-content');

// Create the section element
const section = document.createElement('section');

// Add a heading to the section
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

// Add an unordered list to the section
const ul = document.createElement('ul');

// Add food items to the list
const foodItems = ['Pizza', 'Burger', 'Pasta', 'Sushi'];
foodItems.forEach(food => {
  const foodLi = document.createElement('li');
  foodLi.innerText = food;
  ul.appendChild(foodLi);
});

// Append the unordered list to the section
section.appendChild(ul);

// Append the section to the main content
mainContent.appendChild(section);
