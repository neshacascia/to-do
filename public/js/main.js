const deleteBtn = document.querySelectorAll('#deleteToDo');

Array.from(deleteBtn).forEach(elem =>
  elem.addEventListener('click', deleteToDo)
);

async function deleteToDo() {
  const toDoId = this.parentNode.dataset.id;

  try {
    const res = await fetch('/deleteToDo', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ toDo: toDoId }),
    });

    const data = await res.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.error(err);
  }
}
