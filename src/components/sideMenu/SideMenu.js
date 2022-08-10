import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import posts from "../../data/posts";
import { useDispatch } from "react-redux";
import { openTab } from "../../redux/features/tab/tabsSlice";

function SideMenu() {
  const dispatch = useDispatch();
  const handleCreateNew = () => {
    const id = Math.floor(Math.random() * 10000);
    const title = prompt("Enter file name", "Untitled");
    dispatch(openTab({ id, title, body: "", tempBody: "" }));
  };
  return (
    <ListGroup>
      <ListGroup.Item onClick={handleCreateNew}>
        <Link to="#">Create File</Link>
      </ListGroup.Item>
      {posts.map((item) => (
        <ListGroup.Item
          key={item.id}
          onClick={() => dispatch(openTab({ ...item, tempBody: item.body }))}
        >
          <Link to={`/${item.id}`}>{item.title.slice(0, 15)}...</Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default SideMenu;
