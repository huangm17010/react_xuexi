import React from 'react'
export default class Child extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : 'ddzz'
        }
    }

    UNSAFE_componentWillMount(){
        console.log('Will Mount');
    }

    componentDidMount(){
        console.log('Did Mount');
    }

    componentWillReceiveProps(newProps){
        console.log('will props: ' + newProps.name);
    }

    shouldComponentUpdate(){
        console.log('should update');
        return true;
    }

    componentWillUpdate(){
        console.log('will update');
    }

    componentDidUpdate(){
        console.log('did update');
    }

    // 核心方法
    render(){
        return <div>
            <p>
                {this.props.name}
            </p>
        </div>
    }


}