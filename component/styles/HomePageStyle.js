import { ScaledSheet } from 'react-native-size-matters';

export default styles = ScaledSheet.create({
  container: {
    backgroundColor: '#8CBBF1',
    width: '350@s',
    height: '200@s',
    borderBottomLeftRadius: '15@s',
    borderBottomRightRadius: '15@s',
  },
  text : {
    marginTop: '25@s',
    marginLeft: '15@s',
    fontSize: '25@s',
    fontWeight: '500',
  },
  textfield: {
    marginLeft : '15@s',
    marginTop : '20@s',
    backgroundColor: 'white',
    width : '320@s',
    borderRadius : '20@s',
    padding : '10@s',
    fontSize: '17@s',
    fontWeight : '300',
    color: 'grey',
    elevation : 10,
    shadowColor : 'blue'
  },
  topNav : {
    flex : 1,
    flexDirection: 'row',
    justifyContent : 'space-evenly'
  },
  navText : {
    marginHorizontal : '30@s',
    marginVertical : '22@s',
    fontSize : '18@s',
    color : 'white',
    
  },
  navTextClicked : {
    marginHorizontal : '30@s',
    marginVertical : '22@s',
    fontSize : '18@s',
    color : '#888888',
    
  },
  usericon: {
    paddingTop : '15@s',
    paddingRight : '20@s'
  },
 header: {
    flex: 1,
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  TouchableOpacityStyle:{
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    color: 'white'
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 75,
    height: 75,
  },
})