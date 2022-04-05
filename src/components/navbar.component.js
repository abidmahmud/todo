import { Link } from "react-router-dom";
import { Menu, Switch, Divider } from 'antd';
import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
    CarryOutOutlined,
    PieChartOutlined
} from '@ant-design/icons';
import { useState } from "react";

const { SubMenu } = Menu;

function NavBar() {

    // const handleClick = e => {
    //     console.log('click ', e);
    // };
    const [theme, setTheme] = useState('light');

    const changeTheme = value => {
        setTheme(value ? 'dark' : 'light');
    };

    return (
        <>
            <Menu
                // onClick={handleClick}
                style={{ width: "100%" }}
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                mode="horizontal"
                theme="light"
            >
                <Menu.Item key="id1" icon={<CarryOutOutlined />}>
                    <Link to="/">Todo</Link>
                </Menu.Item>
                <Menu.Item key='id2' icon={<PieChartOutlined />}>
                    <Link to="/src/components/charts/chart.js">Charts</Link>
                </Menu.Item>

            </Menu>
        </>

    );
}

export default NavBar;