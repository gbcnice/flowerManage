import {Menu,Icon} from 'antd'
import React from 'react'
const {SubMenu} = Menu
export default (sliderTabBars)=>sliderTabBars.map((item,index)=>{
    let fn = (children)=>{
        if(children){
            return <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type="appstore" />
                <span>{item.name}</span>
              </span>
            }
          >
              {
                  item.children.map((child)=>{
                    return <Menu.Item key={child.key}>{child.name}</Menu.Item>
                  })
              }
          </SubMenu>
        }
    } 
    if(item.children){
       return  fn(item.children)
    }
    else{
        return <Menu.Item key={item.key}>
                <Icon type="pie-chart" />
                <span>{item.name}</span>
            </Menu.Item>
    }
})