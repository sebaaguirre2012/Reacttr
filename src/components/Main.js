import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import firebase from 'firebase';

import MessageList from './MessageList';
import InputText from './InputText';
import ProfileBar from './ProfileBar';

const proptypes = {
    user : PropTypes.object.isRequired,
    onLogout : PropTypes.func.isRequired
}   

export default class Main extends Component {
    
    state = {
        user : Object.assign({}, this.props.user, { retweets : [] }, { favorites : [] }),
        openText : false,
        userNameToReply: '',
        messages : []
    }
    
    componentWillMount() {
        const messagesRef = firebase.database().ref().child('messages')

        messagesRef.on('child_added', snapshot => {
            this.setState({
                messages: this.state.messages.concat(snapshot.val()),
                openText: false
            })
        })
    }

    handleOpenText = e => {
        e.preventDefault();
        this.setState({ openText : true });
    }

    handleCloseText = e => {
        e.preventDefault();
        this.setState({ openText : false });
    }

    handleSendText = e => {
        e.preventDefault()
        var newMessage = {
            id: uuid.v4(),
            username: this.state.user.email.split('@')[0],
            displayName: this.state.user.displayName,
            picture: this.state.user.photoURL,
            date: Date.now(),
            text: e.target.text.value,
            favorites: 0,
            retweets: 0
        }

        const messageRef = firebase.database().ref().child('messages'),
              messageID = messageRef.push();
        messageID.set(newMessage);
    }

    handleRetweet = msgId => {
        let alreadyRetweeted = this.state.user.retweets.filter(ret => ret === msgId);
        
        if (alreadyRetweeted.length === 0){
            let messages = this.state.messages.map( msg => {
                msg.id === msgId && msg.retweets++;
                return msg;
            })

            let user = Object.assign({}, this.state.user);
            user.retweets.push(msgId);

            this.setState({
                messages,
                user
            })
        }
    }

    handleFavorite = msgId => {
        let alreadyFavorite = this.state.user.favorites.filter(fav => fav === msgId);
        
        if (alreadyFavorite.length === 0){
            
            let messages = this.state.messages.map( msg => {
                msg.id === msgId && msg.favorites++;
                return msg;
            })

            let user = Object.assign({}, this.state.user);
            user.favorites.push(msgId);

            this.setState({
                messages,
                user
            })
        }
    }

    renderOpenText = () => {
        if (this.state.openText){
            return (
                <InputText 
                    onSendText={this.handleSendText}
                    onCloseText={this.handleCloseText}
                    userNameToReply={this.state.userNameToReply}
                />
            )
        }
    }

    handleReplyTweet = (msgId, userNameToReply) => {
        this.setState({
            openText : true,
            userNameToReply
        })
    }

    render() {
        return (
            <div>
                <ProfileBar 
                    picture={this.props.user.photoURL}
                    username={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText}
                    onLogout={this.props.onLogout}
                />
                {this.renderOpenText()}
                <MessageList 
                    messages={this.state.messages}
                    onRetweet={this.handleRetweet}
                    onFavorite={this.handleFavorite}
                    onReplyTweet={this.handleReplyTweet}
                />
            </div>
        )
    }
}

Main.propTypes = proptypes;