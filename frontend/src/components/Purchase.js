import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { IoIosTrash } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

function Purchase({ purchase, onEdit, onDelete }) {
    return (
        <tr>
            <td>{purchase.productName}</td>
            <td>{purchase.price}</td>
            <td>{purchase.purchaseDate.slice(0,10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td><IoIosTrash onClick={() => onDelete(purchase._id)} /></td>
            <td><CiEdit onClick={() => onEdit(purchase)} /></td>
        </tr>
    );
}

export default Purchase;