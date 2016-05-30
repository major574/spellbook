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

import caveBackground from './assets/aCave.png';

const Slot = React.createClass({
    render: function() {
        let style = {
            backgroundColor: !!this.props.slotState ? this.props.slotState : '#4A434F',
            borderWidth: 2,
            height: 50,
            width: 50,
            borderRadius: 8,
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#331900'
        }

        return (
            <TouchableHighlight underlayColor="#E8C46F" onPress={ () => {this.props.handleActivation(this.props.slotIndex)} }  style={ style }>
                <Image source={require('./assets/uislot.png')} />
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

    render() {
        const offStyle = styles.stoneOff;

        return (
            <View style={ styles.stoneOuter } >
                <TouchableHighlight
                    underlayColor="red"
                    onPress={ ()=> { this.handleUpdate('#FF2605'); }}
                    style={ this.state.color === '#FF2605' ? [ offStyle, { backgroundColor: this.state.color }] : offStyle }>
                    <Text> Fire </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="blue"
                    onPress={ ()=> { this.handleUpdate('#12C8FF'); }}
                    style={ this.state.color === '#12C8FF' ? [ offStyle, { backgroundColor: this.state.color }] : offStyle }>
                    <Text> Ice </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="yellow"
                    onPress={ ()=> { this.handleUpdate('#F3F315'); }}
                    style={ this.state.color === '#F3F315' ? [ offStyle, { backgroundColor: this.state.color }] : offStyle }>
                    <Text> Light </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="green"
                    onPress={ ()=> { this.handleUpdate('#03FF07'); }}
                    style={ this.state.color === '#03FF07' ? [ offStyle, { backgroundColor: this.state.color }] : offStyle }>
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

        const slotRows = this.state.slots.slice(0, 12).map( ( slot, i ) => {
            return <Slot slotIndex={i} slotState={ slot } key={i} handleActivation={ this.handleActivation } />
        });

        return (
            <View style={styles.container}>
                <Image source={ caveBackground } style={styles.imageBackground}>
                    <View style={styles.topBar}></View>
                    <View style={styles.header}>
                        <Text style={{ fontSize: 20 }}>{ this.state.spell }</Text>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.battleText}></View>
                        <View style={styles.uiBottom}>
                            <View style={styles.allSlots}>
                                <Stones handleChange={ this.handleStoneChange }/>
                                <View style={styles.slotOuter}>{ slotRows }</View>
                            </View>
                            <View style={styles.spellView}></View>
                        </View>
                    </View>
                    <View style={styles.healthBar}>
                        <Text style={{ color: 'white'}}>Health</Text>
                    </View>
                    <View style={styles.footer}>
                        <TouchableHighlight underlayColor="gray" onPress={ this.commitClear } style={ styles.button }>
                            <Text>Clear</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="gray" onPress={ this.commitCast } style={ styles.button }>
                            <Text>Cast</Text>
                        </TouchableHighlight>
                    </View>
                </Image>
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
