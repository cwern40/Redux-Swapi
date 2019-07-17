import React, { Component } from "react";
import { connect } from 'react-redux';
import { CharacterListView } from "./views";
import "./styles/App.css";
import { getCharacters } from './actions/index';

class App extends Component {

  componentDidMount() {
    this.props.getCharacters()
  }

  render() {
    return <CharacterListView />;
  }
}

const mapDispatchToProps = {
  getCharacters,
}

export default connect(null, mapDispatchToProps)(App);
