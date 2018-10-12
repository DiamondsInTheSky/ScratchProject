import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.createUser = this.createUser.bind(this);
    }

    createUser() {
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ username: username, password: password }),
        })
        .then( response => response.json() )
        .then( data => {
            
        })
        .catch( err => console.log('Error', err));
    }

    render() {
        return (
            <div>
                this is an app.
                <button onClick={createUser}>Register</button>
            </div>
        )
    }
    
};

export default App;