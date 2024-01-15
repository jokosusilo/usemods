This file contains functions that are related to numbers.

### random

Generates a random integer between the specified minimum and maximum values.

```js [js]
random(1, 10)
```

**Returns:** 5

### sum

Calculates the sum of an array of numbers.

```js [js]
sum([1, 2, 3])
```

**Returns:** 6

### mean

Calculates the mean of an array of numbers.

```js [js]
average([1, 2, 3])
```

**Returns:** 2

### average

Calculates the mean of an array of numbers.

```js [js]
average([1, 2, 3])
```

**Returns:** 2

### median

Calculates the median of an array of numbers.

```js [js]
median([1, 2, 3])
```

**Returns:** 2

### mode

Calculates the mode of an array of numbers.

```js [js]
mode([1, 2, 2, 3])
```

**Returns:** 2

### min

Finds the minimum value in an array of numbers.

```js [js]
min([1, 2, 3])
```

**Returns:** 1

### max

Finds the maximum value in an array of numbers.

```js [js]
max([1, 2, 3])
```

**Returns:** 3

### clamp

Clamps a number between the specified minimum and maximum values.

```js [js]
clamp(1, 10, 20)
```

**Returns:** 10

Returns the minimum and maximum values in an array of numbers.

```js [js]
minMax([1, 2, 3, 4, 5])
```

**Returns:** [1, 5]

### range

Returns the difference between two values, expressed as a positive number.

```js [js]
range(-10, -20)
```

**Returns:** 10

### rangeAsPercentage

Returns the difference between two values, as a percentage.

```js [js]
differenceAsPercentage(10, 20)
```

**Returns:** 100

### percentage

Returns the percentage of a value, relative to another value.

```js [js]
percentage(10, 100)
```

**Returns:** 10

### standardDeviation

Returns the standard deviation of an array of numbers.

```js [js]
standardDeviation([1, 2, 3, 20, 120, 2000])
```

**Returns:** 0.5

### skewness

Returns the measure of asymmetry of the probability distribution of an array of numbers.

```js [js]
skewness([1, 2, 3, 20, 120, 2000])
```

**Returns:** 2.5

Return the frequency of all values (numbers, string or boolean) in an array as an object

```js [js]
frequency([1, 3, 2, 3, 3, 3, 'a', 'b', 'c', 'c'])
```

**Returns:** { '1': 1, '2': 1, '3': 4, a: 1, b: 1, c: 2 }

Returns the fequency of a property value in an array

```js [js]
frequencyOfPropert([1, 3, 2, 3, 3, 3, 'a', 'b', 'c', 'c'], 3)
```

**Returns:** 4
