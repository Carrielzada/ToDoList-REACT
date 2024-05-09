import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Contador de Classe</h2>
        <p>Contagem: {this.state.count}</p>
        <button onClick={this.incrementCount}>Incrementar</button>
        <button onClick={this.decrementCount}>Decrementar</button>
      </div>
    );
  }
}

export default ClassComponent;