import React from 'react'
import { useProducts } from '../hooks/products';
import Product from '../component/Product';
import Loder from '../component/loder';
import Error from '../component/Error';
import Modal from '../component/Model';
import CreateProduct from '../component/CreateProduct'
import { useState } from 'react';
import { create } from 'domain';
import { IProduct } from '../models';

export default function ProductsPage() {
    const { loding, error, products,addProduct} = useProducts()
    const[modal,setModal]= useState(true)
    
    
    const createHandler = (product: IProduct) => {
      setModal(false);
      addProduct(product);
    };
    
      return (
        <div className="container mx-auto max-w-2xl pt-5">
          {loding && <Loder />}
          {error && <Error error='error' />}
          {products.map(product => <Product product={product} key={product.id} />)}
    
          {modal &&<Modal title='Creat new product' onClose={()=>setModal(false)}>
            <CreateProduct onCreat={createHandler}/>
          </Modal>}
          <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
          onClick={()=>setModal(true)}
          >+</button>
        </div>
      )
}
