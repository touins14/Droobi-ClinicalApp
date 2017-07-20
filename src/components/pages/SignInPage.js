 import React, { Component } from 'react';
 import {Text,View,TouchableOpacity,Dimensions,Image} from 'react-native';
 import {Container,Input,Button,Spinner} from '../common';
 import { connect } from 'react-redux';
 
 import { emailChanged,passwordChanged,loginUser} from "../../actions/authAction";
 import {ChangeToArabic,ChangeToEnglish} from "../../actions/translationAction";
 import strings from '../common/Translation';

 const { width, height } = Dimensions.get('window')
 class SignInPage extends Component {

    static navigationOptions =({navigation})=>({
       header:null,
       headerBackTitle:null,
       gesturesEnabled:false,
    })
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
       this.props.passwordChanged(text);
    }
    onButtonPress(){
 
       this.props.loginUser(this.props.email,this.props.password)
    
    }
    ChangeToArabic(){
	    this.props.ChangeToArabic()
	    strings.setLanguage('ar');
	    
    }
    ChangeToEnglish(){
	    this.props.ChangeToEnglish()
	    strings.setLanguage('en');      
    }
    renderButton(){

    	if(this.props.loading){
    		return <Spinner size="large"/>
    	}return(
    		<Button Style={styles.loginButton}
		  		    label={strings.signin}
		  		    onPress={this.onButtonPress.bind(this)}
		  		    color="#fff"/>	
        )
    }
    changelanguage(){
    if(this.props.language=="AR"){
        return(
	        <TouchableOpacity style={{backgroundColor:"transparent"}} onPress={this.ChangeToEnglish.bind(this)}>
	            <Text style={{color:"#fff",fontSize:18,fontWeight:"400"}}>English</Text>
	        </TouchableOpacity>
        )
    }
        return(
	        <TouchableOpacity style={{backgroundColor:"transparent"}} onPress={this.ChangeToArabic.bind(this)}>
		        <Text style={{color:"#fff",fontSize:18,fontWeight:"400"}}>عربي</Text>
		    </TouchableOpacity>
        )
    
    }
   render() {
    console.log(this.props.language)
    	const {
    		    InputContainer,
    		    forgotPwdContainer,
    		    TextPwdStyle,
    		    loginButtonContainer,
    		    ImageStyle,
    		    logoContainer,
    		    LanguageContainer,
    		    LogoStyle
    		    
    		  }=styles;
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        if (this.props.navigate==true&& this.props.loading==false){
	    	navigate('tabsPage')
	    }
        let direction=this.props.language==="AR"?"right":"left";
        let alignLanguage=this.props.language==="AR"?"flex-start":"flex-end";
	  	return(
	  		<Container>
	  		    <Image style={ImageStyle} source={require('../../images/background.png')}>
	  		        <View style={[LanguageContainer,{alignItems:alignLanguage}]}>
	  		    	    {this.changelanguage()}
		  		    </View>
	  		    	<View style={logoContainer}>
                       <Image style={LogoStyle} source={require('../../images/logo.png')}/>
		  		    </View>
		  		    <View style={InputContainer}>
                        <Input 
                           placeholder={strings.username}
	  		    	       
	  		    	       onChangeText={this.onEmailChange.bind(this)}
	  		    	       direction={{textAlign: direction}}
	  		    	       language={this.props.language}
	  		    	       IconName='ios-contact-outline'
	  		    	    />
	  		    	    <Input 
	  		    	       placeholder={strings.password}
	  		    	      
	  		    	       onChangeText={this.onPasswordChange.bind(this)}
	  		    	       secureTextEntry
	  		    	       direction={{textAlign: direction}}
	  		    	       language={this.props.language}
	  		    	       IconName='ios-lock-outline'
	  		    	    />
	                    <View style={loginButtonContainer}>
	                        {this.renderButton()} 		    	 	       
	                    </View>
		  		    </View>
	  		    </Image>
                
	  		</Container>
	  	)
   }
 }


const styles={
	ImageStyle:{
		flex:1,
		width:null,
		height:null,
		resizeMode:'cover'
	},
	LanguageContainer:{
      flex:1,
	  //backgroundColor:"#ddd",
	  justifyContent:"center",
	  paddingRight:15,
	  paddingLeft:15
	},
	logoContainer:{
		flex:2,
		//backgroundColor:"#fff",
		alignItems:'center',
		justifyContent:'center'
	},
	LogoStyle:{
		height:200,
		width:200
	},
	InputContainer:{
		flex:4,
		//backgroundColor:"pink",
		alignItems:'center',
		justifyContent:'flex-start',
		paddingTop:60

	},
	forgotPwdContainer:{
		alignItems:"flex-start",
		justifyContent:"flex-start",
		alignSelf:"stretch",
		paddingTop:20
	},
	TextPwdStyle:{
        fontSize:12,
        color:"grey"
	},
	loginButtonContainer:{
		alignItems:"center",
		justifyContent:"center",
		alignSelf:"stretch",
		
	},
	loginButton:{
		height:40,
		width:width/2+80,
		justifyContent:"center",
		alignItems:"center",
		borderWidth:1,
		borderColor:"#fff",
		borderRadius:25,
		backgroundColor:"transparent"
	},


}

const mapStateToProps= state =>{
	return{
		email:state.auth.email,
		password:state.auth.password,
		error:state.auth.error,
		loading:state.auth.loading,
		language:state.language.language,
		navigate:state.auth.navigate,
	}
}
export default connect(mapStateToProps,{
	                   emailChanged,
	                   passwordChanged,
	                   loginUser,
	                   ChangeToEnglish,
	                   ChangeToArabic
})(SignInPage);
 
