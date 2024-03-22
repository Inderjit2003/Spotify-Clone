import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

export default function Bottom() {
  return (
    <>
        <footer>
            <Row style={{ background:' linear-gradient(#8338a4,rgb(38, 94, 146))' , color : 'white'}}>
                  <Col >
                    <p style={{textDecoration:'double', }}>Preview to Spotify</p>
                    <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
                  </Col>
                  <Col style={{textDecoration: 'double'}}>
                     <Button style={{background:'white',color:'black' , border:'none' , borderRadius:'20px'}}> SignUp Free</Button>
                  </Col>
            </Row>
        </footer>
    </>
  )
}
