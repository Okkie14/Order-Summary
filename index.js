// Opens the modal window
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-btn]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal);
    })
})

function openModal(modal) {
    if (modal === null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal === null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

// Changes the plans
const monthly = document.getElementById('monthly');

monthly.onclick = () => {
    document.getElementById('change-price').innerHTML = 'Monthly plan';
    document.getElementById('price').innerHTML = '$9.99 / month';
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });
}

const annually = document.getElementById('annual');

annually.onclick = () => {
    document.getElementById('change-price').innerHTML = 'Annual plan';
    document.getElementById('price').innerHTML = '$59.99 / year';
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });
}

const free = document.getElementById('free-plan');

free.onclick = () => {
    document.getElementById('change-price').innerHTML = 'Free plan';
    document.getElementById('price').innerHTML = '$0.00 / month';
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });
}