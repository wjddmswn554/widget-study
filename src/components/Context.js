// context example

import React, { Component, useContext } from 'react';

const MyContext = React.createContext(
  {
    bool: true,
    toggleBool: () => {},
  }
);

const toggleStyle = (bool) => ({
  backgroundColor: (bool ? '#000' : '#fff'),
  color: (bool ? '#fff' : '#000')
});

function Button({bool, toggleBool, children}) {
  return (
    <button onClick={toggleBool} style={toggleStyle(bool)}>
      {children}
    </button>
  );
}

class Context extends Component {
  constructor(props) {
    super(props);
    this.toggleBool = () => {
      this.setState({bool: !this.state.bool });
    };
    this.state = {
      bool: true,
      toggleBool: this.toggleBool
    };
  }
  render() {
    return (
      <div>
        {/* context 값 변경 */}
        <MyContext.Provider value={this.state} > 
          <FunctionWrapper />
          <ClassWrapper />
        </MyContext.Provider>
      </div>
    );
  }
}

function FunctionWrapper() {
  return (
    <>
      <div><FunctionToggleButton /></div>
      <div><HookToggleButton /></div>
    </>
  )
}

function FunctionToggleButton() {
  return (
    <MyContext.Consumer>
      {({bool, toggleBool}) => (
        <Button {...{toggleBool, bool}}>Function Toggle</Button>
      )}
    </MyContext.Consumer>
  );
}

function HookToggleButton() {
  const {bool, toggleBool} = useContext(MyContext);
  return (
    <Button {...{toggleBool, bool}}>Hook Toggle</Button>
  );
}

class ClassWrapper extends Component {
  render() {
    return (
      <div>
        <ClassToggleButton />
      </div>
    )
  }
}

class ClassToggleButton extends Component {
  static contextType = MyContext;
  render() {
    const {bool, toggleBool} = this.context;
    return (
      <Button {...{toggleBool, bool}}>Class Toggle</Button>
    );
  }
}

export default Context;