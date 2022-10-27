# Task
Say you are working on a website that allows visitors to play bird sound by pressing buttons. The user interface is set up so that when a user presses a button it will start playing the bird sounds. Alternatively, if the bird sound is already playing, clicking on the button will pause it. Upon a subsequent click on the button, the sound should continue to play from where it was paused.

Additionally, you need to add multiple buttons for multiple bird sound mp3 tracks.

Most of the app is already completed, and to finish this task, you only need to add in a few remaining bits and pieces.

These two buttons are supposed to play the two different recordings of a species of bird named *Caspian Tern*. The detailed instructions of how to achieve this follow in the task.

## Steps

### **Step 1**

In this ungraded lab, your goal is to read through the existing code of the App.js file, and update the second button so that it's running the `toggle2` function on a click to the seond button.

### **Step 2**

After adding the `toggle2` function to the JSX expression in the second button's `onClick` event-handling attribute, you should un-comment the `bird2` variable on lines 9 to 11.

### **Step 3** 

Next, you need to define the `toggle2` function: it should have the exact same functionality as the `toggle1` function, but it needs to work with the `bird2` variable (instead of the `bird1` variable as it does in the `toggle1` function).

***

#### The Complete App: Song selection

```jsx
import React from "react"; 
 
function App() { 
 
  const bird1 = new Audio( 
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
  ); 
 
  const bird2 = new Audio( 
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
  ); 
 
  function toggle1() { 
    if (bird1.paused) { 
      bird1.play(); 
    } else { 
      bird1.pause(); 
    } 
  }; 
 
  function toggle2() { 
    if (bird2.paused) { 
      bird2.play(); 
    } else { 
      bird2.pause(); 
    } 
  }; 
 
  return ( 
    <div> 
      <button onClick={toggle1}>Caspian Tern 1</button> 
      <button onClick={toggle2}>Caspian Tern 2</button> 
    </div> 
  ); 
} 
 
export default App;
```

Check the app: https://zygsfh.csb.app/

***
