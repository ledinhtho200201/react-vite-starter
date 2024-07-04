import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserTable from './users.table';
import BlogTable from './blogs.table';

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
                <BlogTable />
            </Tab>
        </Tabs>
    );
}

export default TabContent;