import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector} from "react-redux";
import Table from 'react-bootstrap/Table';

const CheckOut=()=>{

    const myCard= useSelector((state)=>state.mycard.card);


    let sno=0;
  let totalAmount=0;
    const ans= myCard.map((key)=>{

        
        totalAmount+=key.price*key.qnty;
        sno++;
        return(
            <>
               <tr>
                <td>{sno} </td>
                <td>
                 <img src={key.image} width="100" height="100" /> </td>
                <td> {key.name} </td>
             
                <td> {key.category} </td>
                <td> {key.price} </td>
                <td> 
                
                      {key.qnty}
                  

                      
                    </td>
                <td> 
                
                    {key.price * key.qnty} 
                
                </td>
                <td>
                   
                </td>
               </tr>
            
            </>
        )
    })






    return(
        <>
        <div id="payPage">
              <div id="payForm">
    <h1> Fill Your Shipping Address</h1>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Pin Code</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mobile</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
              </div>
               <div id="payMethod">
                
                
                
                
               <Table striped bordered hover>
      <thead>
        <tr>
          <th> S.No.</th>
          <th> </th>
          <th>Name</th>
          <th>Category</th>
          <th> Price </th>
          <th> Quantity</th>
          <th> Total Price</th>
          <th> </th>
        </tr>

      </thead>
      <tbody>
          {ans}
          <tr>
          <th> </th>
          <th> </th>
          <th></th>
          <th></th>
          <th></th>
          <th>  </th>
          <th> Net Amount</th>
          <th> {totalAmount}</th>
          </tr>
          <tr>
          <th> </th>
          <th> </th>
          <th></th>
          <th></th>
          <th></th>
          <th>  </th>
          <th> 

      

          </th>
          <th> </th>
          </tr>
        </tbody>
        </Table>

                
                
                
                
                
                
                
                
                 </div>  
        </div>
       

        </>
    )
}
export default CheckOut;