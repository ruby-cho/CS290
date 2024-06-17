import React from 'react';
import Purchase from './Purchase';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function PurchaseList({ purchases, onDelete, onEdit }) {
    return (
        <table id="purchases">
            <caption>Add and Edit Purchases</caption>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Purchase Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {purchases.map((purchase, i) => 
                    <Purchase 
                        purchase={purchase} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default PurchaseList;
