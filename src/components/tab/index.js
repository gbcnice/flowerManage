import React, { Component } from 'react'
import { Tabs } from 'antd';
import {shop} from "@api/shop"
import EditableTable from "@pages/shop/shopDetail/shopdetail"
const { TabPane } = Tabs;
export default class Tab extends Component {
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }
    render() {
        let {data} = this.state
        return (
            <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                {
                    data.map((item,index)=>{
                        return <TabPane tab={item.text} key={item.id}>
                        <EditableTable id={item.id}/>
                        </TabPane>
                    })
                }
  </Tabs>
        )
    }
    callback(key){
        // console.log(key)
    }
    async componentDidMount(){
        let data = await shop();
        this.setState({
          data 
        })
      }
}
