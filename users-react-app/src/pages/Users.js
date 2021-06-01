import React from 'react';
import Card from '../components/Card/Card';
import '../../src/styles/general.css';
import {Link} from 'react-router-dom';


class Users extends React.Component {

    constructor (props) {
        super(props);
        console.log('1.constructor');
        this.state = {
            data: []
        }
    }

    state = {
        data:{}
    }

    componentDidMount() {
        console.log('3.componentDidMount');
        this.fetchCharacters();
    }

    fetchCharacters = async()=>{
        const response = await fetch('https://60b68b6f17d1dc0017b8805f.mockapi.io/usersApi/users');
        const data = await response.json();

        this.setState({
            data:data
        });

    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
        console.log({
            prevprops:prevProps,
            prevState:prevState
        });
        console.log({
            props:this.props,
            state: this.state
        });
    }

    componentWillUnmount(){
        console.log('componentWillUnmount'); 
        clearTimeout(this.timeoutId);
    }

    render() {
        console.log('2.render');
        return (
            <React.Fragment>
            <div className="container m-t-48">
                <h2>Listado de Usuarios</h2>
                <Link to='/users/new' type="button" className="dp-button button-medium primary-green">Añadir usuario</Link>
                <ul className="cardList dp-align-center">
                    {this.state.data.map(badge =>{
                        return(
                        <Card key={badge.id} nombre={badge.nombre} edad={badge.edad} rol={badge.rol} mail={badge.email} />
                        ); 
                    })}

                </ul>
            </div>
            </React.Fragment>
        );
    }
};
export default Users;