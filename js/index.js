// let listItems = document.querySelectorAll('.content__complex-direction_item');

document.querySelector('.content__complex-direction').addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        let listItems = document.querySelectorAll('.content__complex-direction_item');
        listItems.forEach(item => {
            item.classList.remove('active-item');
            event.target.parentNode.classList.add('active-item');
        });
    }
});