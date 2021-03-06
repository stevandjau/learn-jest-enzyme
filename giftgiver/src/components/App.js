import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

export default class App extends Component {
    constructor() {
        super();
        
        this.state = {gifts: []}
    }

    addGift = () => {
        const {gifts} = this.state;
        const ids = this.state.gifts.map(gift => gift.id)
        const maxId = ids.length>0?Math.max(...ids):0;
        
        gifts.push({id:maxId+1});

        this.setState({gifts})
    }

    render() {
        return (
            <div>
                <div>test</div>
                <Button className='btn-add' onClick={this.addGift}>Add new gift</Button>
            </div>
        )        
    }
}
