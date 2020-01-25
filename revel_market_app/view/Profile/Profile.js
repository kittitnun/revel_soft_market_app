// import { ScrollView } from "react-native"
// import { Icon } from "react-native-vector-icons/Icon"

// export default class Profile{
//     constructor(props){
//         super(props)
//         this.state={
//             user_data:[],
//         }
//     }

//     componentDidMont(){
//         user_model.getUserByUserCode('U0001').then((response)=>{
//             this.setState({
//                 user_data:response[0],
//             })
//         })
//     }

//     render(){
//         return(
//             <ScrollView style={{backgroundColor: '#010001',}}>
//                 <view
//                     style={{
//                         width:120,
//                         height:120,
//                         padding:10,
//                         marginTop:28,
//                         marginBottom:28,
//                         alignSelf:'center',
//                         backgroundColor:'#25aae1',
//                         borderRadius:60
//                     }}
//                 >
//                     <Image Source={{uri:this.state.user_data.user_image}} style={{width: 100,borderRadius:60,}}></Image>
//                 </view>
//                 <view>
//                     <text style={[styles.text_font,{alignSelf:"center",fontSize: 22,marginBottom:16}]}>
//                         {this.state.user_data.user_name +''+ this.state.user_data.user_lastname}
//                     </text>
//                 </view>
//                 <view style={{flexDirection:'row',marginBottom:8,}}>
//                     <view style={{flexDirection:'column',}}>
//                         <Icon name="map-marker-outline" style={{fontSize:16,color:"#ff9900",marginTop:3,}}></Icon>
//                     </view>
//                     <view style={{flexDirection:'column',}}>
//                 <Text style={[styles.text_font,{marginLeft:8,}]}>{this.state.user_address}</Text>
//                     </view>
//                 </view>
//                 <view style={{flexDirection:'row',marginBottom:8,}}>
//                     <view style={{flexDirection:'column',}}>
//                         <Icon name="phone" style={{fontSize:16,color:"#ff9900",marginTop:3,}}></Icon>
//                     </view>
//                     <view style={{flexDirection:'column',}}>
//                 <Text style={[styles.text_font,{marginLeft:8,}]}>{this.state.user_tel}</Text>
//                     </view>
//                 </view>
//                 <view style={{flexDirection:'row',marginBottom:8,}}>
//                     <view style={{flexDirection:'column',}}>
//                         <Icon name="email" style={{fontSize:16,color:"#ff9900",marginTop:3,}}></Icon>
//                     </view>
//                     <view style={{flexDirection:'column',}}>
//                 <Text style={[styles.text_font,{marginLeft:8,}]}>{this.state.user_email}</Text>
//                     </view>
//                 </view>


//             </ScrollView>
//         )
    
//     }

// }