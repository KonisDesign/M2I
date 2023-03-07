import React, { useState } from 'react'
import './Cart.css'

const Cart = ({ cart, updateCart }) => {

    const [isOpen, setIsOpen] = useState(false)

    const Total = cart.reduce((acc, cours) => acc + (cours.amount * cours.price), 0)

    return isOpen ? (
        <div className='relative'>
            <div className="cart-list over">
                {
                    cart.length > 0 ?
                        <div>
                            <h2>Panier</h2>
                            <div className='inner-card'>
                                {
                                    cart.map(({ name, price, amount }, index) => (
                                        <div key={index}>
                                            {name} : {price}€ x {amount}
                                            <hr/>
                                        </div>
                                    ))
                                }
                                <h3>Total : {Total}€</h3>
                            </div>
                            <button className='btn btn-secondary space-top' onClick={() => updateCart([])}>Vider le panier</button>
                        </div> :

                        <div className='vide'>Votre panier est vide</div>
                }
                <button className='btn btn-secondary spaced' onClick={() => setIsOpen(false)}>Fermer le panier</button>
            </div>
        </div>
    )
        :
        (
            <button className='btn btn-secondary spaced' onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
        );
}

export default Cart