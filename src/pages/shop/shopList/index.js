import React, { Component } from 'react'
import { Table, Divider, Tag } from 'antd';
const columns = [
    {
      title: '商品名称',
      dataIndex: 'shopname',
      key: 'shopname',
      render: text => <a href="javascript:;">{text}</a>,
    },
    {
      title: '商品数量',
      dataIndex: 'shopnum',
      key: 'shopnum',
    },
    {
      title: '商品描述',
      dataIndex: 'shopdetail',
      key: 'shopdetail',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
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
          <a href="javascript:;">Invite {record.shopname}</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a>
        </span>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      shopname: 'John Brown',
      shopnum: 32,
      shopdetail: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      shopname: 'Jim Green',
      shopnum: 42,
      shopdetail: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      shopname: 'Joe Black',
      shopnum: 32,
      shopdetail: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];  
export default class ShopList extends Component {
    render() {
        return (
            <Table columns={columns} dataSource={data} />
        )
    }
}
