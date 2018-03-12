import React from 'react';

const person = () => {
    return <p>I'm a person and I am {getAge()} years old!</p>
}

const getAge = () => {
    return Math.floor(Math.random() * 30);
}

export default person;