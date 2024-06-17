// Models for the Purchase Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Your connection to the MongoDB server has failed.' });
    } else  {
        console.log('Success: You have successfully connected to the MongoDB server.');
    }
});

// SCHEMA: Define the collection's schema.
const purchaseSchema = mongoose.Schema({
	productName:    { type: String, required: true },
	price:     { type: Number, required: true },
	purchaseDate: { type: Date, required: true }
});

// Compile the model from the schema 
// by defining the collection name "purchases".
const purchases = mongoose.model('Purchases', purchaseSchema);


// CREATE model *****************************************
const createPurchase = async (productName, price, purchaseDate) => {
    const purchase = new purchases({ 
        productName: productName, 
        price: price, 
        purchaseDate: purchaseDate 
    });
    return purchase.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrievePurchases = async () => {
    const query = purchases.find();
    return query.exec();
}

// RETRIEVE by ID
const retrievePurchaseByID = async (_id) => {
    const query = purchases.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deletePurchaseById = async (_id) => {
    const result = await purchases.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updatePurchase = async (_id, productName, price, purchaseDate) => {
    const result = await purchases.replaceOne({_id: _id }, {
        productName: productName,
        price: price,
        purchaseDate: purchaseDate
    });
    return { 
        _id: _id, 
        productName: productName,
        price: price,
        purchaseDate: purchaseDate 
    }
}

// EXPORT the variables for use in the controller file.
export { createPurchase, retrievePurchases, retrievePurchaseByID, updatePurchase, deletePurchaseById }