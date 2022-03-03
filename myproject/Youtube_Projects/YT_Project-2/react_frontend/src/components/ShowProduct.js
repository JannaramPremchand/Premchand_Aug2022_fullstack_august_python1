import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ShowProduct() {
  const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const result = await axios.get('http://localhost:8000/api/');

        console.log(result.data)
        setProducts(result.data)
    }

    useEffect(() => {
      fetchProducts();
    }, [])

    // const goToDetail = () => {
    //     alert("detail page")
    // }
  return (
    <div>
      <div className="main-students-show">
            {
                products.map((Product, index) => (
                    <Card className="m-3 rounded shadow-lg main-students-show" style={{ width: '22em' }}>

                    <Card.Img variant="top"  src={Product.image} alt="img"/>

                    <Card.Body>
                        <Card.Title>{Product.name}</Card.Title>
                        <Card.Text> {Product.category} </Card.Text>
                        <Card.Text> &#36; {Product.price} </Card.Text>
                        <Link className="btn btn-primary mr-2" to={`/${Product.id}`}><Button>Full Detail</Button>
                        </Link>
                    </Card.Body>
                    </Card>
                ))

            }
            </div>
           
    </div>
  )
}

export default ShowProduct