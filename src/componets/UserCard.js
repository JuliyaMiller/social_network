import React, { Component } from 'react'

export default class UserCard extends Component {
    constructor(props){
        super(props);
        this.state = {
        author: props.author
    }
    
}
        
    
    render() {
        const { author } = this.props

        return (
            <div>
                {author.name}
            </div>
        )
    }
}
