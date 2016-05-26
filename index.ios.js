import React, { Component } from 'react';
import Firebase from 'firebase';

import {
    Text,
    View,
    TouchableHighlight,
    AppRegistry,
    StyleSheet,
} from 'react-native';

//To do: Make each activated stone a different color, and to deactivate a stone if another one is clicked.
//       Make each slot coorespond to the current activated stone.
//       Add persistence layer and create a player class with health etc..

var Slot = React.createClass({
    render: function() {
        let style = {
            backgroundColor: !!this.props.slotState ? this.props.slotState : '#E8C46F',
            borderWidth: 2,
            height: 50,
            width: 50,
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#A11624'
        }
        
        return (
            <TouchableHighlight underlayColor="gray" onPress={ () => {this.props.handleActivation(this.props.slotIndex)} }  style={ style }>
                <Text> { this.props.slotState ? 'On' : 'Off'} </Text>
            </TouchableHighlight>
        )
    }
});

var Stones = React.createClass({
    getInitialState: function() {
        return {
            color: 'red'
        }
    },

    handleUpdate(color) {
        this.props.handleChange(color);
        this.setState({ color: color });
    },

    render: function() {
        let onStyle = {
            backgroundColor: this.state.color,
            borderWidth: 1,
            height: 40,
            width: 40,
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderColor: '#5C5B5A'
        };

        const offStyle = styles.stoneOff;

        return (
            <View style={ styles.slot } >
                <TouchableHighlight
                    underlayColor="gray"
                    onPress={ ()=> { this.handleUpdate('red'); }}
                    style={ this.state.color === 'red' ? onStyle : offStyle }>
                    <Text> { this.props.stoneState ? 'On' : 'Off'} </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="gray"
                    onPress={ ()=> { this.handleUpdate('blue'); }}
                    style={ this.state.color === 'blue' ? onStyle : offStyle }>
                    <Text> { this.props.stoneState ? 'On' : 'Off'} </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="gray"
                    onPress={ ()=> { this.handleUpdate('yellow'); }}
                    style={ this.state.color === 'yellow' ? onStyle : offStyle }>
                    <Text> { this.props.stoneState ? 'On' : 'Off'} </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="gray"
                    onPress={ ()=> { this.handleUpdate('green'); }}
                    style={ this.state.color === 'green' ? onStyle : offStyle }>
                    <Text> { this.props.stoneState ? 'On' : 'Off'} </Text>
                </TouchableHighlight>
            </View>
        )
    }
})

var SpellBook = React.createClass({

    getInitialState(){
        return {
            slots: Array(12).fill(false),
            spell: "",
            stones: 'red'
        }
    },

    handleStoneChange(color) {
        this.setState({ stones: color });
    },

    render() {

        const slotRow1 = this.state.slots.slice(0, 4).map( ( slot, i ) => {
            return <Slot slotIndex={i} slotState={ slot } key={i} handleActivation={ this.handleActivation } />
        });

        const slotRow2 = this.state.slots.slice(4, 8).map( ( slot, i ) => {
            return <Slot slotIndex={i + 4} slotState={ slot } key={i} handleActivation={ this.handleActivation } />
        });

        const slotRow3 = this.state.slots.slice(8, 12).map( ( slot, i ) => {
            return <Slot slotIndex={i + 8} slotState={ slot } key={i} handleActivation={ this.handleActivation } />
        });

        return (
            <View style={styles.container}>
                <View style={styles.headHalf}>
                </View>
                <View style={styles.header}>
                    <Text style={styles.headText}>
                        Spell Book
                    </Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>
                        {this.state.spell}
                    </Text>
                </View>
                <View style={styles.slot}>
                    <Stones handleChange={ this.handleStoneChange }/>
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
                <View style={styles.healthBar}>
                    <Text style={styles.footText}>Health</Text>
                </View>
                    <View style={styles.footer}>
                        <TouchableHighlight underlayColor="gray" onPress={ this.commitClear } style={ styles.button }>
                            <Text>Clear</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="gray" onPress={ this.commitCast } style={ styles.button }>
                            <Text>Cast</Text>
                        </TouchableHighlight>
                    </View>
            </View>
        )
    },

    handleActivation(slot){
        let newslots = this.state.slots.slice(0, this.state.slots.length );
        
        newslots[slot] = !!this.state.slots[slot] ? false : this.state.stones;

        this.setState({ slots: newslots });
    },

    commitClear(){
        this.setState({
            spell: "",
            slots: Array(12).fill(false)
        });
    },

    commitCast(){
        //pushes each cells # to a string..
        let spellString = "";
        // i 0-1 = heal, 2-3 = fireball
        const spellChart = {
            '010010100100': 'Heal I',
            '001001010010': 'Heal I',
            '010011100100': 'Heal II',
            '001001110010': 'Heal II',
            '001001001000': 'Fireball I',
            '000100100100': 'Fireball I',
            '011001101000': 'Fireball II',
            '001100110100': 'Fireball II',
            '202002002020': 'Ice Storm I',
            '020200200202': 'Ice Storm I',
            '222002002220': 'Ice Storm II',
            '022200200222': 'Ice Storm II',
            '100001001000': 'Lightning Bolt I',
            '010000100100': 'Lightning Bolt I',
            '001000010010': 'Lightning Bolt I',
            '100001001110': 'Lightning Bolt II',
            '010000100111': 'Lightning Bolt II',
            '100001100100': 'Acid Burn I',
            '010000110010': 'Acid Burn I',
            '110011100100': 'Acid Burn II',
            '011001110010': 'Acid Burn II',
        };

        this.state.slots.forEach( ( n ) => {
            if(n === 'red') spellString += '1';
            else if(n === 'blue') spellString += '2';
            else if(n === 'yellow') spellString += '3';
            else if(n === 'green') spellString += '4';
            else spellString += '0';
        });

        //bang bang you're a boolean
        spellString = !!spellChart[spellString] ? spellChart[spellString] : 'fizzle...'

        this.setState({
            spell: spellString,
            slots: Array(12).fill(false)
        });
    }
});



var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'stretch'
    },
    headHalf: {
        flex: 1,
    },
    header: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: '#E8C46F',
        // borderColor: 'orange'

    },
    footer: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor: 'blue'
    },
    healthBar: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#A11624',
        backgroundColor: '#FF3347'
    },
    headText: {
        fontSize: 30
    },
    footText: {
        fontSize: 15,
        color: 'white'
    },
    bodyText: {
        fontSize: 40,
        color: 'white'
    },
    slot: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'gray',
        // borderWidth: 1,
        // borderColor: 'black'

    },
    body: {
        flex: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        // borderWidth: 2,
        // borderColor: 'yellow'
    },
    button: {
        backgroundColor: '#E8C46F',
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
        backgroundColor: '#E8C46F',
        borderWidth: 2,
        height: 50,
        width: 50,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#A88940'
    },
    stoneOff: {
        backgroundColor: '#5C5B5A',
        borderWidth: 1,
        height: 40,
        width: 40,
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: 'black'
    }
})

AppRegistry.registerComponent('spellbook', ()=> SpellBook);
