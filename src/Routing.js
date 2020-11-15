import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer'
import Home from './component/Home/Home';
import Booking from './Booking';
import Hotels from './Hotels';

const Routing =()=>{
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path ='/' component={Home}></Route>
                <Route path='/bookings' component={Booking}></Route>
                <Route path='/hotels' component={Hotels}></Route>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;


