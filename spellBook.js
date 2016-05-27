import React from 'react';
import Firebase from 'firebase';

import {
    Text,
    View,
    TouchableHighlight,
    AppRegistry,
    StyleSheet,
    Image,
} from 'react-native';

import styles from './styles';
import spellChart from './spellChart';

const Slot = React.createClass({
    render: function() {
        let style = {
            backgroundColor: !!this.props.slotState ? this.props.slotState : '#E8C46F',
            borderWidth: 3,
            height: 50,
            width: 50,
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#331900'
        }

        return (
            <TouchableHighlight underlayColor="#E8C46F" onPress={ () => {this.props.handleActivation(this.props.slotIndex)} }  style={ style }>
                <Image source={require('./assets/hex.png')} />
            </TouchableHighlight>
        )
    }
});

const Stones = React.createClass({
    getInitialState: function() {
        return {
            color: '#FF2605'
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
            borderColor: 'black',
            borderRadius: 4,
            marginLeft: 4,
        };

        const offStyle = styles.stoneOff;

        return (
            <View style={ styles.slot } >
                <TouchableHighlight
                    underlayColor="red"
                    onPress={ ()=> { this.handleUpdate('#FF2605'); }}
                    style={ this.state.color === '#FF2605' ? onStyle : offStyle }>
                    <Text> Fire </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="blue"
                    onPress={ ()=> { this.handleUpdate('#12C8FF'); }}
                    style={ this.state.color === '#12C8FF' ? onStyle : offStyle }>
                    <Text> Ice </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="yellow"
                    onPress={ ()=> { this.handleUpdate('#F3F315'); }}
                    style={ this.state.color === '#F3F315' ? onStyle : offStyle }>
                    <Text> Light </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="green"
                    onPress={ ()=> { this.handleUpdate('#03FF07'); }}
                    style={ this.state.color === '#03FF07' ? onStyle : offStyle }>
                    <Text> Acid </Text>
                </TouchableHighlight>
            </View>
        )
    }
})

const SpellBook = React.createClass({

    getInitialState(){
        return {
            slots: Array(12).fill(false),
            spell: "Ready",
            stones: '#FF2605'
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
                        {this.state.spell}
                    </Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('./assets/aCave.png')} />

                </View>
                <View style={styles.stoneSlot}>
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

        this.state.slots.forEach( ( n ) => {
            if(n === '#FF2605') spellString += '1';
            else if(n === '#12C8FF') spellString += '2';
            else if(n === '#F3F315') spellString += '3';
            else if(n === '#03FF07') spellString += '4';
            else spellString += '0';
        });

        //bang bang you're a boolean
        spellString = !!spellChart[spellString] ? spellChart[spellString] : 'Spell fizzled..'

        this.setState({
            spell: spellString,
            slots: Array(12).fill(false)
        });
    }
});

export default SpellBook;