import { Button, Form } from "react-bootstrap";

function TabContent({ id, body, changeHandler }) {
  return (
    <>
      <Form.Control
        as="textarea"
        value={body}
        onChange={(e) => changeHandler(id, e.target.value)}
        style={{ height: 200 }}
      />
      <Button className={"m-3"}>Save</Button>
    </>
  );
}

export default TabContent;
