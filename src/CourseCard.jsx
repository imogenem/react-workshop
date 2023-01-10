import Card from 'react-bootstrap/Card';

function CourseCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>CPSC {props.number}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.name}</Card.Subtitle>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;