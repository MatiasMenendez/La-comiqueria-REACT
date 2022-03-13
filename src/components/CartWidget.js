import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return <li className="nav-item">
    <FontAwesomeIcon icon={faCartShopping} />
    </li>}

export default CartWidget;