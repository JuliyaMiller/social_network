import React, { Component } from 'react'
import UserCard from './UserCard';
import { Grid } from 'semantic-ui-react';


export default class Blog extends Component {
    state = {
        status: null,
        error: '',
        users_data: null
    }
    
    fetchAuthor(){
        this.setState( { status: 'pending' } );
        fetch(`https://jsonplaceholder.typicode.com/users/`)
            .then( resp => resp.json())
            .then(data => this.setState( { users_data: data, status: 'loaded'}))
            .catch(e => this.setState({error: e.message, status: 'error'}))
    }

    componentDidMount(){
        this.fetchAuthor()
        console.log('mount - ', this.state)
    }

    componentDidUpdate(){
        console.log('updata - ', this.state)
    }


    render() {
        const {users_data, status, error} = this.state;
        return (
        <Grid>
            <Grid.Column width={8}>
                { users_data && users_data.map(
                    user => <UserCard author = {user}/> 
                )}
            </Grid.Column>

            <Grid.Column width={6}>
                { users_data && users_data.map(
                        user => <UserCard author = {user}/> 
                    )}
            </Grid.Column>
        </Grid>
        )
    }
}
