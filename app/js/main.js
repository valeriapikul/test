
    document.querySelector('.todo-form__button').onclick = addElement;

    function addElement(event) {
        event.preventDefault();
        let giveValue = document.querySelector('.todo-form__input');
        let div = document.querySelector('.todo__list');

        // проверить не пустой ли ввод

        if (giveValue.value !== '') {
            let newDiv = document.createElement('div');
            let newCheckbox = document.createElement('input');

            newDiv.classList.add('todo__list-item');
            div.appendChild(newDiv);
            newDiv.textContent = giveValue.value;

            newDiv.prepend(newCheckbox);
            newCheckbox.setAttribute('type', 'checkbox');
            newCheckbox.classList.add('newCheckbox');
            newCheckbox.classList.add('styler');

            giveValue.value = ''; // добавить очистку инпута

            newCheckbox.onclick = () => {
                newDiv.classList.toggle('active');
            }
        }
    }

    