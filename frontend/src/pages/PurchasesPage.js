import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PurchaseList from '../components/PurchaseList';
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from "react-icons/io";

function PurchasesPage({ setPurchase }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [purchases, setPurchases] = useState([]);

    // RETRIEVE the entire list of purchases
    const loadPurchases = async () => {
        const response = await fetch('/purchases');
        const purchases = await response.json();
        setPurchases(purchases);
    } 
    

    // UPDATE a single purchase
    const onEditPurchase = async purchase => {
        setPurchase(purchase);
        redirect("/update");
    }


    // DELETE a single purchase  
    const onDeletePurchase = async _id => {
        const response = await fetch(`/purchases/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/purchases');
            const purchases = await getResponse.json();
            setPurchases(purchases);
        } else {
            console.error(`Failed to delete = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the purchases
    useEffect(() => {
        loadPurchases();
    }, []);

    // DISPLAY the purchases
    return (
        <>
            <h2>List of Purchases</h2>
            <p>Shows purchases from this year. Click on the add, edit, or delete buttons to make changes.</p>
            <Link to="/create">Add <IoIosAddCircle/></Link>
            <PurchaseList 
                purchases={purchases} 
                onEdit={onEditPurchase} 
                onDelete={onDeletePurchase} 
            />
        </>
    );
}

export default PurchasesPage;