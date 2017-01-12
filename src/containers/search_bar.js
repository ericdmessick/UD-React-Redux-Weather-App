import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = { term: '' };
        
        //bind this context here
        //this is different here than when we defined our function
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    //function that controls changes, so the word you type appears in form
    onInputChange(event) {
        console.log(event.target.value);
        //have to fix the context of this of function callback with bind above
        this.setState({ term: event.target.value });
    }
    
    //prevent form from submitting so it doesn't go to another page
    onFormSubmit(event) {
        event.preventDefault();
        
        //we need to fetch weather data from API
        this.props.fetchWeather(this.state.term);
        
        //clear the input field for the user
        this.setState({ term: ' '});
        //need to connect Searchbar to Redux and bind the actoin creator fetchWeather as an object
    }
    
    render() {
        return (
        <form onSubmit={this.onFormSubmit} className="input-group">
            <input 
                placeholder="Forecast in your city, according to Trump"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange} />
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
        </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

//null is just saying we dont need anystate here 5:58
export default connect(null, mapDispatchToProps)(SearchBar);