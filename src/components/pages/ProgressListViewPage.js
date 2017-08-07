import React, { Component } from 'react';
import { Text, View, Picker ,ScrollView} from 'react-native';
import { Button, ItemList, CardBGL, ItemMonitoring,Container } from '../common';
import { connect } from 'react-redux';
import { getListViewProgress} from "../../actions/DoctorAction";

class ProgressListViewPage extends Component {
 
   constructor(props) {
    super(props);
    this.state = { data: [{
      enTitle: 'After Breakfast',
      key: 1,
      bloodValue: 120,
    },
    {
      enTitle: 'Bedtime',
      key: 3,
      bloodValue: 290,
    }],
    monitorings: [
      {
        enTitle: 'Before Dinner',
        target: '100-120',
        frequency: 'Daily'
      },
      {
        enTitle: 'After Breakfast',
        target: '140-180',
        frequency: '1day/week'
      },
      {
        enTitle: 'Before Lunch',
        target: '120-160',
        frequency: '3day/week'
      }
    ]
  };
  }
  componentWillMount(){
      this.props.getListViewProgress(this.props.PatientId,`${this.props.navigation.state.params.filterDay}`);
  }
  getDate(date){
      var monthNames = [
                        "January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"
                          ];
        var monthNamesAr =['جانفي','فيفري','مارس','أفريل','ماي','جوان','جويلية','أوت','سبتمبر','أكتوبر','نوفمبر','ديسمبر']

        var d = new Date(date);
        var monthEN= monthNames[d.getMonth()]
        var monthAr= monthNamesAr[d.getMonth()]
        var day = d.getDate();
        var year = d.getUTCFullYear();
        let month=this.props.language==="AR"?monthAr:monthEN
      return(
        day+' '+month+' '+year
      )
    }
  render() {
    let alignItems=this.props.language==='AR'?"flex-end":"flex-start"
    return (
      <Container>
      <ScrollView>
          {this.props.listViewProgress.reverse().map(item =>
            <View style={styles.GlobalBlock} key={item._id}>
              <View style={{alignSelf:"stretch",alignItems:alignItems}}>
                <Text style={{fontSize:16,color:'grey',marginLeft:15,marginRight:15}}>{this.getDate(item.dateGlucose)}</Text>
              </View>
              <CardBGL data={Object.keys(item.times).reverse().map(key => item.times[key])}  language={this.props.language} /> 
            </View>
          )}
      </ScrollView>
      </Container>
    );
  }
}
const styles={
  GlobalBlock:{
    alignItems:"center",
        alignSelf:'stretch',
        //backgroundColor:'pink',
        marginLeft:5,
        marginRight:5,
        paddingRight:5,
        paddingLeft:5,
        marginBottom:10,

  },
}
const mapStateToProps= state =>{
  return{
    language:state.language.language,
    PatientId:state.doctor.PatientId,
    listViewProgress:state.doctor.ListViewProgress,
  }
}
export default connect(mapStateToProps,{getListViewProgress})(ProgressListViewPage);

