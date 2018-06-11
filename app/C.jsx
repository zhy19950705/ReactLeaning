import React, { Component } from 'react'
export default class Hanhanc extends Component {
    componentWillMount() {
        console.log('====================================');
        console.log(this.props);
        console.log('====================================');
    }
    render() {
        return (
            <div>C页面,{this.props.match.params.param}</div>
        )
    }
}