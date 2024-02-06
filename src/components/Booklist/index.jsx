import React, { useEffect, useState } from "react";
import { axios } from "../../api/axios";

import { Link } from "react-router-dom";
import Navbar from "../../screens/Navbar/Navbar";





const Index = () => {
    const [books, setBooks] = useState([]);
    const [modal, setModal] = useState(false)
    const [items, setItems] = useState("")
    const [deleteBook, setDeleteBook] = useState(false)
    useEffect(() => {
        axios.get("/book").then((res) => {
            setBooks(res?.data);

        });

    }, []);


    const addBook = () => {
        setModal(true)
        setItems("")
    }

    const BookEdit = (item) => {
        setModal(true)
        setItems(item)
    }
    const remodeBook = (id) => {
        setDeleteBook(id)
        setItems(id)
    }

    const toggle = () => {
        setModal(false)
    }
    return (

        <div className="container" >
            <Navbar />


            <div className="flex">
                <div className="flex flex-col">
                    <button onClick={addBook} className=' bg-stone-600 px-[15px] py-[8px] rounded-[10px] text-[#fff]'>Add Book</button>
                    <h1>Books List</h1>

                </div>

                <div className="pr-[10px] pl-[300px] w-[100%]">

                    <div className="flex w-[100%] gap-3 flex-wrap">
                        {books.map((item, index) => {
                            return (

                                <div key={index} className="w-[280px] p-[10px] border-2 rounded-md bg-slate-200 my-5">
                                    <img src={item.image} alt={item.name} className="w-[100%] h-[200px] object-cover  p-8 rounded-t-lg" />
                                    <div className="card-footer">
                                        <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Name: {item.name}</h3>
                                        <h3 >Author: {item.author?.full_name}</h3>

                                    </div>

                                    <div className="flex justify-between w-[100%]">
                                        <h5 className="py-2 text-xl font-bolder text-gray-900 dark:text-white">Price: ${item.price}</h5>
                                        <Link to={`/single__book/${item.id}`} href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Batafsil</Link>


                                        

                                    </div>
                                    <div className='flex gap-[8px] mt-[15px]'>
                                            <button onClick={() => BookEdit(item)} className='bg-[#21589b] mt-[5px] mx-auto rounded-[10px] text-[#fff] py-[8px] w-[50%]'>edit</button>
                                            <button onClick={() => remodeBook(item.id)} className='bg-[#ff2525] mt-[5px] mx-auto rounded-[10px] text-[#fff] py-[8px] w-[50%]'>delete</button>
                                        </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Index;