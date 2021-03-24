import React from 'react';
import {useState} from 'react';

/*
function Body(){
    const [ clicks, setClicks ] = useState( 0 );
    const [ name, setName ] = useState( '' );

    let handleChange = ( event ) =>{
        console.log( 'in handleChange:', event.target.value );
        setName( event.target.value );
    }

    let handleClick = () =>{
        console.log( 'in handleClick' );
        setClicks( clicks +1 );
    }

    return(
        <div>
            <h2>Body</h2>
            <input type="text" placeholder="your name" onChange={ handleChange} ></input>
            <p>{ name } has clicked { clicks } times.</p>
            <button onClick={ handleClick }>Click me!</button>
        </div>
    )
}
*/

function Contact() {
    const [firstName, firstNameSet] = useState('');
    const [lastName, lastNameSet] = useState('');
    const [message, setMessage] = useState('');

    let handleFirst = (event) => {
        console.log('in handleFirst', event.target.value);
        firstNameSet(event.target.value)
    }
    let handleLast = (event) => {
        console.log('in handleLast', event.target.value);
        lastNameSet(event.target.value);
    }
    let createMessage = (event) => {
        console.log('in createMessage', event.target.value);
        if (firstName !== '' && lastName !== '') {
            setMessage(firstName + lastName`'s best impression is ` + event.target.value); 
        }
    }

    return (
        <div>
            <h2>Contact</h2>
            <input type="text" placeholder="First Name" onChange={handleFirst}/>
            <input type="text" placeholder="Last Name" onChange={handleLast}/>
            <input type="text" placeholder="Best impression" onChange={createMessage}/>
            <button type="submit">Join us!</button>
            <p>{message}</p>
            <p>Phone number: 1-800-NICK-AGE</p>
            <p>E-mail: actors@acting.com</p>
        </div>
    );
}

export default Contact;