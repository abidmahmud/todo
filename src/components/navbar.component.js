import { Link } from "react-router-dom";
import { Menu, Layout, Switch, Divider, Typography, Button } from 'antd';
import {
    MailOutlined, CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
    CarryOutOutlined,
    PieChartOutlined
} from '@ant-design/icons';
import { useState, useEffect } from "react";
import { useTheme } from "./themes/use-theme";
import './DarkMode/theme.dark.less';
import './DarkMode/theme.light.less';

const { SubMenu } = Menu;
const { Content } = Layout;
const { Title } = Typography;

const themeTexts = {
    'light': {
        titleText: 'Good morning 🌤',
        buttonText: 'Change to dark',
    },
    'dark': {
        titleText: 'Good night 🌔',
        buttonText: 'Change to light',
    }
}


function NavBar() {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        const time = new Date().getHours()
        const day = time > 6 && time < 18
        if (day) {
            import('antd/dist/antd.css')
        } else {
            import('antd/dist/antd.dark.css')
        }
    }, [])

    useEffect(() => {
        if (theme === 'light') {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        } else {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
        }
    }, [theme])

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const [darkMode, setDarkMode] = useState(true);

    const toggle = () => {
        if (!theme) {
            import('antd/dist/antd.dark.css')
            setDarkMode(theme)
        }
        else {
            import('antd/dist/antd.css')
            setDarkMode(theme)
        }
    }

    // const handleClick = e => {
    //     console.log('click ', e);
    // };

    // const changeTheme = value => {
    //     setTheme(value ? 'dark' : 'light');
    // };
    // const [darkMode, setDarkMode] = useTheme();

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
                    {/* <Button onClick={changeTheme}>{themeTexts[theme].buttonText}</Button> */}
                    {/* <Switch onChange={toggle} /> */}
                </Menu.Item>

            </Menu>
        </>

    );
}

export default NavBar;