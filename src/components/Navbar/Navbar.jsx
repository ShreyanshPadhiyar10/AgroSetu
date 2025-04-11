'use client'
import Link from 'next/link'
import React from 'react'
import Button from '../UI/Buttons/Button'
import favicon from '/src/app/favicon.ico'
import Image from 'next/image'

function Navbar() {
  return (
    <>
      <div className='px-5 py-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-x-7'>
            <h1 className='text-xl font-bold'>AgroSetu</h1>
            <ul className='flex gap-x-7 font-normal'>
              <li><Link href={'#'}>Home</Link></li>
              <li><Link href={'#'}>Products</Link></li>
              <li><Link href={'#'}>Orders</Link></li>
              <li><Link href={'#'}>Marketplace</Link></li>
            </ul>
          </div>
          <div className='flex items-center gap-x-5'>
            <Button type='success'>Add Product</Button>
            <div className='rounded-full'>
              <Image src={favicon} alt='Profile' height={35} width={35} />
            </div>
          </div>
        </div>
      </div>
      <hr className='opacity-25'/>
    </>
  )
}

export default Navbar