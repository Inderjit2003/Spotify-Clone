import React from 'react'
import style from './CSS/Spotify.module.css'
import { Card, CardTitle, Nav, Stack } from 'react-bootstrap'
import { Button, Row , Col} from 'react-bootstrap'
import { Display, DisplayFill } from 'react-bootstrap-icons'
import MiddleSide from './MiddleSide'
import UpSider from'./UpSider.jsx'
import BottomSider from './BottomSider.jsx'

export default function Sider() {
  return (
    <div style={{minWidth:'250px',marginRight:'none'}}>
    <Stack gap={2} className='me-2'>
    <div className={`p-2 ${style.lefttop}`}>
      <Card style={{backgroundColor:'#121212' , border:'none'}}>
       <UpSider />
       </Card>
      </div>
      <div className={`p-2 ${style.leftbottom}`}>
                <MiddleSide />
      </div>
      <div className={` ${style.siderbottom}`} >
        <BottomSider />
      </div>
      </Stack>
  
    </div>
  )
}