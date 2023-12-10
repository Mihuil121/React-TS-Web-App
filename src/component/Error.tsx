import React from 'react'

interface ErrorMassage {
    error: string
}

export default function Error({error}:ErrorMassage) {
  return (
    <div><p className='text-center text-red-600'>{error};
    </p></div>
  )
}
