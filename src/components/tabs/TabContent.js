import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateTab } from "../../redux/features/tab/tabsSlice";

function TabContent({ id, body }) {
  const dispatch = useDispatch();
  const changeHandler = (value) => {
    dispatch(updateTab({ id, tempBody: value }));
  };
  return (
    <>
      <Form.Control
        as="textarea"
        value={body}
        onChange={(e) => changeHandler(e.target.value)}
        style={{ height: 200 }}
      />
      <Button className={"m-3"}>Save</Button>
    </>
  );
}

export default TabContent;
