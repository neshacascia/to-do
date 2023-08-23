const deleteBtn = document.querySelectorAll('#deleteToDo');

Array.from(deleteBtn).forEach(elem =>
  elem.addEventListener('click', deleteToDo)
);

async function deleteToDo() {
  console.log('Delete button clicked!');
}
