import React, { Component } from 'react'
import { Table, Input, InputNumber, Form } from 'antd';
import {shop} from "@api/shop"
import "./index.css"
const EditableContext = React.createContext();
class EditableCell  extends Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
          return <InputNumber />;
        }
        return <Input />;
      };
    
      renderCell = ({ getFieldDecorator }) => {
        const {
          editing,
          dataIndex,
          title,
          inputType,
          record,
          index,
          children,
          ...restProps
        } = this.props;
        return (
          <td {...restProps}>
            {editing ? (
              <Form.Item style={{ margin: 0 }}>
                {getFieldDecorator(dataIndex, {
                  rules: [
                    {
                      required: true,
                      message: `Please Input ${title}!`,
                    },
                  ],
                  initialValue: record[dataIndex],
                })(this.getInput())}
              </Form.Item>
            ) : (
              children
            )}
          </td>
        );
      };
    
    render() {
        return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
    }
}
class EditableTable extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        data:[], 
        editingKey: '' 
      };
      this.columns = [
        {
          title: '商品名',
          dataIndex: 'Cpmc',
          width: '25%',
          editable: true,
        },
        {
          title: '商品图片',
          dataIndex: 'url',
          width: '15%',
          editable: true,
          render: url=> <img src={url}></img>
        },
        {
          title: '商品详情',
          dataIndex: 'Instro',
          width: '40%',
          editable: true,
        },
        {
          title: '商品类型',
          dataIndex: 'operation',
          render: (text, record) => {
            const { editingKey } = this.state;
            const editable = this.isEditing(record);
            return editable ? (
              <span>
                <EditableContext.Consumer>
                  {form => (
                    <a
                      href="javascript:;"
                      onClick={() => this.save(form, record.ItemCode)}
                      style={{ marginRight: 8 }}
                    >
                      Save
                    </a>
                  )}
                </EditableContext.Consumer>
                  <a onClick={this.cancel.bind(this,record.ItemCode)}>Cancel</a>
              </span>
            ) : (
              <a disabled={editingKey !== ''} onClick={() => this.edit(record.ItemCode)}>
                Edit
              </a>
            );
          },
        },
      ];
    }
  
    isEditing = record => record.ItemCode === this.state.editingKey;
  
    cancel = () => {
      this.setState({ editingKey: '' });
    };
  
    save(form, ItemCode) {
      form.validateFields((error, row) => {
        if (error) {
          return;
        }
        const newData = [...this.state.data];
        const index = newData.findIndex(item => ItemCode === item.ItemCode);
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, {
            ...item,
            ...row,
          });
          this.setState({ data: newData, editingKey: '' });
        } else {
          newData.push(row);
          this.setState({ data: newData, editingKey: '' });
        }
      });
    }
  
    edit(ItemCode) {
      this.setState({ editingKey: ItemCode });
    }
  
    render() {
      const components = {
        body: {
          cell: EditableCell,
        },
      };
  
      const columns = this.columns.map(col => {
        if (!col.editable) {
          return col;
        }
        return {
          ...col,
          onCell: record => ({
            record,
            inputType: col.dataIndex === 'age' ? 'number' : 'text',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: this.isEditing(record),
          }),
        };
      });
  
      return (
        <EditableContext.Provider value={this.props.form}>
          
          <Table
            components={components}
            bordered
            dataSource={this.state.data}
            columns={columns}
            rowClassName="editable-row"
            pagination={{
              onChange: this.cancel,
            }}
          />
        </EditableContext.Provider>
      );
    }
     componentDidMount(){
        this.getData()
      }
     async getData(){
          let data = await shop();
        let id = this.props.id-1
        this.setState({
          data : data[id].fenlei
        })
      }
  }
  
  const ShoppDetail = Form.create()(EditableTable);
  export default ShoppDetail