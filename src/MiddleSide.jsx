import React from 'react'

import style from './CSS/Spotify.module.css'
import { Card, CardTitle, Nav, Stack } from 'react-bootstrap'
import { Button, Row , Col} from 'react-bootstrap'
import { Display, DisplayFill } from 'react-bootstrap-icons'

export default function MiddleSide() {
  return (
    <div>
        <div className='mt-2 '>
            <Card style={{background:'#121212'}}>
                <div>
                    <Row>
                        <div className={style.wrap}>
                            <Col xs={10} className={style.lib}>
                                 <svg width="24" height="24"
                                className={style.icon} data-encore-id="icon" 
                                role="img" aria-hidden="true" viewBox="0 0 24 24"
                                class="Svg-sc-ytk21e-0 bneLcE">
                                <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 
                                0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0
                                0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
                                <span className={style.text}>
                                     Your Library
                                </span> 
                            </Col>
                            <Col xs={2}  >
                                <svg data-encore-id="icon" width="20" height="24" fill='white' className={style.plus} role="img" aria-hidden="true" viewBox="0 0 16 16" >
                                <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>
                            </Col>
                        </div>
                        
                    </Row>
                     <Card style={{background:'#353432',marginTop:'20px'}}>
                        <CardTitle style={{fontSize:'18px',color:'white'}} className='mt-2 mx-2'>Create your first playlist</CardTitle>
                        <Card.Text className='mx-2' style={{fontSize:'12px', color:'white'}}>It's easy ,we'll help you</Card.Text>
                        <Button style={{color:'black', width:'130px',background:'white',border:'none',fontSize:'12px',
                        borderRadius:'20px'}} className='ms-2 mb-2'>Create playlist</Button>
                     </Card>

                     <Card style={{background:'#353432',marginTop:'20px'}}>
                        <CardTitle style={{fontSize:'18px',color:'white'}} className='mt-2 mx-2'>Let's find some podcasts to follow </CardTitle>
                        <Card.Text className='mx-2' style={{fontSize:'12px', color:'white'}}>We'll Keep you updated on new episodes</Card.Text>
                        <Button style={{color:'black', width:'130px',background:'white',border:'none',fontSize:'12px',
                        borderRadius:'20px'}} className='ms-2 mb-2'>Browse podcasts</Button>
                     </Card>
                </div>
            </Card>
            
        </div>
       
    </div>
  )
}

