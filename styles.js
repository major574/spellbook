import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
    },

    header: {
        height: 50,
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: 'white'
    },

    footer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#4A434F'
    },

    healthBar: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#A11624',
        backgroundColor: '#FF3347',
        color: 'white',
        fontSize: 15
    },

    battleText: {
        flex: 2
    },

    uiBottom: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5
    },

    allSlots: {
        flex: 1,
        alignSelf: 'flex-start'
    },

    spellView: {
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.5
    },

    stoneOuter: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 8,
        marginBottom: 5
    },

    slotOuter: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    imageBackground: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    },

    body: {
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'stretch',
        alignSelf: 'stretch'
    },

    button: {
        backgroundColor: '#665D6E',
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
        backgroundColor: '#777777',
        borderWidth: 1,
        height: 40,
        width: 40,
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: 'black',
        marginLeft: 4,
        borderRadius: 4
    }
});

export default styles;