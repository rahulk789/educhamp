import { ScaledSheet } from 'react-native-size-matters';

export default styles = ScaledSheet.create({
    container: {
        backgroundColor: '#8CBBF1',
        width: '350@s',
        height: '200@s',
        borderBottomLeftRadius: '15@s',
        borderBottomRightRadius: '15@s',
      },
      backgroud_img:{
          height : '190@s',
          width : '350@s',
          position : 'absolute',
          alignItems: 'center',
        justifyContent: 'center',
      },
      topNav : {
        marginTop : '136@s',
        flex : 1,
        flexDirection: 'row',
        justifyContent : 'space-evenly',
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
      usericon: {
        top: '10@s',
        left: '290@s',
        position : 'absolute',
      },
})