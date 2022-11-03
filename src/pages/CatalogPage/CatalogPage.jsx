import React, { useRef, useState, useEffect } from 'react'
import './catalog.css'

import { BsFunnel, BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'
import ProductServices from '../../services/ProductServices'
import ProductCard from '../../components/ProductCard/ProductCard'

const CatalogPage = () => {
  document.title = 'CaféBucks - Products'
  const filterContent = useRef(null)
  const arrow = useRef(null)

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [flag, setFlag] = useState(true)
  

  const togglePanel = () => {
    filterContent.current.classList.toggle('d-none');
    setFlag(!flag)
  }

  useEffect(() => {
    getProducts();
    getCategories();
  }, [])

  const getProducts = async () => {
    try {
      let res = await ProductServices.getProducts();

      // console.log(res.data);

      if (res.status === 200) {
        setProducts(res.data)
      }
    } catch (error) {
      console.log(error.response.message);
    }
  }

  const getCategories = async () => {
    try {
      let res = await ProductServices.getCategory();

      // console.log(res.data);

      if (res.status === 200) {
        setCategories(res.data)
      }
    } catch (error) {
      console.log(error.response.message);
    }
  }

  return (
    <main className='catalog__main'>
      <div className='filter__panel'>
        <div className="filter__title" onClick={togglePanel}>
          <span className='filter__icon-filter'><BsFunnel /></span>
          <h3>Filter</h3>
          {
            !flag ? 
            <span className="filter__icon-arrow" ref={arrow}><BsFillCaretDownFill /></span>
            : 
            <span className="filter__icon-arrow" ref={arrow}><BsFillCaretUpFill /></span>
          }
        </div>
        <div className="filter__content" ref={filterContent}>
          <div className='filter__content-title'>
            <h3>By Category</h3>
            <span></span>
          </div>
          {
            categories.map(category => <div key={category._id} className="filter__content-options">
              <span>{category.categoryName}</span>
              <input type="checkbox" />
            </div>)
          }

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
          <div>Newest</div>
          <div>Price High-To-Low</div>
          <div>Price Low-To-High</div>
          <div>Popularity</div>
        </section>
        <section className="content__repeater">
          {
            products.map(product => (
              <ProductCard
                key={product._id}
                productId={product._id}
                image={`data:image/png;base64,${product.image}`}
                productName={product.foodName}
                price={product.price}
                discount={5 + Math.random() * 5}
              />
            ))
          }
        </section>
      </div>
    </main>
  )
}

export default CatalogPage