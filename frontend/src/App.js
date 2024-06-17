// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
import TopicsPage from './pages/TopicsPage.js';
//import Purchase from './data/Purchase.js';
import HomePage from './pages/HomePage.js';
import PurchasesPage from './pages/PurchasesPage.js';
//import GalleryPage from './pages/GalleryPage.js';
//import OrderPage from './pages/OrderPage.js';
//import ContactPage from './pages/ContactPage.js';

// For Create and Edit, use the form OR table design; not both.

// If your schema requires SHORT data input, then use the TABLE design.
import EditPurchasePageTable from './pages/EditPurchasePageTable';
import AddPurchasePageTable from './pages/AddPurchasePageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [purchase, setPurchaseToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Minji Cho</h1> 
            <img src="android-chrome-192x192.png" alt="Minji Cho" />
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 

                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/topics" element={<TopicsPage />}/>
                    <Route path="/purchases" element={<PurchasesPage setPurchase={setPurchaseToEdit}/>} />           
                    <Route path="/create" element={<AddPurchasePageTable />} /> 
                    <Route path="/update" element={<EditPurchasePageTable purchaseToEdit={purchase} />} />

                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 Minji Cho</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;