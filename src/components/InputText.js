import React, { Component } from 'react';

export default class InputText extends Component {
    render() {
        return (
            <form className='form' onSubmit={this.props.onSendText}>
                <textarea className='text-it' name='text'>
                    { (this.props.userNameToReply) ? `@${this.props.userNameToReply} ` : '' }
                </textarea>
                <div className='buttons-it'>
                    <button className='close' onClick={this.props.onCloseText}>Cerrar</button>
                    <button className='send' type='submit'>Enviar</button>
                </div>
            </form>
        )
    }
}
