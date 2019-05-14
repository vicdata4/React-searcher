import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './SearchBar'


class App extends React.Component {

    onSearchSubmit(term) {
        console.log(term);
    }


    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmitx={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;