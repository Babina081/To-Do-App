const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('listContainer');

function addTask() {
  if (inputBox.value === '') {
    alert('You must write something!');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

/* This function is called to save the data that is entered */
/* LocalStorage is found in the google developer tools */
/* setItem is used to set the data in the respective element in the localStorage */
function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

/* this function is used for showing the data stored in the local storage */
/* getItem method is used for displaying the data from the local storage */
function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
