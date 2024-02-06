import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import { axios } from '../api/axios'


const DeleteJanr = ({open, toggle, removeJanr}) => {
    const remove_janr =()=> {
        axios.delete(`/category/delete/${removeJanr.id}`).then((res)=> {
            if(res.status === 200){
                window.location.reload()
            }
        })
    }
  return (
    <div>
      <Modal isOpen={open} toggle={toggle}>
        <ModalBody>
            <h1>Siz rostdan o'chirmoqchimisiz {removeJanr?.name}?</h1>
            <button className='px-[15px] py-[8px] text-teal-50 bg-indigo-500 rounded-md mr-3' onClick={toggle}>cancel</button>
            <button className='px-[15px] py-[8px] text-teal-50 bg-red-600 rounded-md' onClick={remove_janr}>delete</button>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default DeleteJanr
