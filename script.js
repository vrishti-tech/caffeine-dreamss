// COMPLETE MENU DATABASE + ALL FUNCTIONS
const allMenuItems = {
    cappuccino: [
        { name: "Classic Cappuccino", price: 180, emoji: "?", desc: "Espresso + steamed milk + thick milk foam" },
        { name: "Hazelnut Cappuccino", price: 220, emoji: "?", desc: "Nutty hazelnut syrup" },
        { name: "Vanilla Cappuccino", price: 210, emoji: "?", desc: "Vanilla syrup cappuccino" },
        { name: "Caramel Cappuccino", price: 215, emoji: "?", desc: "Caramel syrup" },
        { name: "Blueberry Cappuccino", price: 225, emoji: "??", desc: "Blueberry syrup" },
        { name: "Strawberry Cappuccino", price: 230, emoji: "??", desc: "Strawberry syrup" },
        { name: "Honey Cappuccino (Iced)", price: 240, emoji: "??", desc: "Iced with honey" }
    ],
    latte: [
        { name: "Rose Latte", price: 210, emoji: "??", desc: "Rose syrup latte" },
        { name: "Caramel Latte", price: 210, emoji: "?", desc: "Caramel latte" },
        { name: "Hazelnut Latte", price: 220, emoji: "?", desc: "Hazelnut latte" },
        { name: "Iced Matcha Latte", price: 240, emoji: "??", desc: "Matcha iced" },
        { name: "Iced Almond Latte", price: 230, emoji: "?", desc: "Almond milk latte" }
    ],
    frappuccino: [
        { name: "Java Chip Frappuccino", price: 250, emoji: "??", desc: "Espresso + chocolate chips" },
        { name: "Vanilla Bean Frappuccino", price: 240, emoji: "??", desc: "Vanilla frappuccino" },
        { name: "Cookies & Cream Frappuccino", price: 260, emoji: "??", desc: "Cookies & cream" },
        { name: "Strawberries & Cream Frappuccino", price: 250, emoji: "??", desc: "Strawberry cream" },
        { name: "Matcha Green Tea Frappuccino", price: 245, emoji: "??", desc: "Matcha frappe" }
    ],
    espresso: [
        { name: "Single Espresso", price: 120, emoji: "?", desc: "1 shot espresso" },
        { name: "Double Espresso (Doppio)", price: 150, emoji: "??", desc: "2 shots" },
        { name: "Iced Espresso", price: 140, emoji: "??", desc: "Iced espresso" },
        { name: "Flavored Espresso", price: 160, emoji: "?", desc: "Flavored espresso" }
    ],
    mocha: [
        { name: "Classic Caffè Mocha", price: 230, emoji: "??", desc: "Espresso + chocolate" },
        { name: "White Chocolate Mocha", price: 245, emoji: "??", desc: "White chocolate" },
        { name: "Dark Mocha", price: 235, emoji: "??", desc: "Dark chocolate mocha" },
        { name: "Caramel Mocha", price: 250, emoji: "??", desc: "Caramel mocha" },
        { name: "Frozen Mocha (Mocha Frappe)", price: 260, emoji: "??", desc: "Frozen mocha" },
        { name: "Nutella Mocha", price: 255, emoji: "??", desc: "Nutella mocha" }
    ],
    'cold-brew': [
        { name: "Classic Cold Brew", price: 200, emoji: "??", desc: "Cold brew" },
        { name: "Cold Brew with Milk", price: 220, emoji: "??", desc: "Cold brew + milk" },
        { name: "Nitro Cold Brew", price: 240, emoji: "??", desc: "Nitro brew" },
        { name: "Coconut Cold Brew", price: 230, emoji: "??", desc: "Coconut brew" },
        { name: "Honey Almond Cold Brew", price: 235, emoji: "??", desc: "Honey almond" }
    ],
    affogato: [
        { name: "Classic Affogato", price: 240, emoji: "??", desc: "Ice cream + espresso" },
        { name: "Mocha Affogato", price: 260, emoji: "??", desc: "Mocha affogato" },
        { name: "Caramel Affogato", price: 250, emoji: "??", desc: "Caramel affogato" },
        { name: "Nutty Affogato", price: 265, emoji: "??", desc: "With nuts" },
        { name: "Berry Affogato", price: 260, emoji: "??", desc: "With berries" },
        { name: "Matcha Affogato", price: 255, emoji: "??", desc: "Matcha affogato" }
    ],
    'hot-chocolate': [
        { name: "Nutella Hot Chocolate", price: 220, emoji: "??", desc: "Nutella hot chocolate" },
        { name: "Marshmallow Hot Chocolate", price: 210, emoji: "??", desc: "Marshmallow" },
        { name: "Luxury Belgian Hot Chocolate", price: 280, emoji: "??", desc: "Belgian" },
        { name: "Dark Hot Chocolate", price: 240, emoji: "??", desc: "Dark chocolate" },
        { name: "White Hot Chocolate", price: 235, emoji: "??", desc: "White chocolate" },
        { name: "Caramel Hot Chocolate", price: 245, emoji: "??", desc: "Caramel" },
        { name: "Hazelnut Hot Chocolate", price: 250, emoji: "??", desc: "Hazelnut" }
    ],
    wellness: [
        { name: "Matcha Latte", price: 210, emoji: "??", desc: "Green tea matcha" },
        { name: "Turmeric Latte (Golden Milk)", price: 220, emoji: "??", desc: "Golden milk" },
        { name: "Chai Latte", price: 190, emoji: "?", desc: "Chai latte" },
        { name: "Cinnamon Honey Latte", price: 200, emoji: "??", desc: "Cinnamon honey" },
        { name: "Lavender Latte", price: 230, emoji: "??", desc: "Lavender" },
        { name: "Beetroot Latte", price: 240, emoji: "??", desc: "Beetroot" }
    ],
    basics: [
        { name: "Black Tea", price: 80, emoji: "??", desc: "English Breakfast" },
        { name: "Green Tea", price: 90, emoji: "??", desc: "Green tea" },
        { name: "Herbal Tea", price: 100, emoji: "??", desc: "Herbal tea" },
        { name: "Masala Chai", price: 110, emoji: "?", desc: "Indian chai" },
        { name: "Iced Tea", price: 120, emoji: "??", desc: "Iced tea" },
        { name: "Black Coffee", price: 100, emoji: "?", desc: "Black coffee" },
        { name: "Milk Coffee", price: 130, emoji: "?", desc: "Milk coffee" },
        { name: "Irish Coffee", price: 250, emoji: "??", desc: "Irish coffee" }
    ],
    juices: [
        { name: "Lemon Juice", price: 100, emoji: "??", desc: "Lemon juice" },
        { name: "Grapefruit Juice", price: 120, emoji: "??", desc: "Grapefruit" },
        { name: "Apple Juice", price: 110, emoji: "??", desc: "Apple juice" },
        { name: "Pineapple Juice", price: 130, emoji: "??", desc: "Pineapple" },
        { name: "Orange Juice", price: 120, emoji: "??", desc: "Orange juice" },
        { name: "Sweet Lime Juice", price: 110, emoji: "??", desc: "Sweet lime" }
    ],
    cakes: [
        { name: "Carrot Cake", price: 180, emoji: "??", desc: "Carrot cake" },
        { name: "Tiramisu Cake", price: 220, emoji: "??", desc: "Tiramisu" },
        { name: "Fruit Pastry", price: 190, emoji: "??", desc: "Fruit pastry" },
        { name: "Strawberry Cake", price: 210, emoji: "??", desc: "Strawberry cake" },
        { name: "Blueberry Cheesecake", price: 230, emoji: "??", desc: "Blueberry cheesecake" }
    ],
    cookies: [
        { name: "Oatmeal Raisin Cookie", price: 120, emoji: "??", desc: "Oatmeal raisin" },
        { name: "Nutella-Stuffed Cookie", price: 140, emoji: "??", desc: "Nutella cookie" },
        { name: "Almond Cookie", price: 130, emoji: "??", desc: "Almond cookie" },
        { name: "Choco-Chip Cookie", price: 120, emoji: "??", desc: "Chocolate chip" },
        { name: "Double Chocolate Cookie", price: 150, emoji: "??", desc: "Double chocolate" }
    ],
    pies: [
        { name: "Apple Pie", price: 200, emoji: "??", desc: "Apple pie" },
        { name: "Pumpkin Pie", price: 210, emoji: "??", desc: "Pumpkin pie" },
        { name: "Blueberry Pie", price: 220, emoji: "??", desc: "Blueberry pie" },
        { name: "Fruit Tart", price: 190, emoji: "??", desc: "Fruit tart" },
        { name: "Lemon Tart", price: 200, emoji: "??", desc: "Lemon tart" }
    ],
    donuts: [
        { name: "Jelly-Filled Donut", price: 100, emoji: "??", desc: "Jelly donut" },
        { name: "Nutella Donut", price: 120, emoji: "??", desc: "Nutella donut" },
        { name: "Classic Glazed Donut", price: 90, emoji: "??", desc: "Glazed donut" },
        { name: "Chocolate Donut", price: 110, emoji: "??", desc: "Chocolate donut" }
    ],
    'ice-cream': [
        { name: "Mint Chocolate Chip", price: 150, emoji: "??", desc: "Mint chocolate" },
        { name: "Strawberry Delight", price: 140, emoji: "??", desc: "Strawberry" },
        { name: "Butterscotch Crunch", price: 160, emoji: "??", desc: "Butterscotch" },
        { name: "Classic Vanilla", price: 120, emoji: "??", desc: "Vanilla" },
        { name: "Chocolate Fudge", price: 150, emoji: "??", desc: "Chocolate fudge" }
    ],
    croissants: [
        { name: "Almond Croissant", price: 150, emoji: "??", desc: "Almond" },
        { name: "Cheese Croissant", price: 140, emoji: "??", desc: "Cheese" },
        { name: "Butter Croissant", price: 120, emoji: "??", desc: "Butter" },
        { name: "Chocolate Croissant", price: 160, emoji: "??", desc: "Chocolate" }
    ],
    snacks: [
        { name: "Pink Sauce Pasta", price: 220, emoji: "??", desc: "Pink sauce" },
        { name: "Loaded Nachos", price: 180, emoji: "??", desc: "Loaded nachos" },
        { name: "Alfredo Pasta", price: 230, emoji: "??", desc: "Alfredo" },
        { name: "Red Sauce Pasta", price: 200, emoji: "??", desc: "Red sauce" },
        { name: "Garlic Bread", price: 150, emoji: "??", desc: "Garlic bread" },
        { name: "Bruschetta", price: 180, emoji: "??", desc: "Bruschetta" },
        { name: "Avocado Toast", price: 200, emoji: "??", desc: "Avocado toast" },
        { name: "Cheese Chili Toast", price: 170, emoji: "??", desc: "Cheese chili" },
        { name: "French Fries", price: 130, emoji: "??", desc: "French fries" },
        { name: "Cheese Fries", price: 160, emoji: "??", desc: "Cheese fries" },
        { name: "Garden Fresh Salad", price: 180, emoji: "??", desc: "Garden salad" },
        { name: "Pasta Salad", price: 200, emoji: "??", desc: "Pasta salad" },
        { name: "Fruit Salad", price: 190, emoji: "??", desc: "Fruit salad" },
        { name: "Veggie Wrap", price: 210, emoji: "??", desc: "Veggie wrap" }
    ]
};

let cart = [];
let total = 0;
let orders = JSON.parse(localStorage.getItem("orders")) || [];
let messages = JSON.parse(localStorage.getItem("chat")) || [];
let selectedFlavors = [];

window.addEventListener('load', () => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    document.getElementById('userDisplay').textContent = currentUser;
    document.querySelector('.user-email').textContent = currentUser;
    initializeDashboard();
    loadChat();
});

function initializeDashboard() {
    const currentUser = localStorage.getItem('currentUser');
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const userData = users[currentUser] || {};
    
    document.getElementById('userId').textContent = userData.userId || 'USER_' + Math.random().toString(36).substr(2, 5).toUpperCase();
    document.getElementById('userDisplay').textContent = currentUser;
    document.getElementById('joinDate').textContent = userData.createdAt ? new Date(userData.createdAt).toLocaleDateString() : 'Today';
    document.getElementById('profileId').textContent = userData.userId || 'N/A';
    document.getElementById('profileEmail').textContent = currentUser;
    document.getElementById('profileJoined').textContent = userData.createdAt ? new Date(userData.createdAt).toLocaleDateString() : 'Today';
    
    const userOrders = orders.filter(o => o.user === currentUser);
    const totalSpent = userOrders.reduce((sum, o) => sum + o.total, 0);
    
    document.getElementById('totalOrders').textContent = userOrders.length;
    document.getElementById('totalSpent').textContent = '?' + totalSpent;
    document.getElementById('loyaltyPoints').textContent = Math.floor(totalSpent / 10);
    document.getElementById('profileOrders').textContent = userOrders.length;
    document.getElementById('profileSpent').textContent = totalSpent;
    
    let allItems = [];
    Object.values(allMenuItems).forEach(category => {
        allItems = allItems.concat(category);
    });
    displayMenu(allItems);
    
    if (currentUser === 'admin@caffeinedreams.com') {
        document.getElementById('adminMenu').style.display = 'block';
        loadAdminPanel();
    }
    
    const savedTheme = localStorage.getItem('selectedTheme') || 'theme1';
    document.body.className = savedTheme;
    
    openSection('dashboard');
}

function openSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
        if (sectionId === 'orders') displayOrders();
        if (sectionId === 'admin') loadAdminPanel();
    }
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }
}

function changeTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('selectedTheme', theme);
}

function displayMenu(items) {
    let menuHTML = document.getElementById('menu');
    if (!menuHTML) return;
    
    menuHTML.innerHTML = "";
    if (items.length === 0) {
        menuHTML.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No items found</p>';
        return;
    }
    
    items.forEach((item) => {
        menuHTML.innerHTML += `<div class="menu-item">
            <div class="menu-item-image">${item.emoji}</div>
            <h4>${item.name}</h4>
            <p style="font-size: 12px; opacity: 0.8;">${item.desc}</p>
            <p class="menu-price">? ${item.price}</p>
            <button class="btn-add btn-primary" onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
        </div>`;
    });
}

function searchMenu() {
    const value = document.getElementById('searchBar').value.toLowerCase();
    let results = [];
    
    Object.values(allMenuItems).forEach(category => {
        results = results.concat(category.filter(item => item.name.toLowerCase().includes(value)));
    });
    
    displayMenu(results);
}

function filterByCategory() {
    const category = document.getElementById('categoryFilter').value;
    
    if (!category) {
        let allItems = [];
        Object.values(allMenuItems).forEach(cat => {
            allItems = allItems.concat(cat);
        });
        displayMenu(allItems);
    } else {
        const items = allMenuItems[category] || [];
        displayMenu(items);
    }
}

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
    showSuccess(`${name} added to cart!`);
}

function updateCart() {
    const cartDiv = document.getElementById('cart');
    const paymentBtn = document.getElementById('paymentBtn');
    const deliveryCharge = 50;
    const subtotal = total;
    const tax = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + tax + deliveryCharge;
    
    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Your cart is empty</p>';
        paymentBtn.style.display = 'none';
    } else {
        cartDiv.innerHTML = cart.map((item, i) => 
            `<div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div style="font-size: 12px; opacity: 0.8;">?${item.price}</div>
                </div>
                <button class="btn-remove" onclick="removeFromCart(${i})">Remove</button>
            </div>`
        ).join('');
        paymentBtn.style.display = 'block';
    }
    
    document.getElementById('subtotal').textContent = subtotal;
    document.getElementById('tax').textContent = tax;
    document.getElementById('total').textContent = grandTotal;
}

function removeFromCart(i) {
    total -= cart[i].price;
    cart.splice(i, 1);
    updateCart();
}

function goToPayment() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    openSection('payment');
    
    const deliveryCharge = 50;
    const subtotal = total;
    const tax = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + tax + deliveryCharge;
    
    document.getElementById('paymentItems').innerHTML = cart.map(item =>
        `<div class="payment-item">
            <div>${item.name}</div>
            <div>?${item.price}</div>
        </div>`
    ).join('');
    
    document.getElementById('paymentSubtotal').textContent = subtotal;
    document.getElementById('paymentTax').textContent = tax;
    document.getElementById('paymentTotal').textContent = grandTotal;
}

function clearPaymentErrors() {
    document.getElementById('cardError').textContent = '';
    document.getElementById('nameError').textContent = '';
    document.getElementById('expiryError').textContent = '';
    document.getElementById('cvvError').textContent = '';
}

function processPayment() {
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const cardName = document.getElementById('cardName').value.trim();
    const cardExpiry = document.getElementById('cardExpiry').value.trim();
    const cardCVV = document.getElementById('cardCVV').value.trim();
    
    clearPaymentErrors();
    let hasError = false;
    
    if (!cardNumber || cardNumber.replace(/\s/g, '').length < 16) {
        document.getElementById('cardError').textContent = 'Invalid card number';
        hasError = true;
    }
    
    if (!cardName) {
        document.getElementById('nameError').textContent = 'Card holder name is required';
        hasError = true;
    }
    
    if (!cardExpiry || !/^\d{2}\/\d{2}$/.test(cardExpiry)) {
        document.getElementById('expiryError').textContent = 'Invalid expiry format (MM/YY)';
        hasError = true;
    }
    
    if (!cardCVV || cardCVV.length < 3) {
        document.getElementById('cvvError').textContent = 'Invalid CVV';
        hasError = true;
    }
    
    if (hasError) return;
    
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const currentUser = localStorage.getItem('currentUser');
    const deliveryCharge = 50;
    const subtotal = total;
    const tax = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + tax + deliveryCharge;
    const orderId = 'ORD_' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    orders.push({
        id: orderId,
        user: currentUser,
        items: [...cart],
        subtotal: subtotal,
        tax: tax,
        delivery: deliveryCharge,
        total: grandTotal,
        date: new Date().toLocaleString(),
        status: 'Confirmed',
        cardLast4: cardNumber.slice(-4)
    });
    
    localStorage.setItem('orders', JSON.stringify(orders));
    document.getElementById('paymentForm').reset();
    
    showSuccess('Payment successful!');
    
    setTimeout(() => {
        trackDelivery(orderId);
        cart = [];
        total = 0;
        updateCart();
    }, 1500);
}

function trackDelivery(orderId) {
    openSection('tracking');
    
    let trackingContent = `
        <div>
            <h3>Order #${orderId}</h3>
            <p><strong>Status:</strong> <span id="orderStatus">? Confirmed</span></p>
            <div class="tracking-timeline">
                <div class="timeline-step">
                    <div class="timeline-icon active">?</div>
                    <h4>Confirmed</h4>
                    <p>Order Placed</p>
                </div>
                <div class="timeline-step">
                    <div class="timeline-icon" id="icon2">?????</div>
                    <h4>Preparing</h4>
                    <p>2-3 mins</p>
                </div>
                <div class="timeline-step">
                    <div class="timeline-icon" id="icon3">??</div>
                    <h4>Out for Delivery</h4>
                    <p>5-7 mins</p>
                </div>
                <div class="timeline-step">
                    <div class="timeline-icon" id="icon4">??</div>
                    <h4>Delivered</h4>
                    <p>10 mins</p>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('trackingContent').innerHTML = trackingContent;
    
    setTimeout(() => {
        document.getElementById('icon2').classList.add('active');
        document.getElementById('orderStatus').textContent = '????? Preparing';
    }, 3000);
    
    setTimeout(() => {
        document.getElementById('icon3').classList.add('active');
        document.getElementById('orderStatus').textContent = '?? Out for Delivery';
    }, 6000);
    
    setTimeout(() => {
        document.getElementById('icon4').classList.add('active');
        document.getElementById('orderStatus').textContent = '? Delivered';
    }, 9000);
}

function displayOrders() {
    const currentUser = localStorage.getItem('currentUser');
    const userOrders = orders.filter(order => order.user === currentUser);
    const ordersList = document.getElementById('ordersList');
    
    if (userOrders.length === 0) {
        ordersList.innerHTML = '<p style="text-align: center; padding: 20px;">No orders yet</p>';
    } else {
        ordersList.innerHTML = userOrders.map(order => `
            <div class="order-card">
                <div class="order-header">
                    <div class="order-id">#${order.id}</div>
                    <div class="order-status">${order.status}</div>
                </div>
                <div class="order-details">
                    <p><strong>Date:</strong> ${order.date}</p>
                    <p><strong>Items:</strong> ${order.items.length} item(s)</p>
                    <p><strong>Total:</strong> ?${order.total}</p>
                </div>
            </div>
        `).join('');
    }
}

// CUSTOMIZE DRINK FUNCTIONS
function toggleFlavor(flavor) {
    const index = selectedFlavors.indexOf(flavor);
    if (index > -1) {
        selectedFlavors.splice(index, 1);
    } else {
        selectedFlavors.push(flavor);
    }
    updateCustomizePreview();
}

function updateCustomizePreview() {
    const base = document.getElementById('baseSelect').value;
    const temp = document.getElementById('tempSelect').value;
    
    let previewText = 'Select options';
    let liquidColor = '#ccc';
    let price = 180;
    
    if (base) {
        previewText = base.toUpperCase();
        
        if (base === 'espresso') liquidColor = '#4A2511';
        else if (base === 'milk') liquidColor = '#E8D5C4';
        else if (base === 'almond-milk') liquidColor = '#D4A574';
        else if (base === 'coconut-milk') liquidColor = '#F5DEB3';
        else if (base === 'oat-milk') liquidColor = '#D2B48C';
        
        if (selectedFlavors.length > 0) {
            previewText += ' + ' + selectedFlavors.map(f => f.toUpperCase()).join(' + ');
            price += selectedFlavors.length * 30;
        }
        
        if (temp === 'cold') {
            previewText += ' (Iced)';
        } else if (temp === 'frozen') {
            previewText += ' (Frozen)';
            price += 50;
        }
    }
    
    document.getElementById('previewText').textContent = previewText;
    document.getElementById('liquidPreview').style.backgroundColor = liquidColor;
    document.getElementById('customPrice').textContent = price;
}

function addCustomDrinkToCart() {
    const base = document.getElementById('baseSelect').value;
    
    if (!base) {
        alert('Please select a base!');
        return;
    }
    
    const temp = document.getElementById('tempSelect').value;
    let price = 180;
    
    if (selectedFlavors.length > 0) {
        price += selectedFlavors.length * 30;
    }
    
    if (temp === 'frozen') {
        price += 50;
    }
    
    let name = 'Custom ' + base.toUpperCase();
    if (selectedFlavors.length > 0) {
        name += ' with ' + selectedFlavors.join(', ');
    }
    if (temp !== 'hot') {
        name += ' (' + temp.toUpperCase() + ')';
    }
    
    cart.push({ name, price });
    total += price;
    updateCart();
    showSuccess(`${name} added to cart!`);
    
    // Reset customize form
    document.getElementById('baseSelect').value = '';
    selectedFlavors = [];
    document.querySelectorAll('.flavor-btn.selected').forEach(btn => btn.classList.remove('selected'));
    updateCustomizePreview();
}

// CHAT FUNCTIONS
function loadChat() {
    const chatBox = document.getElementById('chatBox');
    
    if (messages.length === 0) {
        chatBox.innerHTML = '<p style="text-align:center; color: #999; padding: 20px;">No messages yet</p>';
    } else {
        chatBox.innerHTML = messages.map(msg => 
            `<div class="chat-message">
                <strong>${msg.user}</strong> <span class="chat-time">${msg.timestamp}</span>
                <p>${msg.message}</p>
            </div>`
        ).join('');
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function sendMessage() {
    let msg = document.getElementById('chatInput').value.trim();
    
    if (!msg) return;
    
    const currentUser = localStorage.getItem('currentUser');
    messages.push({
        user: currentUser,
        message: msg,
        timestamp: new Date().toLocaleTimeString()
    });
    
    localStorage.setItem('chat', JSON.stringify(messages));
    document.getElementById('chatInput').value = '';
    loadChat();
}

// ADMIN FUNCTIONS
function loadAdminPanel() {
    const allUsers = JSON.parse(localStorage.getItem('users')) || {};
    
    const adminOrdersList = document.getElementById('adminOrdersList');
    adminOrdersList.innerHTML = orders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.user}</td>
            <td>?${order.total}</td>
            <td><span class="order-status">${order.status}</span></td>
            <td><button class="btn-primary" onclick="updateOrderStatus('${order.id}')">Update</button></td>
        </tr>
    `).join('');
    
    const adminUsersList = document.getElementById('adminUsersList');
    adminUsersList.innerHTML = Object.entries(allUsers).map(([email, user]) => `
        <tr>
            <td>${user.userId || 'N/A'}</td>
            <td>${email}</td>
            <td>${new Date(user.createdAt).toLocaleDateString()}</td>
            <td>${orders.filter(o => o.user === email).length}</td>
            <td><span style="color: green;">Active</span></td>
            <td><button class="btn-secondary" onclick="removeUser('${email}')">Block</button></td>
        </tr>
    `).join('');
    
    const adminChatList = document.getElementById('adminChatList');
    adminChatList.innerHTML = messages.map((msg, i) => `
        <tr>
            <td>${msg.user}</td>
            <td>${msg.message.substring(0, 50)}...</td>
            <td>${msg.timestamp}</td>
            <td><button class="btn-secondary" onclick="deleteMessage(${i})">Delete</button></td>
        </tr>
    `).join('');
    
    const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
    document.getElementById('totalRevenue').textContent = totalRevenue;
    document.getElementById('analyticsOrders').textContent = orders.length;
    document.getElementById('analyticsUsers').textContent = Object.keys(allUsers).length;
    document.getElementById('activeUsers').textContent = Object.keys(allUsers).filter(email => {
        const userOrders = orders.filter(o => o.user === email);
        return userOrders.length > 0;
    }).length;
}

function switchAdminTab(tab) {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(tab + 'Tab').classList.add('active');
    event.target.classList.add('active');
}

function updateOrderStatus(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        const statuses = ['Confirmed', 'Preparing', 'Out for Delivery', 'Delivered'];
        const currentIndex = statuses.indexOf(order.status);
        order.status = statuses[(currentIndex + 1) % statuses.length];
        localStorage.setItem('orders', JSON.stringify(orders));
        loadAdminPanel();
        showSuccess(`Order updated to ${order.status}`);
    }
}

function removeUser(email) {
    if (confirm(`Remove user ${email}?`)) {
        const users = JSON.parse(localStorage.getItem('users')) || {};
        delete users[email];
        localStorage.setItem('users', JSON.stringify(users));
        loadAdminPanel();
        showSuccess(`User ${email} blocked`);
    }
}

function deleteMessage(index) {
    messages.splice(index, 1);
    localStorage.setItem('chat', JSON.stringify(messages));
    loadAdminPanel();
    showSuccess('Message deleted');
}

function showSuccess(message) {
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.textContent = message;
    document.body.appendChild(successMsg);
    setTimeout(() => successMsg.remove(), 2000);
}

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && document.activeElement.id === 'chatInput') {
        e.preventDefault();
        sendMessage();
    }
});