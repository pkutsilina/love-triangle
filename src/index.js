/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let processedSet = new Set();
    let result = 0;
    for (let i = 0; i + 2 <= preferences.length; i++) {
        let firstNormalValue = preferences[i] - 1;
        if (processedSet.has(firstNormalValue)) {
            //already processed
            continue;
        }
        if (firstNormalValue == i) {
            //self lover!!
            continue;
        }
        let secondNormalValue = preferences[firstNormalValue] - 1;
        let thirdNormalValue = preferences[secondNormalValue] - 1;
        if (thirdNormalValue == i){
            result += 1;
            processedSet.add(firstNormalValue);
            processedSet.add(secondNormalValue);
            processedSet.add(thirdNormalValue);
        }
    }
    return result;
};
