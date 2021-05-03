import React from 'react';
import './Tab.scss'
import { Parallax } from 'react-scroll-parallax';

 const Tab = (props) => {
    return <Parallax y={[-20, 20]} x={[-10, 20]}><div style={{backgroundColor: props.bgColor}} className="tab">Hello</div></Parallax>;
}

export default Tab;