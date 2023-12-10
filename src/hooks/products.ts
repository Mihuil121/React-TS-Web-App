import Product from '../component/Product';

import React, { useEffect, useState } from 'react';
//import { products } from './data/products';
import axios from 'axios';
import { IProduct } from '../models';
import { AxiosError } from 'axios';


export function useProducts(){
    const [products, setProducts] = useState<IProduct[]>([])

  const [loding, setLoding] = useState(false)

  const [error, setError] = useState('')

function addProduct (product:IProduct){
  setProducts(prev =>[...prev,product])
}


  async function Feth() {
    try {
      setError('')
      setLoding(true)
      const respots = await axios.get<IProduct[]>('https://fakestoreapi.com/products?category=22')
      setProducts(respots.data)
      setLoding(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoding(false)
      setError(error.message)
    }

  }
  useEffect(() => {
    Feth()
  }, [])
  return{
    products,error,loding,addProduct
  }
}