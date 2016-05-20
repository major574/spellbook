import React, { Component } from 'react';

import {
    Text,
    View,
    TouchableHighlight,
    AppRegistry,
    StyleSheet
} from 'react-native';

var SpellBook = React.createClass({
    
    getInitialState: function(){
        return { 
            slots: Array(12).fill(false)
        }
    },

    render: function() {

        const slotRow1 = this.state.slots.slice(0, 4).map( ( slot, i ) => {
            const style = this.state.slots[i] ? styles.buttonOn : styles.buttonOff;
            return (
                <TouchableHighlight key={ i } underlayColor="gray" onPress={ () => { this.handleActivation( i ) } }  style={ style }>
                    <Text> {this.state.slots[slot] ? 'On' : 'Off'} </Text>
                </TouchableHighlight>
            )
        });

        const slotRow2 = this.state.slots.slice(4, 8).map( ( slot, i ) => {
            const j = i + 4;
            const style = this.state.slots[j] ? styles.buttonOn : styles.buttonOff;
            return (
                <TouchableHighlight key={ j } underlayColor="gray" onPress={ () => { this.handleActivation( j ) } }  style={ style }>
                    <Text> {this.state.slots[slot] ? 'On' : 'Off'} </Text>
                </TouchableHighlight>
            )
        });
        
        const slotRow3 = this.state.slots.slice(8, 12).map( ( slot, i ) => {
            const j = i + 8;
            const style = this.state.slots[j] ? styles.buttonOn : styles.buttonOff;
            return (
                <TouchableHighlight key={ j } underlayColor="gray" onPress={ () => { this.handleActivation( j ) } }  style={ style }>
                    <Text> {this.state.slots[slot] ? 'On' : 'Off'} </Text>
                </TouchableHighlight>
            )
        });

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headText}>
                        Spell Book
                    </Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.footText}>
                        Dungeon
                    </Text>
                </View>
                <View style={styles.slot}>
                    <View style={styles.slot}>{ slotRow1 }</View>
                </View>
                <View style={styles.slot}>
                    <View style={styles.slot}>{ slotRow2 }</View>
                </View>
                <View style={styles.slot}>
                    <View style={styles.slot}>{ slotRow3 }</View>
                </View>
                <View style={styles.manaBar}>
                    <Text style={styles.footText}>Mana Bar</Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.footer}>
                        <TouchableHighlight underlayColor="gray" onPress={ this.commitClear } style={ styles.button }>
                            <Text>Clear</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="gray" onPress={ this.commitCast } style={ styles.button }>
                            <Text>Cast</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    },

    handleActivation: function(slot){
        let newslots = this.state.slots.slice(0, this.state.slots.length );
        newslots[slot] = !this.state.slots[slot];

        this.setState({ slots: newslots });        
    },

    commitClear: function(){
        this.setState({ slots: Array(12).fill(false) });
    },

    commitCast: function(){
        //pushes each cells # to a string..
        this.commitClear()
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'orange'

    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor: 'blue'
    },
    manaBar: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'blue',
        backgroundColor: 'purple'
    },
    headText: {
        fontSize: 30
    },
    footText: {
        fontSize: 20,
        color: 'white'
    },
    slot: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'gray'
        // borderWidth: 1,
        // borderColor: 'black'

    },
    body: {
        flex: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'
        // borderWidth: 2,
        // borderColor: 'yellow'
    },
    button: {
        backgroundColor: 'orange',
        flexDirection: 'row',
        borderWidth: 2,
        height: 40,
        width: 140,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black'
    },
    buttonOff: {
        backgroundColor: 'yellow',
        borderWidth: 2,
        height: 60,
        width: 60,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black'
    },
    buttonOn: {
        backgroundColor: 'teal',
        borderWidth: 2,
        height: 60,
        width: 60,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'blue'
    },
    actRed: {
        borderWidth: 2,
        borderColor: 'red'
    },
    actGreen: {
        borderWidth: 2,
        borderColor: 'green'
    }
})

AppRegistry.registerComponent('spellbook', ()=> SpellBook);
