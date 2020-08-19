import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => (
	<header className="header">
		<div className="container">
			<nav>
				<ul>
					<li><NavLink exact to='/'>Home</NavLink></li>
					<li><NavLink to='/posts'>Posts</NavLink></li>
				</ul>
			</nav>
		</div>
	</header>
)

export default Header;
