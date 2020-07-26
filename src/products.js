import React, { Component } from 'react'
import {Link,productData,Route,} from "react-router-dom"

const Products =({match}) =>{
const productsData = [
{
id: 1,
name: "NIKE Liteforce Blue Sneakers",
description:
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
status: "Available",
},
{
id: 2,
name: "Stylised Flip Flops and Slippers",
description:
"Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor",
tatus: "Out of Stock",
},
{
id: 3,
name: "ADIDAS Adispree Running Shoes",
escription:
"Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
tatus: "Available",
},
{
id: 4,
ame: "ADIDAS Adispree Running Shoes",
description:
"Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
status: "Out of Stock",
},
];

const LinkList = productsData.map((product)=>{ 

return ( 
<li> 
    <Link to={`${match.url}/${product.id}`} >{product.name}</Link>
</li>


);
}
);

return (
  <div>
    <div>
      <div> <h3>products</h3> 
<ul>{LinkList}</ul>
      </div>
    </div>
  

<Route  path={`${match.url}/:productId`} 
    render={(props) => <Products data={productsData} {...props} />}
/>
<Route exact path={match.url}
render={()=> <div>please select a product.</div>}
/>
</div>
)
}

export default Products
