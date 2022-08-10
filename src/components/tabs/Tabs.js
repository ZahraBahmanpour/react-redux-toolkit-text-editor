import { Tabs as Tabbs, Tab } from "react-bootstrap";
import tabs from "../../data/tabs";
import TabContent from "./TabContent";
import TabHeader from "./TabHeader";
function Tabs() {
  return (
    <div style={{ width: "100%" }}>
      <Tabbs
        id="controlled-tab-example"
        defaultActiveKey="home"
        className="mb-3"
      >
        {tabs.map((tab) => (
          <Tab key={tab.id} eventKey={tab.id} title={<TabHeader {...tab} />}>
            <TabContent body={tab.tempBody} id={tab.id} />
          </Tab>
        ))}
      </Tabbs>
    </div>
  );
}

export default Tabs;
