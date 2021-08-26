
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from "@syncfusion/ej2-react-charts";
import { DashboardLayoutComponent, PanelDirective, PanelsDirective } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';

//import css
import '../../css/DraggingTest.css';

//https://ej2.syncfusion.com/react/documentation/dashboard-layout/interaction-with-panels/dragging-moving-of-panels/
class DraggingTest extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.cellSpacing = [10, 10];
    //     this.state = {
    //         checkBoxClick: this.props.checkBoxClick,
    //       };
    // }
    // Template for line Chart 
    lineTemplate() {
        const lineData = [
            { x: 2013, y: 28 }, { x: 2014, y: 25 }, { x: 2015, y: 26 }, { x: 2016, y: 27 },
            { x: 2017, y: 32 }, { x: 2018, y: 35 },
        ];
        return (<div className="template">
            <ChartComponent style={{ "height": "162px" }}>
                <Inject services={[LineSeries]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={lineData} xName='x' yName='y' type='Line'/>
                    </SeriesCollectionDirective>
            </ChartComponent>
            </div>);
    }
    // Template for Pie Chart
    pieTemplate() {
        const pieData = [
            { x: 'TypeScript', y: 13, text: 'TS 13%' },
            { x: 'React', y: 12.5, text: 'Reat 12.5%' },
            { x: 'MVC', y: 12, text: 'MVC 12%' },
            { x: 'Core', y: 12.5, text: 'Core 12.5%' },
            { x: 'Vue', y: 10, text: 'Vue 10%' },
            { x: 'Angular', y: 40, text: 'Angular 40%' }
        ];
        return (<div className="template">
            <AccumulationChartComponent style={{ "height": "162px" }} tooltip={{ enable: true }}>
                <Inject services={[AccumulationTooltip]}/>
                <AccumulationSeriesCollectionDirective>
                    <AccumulationSeriesDirective dataSource={pieData} xName='x' yName='y' innerRadius="40%"/>
                </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
            </div>);
    }
    // Template for Pie Chart 1
    pieTemplate1() {
        const pieData = [
            { 'x': 'Chrome', y: 37, text: '37%' },
            { 'x': 'UC Browser', y: 17, text: '17%' },
            { 'x': 'iPhone', y: 19, text: '19%' },
            { 'x': 'Others', y: 4, text: '4%' },
            { 'x': 'Opera', y: 11, text: '11%' },
            { 'x': 'Android', y: 12, text: '12%' }
        ];
        const dataLabel = { visible: true, position: 'Inside', name: 'text', font: { fontWeight: '600' } };
        const enableAnimation = false;
        return (<div className="template">
                <AccumulationChartComponent style={{ "height": "162px" }} enableAnimation={enableAnimation} legendSettings={{ visible: false }} tooltip={{ enable: true, format: `${10} : <b>${10}%</b>` }}>
                    <Inject services={[AccumulationTooltip]}/>
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective dataSource={pieData} dataLabel={dataLabel} xName='x' yName='y' radius="70%" name='Browser'/>
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
            </div>);
    }
    //차트표
    columnTemplate() {
        const chartData = [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
        ];
        return (<div className="template">
                <ChartComponent style={{ "height": "162px" }} primaryXAxis={{ valueType: 'Category' }}>
                    <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={chartData} xName='month' yName='sales' type='Column'/>
                        </SeriesCollectionDirective>
                </ChartComponent>
            </div>);
    }
    render() {
        return (<div id='container'>
           <DashboardLayoutComponent id="dashboard_default" draggableHandle='.e-panel-header' columns={6} cellSpacing={this.cellSpacing} allowResizing={true}>
                <PanelsDirective>
                    <PanelDirective sizeX={2} sizeY={2} row={0} col={0} content={this.pieTemplate} header="<div class='header'>Product usage ratio</div><span class='handler e-icons burg-icon'></span>"/>
                    <PanelDirective sizeX={2} sizeY={2} row={0} col={2} content={this.pieTemplate} header="<div class='header'>Last year Sales Comparison</div><span class='handler e-icons burg-icon'></span>"/>
                    <PanelDirective sizeX={2} sizeY={2} row={0} col={4} content={this.pieTemplate} header="<div class='header'>Mobile browsers usage</div><span class='handler e-icons burg-icon'></span>"/>
                    <PanelDirective sizeX={2} sizeY={2} row={2} col={0} content={this.lineTemplate} header="<div class='header'>Sales increase percentage</div><span class='handler e-icons burg-icon'></span>"/>
                    <PanelDirective sizeX={2} sizeY={2} row={2} col={2} content={this.lineTemplate} header="<div class='header'>Sales increase percentage</div><span class='handler e-icons burg-icon'></span>"/>
                    <PanelDirective sizeX={2} sizeY={2} row={2} col={4} content={this.lineTemplate} header="<div class='header'>Product usage ratio</div><span class='handler e-icons burg-icon'></span>"/>
                    <PanelDirective sizeX={2} sizeY={2} row={4} col={0} content={this.columnTemplate} header="<div class='header'>Last year Sales Comparison</div><span class='handler e-icons burg-icon'></span>"/>
                    <PanelDirective sizeX={2} sizeY={2} row={4} col={2} content={this.columnTemplate} header="<div class='header'>Mobile browsers usage</div><span class='handler e-icons burg-icon'></span>"/>
                    <PanelDirective sizeX={2} sizeY={2} row={4} col={4} content={this.columnTemplate} header="<div class='header'>Sales increase percentage</div><span class='handler e-icons burg-icon'></span>"/>
                    <PanelDirective sizeX={2} sizeY={2} row={6} col={0} content={this.pieTemplate1} header="<div class='header'>Sales increase percentage</div><span class='handler e-icons burg-icon'></span>"/>
                </PanelsDirective>
            </DashboardLayoutComponent>
        </div>);
    }
}

export default DraggingTest;