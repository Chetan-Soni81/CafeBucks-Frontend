import React, { useState, useEffect } from 'react'
import './productpage.css'

import { Input, Label,FormGroup, Table } from 'reactstrap'
import AdminServices from '../../services/AdminServices'
import { toast } from 'react-toastify'
import { useNavigate} from 'react-router-dom'

const AdminProductPage = () => {
    const [foodName, setFoodName] = useState("")
    const [price, setPrice] = useState(0);
    const [about, setAbout] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState();

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])


    useEffect(() => {
        const getCategory = async () => {
            try {
                const res = await AdminServices.getCategories()

                if (res.status === 200) {
                    console.log(res.data);
                    setCategories(res.data);
                }
            } catch (error) {
                toast.error("Cannot be created")
            }
        }

        
        getCategory()
        getProducts()
    }, [])
    
    const getProducts = async () => {
        try {
            const res = await AdminServices.getProducts()
            console.log(res.data);
            setProducts(res.data)

        } catch (error) {
            toast.error('cannot fetch products')
        }
    }

    const insertProduct = async (e) => {
        e.preventDefault()
        try {
            let data = new FormData()
            data.append('foodName', foodName);
            data.append('price', price);
            data.append('about', about);
            data.append('category', category);
            data.append('image', image);

            const res = await AdminServices.addProduct(data);

            if (res.status === 201) {
                toast.success('Product Created')
                getProducts()
            }
            } catch (error) {
                toast.error('cannot be created')
        }
    }

    const handleChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setImage(file)
    }

    const DeleteAction = async (id) => {
        try {
            const res = await AdminServices.deleteProduct(id);

            if (res.status === 200) {
                toast.success('Product Deleted')
                getProducts()
            }
        } catch (error) {
            toast.error('Server Error')
        }
    }

    return (
        <main className="admin_prod_main">
            <div className="prod_form_panel">
                <form onSubmit={insertProduct}>
                    <h3>Add Product</h3>
                    <div className="mb-3">
                        <Label>Product Name:</Label>
                        <Input value={foodName} onChange={e => setFoodName(e.target.value)} placeholder="Product Name" />
                    </div>
                    <div className="mb-3">
                        <Label>Price: </Label>
                        <Input type='number' value={price} onChange={e => setPrice(e.target.value)} placeholder='Price' />
                    </div>
                    <div className="mb-3">
                        <Label>Category:</Label>
                        <Input type='select' value={category} onChange={e => setCategory(e.target.value)}>
                            <option value=''>Select a category</option>
                            {
                                categories.map(item => <option value={item._id} key={item._id}>{item.categoryName}</option>)
                            }
                        </Input>
                    </div>
                    <FormGroup>
                        <Label for="exampleFile">
                            Product Image:
                        </Label>
                        <Input
                            id="exampleFile"
                            name="file"
                            type="file"
                            onChange={e => handleChange(e)}
                            accept='image/*'
                        />
                    </FormGroup>
                    <div className="mb-3">
                        <Label>Product Description:</Label>
                        <Input type='textarea' value={about} onChange={e => setAbout(e.target.value)} placeholder="Product Description" />
                    </div>
                    <div className="mb-3">
                        <button type='submit'>Add</button>
                    </div>
                </form>
            </div>
            <div className="prod_table_panel">
                <h3>Product List</h3>
                    <Table responsive='true' bordered hover>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Product Image</th>
                                <th>About</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((item, index) => 
                                    <tr key={index}>
                                        <td>{index +1}</td>
                                        <td>{item.foodName}</td>
                                        <td>₹{item.price}</td>
                                        <td>{item.category ? item.category.categoryName : "cateogory not found"}</td>
                                        <td><img src={`data:image/png;base64,${item.image}`} alt={item._id} width={32}/></td>
                                        <td>{item.about}</td>
                                        <td>
                                            <button style={{color: 'white', background:'#dd0000'}} onClick={() => DeleteAction(item._id)}>Delete</button>
                                            <button className='ms-2' style={{color: '#fff', background: '#fd0'}}>Update</button></td>
                                    </tr>)
                            }
                        </tbody>
                    </Table>
            </div>
        </main>
    )
}

export default AdminProductPage