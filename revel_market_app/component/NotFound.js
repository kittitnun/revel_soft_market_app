import React from 'react';
import  {
    StyleSheet,
    Text, 
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class NotFound extends React.Component {

    render() {
        return ( 
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 24, }}>
                <Icon name="emoticon-sad-outline" size={28} style={{ color: '#ffdb4d', marginBottom: 10, }} />
                <Text style={[ styles.text_font, ]}>Not found data</Text>
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