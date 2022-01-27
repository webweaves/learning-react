import React, {Component} from 'react';

class FilterLetterE extends Component {
    filterLetters(letter) { 
        return letter === 'e' ? false : true;
    }

    render() {
        return ( 
            "abcdefg".split("")
                .filter((letter) => this.filterLetters(letter))
                .map(filteredLetter => (
                    <div>{filteredLetter}</div>
                ))
        );
    }
}

export default FilterLetterE;