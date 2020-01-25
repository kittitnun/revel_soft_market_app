import React from 'react';
import {
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text, 
    TouchableOpacity,
    View,
} from 'react-native';
import {
    Header,
    Content,
} from "native-base"

import NetworkFailed from '../../component/NetworkFailed';
import NotFound from '../../component/NotFound';
import Loading from '../../component/Loading';

import GOBALS from '../../GOBALS';

import NewsModel from '../../models/NewsModel'

var news_model = new NewsModel

export default class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            alert: '',
            news: [],
        }
    }

    componentDidMount() {
        this._fetchData();
    }

    _fetchData = () => { 
        this.setState({ 
            loading: true,
            alert: '',
            news: [],
        }, () => { 
            news_model.getNewsBy().then((response) => {
                if (response == false) {
                    this.setState({
                        loading: false,
                        alert: 'network-failed',
                    });
                }else if (response.data.length == 0) {
                    this.setState({ 
                        loading: false,
                        alert: 'not-found',
                    });
                }else{
                    this.setState({ 
                        loading: false,
                        news: response.data,
                    });
                }
            })
        });
    }
    
    render() {
        var display_data = []

        if (this.state.loading) {
            display_data.push(<Loading/>);
        }else{
            if (this.state.alert == 'network-failed') {
                display_data.push(<NetworkFailed/>);
            }else if (this.state.alert == 'not-found') {
                display_data.push(<NotFound/>);
            }else{
                for (let i = 0; i < this.state.news.length; i++) {
                    display_data.push(
                        <View style={[ { flex: 1, flexDirection: 'row', padding: 12 }]}>
                            <View style={{ flex: 1, flexDirection: 'column', }} >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetail',{ news_code: this.state.news[i].news_code }) }>
                                    <Image 
                                        resizeMode="cover" 
                                        source={{ uri: GOBALS.URL + this.state.news[i].news_image_name }} 
                                        style={{ height: 132, }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', paddingLeft: 10 }} >
                                <Text style={[ styles.text_font, { fontSize: 18, color: '#ff9900', }]} numberOfLines={1}>{this.state.news[i].news_title}</Text>
                                <Text style={[ styles.text_font, { fontSize: 12, color: 'gray', }]}>{this.state.news[i].news_date}</Text>
                                <Text style={[ styles.text_font, { fontSize: 14, } ]} numberOfLines={4}>{this.state.news[i].news_description}</Text>
                            </View>
                        </View>
                    )
                }
            }
        }

        return (
            <Content style={{ backgroundColor: '#010001', }}>
                <Header style={{ backgroundColor: '#010001' }}>
                    <ImageBackground 
                        resizeMode='cover' 
                        source={require('../../images/bghead.png')} 
                        style={{ width: '100%', justifyContent: "center", alignItems: "center" }} 
                    >
                        <Text style={{ fontFamily: 'Kanit-Regular', fontSize: 18, color: '#f3f3f3' }}>ข่าวสารและกิจกรรม</Text>
                    </ImageBackground>
                </Header>
                <ScrollView>
                    {display_data}
                </ScrollView>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
	text_font: {
        fontSize: 16,
        color: '#fff',
    },
});