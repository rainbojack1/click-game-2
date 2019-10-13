import React, { Component } from "react";
import Character from "./Character.js";

class PlayingField extends Component {


    render() {
        return (
            <div className="container">
            <div className="row">
                {this.props.characters.map(character => (
                    <div className="card" onClick={() => this.props.imageClicked(character.id)}>
                    <Character
                    name={character.name}
                    image={character.image}
                    selected={character.selected}
                    id={character.id}
                    />
                    </div>
                ))}  
            </div>
            </div>
        );
    }
}

export default PlayingField;
