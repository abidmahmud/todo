import { Layout, Radio } from 'antd';
import React, { useState, useRef, useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { Link } from 'react-router-dom';

const Pie = () => {

    useLayoutEffect(() => {

        let root = am5.Root.new("PieChartdiv");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        const chart = root.container.children.push(am5percent.PieChart.new(root, {
            layout: root.verticalLayout
        }));

        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        const series = chart.series.push(am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category"
        }));

        series.states.create("hidden", {
            endAngle: -90
        });

        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        series.data.setAll([{
            category: "Lithuania",
            value: 501.9
        }, {
            category: "Czechia",
            value: 301.9
        }, {
            category: "Ireland",
            value: 201.1
        }, {
            category: "Germany",
            value: 165.8
        }, {
            category: "Australia",
            value: 139.9
        }, {
            category: "Austria",
            value: 128.3
        }, {
            category: "UK",
            value: 99
        }]);

        series.appear(1000, 100);

        // Add cursor
        chart.set("cursor", am5xy.XYCursor.new(root, {}));
        return () => {
            root.dispose();
        };
    }, []);

    return (
        <>
            <div id="PieChartdiv" style={{ width: "100%", height: "500px" }}></div>
        </>

    );
}

export default Pie;