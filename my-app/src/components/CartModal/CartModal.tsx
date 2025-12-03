import React from 'react';
import './CartModal.css';
import { Product } from '../../types';

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
    items: Product[];
    onRemove: (index: number) => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, items, onRemove }) => {
    if (!isOpen) return null;

    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="cart-modal-overlay" onClick={onClose}>
            <div className="cart-modal-content" onClick={e => e.stopPropagation()}>
                <div className="cart-modal-header">
                    <h2>Кошик</h2>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>

                <div className="cart-items-list">
                    {items.length === 0 ? (
                        <p className="empty-cart">Ваш кошик порожній</p>
                    ) : (
                        items.map((item, index) => (
                            <div key={`${item.id}-${index}`} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-img" />
                                <div className="cart-item-info">
                                    <div className="cart-item-title">{item.title}</div>
                                    <div className="cart-item-price">{item.price.toLocaleString()} ₴</div>
                                </div>
                                <button className="remove-btn" onClick={() => onRemove(index)}>
                                    🗑️
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="cart-footer">
                        <div className="total-price">
                            Разом: <span>{totalPrice.toLocaleString()} ₴</span>
                        </div>
                        <button className="checkout-btn">Оформити замовлення</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartModal;