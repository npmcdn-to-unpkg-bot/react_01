/**
 * Created by Yearwood on 10.8.16.
 */
import React, { Component } from 'react';

export default class extends Component {

    shouldComponentUpdate(){
        return false;
        {/*prevent component from re-rendering*/}
    }

    ComponentDidMount(){
        this.map =  new google.maps.Map(this.refs.map, {
            center: { lat: this.props.lat, lng: this.props.lng},
            zoom: 8
        });
    }

    render() {
        return (<div id="map" />);
    }
}
