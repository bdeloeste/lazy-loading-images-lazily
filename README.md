# Get Lazy Lazy Loading Images Lazily
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and showcases a demo to easily utilize the [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) API to lazy load images without doing work on the main thread.

To get started, simply run `yarn start` and check out the demo in your browser ([http://localhost:3000](http://localhost:3000))!

## Project includes
- Using the `IntersectionObserver` in React.
- Using the `src` attribute to reference the placeholder image when the page first loads and using the `data-src` attributes which reference the URL of the image to load when the element is in the viewport.
- Polyfill for `IntersectionObserver`
- A sick demo with sweet HD pics of IPAs.