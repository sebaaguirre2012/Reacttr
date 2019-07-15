import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    picture: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}

export default function Profile ({ picture, displayName, username, emailAddress, location }){
    return (
        <div className='profile'>
            <img className='avatar-profile' src={picture} />
            <span className='name'>{displayName}</span>
            <ul className='data'>
                <li>
                    <span className='fa fa-user'></span>{username}
                </li>
                <li>
                    <span className='fa fa-envelope'></span>{emailAddress}
                </li>
                <li>
                    <span className='fa fa-map-marker'></span>{location}
                </li>
            </ul>
        </div>
    )
}
 
Profile.propTypes = propTypes;