document.addEventListener('DOMContentLoaded', function() {
    const addProductForm = document.querySelector('#products form');
    addProductForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Product added!');
    });
    const orderTable = document.querySelector('#orders table');
    orderTable.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const action = event.target.textContent.trim();
            if (action === 'Изменить статус') {
                alert('Order status changed!');
            } else if (action === 'Удалить') {
                alert('Order deleted!');
            }
        }
    });
    const userTable = document.querySelector('#users table');
    userTable.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const action = event.target.textContent.trim();
            if (action === 'Изменить роль') {
                alert('User role changed!');
            } else if (action === 'Удалить') {
                alert('User deleted!');
            }
        }
    });
    const contentForms = document.querySelectorAll('#content form');
    contentForms.forEach(function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Content saved!');
        });
    });
});
