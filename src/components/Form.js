import React from 'react'

const Form = props => (

    <form className="search-form" onSubmit={props.getWeather}>
        <input 
        className="search-bar" 
        type="text" name="city" 
        placeholder="Enter the city..."
        autoComplete="off"
        />
        {/*<input type="text" name="country" placeholder="Country..."/> */}
        <button className="search-button">Get Weather!</button>
    </form>

);

export default Form;

