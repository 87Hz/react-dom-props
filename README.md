# react-dom-props

We cannot set {...props} to DOM Element directly as there might be some non-supported props. And it would be tedious to map them one by one.

In case of single DOM Element we would like to manipulate inside a component, `react-dom-props` provides what you need. It will simply pick supported DOM props as listed in `https://reactjs.org/docs/dom-elements.html`

### Install

```
yarn add react-dom-props
```

### Usage

```jsx
import { pickHtmlProps, pickSvgProps } from 'react-dom-props';

export const MyComponent = props => {
  // some logic here

  // pick html or svg props supported by React
  const htmlProps = pickHtmlProps(props);
  const svgProps = pickSvgProps(props);

  // then pass htmlProps or svgProps to the DOM element you would like to manipulate
  return (
    // html tag
    <div {...htmlProps} />
    // OR svg tag
    <svg {...svgProps} />
  );
};
```
