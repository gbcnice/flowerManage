import React, { Component } from 'react'
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;
export default class CheckboxCom extends Component {
    constructor(props){
        super(props)
        this.state = {
            checkAll: false,
            plainOptions: ['武侠','言情','动作','玄幻','都市','历史','游戏','科幻','修仙','爱情'],
            checkedList:[],
            indeterminate: true,
        }

       
    }
   componentWillMount(){
    this.state.checkedList = this.props.value;
   }
    render() {
        let {plainOptions,checkedList} = this.state
        return (
            <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
          
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange.bind(this)}
            checked={this.state.checkAll}
          >
            全选
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup
        
          options={plainOptions}
          value={checkedList}
          onChange={this.onChange.bind(this)}
        />
      </div>
        )
    }
    onChange (val) {
       let {plainOptions,checkedList} = this.state
      // this.props.onChange(val)
        this.setState({
          checkedList:val,
          indeterminate:  val.length < plainOptions.length,
          checkAll: val.length === plainOptions.length,
        });
      };
      onCheckAllChange(e) {
       
      
        let value = e.target.checked
        let {plainOptions} = this.state
        this.setState({
          checkedList: value ? plainOptions : [],
          indeterminate: false,
          checkAll: e.target.checked,
        });
      };
     
}
