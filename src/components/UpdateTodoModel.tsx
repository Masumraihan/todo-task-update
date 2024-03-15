import { Modal } from 'antd'
import React from 'react'

type TUpdateTodoProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const UpdateTodo = ({ isOpen, setIsOpen }: TUpdateTodoProps) => {
  const handleOk = () => {
    setIsOpen(false)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <h1>Update Todo Modal</h1>
      </Modal>
    </>
  )
}

export default UpdateTodo
