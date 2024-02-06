import React, { useEffect, useState } from "react";
import { axios } from "../../api/axios";
import Navbar from "../../screens/Navbar/Navbar";


const SingleBook = () => {
  const [singleBook, setSingleBook] = useState([]);
  const id = window.location.href.split("/")[4];
  useEffect(() => {
    axios.get(`/book/${id}`).then((res) => {
      setSingleBook(res?.data);
      console.log(res?.data);
    });
  }, []);
  return (
    <div className='flex  w-[100%]  h-[100vh]'>
      <Navbar />
      <div className="w-[100%] h-[100vh] flex items-center justify-center flex-col gap-[20px]">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{singleBook.name}</h1>
        <div className="w-[50%] h-[60vh] bg-slate-800 p-[10px]  flex gap-[10px]">
          <div className="w-[50%] h-[100%]">
            <img className="w-[100%] h-[100%] object-cover rounded-2xl" src={singleBook.image} alt={singleBook.name} />
          </div>
          <div className="w-[50%] bg-slate-400 h-[100%] p-[20px]">
            <h3 className="text-2xl mt-[20px]">Name: {singleBook?.name}</h3>
            <h3 className="text-xl mt-[20px]">Author: {singleBook?.author?.full_name}</h3>
            <h3 className="text-xl mt-[20px]">Price: ${singleBook?.price}</h3>
            <h3 className="text-xl mt-[20px]">Book code: {singleBook.code}</h3>
            <h3 className="text-xl mt-[20px]">Janr: {singleBook?.janr?.name}</h3>
            <h3 className="text-xl mt-[20px]">Description:</h3>

            <p>{singleBook.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
