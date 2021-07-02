import { Component } from 'react';

// Wijmo imports
import 'wijmo/styles/wijmo.css';
import { FlexGrid, FlexGridColumn } from 'wijmo/wijmo.react.grid';
import { FlexChart, FlexPie, FlexChartSeries } from 'wijmo/wijmo.react.chart';
import { RadialGauge } from 'wijmo/wijmo.react.gauge';

// import '../css/style.css';
import '../css/style.scss';

// Data imports
import { recentSales, salesByCountry, salesByPerson } from '../data/data.js';

interface props {
  checkBoxClick? : any;
  title? : String;
  children? : any;
  data? : any;
  salesData? : any;
  transactions? : any;
}

interface widgetData {
  recentSales: any;
  salesByCountry: any;
  salesByPerson: any;
  checkBoxClick : any;
}

class ChartPanel extends Component<props> {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 mt-1">
        <div className="card_dashboardPanel">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

class DataPanel extends Component<props> {
  render() {
    return (
      <div className="col-sm-12">
        <div className="card dashboardRow">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
  }

  class Gauge extends Component<props> {
    render() {
      return (
        <ChartPanel title="1">
          <div className="gauge">
            <RadialGauge
              min={0} max={500000}
              step={50} isReadOnly={true}
              thickness={0.15}
              value={this.props.data}
            />
          </div>
        </ChartPanel>
      );
    }
    
  }

  class SalesChart extends Component<props> {
    render() {
      return (
        <ChartPanel title="2">
          <FlexChart itemsSource={this.props.salesData}
            bindingX="country"
            style={{ height: "290px" }}
            palette={['rgba(171,125,246, 1)']}>
            <FlexChartSeries name="Sales" binding="sales" />
          </FlexChart>
        </ChartPanel>
      );
    }
    
  }

  class SalesPie extends Component<props> {
    render() {
      return (
        <ChartPanel title="3">
          <FlexPie itemsSource={this.props.salesData}
            binding="sales"
            bindingName="name"
            innerRadius={0.70}
            style={{ height: "290px" }} 
                    palette={['rgba( 171,125,246, 1)', 'rgba( 38, 193, 201, 1)', 'rgba( 129,201, 38, 1)', 'rgba( 250, 202, 0, 1)']} />
        </ChartPanel>
      );
    }
    
  }
  
  class TransactionList extends Component<props> {
    render() {
      return (
        <DataPanel title="4">
          <FlexGrid style={{ width: "100%" }}
            itemsSource={this.props.transactions}>
            <FlexGridColumn header="Client Name" binding="client" width="2*" />
            <FlexGridColumn header="Description" binding="description" width="3*" />
            <FlexGridColumn header="Total ($)" binding="value" width="1*" />
            <FlexGridColumn header="Quantity" binding="itemCount" width="1*" />
          </FlexGrid>
        </DataPanel>
      );
    }
    
  }
  
  class TestWidget4 extends Component<props> {
    render() {
      return (
        <ChartPanel title="4">
          <div className="text">
            test widget.
          </div>
        </ChartPanel>
      )
    }
  }

  const TestWidget5 = () => {
    return (
      <ChartPanel title="5">
        <div>
          test widget.
        </div>
      </ChartPanel>
    )
  }

  const TestWidget6 = () => {
    return (
      <ChartPanel title="6">
        <div>
          test widget.
        </div>
      </ChartPanel>
    )
  }

  const TestWidget7 = () => {
    return (
      <ChartPanel title="7">
        <div>
          test widget.
        </div>
      </ChartPanel>
    )
  }

  const TestWidget8 = () => {
    return (
      <ChartPanel title="8">
        <div>
          test widget.
        </div>
      </ChartPanel>
    )
  }

  const TestWidget9 = () => {
    return (
      <ChartPanel title="9">
        <div>
          test widget.
        </div>
      </ChartPanel>
    )
  }

class Widget extends Component<props, widgetData> {
    constructor(props: props) {
        super(props);
        this.state = {
          recentSales: recentSales,
          salesByCountry: salesByCountry,
          salesByPerson: salesByPerson,
          checkBoxClick : this.props.checkBoxClick,
        };
      }
      
    calculateSales() {
        let totalSales = 0;
        this.state.recentSales.forEach((sale: { value: number; }) => totalSales += sale.value);
        return totalSales;
    }

    render() {
        return(
            <>
            {console.log("widget : ", this.props.checkBoxClick)}
                <div className="container">
                    <div className="row">
                      {
                        this.state.checkBoxClick[1]
                        ? <Gauge data={this.calculateSales()} />
                        : null
                      }
                      {
                        this.state.checkBoxClick[2]
                        ? <SalesChart salesData={this.state.salesByCountry} />
                        : null
                      }
                      {
                        this.state.checkBoxClick[3]
                        ? <SalesPie salesData={this.state.salesByPerson} />
                        : null
                      }
                      {
                        this.state.checkBoxClick[4]
                        ? <TestWidget4 key={1} />
                        : null
                      }
                      {
                        this.state.checkBoxClick[5]
                        ? <TestWidget5 key={2} />
                        : null
                      }
                      {
                        this.state.checkBoxClick[6]
                        ? <TestWidget6 />
                        : null
                      }
                      {
                        this.state.checkBoxClick[7]
                        ? <TestWidget7 />
                        : null
                      }
                      {
                        this.state.checkBoxClick[8]
                        ? <TestWidget8 />
                        : null
                      }
                      {
                        this.state.checkBoxClick[9]
                        ? <TestWidget9 />
                        : null
                      }
                      {
                        this.state.checkBoxClick[10]
                        ? <div className="row">
                              <TransactionList transactions={this.state.recentSales} />
                          </div>
                        : null
                      }
                    </div>
                    
                </div>
            </>
        );
    }
}

export default Widget;