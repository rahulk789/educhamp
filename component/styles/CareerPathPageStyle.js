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
          height : '400@s',
          width : '100@s',
      },
      topNav : {
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
})