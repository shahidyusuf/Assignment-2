// Answer 01
// function createAdd(num) {
//     return function add(value) {
//       return num + value;
//     }
//   }
//   let addFive = createAdd(5);
// console.log(addFive(10)); 
// console.log(addFive(20)); 


// A2:
// let arr = [1, 2, 3, 4, 5];
// function searchArray(arr, value) {
//     if (arr.length === 0) {
//         return false; // base case, array is empty
//     }
    
//     if (arr[0] === value) {
//         return true; // base case, value is found
//     }
    
//     return searchArray(arr.slice(1), value); 
// }
// console.log(searchArray(arr, 3)); // Output: true
// console.log(searchArray(arr, 6)); // Output: false


// A3:
// function addParagraph(text) {
//     let newParagraph = document.createElement('p');
//     let textNode = document.createTextNode(text);
//     newParagraph.appendChild(textNode);
//     document.body.appendChild(newParagraph);
//   }
//   addParagraph('Hello Saylani!');


// A4:
// function addListItem(text) {
//     let newListItem = document.createElement('li');
//     let textNode = document.createTextNode(text);
//     newListItem.appendChild(textNode);
//     document.body.appendChild(newListItem);
//   }

//   addListItem('MARAHABA');
//   addListItem('SAYLANI');
//   addListItem('JEVAY JEVAY');


// A5:

// function changeBackgroundColor(element, newColor) {
//     element.style.backgroundColor = newColor;
//   }
//   changeBackgroundColor(document.body, "yellow  ");


// A6:

// function saveToLocalStorage(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }
//   let obj = { name: "Sir Ishaq", age: 17 };
// saveToLocalStorage("my-object", obj);
// console.log(obj)

// A7:

// function getObjectFromLocalStorage(key) {
//     let item = localStorage.getItem(key);
//     if (!item) {
//       return null;
//     }
//     try {
//       let parsedItem = JSON.parse(item);
//       return parsedItem;
//     } catch (error) {
//       console.error(`Error parsing localStorage item with key "${key}":`, error);
//       return null;
//     }
//   }
//   let myObject = getObjectFromLocalStorage('myKey');
// console.log(myObject);

// A8:

// function saveToLocalStorage(obj) {
//     for (let prop in obj) {
//       localStorage.setItem(prop, JSON.stringify(obj[prop]));
//     }
    
//     let newObj = {};
//     for (let i = 0; i < localStorage.length; i++) {
//       let key = localStorage.key(i);
//       newObj[key] = JSON.parse(localStorage.getItem(key));
//     }
    
//     return newObj;
// }
