import React from 'react';
import {
    Alert,
    Image, 
    StyleSheet, 
    ScrollView,
    Text, 
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import NetworkFailed from '../../component/NetworkFailed';
import NotFound from '../../component/NotFound';
import Loading from '../../component/Loading';

import GOBALS from '../../GOBALS';

import UserModel from '../../models/UserModel'

var user_model = new UserModel

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            alert: '',
            user_data: []
        }
    }

    componentDidMount() {
        this.setState({ 
            loading: true,
            alert: '',
        }, () => { 
            user_model.getUserByUserCode('U0001').then((response) => {
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
                        user_data: response.data[0], 
                    });
                }
            })
        })
    }

    _confirmLogout() {
        Alert.alert('ออกจากระบบ', 'คุณต้องการออกจากระบบหรือไม่ ?', [{ text: 'OK', onPress: () => this._logOut() }, { text: 'cancel', }]);
    }

    _logOut() {

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
                display_data.push(
                    <View style={{ padding: 20, }}>
                        <View style={styles.profile_frame}>
                            {this.state.user_data.user_image != '' ? 
                            <Image source={{ uri: GOBALS.URL + this.state.user_data.user_image }} style={styles.profile_image}></Image>
                            :
                            <Image source={require('../../images/default-user.png')} style={styles.profile_image}></Image>
                            }
                        </View>
                        <Text style={[ styles.text_font, { alignSelf: "center", fontSize: 22, marginBottom: 16, }]}>
                            {this.state.user_data.user_name + ' ' + this.state.user_data.user_lastname}
                        </Text>
                        {this.state.user_data.user_address != '' ? 
                        <View style={{ flexDirection: 'row', marginBottom: 8, }}>
                            <View style={{ flexDirection: 'column', }}>
                                <Icon name="map-marker-outline" style={{ fontSize: 16, color: "#ff9900", marginTop: 3, }}></Icon>
                            </View>
                            <View style={{ flexDirection: 'column', }}>
                                <Text style={[ styles.text_font, { marginLeft: 8, } ]}>{this.state.user_data.user_address}</Text>
                            </View>
                        </View>
                        : null 
                        }
                        {this.state.user_data.user_tel != '' ? 
                        <View style={{ flexDirection: 'row', marginBottom: 8, }}>
                            <View style={{ flexDirection: 'column', }}>
                                <Icon name="phone" style={{ fontSize: 16, color: "#ff9900", marginTop: 3, }}></Icon>
                            </View>
                            <View style={{ flexDirection: 'column', }}>
                                <Text style={[ styles.text_font, { marginLeft: 8, } ]}>{this.state.user_data.user_tel}</Text>
                            </View>
                        </View>
                        : null 
                        }
                        {this.state.user_data.user_email != '' ? 
                        <View style={{ flexDirection: 'row', marginBottom: 8, }}>
                            <View style={{ flexDirection: 'column', }}>
                                <Icon name="at" style={{ fontSize: 16, color: "#ff9900", marginTop: 3, }}></Icon>
                            </View>
                            <View style={{ flexDirection: 'column', }}>
                                <Text style={[ styles.text_font, { marginLeft: 8, } ]}>{this.state.user_data.user_email}</Text>
                            </View>
                        </View>
                        : null 
                        }
                        <TouchableOpacity
                            style={{
                                alignSelf: 'center',
                                backgroundColor: '#fff',
                                width: 140,
                                padding: 8,
                                marginTop: 16,
                                borderRadius: 30,
                            }}
                            onPress={() => this._confirmLogout()}>
                            <Text style={[ styles.text_font, { alignSelf: 'center', color: '#000', }]}>
                                ลงชื่อออก
                            </Text>
                        </TouchableOpacity>
                    </View>
                );
            }
        }

        return (
            <ScrollView style={{ backgroundColor: '#010001', }}>
                {display_data}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
	text_font: {
		fontSize: 16,
        color: '#fff',
    },
    profile_frame: {
        width: 120, 
        height: 120,
        padding: 10,
        marginTop: 28,
        marginBottom: 28,
        alignSelf: 'center', 
        backgroundColor: '#25aae1',
        borderRadius: 60
    },
    profile_image: {
        width: 100, 
        height: 100, 
        borderRadius: 60, 
    },
});