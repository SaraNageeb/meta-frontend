# Parent-child data flow
Imagine you're working for an online retailer with discounts prices regularly to keep stock moving. Sales are announced at multiple points on the website. But what's the best way to keep this information up to date?

 For example, updating items individually would be tedious and time-consuming. Fortunately, it's possible to change information at a single point and have everything else update automatically to match. This idea illustrates a parent-child relationship.
 
 
 ```Promo.jsx```
 
 ```js
 import PromoHeading from "./PromoHeading";
const data = {
  heading: "99% all items must go",
  callToAction: "everything must go!"
};
const Promo = () => {
  return (
    <div>
      <PromoHeading heading={data.heading} />
      <PromoHeading callToAction={data.callToAction} />
    </div>
  );
};

export default Promo;
```

```PromoHeading.jsx```

```js
const PromoHeading = (props) => {
  return (
    <div>
      <h2>{props.heading}</h2>
      <h3>{props.callToAction}</h3>
    </div>
  );
};

export default PromoHeading;
```



 In this example, you learned how the parent-child relationship can be set up so that data flows from parent to child. By storing data in the parent component, you can dynamically pass it to the child component without the need to update children individually.
