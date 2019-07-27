import React from "react";
import {Route} from "react-router-dom"

export default (routes)=>routes.map((item,index)=>{
    
    let fn = (children)=>{
        if(children){
          return  children.map((child,idx)=>{
              return <Route path={child.path} key={idx} render={(props)=>{
                        return <child.component {...props}/>
            }}/>
          })
        }
    };


    if(item.children){
      return fn(item.children);
    }else{
       return  <Route path={item.path} key={index} render={(props)=>{
                    return <item.component {...props}/>
                }}/>
    }
})