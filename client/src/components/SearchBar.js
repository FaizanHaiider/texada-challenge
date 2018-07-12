import React from 'react';
import {Search} from 'semantic-ui-react';

const SearchBar = (props) => (
    <Search
        input='text'
        onSearchChange={props.onSearchChange}
        showNoResults={false}>
    </Search>
)

export default SearchBar;