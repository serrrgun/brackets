module.exports = function check(str, bracketsConfig) {

    for (let i = 0; i < bracketsConfig.length;) {
        const configItem = bracketsConfig[i].join('')
        
        if (str.includes(configItem)) {
            str = str.replace(configItem, '')
            i = 0
        } else {
            i++
        }
    };
    
    return str.length == 0 ? true : false;
}
