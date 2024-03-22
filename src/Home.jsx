import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Playlist from './Playlist';
import style from './CSS/Spotify.module.css'
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import Sider from './Sider';
import SplitPane from 'react-split-pane';
import { Button } from 'react-bootstrap';
import Bottom from './Bottom';

export default function Home() {
    const playlistitems=[{
        img:img1,
        name:'Daily Mix 1',
        desc:'Amrinder gill, Nivair Pannu, Love Sivia and more'
      },
      {
        img:img2,
        name:'Daily Mix 2',
        desc:'Sidhu Moose Wala, Karan Aujla, AP Dhillon and more'
      },
      {
        img:img3,
        name:'Daily Mix 3',
        desc:'Sant Niranjan Singh Ji, Bir Singh , Bhai Rai Singh and more'
      },
      {
        img:img4,
        name:'Daily Mix 4',
        desc:'Jassi Gill, Akhil, B Praak and more'
      },
      {
        img:img5,
        name:'Daily Mix 5',
        desc:'Jordan Sandhu, Balraj, Diljit Dosanjh and more'
      },
      {
        img:img6,
        name:'Daily Mix 6',
        desc:'Jordan Sandhu, Kulbir Jhinjer, Amrinder Gill and more'
      }
    ]
  return (
    <>
    <div className={style.container}>
    
        <SplitPane
          split="vertical"
       
          defaultSize={'300px'}
          className={style.splitPane}
        >
          <div className={` mt-2  ms-2 ${style.leftside}`}>
            <Sider />
          </div>
          <div className={style.rightside}>
            <Playlist item={playlistitems} />
          </div>
        </SplitPane>
        <Bottom />
      </div>
      {/* <Row >
       <Col className={`${style.bg} ${style.left}`}>
            <Slider />         
            
        </Col>
        <Col className={` ${style.right}`}>
            <Playlist item={playlistitems} />
        
        </Col>
      </Row> */}
   </>
  );
}