import { Layout, Radio } from 'antd';
import React, { useState, useRef, useLayoutEffect } from 'react';
import BarChart from './barChart';
import ColumnChart from './columnChart';
import Pie from './pieChart.component';

const Chart = () => {

    const [chart, setChart] = useState("pie");

    const options = [
        { label: 'Pie Chart', value: 'pie' },
        { label: 'Column Chart', value: 'column' },
        { label: 'Bar Chart', value: 'bar' },
    ];

    const onChange = (e) => {
        console.log(e.target.value);
        setChart(e.target.value);
    };

    return (
        <>
            <Layout style={{ textAlign: 'center' }}>
                <Radio.Group
                    defaultValue="pie"
                    options={options}
                    onChange={onChange}
                    value={chart}
                    optionType="button"
                    buttonStyle="solid"
                >
                </Radio.Group>
            </Layout>

            {chart === 'pie' ? (
                <Pie />
            ) : chart === 'column' ? (
                <ColumnChart />
            ) : (
                <BarChart />
            )}
        </>
    );
}

export default Chart;