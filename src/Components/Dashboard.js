import React, {Component} from 'react';
import Product from './Product';

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <h1>Dashboard</h1>
                <Product />
            </div>
        )
    }
}

export default Dashboard;