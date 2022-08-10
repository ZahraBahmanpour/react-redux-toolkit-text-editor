import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import posts from "../../data/data";

function SideMenu() {
  return (
    <ListGroup>
      <ListGroup.Item>
        <Link to="#">Create File</Link>
      </ListGroup.Item>
      {posts.map((item) => (
        <ListGroup.Item key={item.id}>
          <Link to={`/${item.id}`}>{item.title.slice(0, 15)}...</Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default SideMenu;
