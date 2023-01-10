import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./App.css";

import CourseCard from "./CourseCard";

let startingCourses = [
  {
    number: "110",
    name: "Computation, Programming",
    description: "I love Dr Racket",
  },
];

function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [courses, setCourses] = useState(startingCourses);

  let newCourse = {};

  function addCourse(event) {
    event.preventDefault();

    newCourse = {
      number,
      name,
      description,
    };

    courses.push(newCourse);
    setCourses(courses);

    setNumber("");
    setName("");
    setDescription("");
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            {" "}
            <Form onSubmit={addCourse}>
              <Form.Group className="mb-3">
                <Form.Label>Course Number</Form.Label>
                <Form.Control
                  placeholder="Course code"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Course Name</Form.Label>
                <Form.Control
                  placeholder="Name of the course"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Course Description</Form.Label>
                <Form.Control
                  placeholder="Enter detail about the course"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            {courses.map((course, index) => {
              return (
                <CourseCard
                  key={index}
                  number={course.number}
                  name={course.name}
                  description={course.description}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
