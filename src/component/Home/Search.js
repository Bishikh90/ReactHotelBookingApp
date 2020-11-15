import React, { Component } from 'react';
import './Search.css';

const lurl="https://developerfunnel.herokuapp.com/location";
const hurl ="https://developerfunnel.herokuapp.com/hotels?city=";

class Search extends Component{

    constructor(){
        super()
        this.state ={
            location:'',
            hotels:''
        }
    }

    renderCity(data){
        console.log("Data from API==>",data);
        if(data){
            return data.map((item)=>{
                return(
                    <option key={item._id} value={item.city}>
                        {item.city_name}
                    </option>
                )
            
            })
        }
    }
    handleCityChange=(event)=>{
        const cityId = event.target.value;
        const url =`${hurl}${cityId}`;
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>this.setState({hotels:data}))
    }

    fillData(data){
        console.log("Data from API==>",data);
        if(data){
            return data.map((item)=>{
                return(
                    <option>
                        {item.name} | {item.city_name}
                    </option>
                )
            
            })
        }
    }

    render(){
        return(
            <div className="imageContainer">
                <div id="logo">
                    <b>D!</b>
                </div>
                <div className="heading">
                    Plan Your trip with Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCityChange}>
                        <option>------SELECT CITY-----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput">
                        <option>------SELECT HOTEL-----</option>
                        {this.fillData(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }

    componentDidMount=()=>{
        fetch(lurl,{method:'GET'})
        .then((res)=>res.json())
        .then(data =>{this.setState({location:data})})
        .catch((err)=>console.log(err.code))
        
    }
}

export default Search;