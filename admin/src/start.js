import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";
import Login from "./login";


let component;

if(location.pathname === "/login" ) {

    component = <Login />;
} else {
    component = (
        <App />
    );
}



ReactDOM.render(component, document.querySelector("main"));


// ReactDOM.render(<App />, document.querySelector("main"));
