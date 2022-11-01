import React from 'react'
import './homepage.css'

import homebg from '../../images/home-bg.jpg'
import card_dish from '../../images/card-dish.jpg'
import card_cuisine from '../../images/card-cuisine.jpg'
import card_restaurant from '../../images/card-restaurant.jpg'
import card_hotdeals from '../../images/card-hotdeals.jpg'

import { HiMapPin, HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { FaCaretDown } from 'react-icons/fa'
import { motion } from 'framer-motion'

const HomePage = () => {
  document.title = 'CaféBucks - Home'
  return (
    <div className='home__main'>
      <div className="home__panel">
        <div className="home__bg">
          <img src={homebg} alt="background" />
        </div>
        <div className="home__content">
          <h1 className="title">
            CaféBucks
          </h1>
          <p>
            Discover the best Food and Drinks in Ayodhya-Faizabad
          </p>
          <div className="search__container">
            <div className="search__box">
              <div className="search__option">
                <HiMapPin style={{ color: "red" }} />
                <input type="text" placeholder='Ayodhya-Faizabad' />
                <FaCaretDown />
              </div>
              <div className="search__divider"></div>
              <hr className='search_v_divider' />
              <div className="search__text">
                <HiOutlineMagnifyingGlass />
                <input placeholder='Search for Restaurant, cuisine or a dish' />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="card__repeater">
        <motion.div className="card" whileHover={{ scale: .95 }}>
          <img src={card_dish} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Order Food</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </motion.div>

        <motion.div className="card" whileHover={{ scale: .95 }}>
          <img src={card_restaurant} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Check Restaurants</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </motion.div>

        <motion.div className="card" whileHover={{ scale: .95}}>
          <img src={card_cuisine} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Explore Cuisines</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </motion.div>

        <motion.div className="card" whileHover={{ scale: .95 }}>
          <img src={card_hotdeals} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Hot Deals</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HomePage