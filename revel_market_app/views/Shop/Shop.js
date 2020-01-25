import React from 'react';
import {
    Text, 
} from 'react-native';
import {
    Header,
    Content,
} from "native-base"

export default class Shop extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (    
            <Content style={{ backgroundColor: '#010001', }}>
                <Header>
                    <Text style={{ fontSize: 18, color: '#f3f3f3' }}>ร้านค้า</Text>
                </Header>
            </Content> 
        )
    }
}