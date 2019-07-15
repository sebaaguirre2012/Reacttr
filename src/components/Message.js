import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const proptypes = {
    username: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    numRetweets: PropTypes.number.isRequired,
    numFavorites: PropTypes.number.isRequired,
    onReplyTweet: PropTypes.func.isRequired,
    onFavorite: PropTypes.func.isRequired,
    onRetweet: PropTypes.func.isRequired
}

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
        let dateFormat = moment(this.props.date).fromNow(),
            userLink = `/user/${this.props.username}`;

        return (
            <div className='message'>
                <div className='user'>
                    <Link to={userLink}>
                        <figure>
                            <img className='avatar' src={this.props.picture} alt=''/>
                        </figure>
                    </Link>
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

Message.propTypes = proptypes;

