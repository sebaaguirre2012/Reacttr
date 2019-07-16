import React from 'react';
import PropTypes from 'prop-types';

const proptypes = {
    userNameToReply : PropTypes.string.isRequired,
    onSendText : PropTypes.func.isRequired,
    onCloseText : PropTypes.func.isRequired
}

export default function InputText( {onSendText, userNameToReply, onCloseText} ) {
    return (
        <form className='form' method='post' onSubmit={onSendText}>
            <div className="form-group">
                <textarea className='form-control text-it' name='text' rows='5'>
                    { (userNameToReply) ? `@${userNameToReply} ` : '' }
                </textarea>
            </div>
            <div className='buttons-it'>
                <button className='close' onClick={onCloseText}>Cerrar</button>
                <button className='send' type='submit'>Enviar</button>
            </div>
        </form>
    )
}

InputText.propTypes = proptypes;


