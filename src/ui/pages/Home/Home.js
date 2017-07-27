import React from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom'
import './Home.css'
class Home extends React.Component{
	render(){
		return(<div className='home'>
			<img src={logo} alt="logo" className='logo'/>
			<h2 className='home-title'>吮指</h2>
			<p className='home-subtitle'>享受舌尖艳遇</p>
			<div className="actions">
				<Link to='/signup'>注册</Link>
				<Link to='/login'>登录</Link>
			</div>
		</div>)
	}
} 
export default Home