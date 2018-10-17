import React, { Component } from 'react';
// import { Redirect, Link} from 'react-router-dom'


const Info =  (props) => {

    render () {
      const dataArr = [{name: 'kolo'}, {name: 'pablo'}, {name: "oscar"}].map( ele => {
      return <p>{ele.name}</p>
    });
    
      return (
        <div>
          {dataArr}
        </div>
      )
    }

    };




module.exports = Info;