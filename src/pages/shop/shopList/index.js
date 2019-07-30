import React, { Component, Fragment } from 'react'
import { Table, Divider, Tag } from 'antd';
import {shopList} from "@api/shop"
import ModalCom from "@components/modal"
export default class ShopList extends Component {
    constructor(){
      super()
      this.state={
        data:[],
        columns : [
          {
            title: '商品名称',
            dataIndex: 'booksName',
            key: 'booksName',
            render: text => <a href="javascript:;">{text}</a>,
          },
          {
            title: '商品图片',
            dataIndex: 'booksLogo',
            key: 'booksLogo',
            render: src=> <img src={src}></img>
          },
          {
            title: '商品卖家',
            dataIndex: 'booksAuth',
            key: 'booksAuth',
          },
          {
            title: '商品状态',
            dataIndex: 'booksStatus',
            key: 'booksStatus',
          },
          {
            title: '商品类型',
            key: 'booksTag',
            dataIndex: 'booksTag',
            render: tags => (
              <span>
                {tags.map(tag => {
                  let color = tags.length > 3 ? 'geekblue' : 'green';
                  if (tag === 'loser') {
                    color = 'volcano';
                  }
                  return (
                    <Tag color={color} key={tag}>
                      {tag.toUpperCase()}
                    </Tag>
                  );
                })}
              </span>
            ),
          },
          {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <span>
                <a href="javascript:;" onClick={this.handleModify.bind(this,record)}>操作 {record.shopname}</a>
                <Divider type="vertical" />
                <a href="javascript:;" onClick={this.handleDel.bind(this,record)}>删除</a>
              </span>
            ),
          },
        ]
      }
    }
    render() {
      let {data,columns} = this.state
        return (
          <Fragment>
            <Table columns={columns} dataSource={data} pagination={{
              pageSize:6
              
            }}/>
            <ModalCom ref="ModalCom"/>
          </Fragment>
            
        )
    }
    async componentDidMount(){
      let data = await shopList();
      // console.log(data)
      this.setState({
        data : data.data.list
      })
      
    }
    //删除
    handleDel({id}){
      console.log(id)
    }
    handleModify(record){
      // console.log(record)
      this.refs.ModalCom.showModal(record)
    }
}
