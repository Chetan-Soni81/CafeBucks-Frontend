import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductServices from '../../services/ProductServices';
import './buypage.css'

import RatingStar from '../../components/UI/RatingStar';
import ProductCard from '../../components/ProductCard/ProductCard';

const BuyPage = () => {
    const param = useParams()
    const id = param.id;

    const [product, setProduct] = useState({})
    const [relatedList, setRelatedList] = useState([]);

    useEffect(() => {
        async function getProduct() {
            try {
                const res = await ProductServices.getProductById(id)
                console.log(res.data);

                setProduct(res.data)
            } catch (error) {

            }
        }
        async function getRelated() {
            try {
                let res = await ProductServices.getProducts();

                if (res.status === 200) {
                    let related = (res.data).filter(item => (item._id).toString() !== id)
                    setRelatedList(related)
                }
            } catch (error) {
                console.log(error.response.message);
            }
        }
        getProduct()
        getRelated()
        window.scrollTo(0 ,0 )
    }, [id])


    return (
        <main>
            <section className="container single__product my-5 ">
                <div className="row mt-5">
                    <div className="col-lg-5 col-md-12 col-12">
                        <img src={`data:image/png;base64,${product.image}`} alt="product" className='img-fluid w-100' />

                        <div className='small_img_group'>
                            <div className="small_img_col">
                                <img src={`data:image/png;base64,${product.image}`} alt='product1' className='small_img' />
                            </div>
                            <div className="small_img_col">
                                <img src={`data:image/png;base64,${product.image}`} alt='product1' className='small_img' />
                            </div>
                            <div className="small_img_col">
                                <img src={`data:image/png;base64,${product.image}`} alt='product1' className='small_img' />
                            </div>
                            <div className="small_img_col">
                                <img src={`data:image/png;base64,${product.image}`} alt='product1' className='small_img' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 product__desc">
                        <h6>Home / {"Category"}</h6>
                        <h3>{product.foodName}</h3>
                        <h2><strike className="me-1">₹{product.price}</strike>₹{(product.price - product.price * (5 + Math.random() * 5) / 100).toFixed(0)}</h2>
                        <RatingStar />
                        <select >
                            <option value="S">Small</option>
                            <option value="M">Medium</option>
                            <option value="L">Large</option>
                        </select>
                        <input type={'number'} placeholder='1' />
                        <button className='buy__btn'>Add To Cart</button>
                        <h4>Product Details</h4>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repudiandae voluptate maiores consequuntur consequatur aperiam, id magni, suscipit numquam quasi laborum voluptatum, quibusdam sequi labore?</span>
                    </div>
                </div>
            </section>
            <section className='container related__panel mb-3'>
                <h3 className='text-center'>Other Products</h3>
                <div className="product__repeater">
                    {
                        relatedList.map(item => (
                            <ProductCard
                                key={item._id}
                                productId={item._id}
                                image={`data:image/png;base64,${item.image}`}
                                productName={item.foodName}
                                price={item.price}
                                discount={5 + Math.random() * 5}
                            />
                        ))
                    }
                </div>
            </section>
        </main>
    )
}

export default BuyPage