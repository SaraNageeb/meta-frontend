# innerText vs. innerHTML vs. textContent

When you’re getting or setting an element in JavaScript, you have many options — many seemingly exactly the same.
In this post, I break down the subtle differences between innerHTML, innerText, and textContent when you’re manipulating your JavaScript code.
Let’s start with some sample HTML code that I’ll use to demonstrate how each property works.

```js
<div id='blog test'>
   
This element is <strong>strong</strong> and     has some super fun <code>code</code>!
</div>
```

As you can see in the code above, we’re including some HTML to make the word strong bold and make the word code appear monospaced.

***

Let’s say we’re creating a variable getValue and set it equal to our ``<div>``.

```js
const getValue = document.getElementById('blog-test');
```

Now, I’ll explain what you get when you call innerText, innerHTML, and textContent on that getValue variable.

***

### .innerHTML

```js
getValue.innerHTML
// =>   This element is <strong>strong</strong> and     has some super fun <code>code</code>!
```

**What it returns**
The string inside our `<div>` and the HTML (or XML) markup contained within our string, including any spacing, line breaks, etc.

**When to use it**
When you want to see the HTML markup and what exactly is in our element — including any spacing, line break, and formatting irregulars.

**Additional notes**
If the text inside the element includes the characters `&`, `<`, or `>`, innerHTML will return these characters as HTML entities `&amp;`, `&lt;`, and `&gt;`.

***

### .innerText

```js
getValue.innerText
// =>   This element is strong and has some super fun code!
```

**What it returns**
The string inside our ``<div>``. It approximates the “rendered” text content of a node — it’s aware of styling and CSS.
Think of it this way: if a user highlighted the contents of an element on their screen and copied it to their clipboard, what you get with innerText is exactly what it would return.

**When to use it**
When you only need to see what’s in the element — with zero formatting.

**Additional notes**
innerText retrieves and sets the content of the tag as plain text, where innerHTML retrieves and sets the same content in HTML format.

***

### .textContent

```js
getValue.textContent
// =>   This element is strong and     has some super fun code!
```

**What it returns**
The content of all elements in the node, including script and style elements. It’s aware of formatting like spacing and line breaks and will return those.

**When to use it**
When you want to see what’s in the element, plus any styling on it.

**Additional notes**
innerText is very similar to textContent, however, there are important differences between them! Put simply, innerText is aware of the rendered appearance of text, while textContent is not.

***

### Side by Side by Side Comparison

Let’s revisit our original code:

```js
<div id='blog test'>
   
This element is <strong>strong</strong> and     has some super fun <code>code</code>!
</div>
const getValue = document.getElementById('blog-test');
```

Here’s what innerHTML, innerText, and textContent return:

```html
getValue.innerHTML
This element is <strong>strong</strong> and has    some super fun <code>code</code>!

getValue.innerText
This element is strong and has some super fun code!

getValue.textContent
This element is strong and     has some super fun code!
```