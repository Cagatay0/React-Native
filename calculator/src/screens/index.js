import { observer, inject } from 'mobx-react';
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MainStore from '../store/MainStore';
@inject('MainStore')
@observer


export default class index extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <View style={style.resultView}>
                    {
                        MainStore._text == "0" ? <Text style={style.resultTextStyle}>
                            {MainStore._text}
                        </Text> : MainStore.result == "0" ?
                            <View>
                                <Text style={style.resultTextStyle}>
                                    {MainStore._text}
                                </Text>
                                <View style={{ alignItems: 'flex-end', marginRight: 20 }}>
                                    <Text style={{ justifyContent: 'flex-end', fontSize: 30 }}>
                                        {MainStore.resultText}
                                    </Text>
                                </View>
                            </View> :
                            <View>
                                <Text style={style.resultTextStyle}>
                                    {MainStore.result}
                                </Text>
                                <View style={{ alignItems: 'flex-end', marginRight: 20 }}>
                                    <Text style={{ justifyContent: 'flex-end', fontSize: 30 }}>
                                        {MainStore._text}
                                    </Text>
                                </View>
                            </View>
                    }
                </View>

                <View style={style.processView}>
                    <View style={style.processViewStep}>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => (MainStore.result = "0") && (MainStore._text = "0") && (MainStore.temp1 = "0") && (MainStore.resultText = "0") && (MainStore.kontrol = "0") && (MainStore.operator = "0")}>
                            <Text style={style.processButonText}>
                                AC
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => MainStore.removeString()}>
                            <Icon name='backspace' style={style.styleIcon}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => MainStore.setOperator("%")}>
                            <Text style={style.processButonText}>
                                %
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => MainStore.setOperator("/")}>
                            <Text style={style.processButonText}>
                                /
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={style.processViewStep}>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => MainStore._text == "0" ? MainStore.setText("7", "7") : MainStore.setText(MainStore._text + "7", MainStore.resultText + "7")} >
                            <Text style={style.processButonText}>
                                7
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => MainStore._text == "0" ? MainStore.setText("8", "8") : MainStore.setText(MainStore._text + "8", MainStore.resultText + "8")}>
                            <Text style={style.processButonText}>
                                8
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => MainStore._text == "0" ? MainStore.setText("9", "9") : MainStore.setText(MainStore._text + "9", MainStore.resultText + "9")}>
                            <Text style={style.processButonText}>
                                9
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => MainStore.setOperator("X")} >
                            <Text style={style.processButonText}>
                                x
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={style.processViewStep}>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => MainStore._text == "0" ? MainStore.setText("4", "4") : MainStore.setText(MainStore._text + "4", MainStore.resultText + "4")}>
                            <Text style={style.processButonText}>
                                4
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => MainStore._text == "0" ? MainStore.setText("5", "5") : MainStore.setText(MainStore._text + "5", MainStore.resultText + "5")}>
                            <Text style={style.processButonText}>
                                5
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.procesViewItem} onPress={() =>MainStore._text == "0" ? MainStore.setText("6", "6") : MainStore.setText(MainStore._text + "6", MainStore.resultText + "6")}>
                            <Text style={style.processButonText}>
                                6
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => MainStore.setOperator("-")}>
                            <Text style={style.processButonText}>
                                -
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={style.processViewStep}>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => MainStore._text == "0" ? MainStore.setText("1", "1") : MainStore.setText(MainStore._text + "1", MainStore.resultText + "1")}>
                            <Text style={style.processButonText}>
                                1
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => MainStore._text == "0" ? MainStore.setText("2", "2") : MainStore.setText(MainStore._text + "2", MainStore.resultText + "2")}>
                            <Text style={style.processButonText}>
                                2
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => MainStore._text == "0" ? MainStore.setText("3", "3") : MainStore.setText(MainStore._text + "3", MainStore.resultText + "3")}>
                            <Text style={style.processButonText}>
                                3
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => MainStore.setOperator("+")}>
                            <Text style={style.processButonText} >
                                +
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.processViewStep}>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => MainStore._text == "0" ? MainStore.setText("BEN", "BEN") : MainStore.setText(MainStore._text + "BEN", MainStore.resultText + "BEN")}>
                            <Text style={style.processButonText}>
                                BEN
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => MainStore._text == "0" ? MainStore.setText("0", "0") : MainStore.setText(MainStore._text + "0", MainStore.resultText + "0")}>
                            <Text style={style.processButonText}>
                                0
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.procesViewItem} onPress={()=>MainStore._text=="0"? MainStore.setText("0.","0."): MainStore.setText(MainStore._text + ".", MainStore.resultText + ".")}>
                            <Text style={style.processButonText}>
                                .
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.procesViewItem} onPress={() => MainStore.getText()}>
                            <Text style={style.processButonText}>
                                =
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const style = StyleSheet.create({
    resultView: { backgroundColor: 'white', height: windowHeight / 2, flexDirection: 'row-reverse', alignItems: 'flex-end' },
    resultTextStyle: { fontSize: 60, marginRight: 20, color: 'black' },
    processView: { height: windowHeight / 2, backgroundColor:"#daa520", flexDirection: 'column',  /*alignItems:'center'*/justifyContent: 'space-between', },
    processViewStep: { flexDirection: 'row', justifyContent: 'space-between', },
    processButonText: { color: 'black' },
    procesViewItem: { paddingHorizontal: 45, flexWrap: 'wrap', padding: 25, },
    styleIcon: { color: 'black' }
})