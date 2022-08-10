import { Tabs as Tabbs, Tab } from "react-bootstrap";
import TabContent from "./TabContent";
import TabHeader from "./TabHeader";
import { useSelector } from "react-redux";

function Tabs() {
  const { tabs } = useSelector((state) => state.tabs);
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
