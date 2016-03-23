import React from 'react';

class App extends React.Component {
    render(){
      let txt = this.props.txt
      return <h1>{txt}{this.props.cat}</h1>
    }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number
}


export default App
