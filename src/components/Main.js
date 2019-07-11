import React, { Component } from 'react';
import uuid from 'uuid';
import MessageList from './MessageList';
import InputText from './InputText';
import ProfileBar from './ProfileBar';

export default class Main extends Component {
    
    state = {
        user : Object.assign({}, this.props.user, { retweets : [] }, { favorites : [] }),
        openText : false,
        messages : [{
            id : uuid.v4(),
            text : 'Mensaje de prueba!',
            picture : 'https://thumbs.dreamstime.com/z/moda-masculina-del-estilo-del-inconformista-del-hombre-de-avatar-del-icono-del-perfil-62449823.jpg',
            displayName : 'Seba Aguirre',
            username : 'sebaaguirre',
            userNameToReply : '',
            date : Date.now() - 180000,
            retweets : 0,
            favorites : 0
        }]
    }
    
    handleOpenText = e => {
        e.preventDefault();
        this.setState( { openText : true } );
    }

    handleCloseText = e => {
        e.preventDefault();
        this.setState( { openText : false } );
    }

    handleSendText = e => {
        e.preventDefault();
        let newMessage = {
            id : uuid.v4(),
            username : this.props.user.email.split('@')[0],
            displayName : this.props.user.displayName,
            picture : this.props.user.photoURL,
            date : Date.now(),
            text : e.target.text.value,
            retweets : 0,
            favorites : 0
        }
        this.setState({
            messages : this.state.messages.concat([newMessage]),
            openText : false
        })
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
