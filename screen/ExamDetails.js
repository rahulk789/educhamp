import React, {Component} from 'react';
import {StyleSheet, Image, TouchableHighlight, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        ['  Date ', '23 June, 2023'],
        ['  Eligibility  ', '18 years and above, 3 attempts  '],
        ['Resources', 'Website, link  '],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <SafeAreaView>
        <Image
          source={require('../assets/backarrow.png')}
          style={styles.arrow}></Image>
        <Image
          source={require('../assets/jeemain_logo.png')}
          style={styles.jeemain}></Image>
        <Text style={styles.titles}>Joint Entrance Examination</Text>

        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 1}}>
            <TableWrapper style={styles.wrapper}>
              <Rows
                data={state.tableData}
                flexArr={[1, 2]}
                style={styles.row}
                heightArr={['auto', 'auto', 'auto']}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
        </View>

        <TouchableHighlight style={styles.submit} underlayColor="#fff">
          <Text style={styles.submitText}>Apply</Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    padding: 6,
  },
  arrow: {
    marginLeft: 5,
    marginTop: 9,
    height: 30,
    width: 30,
  },
  jeemain: {
    height: 160,
    width: 160,

    marginLeft: 110,
  },
  titles: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  submit: {
    padding:20,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 'auto',
  },
  submitText: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#1B3D94',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff',
    fontSize: 20,
  },

  container: {
    padding: 2,
    backgroundColor: '#fff',
    marginLeft: 1,
    marginTop: 40,
  },
  wrapper: {flexDirection: 'row', width: '100%'},
  row: {height: 'auto', width: '100%'},
  text: {textAlign: 'center', color: 'black', fontSize: 19},
});
