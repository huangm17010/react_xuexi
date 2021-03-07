import Recat from 'react'
import Child from './Child'

export default class Life extends Recat.Component{


    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    // 以下初始化方法和constructor一致
    // state = {
    //     count:0
    // }

    // this.handeAdd.bind(this) 方式调用
    handleAdd1(){
        this.setState(
            {
                count : this.state.count + 1 
            }
        )
    }

    // this.handeAdd2 方式调用
    handleAdd2=()=>{
        this.setState(
            {
                count : this.state.count + 10
            }
        )
    }

    // react 最核心的方法
    // 引用变量一定要加{}
    render(){
        // 一定要有return
        return <div>
            <p>react的生命周期</p>
            <button onClick={this.handleAdd1.bind(this)}>点击一下哈</button>
            <button onClick={this.handleAdd2}>点击一下哈</button>
            <p>{this.state.count}</p>
            <Child name='yy-11123333'></Child>
        </div>
    }

}