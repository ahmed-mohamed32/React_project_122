
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/header'
import { Home } from './components/home'
import { Category } from './components/categories'
import { ContactUs } from './components/contact-us'
import { Footer } from './components/footer'
import { ProductDetails } from './components/productDetails'

function App() {

  return (
    <>
     
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Category />}/>
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
