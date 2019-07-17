import React from "react";
import { connect } from 'react-redux';
import Character from "./Character";

const CharacterList = props => {
  console.log('Character List', props)
  return (
    <ul>
      {props.charsReducer.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(CharacterList);
