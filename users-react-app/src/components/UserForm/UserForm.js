
import React from 'react';
import '../../styles/user-form.css';




class UserForm extends React.Component {
    
    handleChange = (e) => {
        /*console.log({
            name: e.target.name,
            value: e.target.value,
        });*/
        this.setState({
            [e.target.name] : e.target.value,
        });
    };

    handleClick = e => {
        console.log('Buttton was clicked');
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('Form submitted');
        console.log(this.state);
    }


    render() {
        return (

            <form className="dp-forms-plans" onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Completa el siguiente formulario de alta de Usuarios</legend>
                    <ul className="field-group">
                        <li className="field-item">
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" onChange={this.props.onChange} name="name" id="name" placeholder="Nombre" value={this.props.formValues.name} /></li>
                        <li className="field-item">
                            <label htmlFor="age">Edad:</label>
                            <input type="text" onChange={this.props.onChange} name="age" id="age" placeholder="Edad" value={this.props.formValues.age} /></li>
                        <li className="field-item">
                            <label htmlFor="rol">rol:</label>
                            <input type="text" onChange={this.props.onChange} name="rol" id="rol" placeholder="Rol" value={this.props.formValues.rol}/></li>
                        <li className="field-item">
                            <label htmlFor="email">Email:</label>
                            <input type="email" onChange={this.props.onChange} name="email" id="email" placeholder="Email" value={this.props.formValues.email} /></li>
                    </ul>

                    <div className="dp-container">
                        <div className="dp-rowflex">
                            <div className="dp-footer-form">
                                <div className="dp-action">
                                    <button onClick={this.handleClick} type="submit" className="dp-button button-medium primary-green">
                                        Añadir usuario
                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        )
    }
}
export default UserForm;