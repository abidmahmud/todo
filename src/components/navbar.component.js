import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

function NavBar() {

    // const handleClick = e => {
    //     console.log('click ', e);
    // };

    return (
        <>
            <Menu
                // onClick={handleClick}
                style={{ width: 256 }}
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                mode="horizontal"
            >
                <Menu.Item key="id1" icon={<AppstoreOutlined />}>
                    <Link to="/">Todo</Link> |{" "}
                </Menu.Item>
                <Menu.Item key='id2' icon={<AppstoreOutlined />}>
                    <Link to="/src/components/chart.js">Charts</Link>
                </Menu.Item>

            </Menu>
        </>

    );
}

export default NavBar;