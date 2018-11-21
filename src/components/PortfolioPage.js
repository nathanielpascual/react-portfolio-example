import React from 'react';
import {NavLink} from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h1>My works</h1>
        <p>This are my portfolio links.</p>

        <NavLink className="links"  activeClassName="is-active" to="/portfolio/1" exact={true}>Item 1</NavLink>
        <NavLink className="links" activeClassName="is-active" to="/portfolio/2">Item 2</NavLink>
        <NavLink className="links" activeClassName="is-active" to="/portfolio/3">Item 3</NavLink>
    </div>
);

export default PortfolioPage;