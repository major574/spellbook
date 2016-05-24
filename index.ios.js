import React, { Component } from 'react';

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
        const style = this.props.slotState ? styles.buttonOn : styles.buttonOff;
        return (
            <TouchableHighlight underlayColor="gray" onPress={ () => {this.props.handleActivation(this.props.slotIndex)} }  style={ style }>
                <Text> { this.props.slotState ? 'On' : 'Off'} </Text>
            </TouchableHighlight>
        )
    }
});
var Stone = React.createClass({
    render: function() {
        const style = this.props.stoneState ? styles.stoneOn : styles.stoneOff;
        return (
            <TouchableHighlight underlayColor="green" onPress={ ()=> this.props.handleStone(this.props.slotIndex) } style={ style }>
                <Text> { this.props.stoneState ? 'On' : 'Off'} </Text>
            </TouchableHighlight>
        )
    }
})

var SpellBook = React.createClass({

    getInitialState: function(){
        return {
            slots: Array(12).fill(false),
            spell: "",
            stones: Array(4).fill(false)
        }
    },

    render: function() {
        const stoneRow = this.state.stones.slice(0, 4).map( (stone, i ) =>{
            return <Stone slotIndex={i} stoneState={ stone } key={i} handleStone={ this.handleStone } />
        } )

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
                    <View style={styles.slot}>
                        {stoneRow}
                    </View>
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
                    <View style={styles.footer}>
                        <TouchableHighlight underlayColor="gray" onPress={ this.commitClear } style={ styles.button }>
                            <Text>Clear</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="gray" onPress={ this.commitCast } style={ styles.button }>
                            <Text>Cast</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.headHalf}>
                </View>
            </View>
        )
    },

    handleActivation: function(slot){
        let newslots = this.state.slots.slice(0, this.state.slots.length );
        newslots[slot] = !this.state.slots[slot];

        this.setState({ slots: newslots });
    },

    handleStone: function(stone){
        let newstones = this.state.stones.slice(0, this.state.stones.length );

        newstones[stone] = !this.state.stones[stone];

        this.setState({ stones: newstones });
    },

    slotClear: function(){
        this.setState({ slots: Array(12).fill(false) });
    },

    commitClear: function(){
        this.slotClear();
        this.stoneClear();
    },

    stoneClear: function(){
        this.setState({ stones: Array(4).fill(false) });
    },

    commitCast: function(){
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
            '101001001010': 'Ice Storm I',
            '010100100101': 'Ice Storm I',
            '111001001110': 'Ice Storm II',
            '011100100111': 'Ice Storm II',
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
            spellString += n ? '1' : '0';
        });
        //bang bang you're a boolean
        spellString = !!spellChart[spellString] ? spellChart[spellString] : spellString

        this.setState({spell: spellString})
        this.slotClear()
    }
});



var styles = StyleSheet.create({
    container: {
        flex: 1,
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
        borderWidth: 1,
        height: 50,
        width: 50,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#A88940'
    },
    buttonOn: {
        backgroundColor: '#FF3347',
        borderWidth: 1,
        height: 50,
        width: 50,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#A11624'
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
    },
    stoneOn: {
        backgroundColor: 'white',
        borderWidth: 1,
        height: 40,
        width: 40,
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: '#5C5B5A'

    }
})

AppRegistry.registerComponent('spellbook', ()=> SpellBook);
