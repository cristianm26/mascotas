import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './navigation.css';
const Navigation = ({ history }) => {
    return (
        <Navbar className="navigation__container" collapseOnSelect >
            <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => history.push('/')} >ReactMascotas</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="ml-auto">
                    <Nav.Link onClick={() => history.push('/login')}>Login</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
const mapStateToProps = ({ user }) => ({
    user
})

export default withRouter(connect(mapStateToProps, null)(Navigation));

