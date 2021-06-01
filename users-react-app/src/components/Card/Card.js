
import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/card.css';




class Card extends React.Component {
    render(){
        return(
            <div className="dp-card dp-highlighthed">
            <ul className="dp-card-props">
                <li><p><strong>Nombre:</strong>{this.props.nombre}</p></li>
                <li><p><strong>Edad:</strong>{this.props.edad}</p></li>
                <li><p><strong>Rol:</strong>{this.props.rol}</p></li>
                <li><p><strong>Mail:</strong>{this.props.mail}</p></li>
            </ul>
        </div>
        )
    }
}
export default Card;