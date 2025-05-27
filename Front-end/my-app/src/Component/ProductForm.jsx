import React, { useState } from "react";
import axios from "axios";

function ProductForm() {
    const [product, setProduct] = useState({ name: "", description: "",
    price: "", category: "" });
    const [error, setError] = useState(null);
    
    const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    };
    
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await
    axios.post("http://localhost:5000/api/products", product);
    console.log("Product created:", response.data);
    setProduct({ name: "", description: "", price: "", category: "" })
    } catch (error) {
    console.error("Error creating product:", error);
    setError("Failed to create product. Please try again later.");
    }
    };
    
    return (
    
    <div>
    <form action="" onSubmit={handleSubmit}>
    <h2 className="text-center">Add Product</h2>
    
    <div class="mb-3 mt-4">
    <input type="text" class="form-control" name="name"
    value={product.name} onChange={handleChange} placeholder="Enter Product
    Name"/>
    </div>
    <div class="mb-3">
    <input type="text" class="form-control" name="description"
    value={product.description} onChange={handleChange} placeholder="Enter
    Product Description"/>
    </div>
    <div class="mb-3">
    <input type="Number" class="form-control" name="price"
    value={product.price} onChange={handleChange} placeholder="Enter Product
    Price"/>
    </div>
    <div class="mb-3">
    <input type="text" class="form-control" name="category"
    value={product.category} onChange={handleChange} placeholder="Enter
    Product Categroy"/>
    </div>
    <div className="text-center">
    <button className="btn btn-success" style={{width:'200px'}}
    type="submit" >Add Product</button>
    </div>
    </form>
    </div>
    
    );
    }
    
    export default ProductForm;