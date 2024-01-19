let totalPrice = 10.00; // Prix initial
let likedItems = [];

function updateQuantity(itemId, amount) {
    const itemElement = document.getElementById(itemId);
    let quantity = parseInt(itemElement.innerText) + amount;

    if (quantity < 0) {
        quantity = 0;
    }

    itemElement.innerText = quantity;
    updateTotal();
}

function removeItem(itemId) {
    const itemElement = document.getElementById(itemId);
    itemElement.parentNode.parentNode.removeChild(itemElement.parentNode);
    updateTotal();
}



function toggleLike() {
    var likeBtn = document.getElementById('likeBtn');

    // Toggle la classe 'liked' pour changer la couleur
    likeBtn.classList.toggle('liked');
}



function updateTotal() {
    let newTotalPrice = 0;

    document.querySelectorAll('.item').forEach(item => {
        const quantity = parseInt(item.querySelector('.controls span').innerText);
        newTotalPrice += quantity * 180.00; // 10.00 est le prix par article
    });

    document.getElementById('total-price').innerText = newTotalPrice.toFixed(2);
    totalPrice = newTotalPrice;
}

window.onload = updateTotal;
