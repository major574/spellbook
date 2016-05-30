import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    topBar: {
        flex: 1,
        backgroundColor: '#4A434F'
    },

    header: {
        // height: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        backgroundColor: 'white'
    },

    footer: {
        flex: 2,
        // height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#4A434F'
    },

    healthBar: {
        flex: 1,
        // height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#A11624',
        backgroundColor: '#FF3347',
        // color: 'white',
        // fontSize: 15
    },

    battleText: {
        flex: 1,
        // height: 200,
        // borderColor: 'purple',
        // borderWidth: 2
    },

    uiBottom: {
        // flex: 2,
        height: 220,
        flexDirection: 'row',
        // marginBottom: 5
        // alignSelf: 'flex-end',
        // borderColor: 'green',
        // borderWidth: 2,
        alignSelf: 'stretch',
    },

    allSlots: {
        flex: 2,
        alignSelf: 'flex-start',
        // borderColor: 'red',
        // borderWidth: 1,
    },

    spellView: {
        flex: 1,
        // backgroundColor: 'white',
        // opacity: 0.5,
        // borderColor: 'black',
        // borderWidth: 2

    },

    stoneOuter: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 8,
        marginBottom: 5,
        // borderColor: 'gray',
        // borderWidth: 1,

    },

    slotOuter: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 210,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // borderColor: 'blue',
        // borderWidth: 2
    },

    imageBackground: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        // borderColor: 'yellow',
        // borderWidth: 2

    },

    body: {
        flex: 16,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        // borderColor: 'yellow',
        // borderWidth: 2
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
        backgroundColor: '#4A434F',
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
