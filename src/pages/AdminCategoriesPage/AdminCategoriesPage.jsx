import React, { useState, useEffect } from 'react'
import './categorypage.css'

import { Container, Label, Input, Table } from 'reactstrap'
import AdminServices from '../../services/AdminServices'
import { toast } from 'react-toastify'

const AdminCategoriesPage = () => {
    const [categoryName, setCategoryName] = useState("")
    const [categories, setCategories] = useState([])

    const insertCategory = async (e) => {
        e.preventDefault();

        try {

        } catch (error) {

        }
    }

    useEffect(() => {
        const getCategory = async () => {
            try {
                const res = await AdminServices.getCategories()

                if (res.status === 200) {
                    console.log(res.data);
                    setCategories(res.data);
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }

        getCategory()
    }, [])

    return (
        <main>
            <Container>
                <div className="cate_form_panel">
                    <form onSubmit={insertCategory}>
                        <h3>Insert Category</h3>
                        <div className="mb-3">
                            <Label>Category Name:</Label>
                            <Input value={categoryName} onChange={(e) => setCategoryName(e.target.value)} placeholder='Category Name' />
                        </div>
                        <div className="mb-3">
                            <button className='add_category' type='submit'>Add</button>
                        </div>
                    </form>
                </div>

                <div className="cate_table_panel">
                    <h3>Category List</h3>
                    <Table responsive hover>
                        <thead>
                            <tr>
                                <th>S.no.</th>
                                <th>Category Id</th>
                                <th>Category Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.map((item, index) => (
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>{item._id}</td>
                                        <td>{item.categoryName}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>
        </main>
    )
}

export default AdminCategoriesPage