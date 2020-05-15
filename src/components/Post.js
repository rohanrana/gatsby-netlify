/* eslint-disable react/prop-types */
import React from "react";
import { Card, Button } from "react-bootstrap";
export default function Post(props) {
  return (
    <Card style={{ width: "28rem", marginTop: 10 }}>
      <Card.Img variant="top" src={props.image} alt="Gatsby" />
      <Card.Body>
        <Card.Title dangerouslySetInnerHTML={{ __html: props.title }} />
        <Card.Text dangerouslySetInnerHTML={{ __html: props.excerpt }} />
        <Button variant="warning" href={props.readMore}>
          Read More . . .{" "}
        </Button>
      </Card.Body>
    </Card>
  );
}
