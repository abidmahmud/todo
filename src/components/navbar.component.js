import { Link } from "react-router-dom";
import { Menu, Switch, Divider, Typography, Button } from 'antd';
import {
    MailOutlined, CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
    CarryOutOutlined,
    PieChartOutlined
} from '@ant-design/icons';
import { useState, useEffect } from "react";
import { useTheme } from "./DarkMode/use-theme";

const { SubMenu } = Menu;

function NavBar() {

    // useEffect(() => {
    //     const time = new Date().getHours()
    //     const day = time > 6 && time < 18
    //     if (day) {
    //         import('antd/dist/antd.css')
    //     } else {
    //         import('antd/dist/antd.dark.css')
    //     }
    // }, [])

    const [darkMode, setDarkMode] = useState(false);

    const toggle = () => {
        if (!darkMode) {
            import('antd/dist/antd.dark.css')
        }
        else {
            import('antd/dist/antd.css')
        }
    }

    // const handleClick = e => {
    //     console.log('click ', e);
    // };

    // const changeTheme = value => {
    //     setTheme(value ? 'dark' : 'light');
    // };

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
                    <Link to="/charts">Charts</Link>
                </Menu.Item>

                <Menu.Item key='id3' style={{ justifyContent: "end" }}>
                    <Button onClick={toggle}>Toggle</Button>
                </Menu.Item>
            </Menu>
        </>

    );
}

export default NavBar;