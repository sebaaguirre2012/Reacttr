import React, { Component } from 'react'

export default class ProfileBar extends Component {
    render() {
        return (
            <div className='profileBar'>
                <figure>
                    <img className='avatar' src={this.props.picture} alt=''/>
                </figure>
                <span className='username-pb'>Hola @{this.props.username}!</span>
                <button onClick={this.props.onOpenText} className='button'>
                    <span className='fa fa-lg fa-edit'></span> Tweet!
                </button>
            </div>
        )
    }
}
