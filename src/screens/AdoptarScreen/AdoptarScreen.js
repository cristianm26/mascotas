import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import { getDogs } from '../../mockRequests/perritos';
import './adoptar.css';
const AdoptarScreen = ({ perrito, user, history }) => {

    useEffect(() => {
        if (!perrito.selectedPerrito || !user.authUser) {
            history.push('/')
        }
    }, [perrito])


    return (
        <div className="container-fluid" >
            <Navigation />
            <h3 className="mt-4">{`Felicidades ${user.authUser.fullName} haz adoptado a ${perrito.selectedPerrito.nombre}`}</h3>
            <div className="container" >
                <div className="row">

                    <div className="col-sm-12  mb-2">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={perrito.selectedPerrito.img} />
                            <Card.Body>
                                <Card.Title>{perrito.selectedPerrito.nombre}</Card.Title>
                                <Card.Text>
                                    <div> {`Genero: ${perrito.selectedPerrito.genero}`}</div>
                                    <div> {`Edad: ${perrito.selectedPerritoedad}`}</div>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({ user, perrito }) => ({
    user, perrito
})



export default withRouter(connect(mapStateToProps, null)(AdoptarScreen));
