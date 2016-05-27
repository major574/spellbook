import React from 'react';
import { AppRegistry } from 'react-native';

import SpellBook from './spellBook';

const SpellBookApp = React.createClass({
    render() {
        return <SpellBook/>
    }
});

AppRegistry.registerComponent('spellbook', ()=> SpellBookApp);