import React from 'react';

let styles = {
    body: {margin: '0 auto', width: '800px', border: '1px solid black', height: '400px'}
};

class BattleField extends React.Component {

    render() {
        return (
            <svg style={styles.body}>

            </svg>
        )
    }
}

export default BattleField;