import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditPurchasePageTable = ({ purchaseToEdit }) => {
 
    const [productName, setProductName]       = useState(purchaseToEdit.productName);
    const [price, setPrice]         = useState(purchaseToEdit.price);
    const [purchaseDate, setPurchaseDate] = useState(purchaseToEdit.purchaseDate.slice(0,10));
    
    const redirect = useNavigate();

    const editPurchase = async () => {
        const response = await fetch(`/purchases/${purchaseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                productName: productName, 
                price: price, 
                purchaseDate: purchaseDate
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Purchase has been successfully edited!`);
        } else {
            const errMessage = await response.json();
            alert(`Purchase has not been edited. ${response.status}. ${errMessage.Error}`);
        }
        redirect("../purchases");
    }

    return (
        <>
        <article>
            <h2>Edit a purchase</h2>
            <p>Anything you want to change? Input the updated information.</p>
            <table id="purchases">
                <caption>Which purchase are you editing?</caption>
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
                            placeholder="Price"
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
                            onClick={editPurchase}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditPurchasePageTable;