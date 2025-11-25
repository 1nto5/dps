import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import News from './components/News'
import Documents from './components/Documents'
import RODO from './components/RODO'
import BIP from './components/BIP'

function App() {
  return (
    <BrowserRouter basename="/dps">
      <ScrollToTop />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aktualnosci" element={<News />} />
          <Route path="/aktualnosci/:id" element={<ArticlePage />} />
          <Route path="/dokumenty" element={<Documents />} />
          <Route path="/rodo" element={<RODO />} />
          <Route path="/bip" element={<BIP />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
