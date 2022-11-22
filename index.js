const a = [1,2,3,4]
const b = {one:1,two:2,three:3,four:4}
const c = number => number * 2 - 10

const myEach = function (collection, callback) {
    let arrayCollection
    if(Array.isArray(collection)) {
        arrayCollection = collection
    } else {
        arrayCollection = Object.values(collection)
    }

    for(const element of arrayCollection) {
        callback(element)
    }
    return collection
}

const myMap = function (collection, callback) {
    let arrayCollection
    if(Array.isArray(collection)) {
        arrayCollection = collection
    } else {
        arrayCollection = Object.values(collection)
    }

    let updatedCollection = []
    for(const element of arrayCollection) {
        const newElement = callback(element)
        updatedCollection.push(newElement)
    }
    return updatedCollection
}

const myReduce = function (collection, callback, acc) {
    let arrayCollection
    if(Array.isArray(collection)) {
        arrayCollection = collection
    } else {
        arrayCollection = Object.values(collection)
    }
    
    if(typeof(acc) !== 'undefined') {
        for(const element of arrayCollection) {
            acc = callback(acc, element, arrayCollection)
        }
        return acc
    } else {
        let acc = arrayCollection[0]
        for(let i = 1; i < arrayCollection.length; i ++) {
            acc = callback(acc, arrayCollection[i], arrayCollection)
        }
        return acc
    }
}

const myFind = function (collection, predicate) {
    let arrayCollection
    if(Array.isArray(collection)) {
        arrayCollection = collection
    } else {
        arrayCollection = Object.values(collection)
    }

    for(const element of arrayCollection) {
        if(predicate(element)) {
            return element
        }
    }
}

const myFilter = function (collection, predicate) {
    let arrayCollection
    if(Array.isArray(collection)) {
        arrayCollection = collection
    } else {
        arrayCollection = Object.values(collection)
    }

    let updatedCollection = []
    for(const element of arrayCollection) {
        if(predicate(element)) {
            updatedCollection.push(element)
        }
    }
    return updatedCollection
}

const mySize = function (collection) {
    let arrayCollection
    if(Array.isArray(collection)) {
        arrayCollection = collection
    } else {
        arrayCollection = Object.values(collection)
    }

    return arrayCollection.length
}

const myFirst = function (array, integer) {
    let updatedArray = []
    if(typeof(integer) === 'number') {
        for(let i = 0; i < integer; i ++) {
            updatedArray.push(array[i])
        }
        return updatedArray
    } else {
        return array[0]
    }
}

const myLast = function (array, integer) {
    let updatedArray = []
    if(typeof(integer) === 'number') {
        for(let i = array.length - 1; i > 0; i --) {
            updatedArray.unshift(array[i])
        }
        return updatedArray
    } else {
        return array[array.length - 1]
    }
}

const myKeys = function (object) {
    return Object.keys(object)
}

const myValues = function (object) {
    return Object.values(object)
}