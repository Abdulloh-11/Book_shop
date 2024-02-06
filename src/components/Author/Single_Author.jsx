import React, { useEffect, useState } from 'react'
import { axios } from '../../api/axios'

import Navbar from '../../screens/Navbar/Navbar'

export default function Single_Author() {
  const [data, setData] = useState([])
  const [createdAt, setCreatedAt] = useState([])
  const [updatedAt, setUpdatedAt] = useState([])
  const [author, setAuthor] = useState("")
  let url = window.location.href.split('/')[4]
  useEffect(() => {
    axios.get(`/author/${url}`).then((res) => {
      setAuthor(res?.data)
      setData(res.data.birthdate.slice(0, 10))
      setCreatedAt(res.data.createdAt.slice(0, 10))
      setUpdatedAt(res.data.updatedAt.slice(0, 10))
    })
  }, [])
  return (
    <div className='flex  w-[100%]  h-[100vh]'>
      <Navbar />
      <div className="flex flex-col gap-10 my-9">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mx-96">Autor Biography</h1>
      <div className=' flex justify-center items-center w-[100%] ml-[250px] '>
      
        <div style={{ boxShadow: '10px 14px 16px 15px rgba(255, 255, 255)' }} className='flex gap-[50px] p-[20px] bg-gray-600 justify-center items-center' >
          <div>
            <img src={author.image} alt="img" className='w-[350px] h-[350px] object-cover' />
          </div>
          <div className='flex flex-col gap-[15px]'>
            <h6 className='text-white text-2xl'>Full Name: {author.full_name}</h6>
            <h6 className='text-white text-xl'>Country: {author.country}</h6>
            <h6 className='text-white text-xl'>Birthdate: {data}</h6>
            <h6 className='text-white text-xl'>CreatedAt: {createdAt}</h6>
            <h6 className='text-white text-xl'>UpdatedAt: {updatedAt}</h6>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
