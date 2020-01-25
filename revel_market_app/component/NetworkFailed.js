import React from 'react';
import  {
    StyleSheet,
    Text, 
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class NetworkFailed extends React.Component {

    render() {
        return ( 
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 24, }}>
                <Icon name="alert-circle-outline" size={28} style={{ color: 'red', marginBottom: 10, }} />
                <Text style={[ styles.text_font, ]}>Couldn't connect</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
	text_font: {
		fontSize: 16,
        color: '#fff',
    },
});