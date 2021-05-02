import React from 'react';
import './Tab.scss'

 const Tab = (props) => {
    return <div style={{backgroundColor: props.bgColor}} className="tab">Hello, {props.name}</div>;
}

export default Tab;