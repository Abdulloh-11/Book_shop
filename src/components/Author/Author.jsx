import React, { useEffect, useState } from 'react'

import ModalAuthor from '../../Modals/ModalAuthor'

import { Link } from 'react-router-dom'
import DeleteAuthor from '../../Modals/DeleteAuthor'
import { axios } from '../../api/axios'
import Navbar from '../../screens/Navbar/Navbar'

export default function Author() {
    const [modalAuthor, setModalAuthor] = useState(false)
    const [author, setAuthor] = useState([])
    const [ items, setItems] = useState("")
    const [deletelAuthor, setDeleteAuthor] = useState(false)
    
    useEffect(() => {
        axios.get("/author").then(res => {
            setAuthor(res?.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    const addAuther = () => {
        setModalAuthor(true)
        setItems("")
    }
    const toggle = () => {
        setModalAuthor(false)
    }
    const editAuthor = (item) => {
        setItems(item)
        setModalAuthor(true)
        console.log(item);
    }

    const removeAuthor = (id) => {
        setDeleteAuthor(true)
        setItems(id)
        
        
    }

    return (
        <div className=" flex gap-96">
        <Navbar/>
        
        <div className='mx-44'>
           
            <div className='ml-[180px] my-[20px]'>
                <ModalAuthor open={modalAuthor} toggle={toggle} items={items}  />
                <DeleteAuthor open={deletelAuthor} toggle={()=> setDeleteAuthor(false)} id={items}/>
                <button onClick={addAuther} className=' px-[15px] py-[8px] bg-slate-500 text-white rounded-[10px]'>Add Author</button>

                <div className="flex flex-wrap gap-[55px] w-[100%] my-[20px] px-[20px]">
                    {
                        author?.map((item, index) => {
                            return <div className='w-[280px]  h-[420px] mt-[20px] border p-[15px]' key={index}>
                                <img src={item.image} alt="img" className='h-[50%] w-[100%] object-cover' />
                                <h5 className='my-3 font-bold'>Full Name: <span className='text-black font-normal'>{item.full_name}</span></h5>
                                <h5 className="font-bold" >Country: <span className='text-black font-normal'>{item.country}</span></h5>
                                <Link to={`/single_autor/${item.id}`} className=' no-underline'><button className=' bg-emerald-700 mt-[5px] mx-auto rounded-[10px] text-white py-[8px] w-[100%]'>Batafsil</button></Link>
                                
                                <div className='flex gap-[8px]'>
                                    <button onClick={() => editAuthor(item)} className=' bg-sky-500 mt-[5px] mx-auto rounded-[10px] text-white py-[8px] w-[50%]'>edit</button>
                                    <button onClick={()=>removeAuthor(item.id)} className=' bg-red-600 mt-[5px] mx-auto rounded-[10px] text-white py-[8px] w-[50%]'>delete</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
        </div>
    )
}
