import React from 'react';
import {
    Text, 
} from 'react-native';
import {
    Header,
    Content,
} from "native-base"

export default class News extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <Content style={{ backgroundColor: '#010001', }}>
                <Header>
                    <Text style={{ fontSize: 18, color: '#f3f3f3' }}>ข่าวสารและกิจกรรม</Text>
                </Header>
            </Content>
        )
    }
}