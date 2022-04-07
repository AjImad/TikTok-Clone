import React, {Component } from 'react'
import axios from 'axios'

class Axios extends Component{

    state = {
        users: [],
        name: ''
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            this.setState({ users: res.data })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name: this.state.name
        }

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
        .then(res => {
            console.log(res)
            console.log(res.data)
        })
    }

    handleChange =  e => {
        this.setState({name: e.target.value})
    }

    render(){
        return (
            <div>
                <h3>Teset axios</h3>
                <ol>
                    {/* get all user */}
                    {this.state.users.map(user => <li key={user.id}> name: {user.name}</li>)}
                    
                    {/* get one user */}
                    {/* <li>{this.state.users.name}</li> */}
                </ol>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Add</button>
                </form>

            </div>
        )
    }
}

export default Axios