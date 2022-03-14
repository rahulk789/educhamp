import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';

export const SearchDropDown = (props) => {
  const print=(ele)=> {console.log(ele)}
    const { dataSource } = props
    return (
        
        <View
            style={styles.container}>

            <View style={styles.subContainer}>
                {
                    dataSource.length ?
                    <ScrollView style={styles.scrollView}
                    contentContainerStyle={{ flexGrow: 1 }}>
                        {        
                        dataSource.map(item => {
                            return (
                                
                                    <TouchableOpacity
                                    onPress={()=>{props.onPress;print(item)}}>
                                <View key={item} style={styles.itemView}>
                                    <Text style={styles.itemText}>{item}</Text>
                                </View>
                                </TouchableOpacity>
                                
                            )
                        })
                        }
                        </ScrollView>

                        :
                        <View
                            style={styles.noResultView}>
                            <Text style={styles.noResultText}>No search items matched</Text>
                        </View>
                }

            </View>
        </View>

  )
}

const styles = StyleSheet.create({
    container: {
       marginTop : '2%',
       height : 520,
    },
    subContainer: {
        backgroundColor: '#E5E5E5',
        paddingTop: 10,
        marginHorizontal: 8,
        borderBottomEndRadius:4,
        borderBottomLeftRadius:4,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 15,
        
    },
    itemView: {
        
        backgroundColor: '#F3F3F3',
        height: 50,
        width: '96%',
        marginLeft : 7,
        marginBottom: 7,
        justifyContent: 'center',
        borderRadius: 4,
    },
    itemText: {
        color: 'black',
        paddingHorizontal: 10,
        fontSize : 20,
    },
    scrollView : {
        marginLeft: 10,
        width: '100%'
    },
    noResultView: {
        alignSelf: 'center',
        // margin: 20,
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    noResultText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },

});
