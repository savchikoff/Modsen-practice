function countVowels(str) {
    "use strict";

    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}