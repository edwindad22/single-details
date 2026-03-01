import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SiteNotification from './components/SiteNotification'
import Home from './pages/Home'
import Book from './pages/Book'
import Merch from './pages/Merch'
import Subscribe from './pages/Subscribe'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-cream">
        <Navbar />
        <SiteNotification />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
