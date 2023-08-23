const deleteBtn = document.querySelectorAll('#deleteToDo');

deleteBtn.forEach(elem => addEventListener('click', deleteToDo));

async function deleteToDo() {
  console.log('Delete button clicked!');
}
