import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            property_name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }

    }



    handleName = (e) => {
        this.setState({ property_name: e.target.value })
    }
    handleAddress = (e) => {
        this.setState({ address: e.target.value })
    }
    handleCity = (e) => {
        this.setState({ city: e.target.value })
    }
    handleState = (e) => {
        this.setState({ state: e.target.value })
    }
    handleZip = (e) => {
        this.setState({ zipcode: e.target.value })
    }
    postHouse = () => {
        axios.post('/houses', {
            property_name: this.state.property_name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zipcode
        })
            .then(window.location = "http://localhost:4001/#/")
    }

    render() {
        return (
            <div>
                Wizard
                <input type='text' onChange={this.handleName} name='Name' placeholder='Name' />
                <input type='text' onChange={this.handleAddress} name='Address' placeholder='Address' />
                <input type='text' onChange={this.handleCity} name='City' placeholder='City' />
                <input type='text' onChange={this.handleState} name='State' placeholder='State ex UT' maxLength='2'/>
                <input type='number' onChange={this.handleZip} name='Zipcode' placeholder='Zipcode'/>
                <Link to='/'><button>Cancel</button></Link>
                <button onClick={this.postHouse}>Post House</button>
            </div>
        )
    }
}

export default Wizard