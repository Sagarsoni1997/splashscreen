import React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Splash from './components/splash.js';



export default class App extends Component{
  state={
change:true
}

async performe()
{
  return new Promise((resolve)=>
  {
    setTimeout(()=>{resolve("su")},3000)
  })
}

async componentDidMount(){
  const my = await this.performe()
  if(my!==null){
    this.setState({change:false})
  }
}

render(){
  if(this.state.change){
   return <Splash/>
  }
return(
<View style={styles.container}>
<Text style={styles.hometext}>This is Home Screen</Text>
</View>

);
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"red"
  },

  hometext:{
    fontSize:100,
    alignItems:'center'
  }
});
