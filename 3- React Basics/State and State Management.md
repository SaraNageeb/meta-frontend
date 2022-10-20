# What is State and State Management in React

State in JavaScript applications simply refers to all data generated through user actions. 
It is a plain JavaScript object that holds information used by React to render components in which its content is dynamic depending on the resultant action of users. 

React applications, whether functional or class components can have stated. In react applications, data can be passed between components through a method called "Prop-drilling". This is when data is passed continuously from parents to descendants. 

But as the application gets larger, the need for a global state to hold and share states arises.
In large applications such as e-commerce sites, when users interact with a certain component changes are effected into components in the application. For instance:

* Adding a shopping item to a cart requires the resulting data to be passed from the shopping component to the cart component.

* Add purchased product to user purchase history.

* Checkout of items in the cart

* In complex apps, these changes can be difficult to track, therefore the need for a structure to handle data flow and manage communication between our app’s components. State management is a definite structure for managing communication and sharing of states in our application.

* State management libraries provide us with tools to create and manage updates of these structures. Over the years, different state management libraries have been developed. Knowing what state management libraries to use is crucial to the development of an application. In this tutorial, we will be looking at some state management libraries and how they can be used.


***
