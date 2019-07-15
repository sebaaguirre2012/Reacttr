import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onAuth : PropTypes.func.isRequired
}

export default function Login({ onAuth }) {
    return (
        <div className='login'>
            <p className='text-login'>
                    Necesitamos que inicies sesion con tu cuenta de GitHub
                    para que puedas leer y escribir mensajes
                </p>
                <button
                    onClick={onAuth}
                    className='button-login'
                >
                    <span className='fa fa-github' style={{margin:5}}></span> Login con Github
                </button>
        </div>
    )
}

Login.propTypes = propTypes;