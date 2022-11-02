import React, { useRef, useState, useEffect } from 'react'
import './catalog.css'

import { BsFunnel, BsFillCaretDownFill } from 'react-icons/bs'
import ProductServices from '../../services/ProductServices'
import ProductCard from '../../components/ProductCard/ProductCard'

const CatalogPage = () => {
  document.title = 'CaféBucks - Products'
  const filterContent = useRef(null)
  const arrow = useRef(null)

  const [products, setProducts] = useState([])

  let flag = true

  const togglePanel = () => {
    filterContent.current.classList.toggle('d-none');
    arrow.current.style.rotate(flag ? '0deg' : '180deg')
  }

  useEffect(()=>{
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      let res = await ProductServices.getProducts();

      console.log(res.data);

      if (res.status === 200) {
        setProducts(res.data)
      }
    } catch (error) {
      console.log(error.response.message);
    }
  }

  return (
    <div className='catalog__main'>
      <div className='filter__panel'>
        <div className="filter__title" onClick={togglePanel}>
          <span className='filter__icon-filter'><BsFunnel /></span>
          <h3>Filter</h3>
          <span className="filter__icon-arrow" ref={arrow}><BsFillCaretDownFill /></span>
        </div>
        <div className="filter__content" ref={filterContent}>
          <div className='filter__content-title'>
            <h3>By Category</h3>
            <span></span>
          </div>
          <div className="filter__content-options">
            <span>Category name</span>
            <input type="checkbox" />
          </div>
          <div className="filter__content-options">
            <span>Category name</span>
            <input type="checkbox" />
          </div>
          <div className='filter__content-title'>
            <h3>By Price</h3>
            <span></span>
          </div>
          <div className='filter__content-range'>
            <span>Min:</span>
            <select name="" id="">
              <option value="0">Min</option>
            </select>
            <span>Max:</span>
            <select name="" id="">
              <option value={Number.MAX_VALUE}>Max</option>
            </select>
          </div>
        </div>
      </div>
      <div className="content__panel">
        <section className="content__sort">
          <span>Newest</span>
          <span>Price High-To-Low</span>
          <span>Price Low-To-High</span>
          <span>Popularity</span>
        </section>
        <section className="content__repeater">
          {
            products.map(product => (
              <ProductCard
                image={`data:image/png;base64,${product.image}`}
                productName={product.foodName}
                price={product.price}
                discount={5 + Math.random() * 5}
              /> 
            ))
          }
        </section>
      </div>
    </div>
  )
}

export default CatalogPage