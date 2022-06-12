import {Nav, Navbar} from 'react-bootstrap';

import {Link} from 'react-router-dom';
import React from 'react';

function NavbarComp() {
    return (
        <Navbar bg='light' expand='sm' className='flex-grow-1 mb-3'>
            <Navbar.Brand as={Link} to='/'>
                GDClone
            </Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to='/user'>
                    Profile
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavbarComp;
