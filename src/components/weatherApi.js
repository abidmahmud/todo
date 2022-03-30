import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Input, Typography, Row } from 'antd';
import { Title } from '@material-ui/icons';

function Weather() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const { Text, Paragraph, Title } = Typography;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation("");
        }
    }

    // const saveLocalWeather = () => {
    //     localStorage.setItem('weather', JSON.stringify(data));
    // };

    // useEffect(() => {
    //     saveLocalWeather();
    // }, [data]);

    return (
        <Text >
            <Col span={30}>
                <Input
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder='Enter Location'
                    type="text" />
            </Col>
            <Text >
                <Text >
                    <Text >
                        <Title level={3}>{data.name}</Title>
                    </Text>
                    <Text >
                        {data.main ? <Title level={2}>{data.main.temp.toFixed()}°F</Title> : null}
                    </Text>
                    <Text className="description">
                        {data.weather ? <Paragraph>{data.weather[0].main}</Paragraph> : null}
                    </Text>
                </Text>

                {data.name !== undefined &&
                    <Row>
                        <Text >
                            <Text >
                                <Paragraph>Feels Like</Paragraph>
                                {data.main ? <Paragraph >{data.main.feels_like.toFixed()}°F</Paragraph> : null}
                            </Text>
                            <Text >
                                <Paragraph>Humidity</Paragraph>
                                {data.main ? <Paragraph >{data.main.humidity}%</Paragraph> : null}
                            </Text>
                            <Text >
                                <Paragraph>Wind Speed</Paragraph>
                                {data.wind ? <Paragraph>{data.wind.speed.toFixed()} MPH</Paragraph> : null}
                            </Text>
                        </Text>
                    </Row>
                }
            </Text>
        </Text>
    );
}

export default Weather;