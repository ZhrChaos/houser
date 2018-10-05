import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import House from '../House/House';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
        this.getHouses = this.getHouses.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        axios.get('/houses')
            .then(res => this.setState({ houses: res.data }))
    }

    getHouses(){
        axios.get('/houses')
        .then(res => this.setState({ houses: res.data }))
    }

    handleDelete(i) {
        axios.delete(`/houses/${i}`)
        .then(res => this.setState({ houses: res.data}))
    }


    render() {
        return (
            <div>
                Dashboard
                <Link to='/wizard'><button>Add New Property</button></Link>
                <div className='Houses'>
                    {this.state.houses.map((house, i) => (
                        <House key={i} house={house} handleDelete={this.handleDelete} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Dashboard