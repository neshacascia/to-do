const deleteBtn = document.querySelectorAll('#deleteToDo');
const clearCompletedBtn = document.querySelector('#clearCompleted');

Array.from(deleteBtn).forEach(elem =>
  elem.addEventListener('click', deleteToDo)
);

clearCompletedBtn.addEventListener('click', clearCompleted);

async function markCompleted(elem) {
  const toDoId = elem.parentNode.dataset.id;

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

async function clearCompleted() {
  try {
    const res = await fetch('/clearCompleted', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.error(err);
  }
}
