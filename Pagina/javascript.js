document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const addBtn = document.getElementById('addBtn');
    const likeBtns = document.querySelectorAll('.like-btn');

    loginBtn.addEventListener('click', function() {
        this.textContent = this.textContent === 'Login' ? 'Logout' : 'Login';
    });

    addBtn.addEventListener('click', function() {
        this.style.display = 'none';
    });

    likeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            let likes = parseInt(this.dataset.likes) + 1;
            this.textContent = likes + ' likes';
            this.dataset.likes = likes;
            alert('Ninja was liked');
        });
    });
});