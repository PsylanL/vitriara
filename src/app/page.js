import React from "react";
import { useRoutes, BrowserRouter } from 'react-router-dom'
import '../../src/styles/globals.css';
import { client } from '../../lib/client'


const index = ({products, bannerData}) =>{
  return(
    <>

    HeroBanner
    <div className="products-heading">
      <h2>Best Selling Products</h2>
    </div>
    <div className="products-container">
      {products?.map((product) => product.name)}
    </div>
      Footer
    </>
  )
}

export default index