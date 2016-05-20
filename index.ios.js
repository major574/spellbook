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
            activated1: false,
            activated2: false,
            activated3: false,
            activated4: false,
            activated5: false,
            activated6: false,
            activated7: false,
            activated8: false,
            activated9: false,
            activated10: false,
            activated11: false,
            activated12: false
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
                <Text style={styles.footText}>
                    Dungeon
                </Text>
            </View>
            <View style={styles.slot}>
                <View style={styles.slot}>
                    {this.toggleSlot1()}
                    {this.toggleSlot2()}
                    {this.toggleSlot3()}
                    {this.toggleSlot4()}
                </View>
            </View>
            <View style={styles.slot}>
                <View style={styles.slot}>
                    {this.toggleSlot5()}
                    {this.toggleSlot6()}
                    {this.toggleSlot7()}
                    {this.toggleSlot8()}
                </View>
            </View>
            <View style={styles.slot}>
                <View style={styles.slot}>
                    {this.toggleSlot9()}
                    {this.toggleSlot10()}
                    {this.toggleSlot11()}
                    {this.toggleSlot12()}
                </View>
            </View>
            <View style={styles.manaBar}>
                <Text style={styles.footText}>
                    Mana Bar
                </Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.footer}>
                    {this.clearButton()}
                    {this.castButton()}
                </View>
            </View>

        </View>
    },
    toggleSlot1: function(){
        var style = this.state.activated1 ? styles.buttonOn : styles.buttonOff;
        return <TouchableHighlight underlayColor="gray" onPress={this.handleActivation1} style={style}>
            <Text>
                {this.state.activated1 ? 'On' : 'Off'}
            </Text>
        </TouchableHighlight>
    },
    toggleSlot2: function(){
        var style = this.state.activated2 ? styles.buttonOn : styles.buttonOff;
        return <TouchableHighlight underlayColor="gray" onPress={this.handleActivation2} style={style}>
            <Text>
                {this.state.activated2 ? 'On' : 'Off'}
            </Text>
        </TouchableHighlight>
    },
    toggleSlot3: function(){
        var style = this.state.activated3 ? styles.buttonOn : styles.buttonOff;
        return <TouchableHighlight underlayColor="gray" onPress={this.handleActivation3} style={style}>
            <Text>
                {this.state.activated3 ? 'On' : 'Off'}
            </Text>
        </TouchableHighlight>
    },
    toggleSlot4: function(){
        var style = this.state.activated4 ? styles.buttonOn : styles.buttonOff;
        return <TouchableHighlight underlayColor="gray" onPress={this.handleActivation4} style={style}>
            <Text>
                {this.state.activated4 ? 'On' : 'Off'}
            </Text>
        </TouchableHighlight>
    },
    toggleSlot5: function(){
        var style = this.state.activated5 ? styles.buttonOn : styles.buttonOff;
        return <TouchableHighlight underlayColor="gray" onPress={this.handleActivation5} style={style}>
            <Text>
                {this.state.activated5 ? 'On' : 'Off'}
            </Text>
        </TouchableHighlight>
    },
    toggleSlot6: function(){
        var style = this.state.activated6 ? styles.buttonOn : styles.buttonOff;
        return <TouchableHighlight underlayColor="gray" onPress={this.handleActivation6} style={style}>
            <Text>
                {this.state.activated6 ? 'On' : 'Off'}
            </Text>
        </TouchableHighlight>
    },
    toggleSlot7: function(){
        var style = this.state.activated7 ? styles.buttonOn : styles.buttonOff;
        return <TouchableHighlight underlayColor="gray" onPress={this.handleActivation7} style={style}>
            <Text>
                {this.state.activated7 ? 'On' : 'Off'}
            </Text>
        </TouchableHighlight>
    },
    toggleSlot8: function(){
        var style = this.state.activated8 ? styles.buttonOn : styles.buttonOff;
        return <TouchableHighlight underlayColor="gray" onPress={this.handleActivation8} style={style}>
            <Text>
                {this.state.activated8 ? 'On' : 'Off'}
            </Text>
        </TouchableHighlight>
    },
    toggleSlot9: function(){
        var style = this.state.activated9 ? styles.buttonOn : styles.buttonOff;
        return <TouchableHighlight underlayColor="gray" onPress={this.handleActivation9} style={style}>
            <Text>
                {this.state.activated9 ? 'On' : 'Off'}
            </Text>
        </TouchableHighlight>
    },
    toggleSlot10: function(){
        var style = this.state.activated10 ? styles.buttonOn : styles.buttonOff;
        return <TouchableHighlight underlayColor="gray" onPress={this.handleActivation10} style={style}>
            <Text>
                {this.state.activated10 ? 'On' : 'Off'}
            </Text>
        </TouchableHighlight>
    },
    toggleSlot11: function(){
        var style = this.state.activated11 ? styles.buttonOn : styles.buttonOff;
        return <TouchableHighlight underlayColor="gray" onPress={this.handleActivation11} style={style}>
            <Text>
                {this.state.activated11 ? 'On' : 'Off'}
            </Text>
        </TouchableHighlight>
    },
    toggleSlot12: function(){
        var style = this.state.activated12 ? styles.buttonOn : styles.buttonOff;
        return <TouchableHighlight underlayColor="gray" onPress={this.handleActivation12} style={style}>
            <Text>
                {this.state.activated12 ? 'On' : 'Off'}
            </Text>
        </TouchableHighlight>
    },
    handleActivation1: function(){
        if(this.state.activated1 == false){
            this.setState({activated1: true});
            return
        }else{
            this.setState({activated1: false});
        }
    },
    handleActivation2: function(){
        if(this.state.activated2 == false){
            this.setState({activated2: true});
            return
        }else{
            this.setState({activated2: false});
        }
    },
    handleActivation3: function(){
        if(this.state.activated3 == false){
            this.setState({activated3: true});
            return
        }else{
            this.setState({activated3: false});
        }
    },
    handleActivation4: function(){
        if(this.state.activated4 == false){
            this.setState({activated4: true});
            return
        }else{
            this.setState({activated4: false});
        }
    },
    handleActivation5: function(){
        if(this.state.activated5 == false){
            this.setState({activated5: true});
            return
        }else{
            this.setState({activated5: false});
        }
    },
    handleActivation6: function(){
        if(this.state.activated6 == false){
            this.setState({activated6: true});
            return
        }else{
            this.setState({activated6: false});
        }
    },
    handleActivation7: function(){
        if(this.state.activated7 == false){
            this.setState({activated7: true});
            return
        }else{
            this.setState({activated7: false});
        }
    },
    handleActivation8: function(){
        if(this.state.activated8 == false){
            this.setState({activated8: true});
            return
        }else{
            this.setState({activated8: false});
        }
    },
    handleActivation9: function(){
        if(this.state.activated9 == false){
            this.setState({activated9: true});
            return
        }else{
            this.setState({activated9: false});
        }
    },
    handleActivation10: function(){
        if(this.state.activated10 == false){
            this.setState({activated10: true});
            return
        }else{
            this.setState({activated10: false});
        }
    },
    handleActivation11: function(){
        if(this.state.activated11 == false){
            this.setState({activated11: true});
            return
        }else{
            this.setState({activated11: false});
        }
    },
    handleActivation12: function(){
        if(this.state.activated12 == false){
            this.setState({activated12: true});
            return
        }else{
            this.setState({activated12: false});
        }
    },
    castButton: function(){
        return <TouchableHighlight underlayColor="gray" onPress={this.commitCast} style={styles.button}>
            <Text>
                Cast
            </Text>
        </TouchableHighlight>
    },
    clearButton: function(){
        // var style = this.state.activated1 ? styles.buttonOn : styles.buttonOff;
        return <TouchableHighlight underlayColor="gray" onPress={this.commitClear} style={styles.button}>
            <Text>
                Clear
            </Text>
        </TouchableHighlight>
    },
    commitClear: function(){
        this.setState({activated1: false});
        this.setState({activated2: false});
        this.setState({activated3: false});
        this.setState({activated4: false});
        this.setState({activated5: false});
        this.setState({activated6: false});
        this.setState({activated7: false});
        this.setState({activated8: false});
        this.setState({activated9: false});
        this.setState({activated10: false});
        this.setState({activated11: false});
        this.setState({activated12: false});

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
