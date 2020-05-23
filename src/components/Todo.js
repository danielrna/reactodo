import React from 'react'
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import { Row, Col } from 'antd'

export const Todo = ({ todo, checkboxAction, buttonAction }) => {
    return (
        <Row gutter={[16, 16]}>
            <Col span={8} >
                <input id={todo.id}
                    type="checkbox"
                    checked={todo.completed}
                    onChange={checkboxAction} />
            </Col>
            <Col span={8} >
                <label>
                    <h2>{todo.text}
                        <span>subtext</span>
                    </h2>
                </label>
            </Col>
            <Col span={8} >
                <DeleteOutlined onClick={buttonAction}></DeleteOutlined>
            </Col>
        </Row>

    )
}


