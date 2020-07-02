# About
This package provides few lodash methods to manipulate arrays.
The name says it all. 'man-array' which means 'Manipulate Array'.

# Installation and Usage

`npm i man-array`

ES5: `const manArray = require('man-array');`


ES6: `import manArray from 'man-array'`

# Quick Guide and Features

#### join
Takes an array and joins then with any string in between each element of the array. 
It returns a string.
```
let result = manArray.join(['a', 'b', 'c'], ":")  //result will be a:b:c

```


#### last
Returns the last element of the array
```
let result = manArray.last([1, 2, 3, 4, 5]) //result will be 5
```


#### min
Returns the minimum value in an array
```
let result = manArray.min([4, 2, 8, 6]); //result will be 2

let result = manArray.min([]); //result will be 'undefined'
```


#### max
Returns the maximum value in an array

```
let result = manArray.max([4, 2, 8, 6]); //result will be 8

let result = manArray.max([]); //result will be 'undefined'

```

#### nth
Returns the element in a specific(required) position.
```
let result = manArray.nth([1,2,3], 2); //result will be 3
```

#### sum
Returns the sum of the array
```
let result = manArray.sum([1,2,3]); //result will be 6
```

#### flatDeep
Returns the new flattened array
```
let result = manArray.flatDeep([1, [2, [3, [4]], 5]]); //result will be [1,2,3,4,5]
```

#### head
Gets the first element of array

```
let result = manArray.head([1,2,3,4]); //result will be 1

let result = manArray.head([]); //result will be undefined
```


#### initial
Gets all but the last element of array

```
let result = manArray.initial([1, 2, 3])//result will be [2, 3]

```


#### concat 
Creates a new array concatenating array with any additional arrays and/or values

``` 

let result = manArray.concat([1,2,3], [4], [5], [6]) //result will be [1, 2, 3, 4, 5, 6]

```