// Code your solution here

function findMatching(array, string) {
    let answer = array.filter(a => { return a.toLowerCase() === string.toLowerCase() })
    return answer
}

function fuzzyMatch(array, string) {
    let brokenString = string.split('')[0];
    function brokenWord(word) {
        return word.split('')[0]
    };
    let answer = array.filter(a => { return brokenWord(a) === brokenString })
    return answer
}

function matchName(array, string) {
    let answer = array.filter(a => a['name'] === string)
    return answer
}
