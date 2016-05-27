import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    headHalf: {
        flex: 1,
        backgroundColor: '#4A434F'
    },
    header: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: 'white',
    },
    footer: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#4A434F'
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
    },
    stoneSlot: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'gray',
        marginLeft: 8,
        marginBottom: 5
    },
    body: {
        flex: 13,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignItems: 'stretch'
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
        backgroundColor: '#5C5B5A',
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