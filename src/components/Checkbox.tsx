import React, { Component  } from 'react';
import Widget from './Widget';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DraggingTest from './dragdrop/DraggingTest';

// drag and drop
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface props { 
}

interface checkBoxlist {
  checkBoxClick : any;
  checkBoxDefaultStatus: boolean;
  anchorEl : any; 
}

class Checkbox extends Component<props, checkBoxlist> {
  constructor(props: props) {
    super(props);
    this.state = {
      checkBoxClick: { 
        1: true, 2: true, 3: true, 4: true, 5: true, 
        6: true, 7: true, 8: true, 9: true, 10: true, 
      },
      checkBoxDefaultStatus: true, // check all
      anchorEl : null, // 메뉴
    };
    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this); 
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
  }

  //체크박스 클릭
  handleCheckBoxClick(no: number) { 
    var checkBoxClick = this.state.checkBoxClick;
    checkBoxClick[no] = !this.state.checkBoxClick[no]; 
    this.setState({
      checkBoxClick,
    });

    var alltrue = Object.keys(checkBoxClick).every((k) => {
      return checkBoxClick[k];
    });
    if (alltrue) {
      this.handleMultiSelect();
    } else if (this.state.checkBoxDefaultStatus === true && !alltrue) {
      this.handleMultiSelect();
    }
    if (this.state.checkBoxDefaultStatus) {
      this.handleMultiSelect();
    }
    console.log(this.state.checkBoxClick);
  }

  // check all 변경
  handleMultiSelect() {
    this.setState({
      ...this.state,
      checkBoxDefaultStatus: !this.state.checkBoxDefaultStatus,
    },
    () => { 
      console.log(this.state.checkBoxDefaultStatus);
      if(this.state.checkBoxDefaultStatus){
        var checkBoxClick = this.state.checkBoxClick;
        var k = 1;
        while(k <= Object.keys(this.state.checkBoxClick).length){
          checkBoxClick[k] = this.state.checkBoxDefaultStatus; 
          this.setState({
            ...this.state,
            checkBoxClick : checkBoxClick
          });
          k++;
        }
      } 
    }); 
  }

  //메뉴
  handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.setState({
      ...this.state,
      anchorEl : event.currentTarget,
    });
  }
  handleClose() {
    this.setState({
      ...this.state,
      anchorEl : null,
    });
  }
  
  render() {
    const title = "title";
    return (
       <>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(e) => {this.handleClick(e)}} style={{float: 'right'}}>
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={() => {this.handleClose()}}
        >
          <MenuItem>
            <Switch
              onChange={() => {this.handleMultiSelect();}}
              checked={this.state.checkBoxDefaultStatus}
              color="primary"
            />
            Check all
          </MenuItem>
          <MenuItem>
            <Switch
              checked={this.state.checkBoxDefaultStatus ? this.state.checkBoxDefaultStatus : this.state.checkBoxClick[1]}
              onChange={() => {this.handleCheckBoxClick(1);}}
            />Bar 1<br />
          </MenuItem>
          <MenuItem>
            <Switch
              checked={this.state.checkBoxDefaultStatus ? this.state.checkBoxDefaultStatus : this.state.checkBoxClick[2]}
              onChange={(e) => {this.handleCheckBoxClick(2);}}
            />Bar 2<br />
          </MenuItem>
          <MenuItem>
            <Switch
              checked={this.state.checkBoxDefaultStatus ? this.state.checkBoxDefaultStatus : this.state.checkBoxClick[3]}
              onChange={(e) => {this.handleCheckBoxClick(3);}}
            />Bar 3<br />
          </MenuItem>
          <MenuItem>
            <Switch
              checked={this.state.checkBoxDefaultStatus ? this.state.checkBoxDefaultStatus : this.state.checkBoxClick[4]}
              onChange={(e) => {this.handleCheckBoxClick(4);}}
            />Bar 4<br />
          </MenuItem>
          <MenuItem>
            <Switch
              checked={this.state.checkBoxDefaultStatus ? this.state.checkBoxDefaultStatus : this.state.checkBoxClick[5]}
              onChange={(e) => {this.handleCheckBoxClick(5);}}
            />Bar 5<br />
          </MenuItem>
          <MenuItem>
            <Switch
              checked={this.state.checkBoxDefaultStatus ? this.state.checkBoxDefaultStatus : this.state.checkBoxClick[6]}
              onChange={(e) => {this.handleCheckBoxClick(6);}}
            />Bar 6<br />
          </MenuItem>
          <MenuItem>
            <Switch
              checked={this.state.checkBoxDefaultStatus ? this.state.checkBoxDefaultStatus : this.state.checkBoxClick[7]}
              onChange={(e) => {this.handleCheckBoxClick(7);}}
            />Bar 7<br />
          </MenuItem>
          <MenuItem>
            <Switch
              checked={this.state.checkBoxDefaultStatus ? this.state.checkBoxDefaultStatus : this.state.checkBoxClick[8]}
              onChange={(e) => {this.handleCheckBoxClick(8);}}
            />Bar 8<br />
          </MenuItem>
          <MenuItem>
            <Switch
              checked={this.state.checkBoxDefaultStatus ? this.state.checkBoxDefaultStatus : this.state.checkBoxClick[9]}
              onChange={(e) => {this.handleCheckBoxClick(9);}}
            />Bar 9<br />
          </MenuItem>
          <MenuItem>
            <Switch
              checked={this.state.checkBoxDefaultStatus ? this.state.checkBoxDefaultStatus : this.state.checkBoxClick[10]}
              onChange={(e) => {this.handleCheckBoxClick(10);}}
            />Bar 10<br />
          </MenuItem>
        </Menu>

        <DndProvider backend={HTML5Backend}>
          <div>
            {/* <Widget checkBoxClick={this.state.checkBoxClick} /> */}
            <DraggingTest checkBoxClick={this.state.checkBoxClick} />
          </div>
        </DndProvider>
      </>
    );
  }
}

export default Checkbox;
