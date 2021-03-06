import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

const app = shallow(<App />);

it ('renders correctly', () => {
    expect(app).toMatchSnapshot();
})

it ('initialize the state with an empty list of gifts',() => {
    expect(app.state().gifts).toEqual([]);
})


it ('adds a new gify to the `state` when clicking the `add` button', () => {
    app.find('.btn-add').simulate('click');

    expect(app.state().gifts).toEqual([{id:1}])
})