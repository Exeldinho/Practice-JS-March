class MyClass extends React.Component {
    handleHover() { //handleClick or handleKeyPress
        alert('I am an event handler.');
        alert('I will listen for a "hover" event.');
    }

    render() {
        return <Child onHover={this.handleHover} />; //onClick or onKeyPress
    }
}