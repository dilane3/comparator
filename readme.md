# Comparator module

This module provide to you some methods that you may use to handle some comparison operations in you project. It possible to compare numbers and strings values.

## First step: Initialize the comparator

### Installation

```bash
npm install easy-comparator

```
or
```bash
npm i easy-comparator

```

### Initialization

Firstly you must import the module like this
```javascript
import Comparator from 'comparator'

```
or

```javascript
const Comparator = require("comparator")

```
after that you must initialize a new comparator
```javascript
const compare = new Comparator()

```
## Second Step: Using the comparator
we have some methods like: equal(a, b), lessThan(a, b), greaterThan(a, b), lessThanOrEqual(a, b), greatherThan(a, b)

### equal
This method takes two parameters (number or string) and returns a boolean

```javascript
const a = 5
const b = 10

compare.equal(a, b) // false

const str1 = "hello"
const str2 = "hello"

compare.equal(str1, str2) // true

```

### lessThan
This method takes two parameters (number) and returns a boolean

```javascript
const a = 5
const b = 10

compare.lessThan(a, b) // true

```

### greaterThan
This method takes two parameters (number) and returns a boolean

```javascript
const a = 5
const b = 10

compare.greaterThan(a, b) // false

```

### lessThanOrEqual
This method takes two parameters (number) and returns a boolean

```javascript
const a = 5
const b = 10
const c = 10
const d = 12

compare.lessThanOrEqual(a, b) // true
compare.lessThanOrEqual(b, c) // true
compare.lessThanOrEqual(b, d) // false

```

### greaterThanOrEqual
This method takes two parameters (number) and returns a boolean

```javascript
const a = 5
const b = 10
const c = 10
const d = 12

compare.greaterThanOrEqual(a, b) // false
compare.greaterThanOrEqual(b, c) // true
compare.greaterThanOrEqual(b, d) // true

```

Thank you.
