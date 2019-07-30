import React, { Component } from 'react'
import { Modal, Button } from 'antd'; 
import ModalForm from "@components/modalForm"
export default class ModalCom extends Component {
    state = {
        visible: false,
        record:""
      };
      showModal (record) {
       
        this.setState({
          visible: true,
          record
        });
      };
    
      handleCancel = () => {
        this.setState({
          visible: false,
        });
      };
    render() {
        const { visible, record } = this.state;
        return (
            <div>
        <Modal
          title="商品详情"
          visible={visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <ModalForm record={record}/>
        </Modal>
      </div>
        )
    }
   
}
