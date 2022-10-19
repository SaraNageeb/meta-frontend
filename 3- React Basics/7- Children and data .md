# Children and data

In React JS, data flows in one direction only, from Parent to Child. This helps components to be simple and predictable.

Consider React components as simple functions that receive props and state and return HTML. When child components receive props from their parents, they either apply modifications (render) or pass it to another child that may use it.

![image](https://user-images.githubusercontent.com/25232528/196650692-fe45839b-d1c2-4b14-8259-95a8414552de.png)

Props are properties passed to a child component that can hold many data types (e.g. array, object, number, function, others). Considering React components looks like HTML tags, props are the attributes of the HTML element. On the following example,Square is the component, size, className and onClick are the props.

***
