import React from 'react';
import {
    ImageBackground,
    ScrollView, 
    StyleSheet,
    Text, 
    TextInput,
    TouchableOpacity, 
    View,
} from 'react-native';
import {
    Header,
    Content,
} from "native-base"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import NetworkFailed from '../../component/NetworkFailed';
import NotFound from '../../component/NotFound';
import Loading from '../../component/Loading';

import GOBALS from '../../GOBALS';

import ShopModel from '../../models/ShopModel'

var shop_model = new ShopModel;

export default class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            keyword: '',
            alert: '',
            shop: [],
        }
    }

    componentDidMount() {
        this._fetchData();
    }

    _fetchData = () => { 
        this.setState({ 
            loading: true,
            alert: '',
            shop: [],
        }, () => { 
            shop_model.getShopBy(this.state.keyword).then((response) => {
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
                        shop: response.data,
                    });
                }
            })
        });
    }

    render() {
        var display_data = [];

        if (this.state.loading) {
            display_data.push(<Loading/>);
        }else{
            if (this.state.alert == 'network-failed') {
                display_data.push(<NetworkFailed/>);
            }else if (this.state.alert == 'not-found') {
                display_data.push(<NotFound/>);
            }else{
                for (let i = 0; i < this.state.shop.length; i++) {
                    display_data.push(
                        <ImageBackground 
                            resizeMode="cover" 
                            source={{ uri: GOBALS.URL + this.state.shop[i].shop_image_name }} 
                            style={{ height: 200, justifyContent: "flex-end", marginBottom: 20, }}
                            imageStyle={{ borderRadius: 4 }}
                        >
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('ShopDetail',{ shop_code: this.state.shop[i].shop_code })}}>
                                <View style={{ height: 58, padding: 8, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                    <Text numberOfLines={1} style={styles.text_font}>{this.state.shop[i].shop_name}</Text>
                                    <Text numberOfLines={1} style={[ styles.text_font, { fontSize: 12, }]}>{this.state.shop[i].shop_description}</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    )
                }
            }
        } 

        return (                
            <Content style={{ backgroundColor: '#010001', }}>
                <Header style={{ backgroundColor: '#010001', }}>
                    <ImageBackground 
                        resizeMode='cover' 
                        source={require('../../images/bghead.png')} 
                        style={{ width: '100%', justifyContent: "center", alignItems: "center" }} 
                    >
                        <Text style={[ styles.text_font, { fontSize: 18, }]}>ค้นหาร้านค้า</Text>
                    </ImageBackground>
                </Header>
                <View style={{ padding: 12, }}>
                    <View style={[{ height: 48, backgroundColor: '#474648', flexDirection: 'row', borderRadius: 25, elevation: 3, }]}>
                        <TextInput style={[ styles.text_font, { flex: 1, paddingLeft: 18, }]}
                            placeholder="What are you looking for ?" 
                            placeholderTextColor="#979697"
                            underlineColorAndroid="transparent"
                            onChangeText={(keyword) => { this.setState({ keyword }) }}
                            value={this.state.keyword} 
                        />
                        <TouchableOpacity style={{ width: 50, height: 60, }} onPress={() => { this._fetchData() }}>
                            <Icon name="magnify" size={28} style={{ color: '#979697', marginTop: 10, }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ padding: 15, }}>
                        {display_data}
                    </View>
                </ScrollView>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
	text_font: {
		fontFamily: 'Kanit-Regular',
        fontSize: 15,
        color: '#f3f3f3',
    },
});