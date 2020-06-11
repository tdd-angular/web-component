# Web component

> This repo will show you several examples about how Web component works.



# Introduction

Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

## Concepts and usage

As developers, we all know that reusing code as much as possible is a good idea. This has traditionally not been so easy for custom markup structures — think of the complex HTML (and associated style and script) you've sometimes had to write to render custom UI controls, and how using them multiple times can turn your page into a mess if you are not careful.

Web Components aims to solve such problems — it consists of three main technologies, which can be used together to create versatile custom elements with encapsulated functionality that can be reused wherever you like without fear of code collisions.

- **Custom elements**: A set of JavaScript APIs that allow you to define custom elements and their behaviour, which can then be used as desired in your user interface.
- **Shadow DOM**: A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element — which is rendered separately from the main document DOM — and controlling associated functionality. In this way, you can keep an element's features private, so they can be scripted and styled without the fear of collision with other parts of the document.
- **HTML templates**: The [` and [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) elements enable you to write markup templates that are not displayed in the rendered page. These can then be reused multiple times as the basis of a custom element's structure.
- **ES Modules(CommonJS vs AMD vs RequireJS vs ES6 Modules)**: The [ES Modules](https://www.webcomponents.org/introduction) specification defines the inclusion and reuse of JS documents in a standards based, modular, performant way.

The basic approach for implementing a web component generally looks something like this:

1. Create a class in which you specify your web component functionality, using the ECMAScript 2015 class syntax (see [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) for more information). 
2. Register your new custom element using the [`CustomElementRegistry.define()`](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) method, passing it the element name to be defined, the class or function in which its functionality is specified, and optionally, what element it inherits from.
3. If required, attach a shadow DOM to the custom element using [`Element.attachShadow()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow) method. Add child elements, event listeners, etc., to the shadow DOM using regular DOM methods.
4. If required, define an HTML template using [` and [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot). Again use regular DOM methods to clone the template and attach it to your shadow DOM.
5. Use your custom element wherever you like on your page, just like you would any regular HTML element.

## Using the lifecycle callbacks

You can define several different callbacks inside a custom element's class definition, which fire at different points in the element's lifecycle:

- ```
  connectedCallback
  ```

  : Invoked each time the custom element is appended into a document-connected element. This will happen each time the node is moved, and may happen before the element's contents have been fully parsed.

  **Note**: `connectedCallback` may be called once your element is no longer connected, use [`Node.isConnected`](https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected) to make sure.

- `disconnectedCallback`: Invoked each time the custom element is disconnected from the document's DOM.

- `adoptedCallback`: Invoked each time the custom element is moved to a new document.

- `attributeChangedCallback`: Invoked each time one of the custom element's attributes is added, removed, or changed. Which attributes to notice change for is specified in a static get `observedAttributes` method

## Tutorial

- https://indepth.dev/angular-web-components-a-complete-guide/

Ivy improvement:

- https://indepth.dev/building-and-bundling-web-components/

Other examples:

https://coryrylan.com/blog/using-web-components-in-angular



> Thanks to the [Custom Elements](https://html.spec.whatwg.org/multipage/scripting.html#custom-elements) spec which is implemented in modern browsers, web developers can **create their own HTML tags**, improve and customize the existing HTML tags, or build reusable components that can be used in vanilla JavaScript or in other libraries or frameworks like Angular 9, React or Vue etc.

# Motivation

## Sources

- https://developer.mozilla.org/en-US/docs/Web/Web_Components;
- https://indepth.dev/building-and-bundling-web-components/;
- https://www.techiediaries.com/angular/angular-9-web-components-custom-elements-shadow-dom/;
- https://coryrylan.com/blog/using-web-components-in-angular;
- https://developers.google.com/web/fundamentals/web-components/customelements.

