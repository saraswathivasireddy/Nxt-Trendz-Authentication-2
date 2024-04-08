// Write your JS code here
import './index.css'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'

const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="cart-bg-container">
      <Header />
      <div className="products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="products-image"
        />
      </div>
    </div>
  )
}

export default Cart
