import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { axios } from '../api/axios'

export default function DeleteBook({ open, toggle, id }) {
    const deleteBook = () => {
        axios.delete(`/book/${id}`).then((res) => {
            if (res.status === 200) {
                window.location.reload()
            }
        })
    }
    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h2>Siz rostdan o'chirmoqchimisiz?</h2>
            </ModalHeader>
            <ModalBody>
                <button onClick={toggle} className='bg-[#3ca1ff] mx-[5px] text-[#fff] rounded-[10px] py-[8px] px-[15px]'>No</button>
                <button onClick={deleteBook} className='bg-[#ff2d2d]  text-[#fff]  rounded-[10px] py-[8px] px-[15px]'>Yes</button>
            </ModalBody>
        </Modal>
    )
}
