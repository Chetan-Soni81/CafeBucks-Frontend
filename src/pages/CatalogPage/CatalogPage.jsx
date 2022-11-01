import React, { useRef } from 'react'
import './catalog.css'

import { BsFunnel, BsFillCaretDownFill, BsFillCaretUpFill, BsLockFill } from 'react-icons/bs'

const CatalogPage = () => {
  document.title = 'CaféBucks - Products'
  const filterContent = useRef(null)
  const arrow = useRef(null)
  
  let flag = true

  const togglePanel = () => {
    filterContent.current.classList.toggle('d-none');
    arrow.current.style.rotate(flag ? '0deg' : '180deg')
  }

  return (
    <div className='catalog__main'>
      <div className='filter__panel'>
        <div className="filter__title" onClick={togglePanel}>
          <span className='filter__icon-filter'><BsFunnel /></span>
          <h3>Filter</h3>
            <span className="filter__icon-arrow" ref={arrow}><BsFillCaretDownFill/></span>
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
      <div className="content__panel"></div>
    </div>
  )
}

export default CatalogPage