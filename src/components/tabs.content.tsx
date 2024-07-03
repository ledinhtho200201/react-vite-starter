import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserTable from './users.table';

function TabContent() {
    return (
        <Tabs
            defaultActiveKey="user"
            transition={false}
            id="noanim-tab-example"
            className="mb-3 mt-3"
        >
            <Tab eventKey="user" title="Users">
                <UserTable />
            </Tab>
            <Tab eventKey="blog" title="Blogs">
                Tab content for Profile
            </Tab>
        </Tabs>
    );
}

export default TabContent;