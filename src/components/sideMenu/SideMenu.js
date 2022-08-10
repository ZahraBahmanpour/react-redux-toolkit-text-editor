import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <ListGroup>
      <ListGroup.Item>
        <Link to="#">Create File</Link>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SideMenu;
