import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import { Switch } from 'antd';
import 'antd/dist/antd.css';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const DarkMode = ({ theme, setTheme }) => {
    const [isStatus, setStatus] = useState(false);

    const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor};
  `;
    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    function onChange(checked) {
        console.log(`switch to ${checked}`);
    }

    const buttonHandler = () => {
        setStatus((status) => !status);
    };

    const changeTheme = value => {
        setTheme(value ? 'dark' : 'light');
    };

    const toggle = () => {
        const hours = new Date().getHours()
        const isDayTime = hours > 6 && hours < 20
        if (isDayTime) {
            import('antd/dist/antd.css')
        } else {
            import('antd/dist/antd.dark.css')
        };
    }

    return (
        <>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                <StyledApp>
                    {/* <Switch
                        onChange={buttonHandler}
                        onClick={() => toggle()}
                        checked={isStatus}
                    /> */}
                </StyledApp>
            </ThemeProvider>
            <Switch onChange={changeTheme} /> Change Style
        </>
    );
}

export default DarkMode;
