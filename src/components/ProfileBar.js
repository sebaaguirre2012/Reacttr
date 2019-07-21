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
        <div className='profileBar d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
                <Link to='/profile'>
                    <figure>
                        <img className='avatar mr-2' src={picture} alt=''/>
                    </figure>
                </Link>
                <span className='username-pb'> Hola @{username}!</span>
            </div>
            <div className='buttons-it'>
                <button onClick={onOpenText} className='button mr-3'>
                    <span className='fa fa-lg fa-edit'></span> Tweet!
                </button>
                <button onClick={onLogout} className='button'>
                    <span className='fa fa-sign-out'></span>Salir
                </button>
            </div>
        </div>
    )
}

ProfileBar.propTypes = propTypes;