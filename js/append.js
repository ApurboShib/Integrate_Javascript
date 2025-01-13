// console.log("append js is running");
// 1. where to add.
const placeList = document.getElementById('places-list');
// 2. what to be added
const li = document.createElement('li');
li.innerText = 'paharitoli bon';

// 3. add the child.

placeList.appendChild(li);


// add a section in this 

// step - 1; where to add
const mainContent = document.getElementById('main-content');
// step - 2 : what to be added
const section = document.createElement('section');
section.innerText = 'mainContanier main add kiya ha maine';

// step - 3 : add the child

section.append(section);