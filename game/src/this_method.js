import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    scream() {
        alert('All working Fine!');
    }

    render() {
        return <button onClick={this.scream}>Try It</button>;
    }
}

ReactDOM.render(
    <Button />,
    document.getElementById('app')
)