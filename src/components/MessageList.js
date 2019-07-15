import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRetweet: PropTypes.func.isRequired,
    onFavorite: PropTypes.func.isRequired,
    onReplyTweet: PropTypes.func.isRequired
}
 
export default function MessageList( {messages, onRetweet, onFavorite, onReplyTweet } ) {
    return (
        <div className='list'>
            { messages.map( msg => {
                return (
                    <Message
                        key={msg.id} 
                        text={msg.text}
                        picture={msg.picture}
                        displayName={msg.displayName}
                        username={msg.username}
                        date={msg.date}
                        numRetweets={msg.retweets}
                        numFavorites={msg.favorites}
                        onRetweet={ () => onRetweet(msg.id) }
                        onFavorite={ () => onFavorite(msg.id) }
                        onReplyTweet={ () => onReplyTweet(msg.id, msg.username) }
                    />
                )
            }).reverse()}
        </div>
    )
}

MessageList.propTypes = propTypes;
 

 
 