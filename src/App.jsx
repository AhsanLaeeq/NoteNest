import { HashRouter, Route,Routes } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Hero from "./Components/Hero/Hero"

function App() {


  return (
    <>
     <HashRouter>


      <Routes>
        <Route  path="/" element={<Layout/>}>
        <Route index element ={<Hero/>}/>

        </Route>
      </Routes>
     </HashRouter>
    </>
  )
}

export default App
