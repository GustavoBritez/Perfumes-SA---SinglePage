// ========================================
// CARRITO DE COMPRAS
// ========================================

const cart = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    whatsappNumber: '+5491150554904',
    addToCart(perfumeIndex) {
        const perfume = perfumeDatabase[perfumeIndex];

        // Verificar si el perfume ya está en el carrito
        const existingItem = this.items.find(item => item.name === perfume.name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                name: perfume.name,
                brand: perfume.brand,
                price: perfume.price,
                emoji: perfume.emoji,
                quantity: 1,
            });
        }

        this.save();
        this.showNotification('✅ Perfume agregado al carrito');
        this.updateCartUI();
    },

    removeFromCart(itemName) {
        this.items = this.items.filter(item => item.name !== itemName);
        this.save();
        this.updateCartUI();
    },

    updateQuantity(itemName, quantity) {
        const item = this.items.find(item => item.name === itemName);
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.save();
            this.updateCartUI();
        }
    },

    clearCart() {
        if (confirm('¿Estás seguro de que deseas limpiar el carrito?')) {
            this.items = [];
            this.save();
            this.updateCartUI();
            this.showNotification('🗑️ Carrito vaciado');
        }
    },

    save() {
        localStorage.setItem('cartItems', JSON.stringify(this.items));
        this.updateCartCount();
    },

    updateCartCount() {
        const count = this.items.reduce((total, item) => total + item.quantity, 0);
        const cartCountElement = document.querySelector('.cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = count;
        }
    },

    updateCartUI() {
        const cartItemsContainer = document.getElementById('cartItems');
        const cartSummary = document.getElementById('cartSummary');
        const totalItems = document.getElementById('totalItems');
        const totalPrice = document.getElementById('totalPrice');

        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">El carrito está vacío</p>';
            cartSummary.style.display = 'none';
        } else {
            // Generar items del carrito
            cartItemsContainer.innerHTML = this.items.map((item, index) => `
                <div class="cart-item">
                    <span class="cart-item-name">
                        <strong>${item.emoji} ${item.name}</strong>
                        <br>
                        <small>${item.brand} | Cantidad: ${item.quantity}</small>
                    </span>
                    <span class="cart-item-price">$${(item.price * item.quantity).toLocaleString('es-AR')}</span>
                    <button class="cart-item-remove" onclick="cart.removeFromCart('${item.name}')">🗑️ Quitar</button>
                </div>
            `).join('');

            // Calcular totales
            const total = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const qty = this.items.reduce((sum, item) => sum + item.quantity, 0);

            totalItems.textContent = qty;
            totalPrice.textContent = `$${total.toLocaleString('es-AR')}`;
            cartSummary.style.display = 'block';
        }

        this.updateCartCount();
    },

    generateWhatsAppMessage() {
        if (this.items.length === 0) {
            alert('El carrito está vacío');
            return;
        }

        let message = '🌸 *Pedido desde Ivo \'Essence* 🌸\n\n';
        message += '📝 *DETALLES DEL PEDIDO:*\n';
        message += '─────────────────────────\n';

        let totalPrice = 0;
        this.items.forEach((item, index) => {
            const subtotal = item.price * item.quantity;
            message += `${index + 1}. ${item.emoji} *${item.name}*\n`;
            message += `   Marca: ${item.brand}\n`;
            message += `   Cantidad: ${item.quantity}\n`;
            message += `   Precio unitario: $${item.price.toLocaleString('es-AR')}\n`;
            message += `   Subtotal: $${subtotal.toLocaleString('es-AR')}\n\n`;
            totalPrice += subtotal;
        });

        message += '─────────────────────────\n';
        message += `💰 *TOTAL: $${totalPrice.toLocaleString('es-AR')}*\n\n`;
        message += '📦 *Formas de pago:* Transferencia, Efectivo, Tarjeta\n';
        message += '🚚 *Envío a acordar*\n\n';
        message += '¡Gracias por tu compra! 💕';

        // Codificar mensaje para URL
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/${this.whatsappNumber.replace(/\\D/g, '')}?text=${encodedMessage}`;

        // Abrir WhatsApp
        window.open(whatsappLink, '_blank');
    },

    showNotification(message) {
        // Crear notificación flotante
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #27AE60;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            font-weight: 500;
        `;
        notification.textContent = message;

        // Agregar animación
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        if (!document.querySelector('style[data-notification]')) {
            style.setAttribute('data-notification', 'true');
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        // Eliminar notificación después de 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    },

    // Inicializar carrito
    init() {
        this.updateCartUI();
    },
};

// Inicializar carrito cuando carga el DOM
document.addEventListener('DOMContentLoaded', () => {
    cart.init();
});
