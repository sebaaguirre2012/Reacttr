import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const propTypes = {
    picture: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onOpenText: PropTypes.func.isRequired
}

export default function ProfileBar ({ picture, username, onOpenText, onLogout }) {
    return (
        <div className='profileBar'>
            <Link to='/profile'>
                <figure>
                    <img className='avatar' src={picture} alt=''/>
                </figure>
            </Link>
            <span className='username-pb'> Hola @{username}!</span>
            <button onClick={onOpenText} className='button'>
                <span className='fa fa-lg fa-edit'></span> Tweet!
            </button>
            <button onClick={onLogout} className='button'>
                <span className='fa fa-sign-out'></span>Salir
            </button>
        </div>
    )
}

ProfileBar.propTypes = propTypes;