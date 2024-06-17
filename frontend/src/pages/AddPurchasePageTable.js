import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddPurchasePageTable = () => {

    const [productName, setProductName]       = useState('');
    const [price, setPrice]         = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    
    const redirect = useNavigate();

    const addPurchase = async () => {
        const newPurchase = { productName, price, purchaseDate };
        const response = await fetch('/purchases', {
            method: 'post',
            body: JSON.stringify(newPurchase),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Purchase has been successfully added!`);
        } else {
            alert(`Purchase has not been added = ${response.status}`);
        }
        redirect("../purchases");
    };


    return (
        <>
        <article>
            <h2>Add a purchase</h2>
            <p>Want to add a new purchase? Input the information.</p>
            
            <table id="purchases">
                <caption>Which purchase are you adding?</caption>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Purchase Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="productName"></label>
                        <textarea
                            type="text"
                            placeholder="Name of purchase"
                            value={productName}
                            onChange={e => setProductName(e.target.value)} 
                            id="productName" />
                    </td>

                    <td><label for="price"></label>
                        <input
                            type="number"
                            value={price}
                            placeholder="Price of purchase"
                            onChange={e => setPrice(e.target.value)} 
                            id="price" />
                    </td>

                    <td><label for="purchaseDate"></label>
                        <input
                            type="text"
                            placeholder="Date of purchase"
                            value={purchaseDate}
                            onChange={e => setPurchaseDate(e.target.value)} 
                            id="purchaseDate" />
                    </td>

                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={addPurchase}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddPurchasePageTable;