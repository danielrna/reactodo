import React from 'react'
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import { Row, Col, Button, Divider, Typography } from 'antd'
const { Text } = Typography;

export const Todo = ({ todo, checkboxAction, buttonAction }) => {
    return (
        <Row gutter={[16, 16]}>
            <Col span={6} />
            <Col span={2} >
                <input id={todo.id}
                    type="checkbox"
                    checked={todo.completed}
                    onChange={checkboxAction}
                />
            </Col>
            <Col span={8} >
                <Text strong>{todo.text}</Text>
            </Col>
            <Col span={8} >
                <Button onClick={buttonAction}>

                    <DeleteOutlined ></DeleteOutlined>
                </Button>
            </Col>
            <Divider />
        </Row>

    )
}


