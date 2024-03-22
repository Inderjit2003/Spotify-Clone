import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Img from './assets/react.svg'
import style from './CSS/Spotify.module.css'
import Header from './Header'
import Footer from './Footer'


export default function Playlist({item}) {
  return (
    < div style={{width:'100%',minWidth:'95%'}}>
    <Header />
    <Container className='mt-4 ' >
    <Row>
        
            {item.map((value, index) => (
                <Col className='col-2'>
                <Card key={index} style={{borderColor: "#121212"}} >
                    <Card.Img variant="top" src={value.img} />
                    <Card.Body className={style.bg}>
                         <Card.Text style={{color:'white'}}>
                            <h6>{value.name}</h6>
                            <p className={style.p}>{value.desc}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>

            ))}

    </Row>
</Container>
<Footer />

      </div>
  )
}