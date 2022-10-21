import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function Assignment(props)
{
    return <Row className="rounded mt-4">
                <Col>
                <Card style={{ width: '100%', background: props.subject == 'Biology'? '#73C8EF' : props.subject == 'Business Studies'? '#FFCC22' : 'pink'}}>
                    <Card.Body>
                        <Card.Title style={{ fontSize: '3rem'}}>{props.subject}</Card.Title>
                        <Card.Text className="text-white">
                        due on: 12/08/21
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
}

export default Assignment;