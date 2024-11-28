import { useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { addToCard } from '../cardSlice';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ShopProduct=()=>{
    const [input, setInput]= useState({});
    const [mydata,setMydata]=useState([])
    const dispatch= useDispatch();
    const navigate= useNavigate();
    
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }
    const handleSubmit=()=>{
        let api="http://localhost:8000/product/shopproduct";
        axios.post(api, input).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    const addcardData=(id, name, categ, price, image)=>{
        dispatch(addToCard({id:id, name:name,  category:categ, price:price, image:image, qnty:1}))
 }

 const ans=mydata.map((key)=>{
   return(
     <>
       <Card style={{ width: '18rem', marginTop:'20px' }}>

    <a href='#' onClick={()=>{navigate(`/prodetail/${key._id}`)}}>
     <Card.Img variant="top" src={key.image} style={{height:'300px'}} />
     </a>
     <Card.Body>
       <Card.Title>{key.name}</Card.Title>
       <Card.Text>
         {key.description}
         <br/>
         For- {key.category}
         <br/>
        <span style={{color:'red', fontWeight:'bold'}}> Price : {key.price} </span> 
       </Card.Text>
       <Button variant="primary"
        onClick={()=>{addcardData(key._id, key.name,  key.category, key.price, key.image)}}
       >Add to Cart</Button>
     </Card.Body>
   </Card>
     
     </>
   )
 })

    return(
        <>
         <h1 align="center"> Your Food items</h1>
         <div id="shoppage">
            <div id="shopMenu"> 
              <h5> Set Your Pattern</h5>
              Low Price: <input type="text" name="lprice" value={input.lprice} onChange={handleInput} />
              <br/>
              High Price: <input type="text" name="hprice" value={input.hprice} onChange={handleInput} />
              <br/>
               <input type="checkbox" value="cake" name="cakecat" onChange={handleInput}/> Cake
              <br/>
             <input type="checkbox" value="salad" name="saladcat" onChange={handleInput}/> Salad
              <br/>
              <input type="checkbox" value="pizza" name="pizzacat" onChange={handleInput}/>  Pizza
             <br/>
             
             <Button variant="primary" size="sm" onClick={handleSubmit}>
          Show Result
        </Button>
              


            </div>
            <div id="shopData"> </div>
            <div id="carddata">
        {ans}
        </div>   
         </div>
        </>
    )
}

export default ShopProduct;