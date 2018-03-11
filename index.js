
const form = document.getElementById('js-shopping-list-form');
const shoppingListEntry = document.getElementById('js-shopping-list-entry');
const shoppingList = document.getElementById('js-shopping-list');

//submitting data through form//
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const entry = shoppingListEntry.value;
  form.reset();
  if (entry) addItemToList(entry);

});

//creating new list item with form data

function addItemToList(text) {
  const item = document.createElement('li');

  const spanItem = document.createElement('span');
  spanItem.classList.add('shopping-item');
  spanItem.id = 'text-toggle';
  spanItem.innerText = text;

  const buttons = document.createElement('div');

  const remove = document.createElement('button');
  remove.classList.add('shopping-item-delete');
  remove.innerHTML = ('delete');

  // click event for removing item
  remove.addEventListener('click', removeItem);

  const toggle = document.createElement('button');
  toggle.innerHTML = ('check');

  //click event for checking and unchecking item//
  toggle.addEventListener('click', toggleCheck);

  buttons.appendChild(toggle);
  buttons.appendChild(remove);
  item.appendChild(spanItem);
  item.appendChild(buttons);
  shoppingList.insertBefore(item, shoppingList.childNodes[0]);
};

//adding functionality to check and uncheck item //
function toggleCheck() {
  document.getElementById('text-toggle').classList.toggle('complete-incomplete-toggle');
}

//adding functionality to deleting list item//
function removeItem() {
  const item = this.parentNode.parentNode;
  const parent = item.parentNode;
  parent.removeChild(item);
}
