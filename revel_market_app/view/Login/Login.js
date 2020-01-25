import React, { version } from 'react';
import{
    StatusBar,
    ScrollView,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Alert,
    
}from 'react-native';
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserModel from '../../models/UserModel';

var user_model = new UserModel

export class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username: "admin",
            Password: "123456",
        }
    }

     ComponentDidMount(){
        
     }   
     _getLogin(){
         Alert.alert("Function","_getLogin : ");

         user_model.getLogin(this.state.username,this.state.password).then((response)=>{
            console.log('[_getLogin] response:',response);
         });
     }


     render(){

        return(
            
            <ScrollView style={{backgroundColor:"#010001"}} >
                <StatusBar hidden={true}/>
                <Image resizeMode="contain" 
                    source={require('../../images/images/logo.png')}
                    style={{width: 300,height: 300,marginTop:54,marginBottom:24,alignSelf:'center',}}
                    >
                </Image>
                <View style={[styles.row_underline,{marginBottom:16,}]} >
                    <Icon name="email-outline" style={styles.Login_icon}/>
                    <TextInput placeholder="username"
                        placeholderTextColor="#ADADAD"
                        underlineColorAndroid='transparent' 
                        style={{color:'#fff',flex: 1,fontSize:16,paddingLeft:12,}}
                        onChangeText={
                            (user)=>{
                                this.setState({
                                    username:user
                                })
                            }
                        }
                        value={this.state.username}
                        
                    />
                </View>
                <View style={[styles.row_underline,{marginBottom:24,}]} >
                <Icon name="email-outline" style={styles.Login_icon}/>
                    <TextInput placeholder="Password"
                        placeholderTextColor="#ADADAD"
                        underlineColorAndroid='transparent' 
                        style={{color:'#fff',flex: 1,fontSize:16,paddingLeft:12,}}
                        secureTextEntry={true}
                        onChangeText={
                            (pass)=>{
                                this.setState({
                                    password:pass
                                })
                            }
                        }
                        value={this.state.Password}
                    />
                </View>
                <TouchableOpacity style={{flex:1,backgroundColor:'#25aae1',borderRadius:2,padding:10,}}
                onPress={()=>this._getLogin()}
                >
                    
                    <Text style={{alignSelf:"center",fontSize:16,color:"#fff"}}>LOGIN</Text>
                </TouchableOpacity>
            </ScrollView>
            ); 
     }
}

const styles = StyleSheet.create({
    row_underline:{
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor:'#b6b6b6',
    },
    Login_icon:{
        alignSelf:'center',
        fontSize:20,
        color:'#ADADAD',
    }
});

    
