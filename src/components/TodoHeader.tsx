import { Button, Col, Row } from "antd";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddTodoModel from "./AddTodoModel";
import TodoSearch from "./TodoSearch";

const TodoHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Row className='todo-header' gutter={10}>
      <Col xs={24} md={12}>
        <h2 className='text-orange todo-title'>Todo Application </h2>
      </Col>
      <Col xs={20} sm={22} md={8} lg={9}>
        <TodoSearch />
      </Col>
      <Col xs={4} sm={2} md={4} lg={3}>
        <Button size='large' className='btn' onClick={() => setIsOpen((pre) => !pre)}>
          <p className='add-btn-text'>Add Todo</p>
          <Plus size={20} />
        </Button>
      </Col>
      <AddTodoModel isOpen={isOpen} setIsOpen={setIsOpen} />
    </Row>
  );
};

export default TodoHeader;
