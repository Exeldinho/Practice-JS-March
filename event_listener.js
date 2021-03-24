/**return Math.random() < 0.5 ? 'heads' : 'tails';
const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

Recall how it works: you write x ? y : z, where x, y, and z are all JavaScript expressions.
When your code is executed, x is evaluated as either “truthy” or “falsy.”
If x is truthy, then the entire ternary operator returns y.
If x is falsy, then the entire ternary operator returns z.


const tasty = (
    <ul>
        <li>Applesauce</li>
        { !baby && <li>Pizza</li> }
        { age > 15 && <li>Brussels Sprouts</li> }
        { age > 20 && <li>Oysters</li> }
        { age > 25 && <li>Grappa</li> }
    </ul>
);

{!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}



const strings = ['Home', 'Shop', 'About Me'];
const listItems = strings.map(string => <li>{string}</li>);
<ul>{listItems}</ul>

const people = ['Rowe', 'Prevost', 'Gare'];
const peopleLis = people.map(person =><li>{person}</li>);
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));

const people = ['Rowe', 'Prevost', 'Gare'];
const peopleLis = people.map((person, i) =>
    <li key={'person_' + i}>{person}</li>
);
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app')); */
