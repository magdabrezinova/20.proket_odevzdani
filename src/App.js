import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Pokemon from "./pages/Pokemon"
import SharedLayout from "./pages/SharedLayout"
import "./App.css";


const App = () => {
  return <BrowserRouter>

    <Routes>
      <Route path="/" element={ <SharedLayout /> }>
        <Route index element={<Home />} />
        <Route path="/Pokemon" element={<Pokemon />} />
      </Route>
    </Routes>
    
  </BrowserRouter>
}

export default App