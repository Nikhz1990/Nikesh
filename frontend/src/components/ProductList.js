import React from "react";

const products = [
  {
    id:1,
    name:"Photo Frame Gift",
    price:"₹799",
    image:"https://via.placeholder.com/200"
  },
  {
    id:2,
    name:"Custom Mug",
    price:"₹499",
    image:"https://via.placeholder.com/200"
  }
]

function ProductList(){

  return(

    <div style={{padding:"20px"}}>

      <h2>Gift Products</h2>

      <div style={{display:"flex",gap:"20px"}}>

        {products.map(product => (

          <div key={product.id} style={{border:"1px solid #ddd",padding:"10px"}}>

            <img src={product.image} width="200"/>

            <h3>{product.name}</h3>

            <p>{product.price}</p>

            <button>Customize</button>

          </div>

        ))}

      </div>

    </div>

  )

}

export default ProductList;