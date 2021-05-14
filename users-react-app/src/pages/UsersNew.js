import React from 'react';
import Card from '../components/Card/Card';
import UserForm from '../components/UserForm/UserForm';


class UsersNew extends React.Component {
    state = {
        form : {
            name: '',
            age:'',
            rol:'',
            email:''
        }
    };
    
    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value,
            }
        })
    }
    render() {
        return (
            <>
                <div className="container dp-rowflex p-t-54 p-b-54">
                    <section className="col-sm-6">
                        <article>
                            <div className="dp-align-center">
                                <Card nombre={this.state.form.name} edad={this.state.form.age} rol={this.state.form.rol} mail={this.state.form.email}/>
                            </div>
                        </article>
                    </section>
                    <section className="col-sm-6">
                        <article>
                           <UserForm onChange={this.handleChange} formValues={this.state.form}/> 
                        </article>
                    </section>
                </div>
            </>
        );
    }

}

export default UsersNew;