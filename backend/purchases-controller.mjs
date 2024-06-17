// Controllers for the Purchase Collection

import 'dotenv/config';
import express from 'express';
import * as purchases from './purchases-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/purchases', (req,res) => { 
    purchases.createPurchase(
        req.body.productName, 
        req.body.price, 
        req.body.purchaseDate
        )
        .then(purchase => {
            console.log(`"${purchase.productName}" has been added to the collection.`);
            res.status(201).json(purchase);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The purchase has not been added to the collection.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/purchases', (req, res) => {
    purchases.retrievePurchases()
        .then(purchases => { 
            if (purchases !== null) {
                console.log(`All purchases were retrieved from the collection.`);
                res.json(purchases);
            } else {
                res.status(404).json({ Error: 'All purchases have not been retrieved from the collection.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The purchases could not be found.' });
        });
});


// RETRIEVE by ID controller
app.get('/purchases/:_id', (req, res) => {
    purchases.retrievePurchaseByID(req.params._id)
    .then(purchase => { 
        if (purchase !== null) {
            console.log(`"${purchase.productName}" was retrieved, based on its ID.`);
            res.json(purchase);
        } else {
            res.status(404).json({ Error: 'The purchase could not be retrieved, based on its ID.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The purchase could not be found.' });
    });

});


// UPDATE controller ************************************
app.put('/purchases/:_id', (req, res) => {
    purchases.updatePurchase(
        req.params._id, 
        req.body.productName, 
        req.body.price, 
        req.body.purchaseDate
    )
    .then(purchase => {
        console.log(`"${purchase.productName}" was updated.`);
        res.json(purchase);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The purchase could not be updated.' });
    });
});


// DELETE Controller ******************************
app.delete('/purchases/:_id', (req, res) => {
    purchases.deletePurchaseById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} purchase was deleted.`);
                res.status(200).send({ Success: 'The purchase has been deleted!' });
            } else {
                res.status(404).json({ Error: 'The purchase has not been deleted!' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'The purchase could not be found, based on its ID.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});