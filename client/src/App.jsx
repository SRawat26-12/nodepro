import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashboard from "./admin/AdminDashboard";
import InsertProduct from "./admin/InsertProduct";
import CardData from "./pages/CardData";
import ProductDetail from "./pages/ProductDetail";

import Salad from "./pages/Salad";
import Search from "./pages/Search";
import ShopProduct from "./pages/ShopProduct";
import Cake from "./pages/Cake";
import Pizza from "./pages/Pizza";
import CheckOut from "./pages/CheckOut";

const App=()=>{
  return(
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/> }/>  
            <Route path="home" element={<Home/> }/>     
            <Route path="carddata" element={<CardData/>}/>
            <Route path="prodetail/:proid" element={<ProductDetail/>}/>
            <Route path="cake" element={<Cake/>} />
            <Route path="pizza" element={<Pizza/>}/>
            <Route path="salad" element={<Salad/>} />
            <Route path="search" element={<Search/>} />
            <Route path="shop" element={<ShopProduct/>}/>
            <Route path="checkout" element={<CheckOut/>} />
          </Route>
        </Routes>
        <Routes>
           <Route path="/admin" element={<AdminDashboard/>} >
             <Route path="insertpro" element={<InsertProduct/>}/>
             
           </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;