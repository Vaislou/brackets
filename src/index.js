module.exports = function check(str, bracketsConfig) {
    let bracketsConfigArr = bracketsConfig.flatMap(call => call.join(''));
    if (str.length % 2 !== 0) {
        return false;
    } else {
        for (let i = 0; i < bracketsConfigArr.length; i++) {
            if (str.includes(bracketsConfigArr[i])) {
                str = str.replace(bracketsConfigArr[i], '')
                i -= bracketsConfigArr.length;
            }
        }
        if (str == 0) {
            return true;
        } else {return false;}
    }
}
