import React, { Component } from 'react';
import { Card }  from 'antd';

import Header from './Header/Header';
import Navbar from './Navbar';
import ShowListView from '../containers/ShowListView';
import Item from 'antd/lib/list/Item';
const { Meta } = Card;
class Show extends Component {


    render() {
        let { data } = this.props
        return <div>
            <Navbar></Navbar>
            <Header></Header>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <Card hoverable style={{ width: 240 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                
                <div>
                    {data.map(item => (
                        <div>{item.name}</div>
                    
                    ))}
                </div>

                    
                    <Meta title="Europe Street beat" description="asda"/>
                </Card>
                <Card hoverable style={{ width: 240 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
                <Card hoverable style={{ width: 240 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
            </div>
            
        </div>
        
    }
}

export default Show;