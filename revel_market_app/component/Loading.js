import React from 'react';
import  {
    ActivityIndicator, 
    View,
} from 'react-native';

export default class Loading extends React.Component {

    render() {
        return ( 
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 48 }}>
                <View style={{ backgroundColor: '#474648', alignItems: 'center', borderRadius: 25, padding: 4, }}>
                    <ActivityIndicator size="large" color="#4D98DC"/>
                </View>
            </View>
        );
    }
}