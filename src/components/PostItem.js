import React from 'react';
import { Card, CardBody, CardTitle } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const PostItem = () => {
    return (
        <Card>
            <CardBody>
                <Card.Title>제목</Card.Title>
                <Card.Text>내용</Card.Text>
                <Link to="" className="btn btn-primary">
                    자세히보기
                </Link>
            </CardBody>
        </Card>
    );
};

export default PostItem;