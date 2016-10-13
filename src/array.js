/**
 * returns a copy of the input array with the element in index replaced
 * @param  {Array} array  the input array
 * @param  {Number} index the index of the element to replace
 * @param  {*} element    the new element to replace in the index position of the new array
 * @return {Array}        the new array with the replaced element in position index
 */
export function elementReplace(array, index, element) {
    return [].concat(array.slice(0, index), [element], array.slice(index + 1, array.length));
}

/**
 * returns a copy of the input array with an element inserted in the index position
 * @param  {Array} array  the input array
 * @param  {Number} index the index position to which the element will be inserted
 * @param  {*} element    the new element to put in the index position of the new array
 * @return {Array}        the new array with the inserted element in position index
 */
export function elementInsert(array, index, element) {
    return [].concat(array.slice(0, index + 1), [element], array.slice(index + 1, array.length));
}

/**
 * returns a copy of the input array with an element removed from the index position
 * @param  {Array} array  the input array
 * @param  {Number} index the index position of the element to remove from the returned array
 * @return {Array}        the new array without the removed element
 */
export function elementRemove(array, index) {
    return [].concat(array.slice(0, index), array.slice(index + 1, array.length));
}
