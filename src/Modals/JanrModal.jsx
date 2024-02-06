import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import { axios } from '../api/axios'


const JanrModal = ({open, toggle, editJanr}) => {
    const addJanr =(e)=> {
        e.preventDefault()
        let payload = {
            name: e.target[0].value ? e.target[0].value : editJanr.name
        }
        if(editJanr !== "") {
          axios.patch(`/category/update/${editJanr.id}`, {...payload}).then((res)=> {
            if(res.status === 200){
              window.location.reload()
            }
          })
        }
        else {
          axios.post("/category/create", {...payload}).then((res)=> {
            if(res.status === 201){
              window.location.reload()
            }
          })
        }
    }
  return (
    <div>
      <Modal isOpen={open} toggle={toggle}>
        <ModalBody>
            <h1 className='my-[20px]'>Add janr</h1>
            <form onSubmit={addJanr}>
                <input type="text" className='form-control my-[20px]'  placeholder="Janr" defaultValue={editJanr.name}/>
                <button className='btn btn-success'>Save</button>
            </form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default JanrModal
