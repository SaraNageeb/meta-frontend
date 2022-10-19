# What are React Hooks?
![image](https://user-images.githubusercontent.com/25232528/196477682-63b2cbb0-9276-4ec7-8a1f-3db5d6b41129.png)

Until version 16.7 it was necessary to create classes to use all React functionality in a component, such as state and lifecycle.

It was possible to create components from functions, but these components only received properties, not having lifecycles, states and other React functionality.

Hooks were introduced in version 16.8, and allow us to use various React features within functions in a very simple way.

***

## Why use Hooks?
Hooks help us organize the logic that will be used in a component. We can even create our own Hooks to reuse logic across multiple components. The community itself is creating very interesting Hooks that we can use in our projects.

Some of the most used Hooks are useState, useEffect, useContext, useCallback, useMemo and useRef.

***

## Hook Rules
There are 3 rules for hooks:

* Hooks can only be called inside React function components.
* Hooks can only be called at the top level of a component.
* Hooks cannot be conditional

> **_NOTE:_**  Hooks will not work in React class components.

***
