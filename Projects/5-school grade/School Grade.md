### Objective

In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.

### Task

Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam.

```js

function getGrade(score) {
    let grade;

    if (score <= 5) {
        return 'F';
    } else if (score <= 10) {
        return 'E';
    } else if (score <= 15) {
        return 'D';
    } else if (score <= 20) {
        return 'C';
    } else if (score <= 25) {
        return 'B';
    } else {
        return 'A';
    }

    return grade;
}
```