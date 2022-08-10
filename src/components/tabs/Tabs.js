import { Tabs as Tabbs, Tab } from "react-bootstrap";
function Tabs() {
  return (
    <div style={{ width: "100%" }}>
      <Tabbs
        id="controlled-tab-example"
        defaultActiveKey="home"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          Home
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Profile
        </Tab>
        <Tab eventKey="contact" title="Contact">
          Contact
        </Tab>
      </Tabbs>
    </div>
  );
}

export default Tabs;
