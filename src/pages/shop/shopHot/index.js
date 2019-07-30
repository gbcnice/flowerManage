import React, { Component } from 'react'
import wangeditor from "wangeditor"
export default class ShopHot extends Component {
    render() {
        return (
            <div>
                <div ref="editor"></div>
            </div>
        )
    }
    componentDidMount(){
       var editor2 = new wangeditor(this.refs.editor)
        editor2.create()
    }
}
