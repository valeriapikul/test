
document.querySelector('.todo-form__button').onclick = addElement;

function addElement(event) {
    event.preventDefault();
    let giveValue = document.querySelector('.todo-form__input');
    let div = document.querySelector('.todo__list');

    // проверить не пустой ли ввод

    if (giveValue.value !== '') {
        let label = document.createElement('label');
        let span = document.createElement('span');
        let newCheckbox = document.createElement('input');

        div.appendChild(label);

        label.appendChild(newCheckbox);

        newCheckbox.setAttribute('type', 'checkbox');
        newCheckbox.classList.add('todo__list-input');

        label.appendChild(span);
        span.classList.add('todo__list-span');
        span.textContent = giveValue.value;

        giveValue.value = ''; // добавить очистку инпута

        newCheckbox.onclick = () => {
            span.classList.toggle('active');
        }
    }
}

