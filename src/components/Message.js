import React, { Component } from 'react';
import moment from 'moment';


export default class Message extends Component {
    
    state = {
        pressFavorite : false,
        pressRetweet : false
    }
    
    onPressFavorite = () => {
        this.props.onFavorite();
        this.setState({
            pressFavorite : true
        })
    }

    onPressRetweet = () => {
        this.props.onRetweet();
        this.setState({
            pressRetweet : true
        })
    }

    render() {
        let dateFormat = moment(this.props.date).fromNow();

        return (
            <div className='message'>
                <div className='user'>
                    <figure>
                        <img className='avatar' src={this.props.picture} alt=''/>
                    </figure>
                    <span className='displayName'>{this.props.displayName}</span>
                    <span className='username'>{this.props.username}</span>
                    <span className='date'>{dateFormat}</span>
                </div>
                
                <h3>{this.props.text}</h3>
                
                <div className='buttons'>
                    
                    <div 
                        className='icon'
                        onClick={this.props.onReplyTweet}
                    >
                        <span className='fa fa-reply'></span>
                    </div>
                    
                    <div 
                        className={ this.state.pressRetweet ? 'rtGreen' : '' }
                        onClick={this.onPressRetweet}
                    >
                        <span className='fa fa-retweet'></span>
                        <span className='numero'>{this.props.numRetweets}</span>
                    </div>
                    
                    <div 
                        className={ this.state.pressFavorite ? 'favYellow' : '' }
                        onClick={this.onPressFavorite}
                    >
                        <span className='fa fa-star'></span>
                        <span className='numero'>{this.props.numFavorites}</span>
                    
                    </div>
                </div>
            </div>
        )
    }
}
