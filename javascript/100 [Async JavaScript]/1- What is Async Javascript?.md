# Async JavaScript

* Governs how we perform tasks which take some time to complete. (e.g. Getting data from a database)

* Start something now and finish it later

***

### Synchronous JavaScript

* JavaScript can run ONE statement at a time

```js
console.log('line one');
console.log('line two');
console.log('line three');
```

***

### Code Example

```js
console.log(1);
console.log(2);
setTimeout( () => {
    console.log('callback function fired');
}, 2000);
console.log(3);
console.log(4);
```

```
outcome

1
2
3
4
"callback function fired"
```