import React, { FormEvent, useState, ChangeEvent } from 'react';
import { IProduct } from '../models';
import axios from 'axios'
import Error from './Error';


const productData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreatProductProps {
    onCreat: (product:IProduct)=>void
}


export default function CreateProduct({onCreat}:CreatProductProps) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setError('')
        if (value.trim().length === 0) {
            setError("please enter valid title ")
            return
        }

        productData.title = value
        const responts = await axios.post<IProduct>("https://fakestoreapi.com/products", productData)
    
        onCreat(responts.data)
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);

    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className='border py-2 px-4 mb-2 w-full outline-0'
                value={value}
                placeholder='Enter'
                onChange={handleChange}
                aria-label='Product Name'
            />
            {error && <Error error={error} />}

            <button type='submit' className='py-2 px-4 border bg-yellow-400 hover:text-white' aria-label='Create Product'>Create</button>
        </form>
    );
}
