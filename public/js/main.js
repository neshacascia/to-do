const toDos = document.querySelectorAll('#toDo');
const deleteBtn = document.querySelectorAll('#deleteToDo');

Array.from(deleteBtn).forEach(elem =>
  elem.addEventListener('click', deleteToDo)
);

Array.from(toDos).forEach(elem =>
  elem.addEventListener('click', markCompleted)
);

async function markCompleted() {
  const toDoId = this.parentNode.dataset.id;

  try {
    const res = await fetch('/markCompleted', {
      method: 'put',
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
