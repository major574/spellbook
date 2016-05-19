var React = require('react-native');
var {
    Text,
    View,
    TouchableHighlight,
    AppRegistry,
    StyleSheet
} = React;

var SpellBook = React.createClass({
    getInitialState: function(){
        return {
            activated: false
        }
    },
    render: function(){
        return <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headText}>
                    Spell Book
                </Text>
            </View>
            <View style={styles.body}>
            </View>

            <View style={styles.slot}>
                <View style={styles.slot}>
                    {this.toggleSlot()}
                    {this.toggleSlot()}
                    {this.toggleSlot()}
                    {this.toggleSlot()}
                </View>
            </View>
            <View style={styles.slot}>
                <View style={styles.slot}>
                    {this.toggleSlot()}
                    {this.toggleSlot()}
                    {this.toggleSlot()}
                    {this.toggleSlot()}
                </View>
            </View>
            <View style={styles.slot}>
                <View style={styles.slot}>
                    {this.toggleSlot()}
                    {this.toggleSlot()}
                    {this.toggleSlot()}
                    {this.toggleSlot()}
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footText}>
                    Mana Bar
                </Text>
            </View>
        </View>
    },
    toggleSlot: function(){
        return <TouchableHighlight underlayColor="gray" onPress={this.handleActivation} style={styles.button}>
            <Text>
                {this.state.activated ? 'On' : 'Off'}
            </Text>
        </TouchableHighlight>
    },
    handleActivation: function(){


        if(this.state.activated == false){
            this.setState({activated: true});
            return
        }else{
            this.setState({activated: false});
        }
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'stretch'
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
        borderWidth: 2,
        borderColor: 'purple'
    },
    headText: {
        fontSize: 30
    },
    footText: {
        fontSize: 15
    },
    slot: {
        flex: 1,

        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'yellow'

    },
    body: {
        flex: 6,

        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'yellow'
    },
    button: {
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
