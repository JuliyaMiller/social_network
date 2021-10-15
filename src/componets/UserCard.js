import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

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
            <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>{author.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{author.phone}</span>
              </Card.Meta>
              <Card.Description>
                {author.address.city}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        )
    }
}
