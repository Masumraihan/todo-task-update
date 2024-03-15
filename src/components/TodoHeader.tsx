import { Button, Col, Input, Row } from 'antd'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import AddTodoModel from './AddTodoModel'

const TodoHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Row className="todo-header" gutter={10}>
      <Col xs={24} md={12}>
        <h2 className="text-orange todo-title">Todo Application </h2>
      </Col>
      <Col xs={20} sm={22} md={8} lg={9}>
        <Input
          placeholder="Search Todo"
          size="large"
          style={{ border: '#525ceb 1px solid' }}
          suffix={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </>
          }
        />
      </Col>
      <Col xs={4} sm={2} md={4} lg={3}>
        <Button
          size="large"
          className="btn"
          onClick={() => setIsOpen((pre) => !pre)}>
          <p className="add-btn-text">Add Todo</p>
          <Plus size={20} />
        </Button>
      </Col>
      <AddTodoModel isOpen={isOpen} setIsOpen={setIsOpen} />
    </Row>
  )
}

export default TodoHeader
