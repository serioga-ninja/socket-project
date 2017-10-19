import React from 'react';
import BattleField from './BattleField';

let styles = {
    body: {margin: '0 auto', width: '800px'}
};

class Body extends React.Component {

    render() {
        return (
            <div style={styles.body}>
                <BattleField/>
            </div>
        );
    }
}

export default Body;