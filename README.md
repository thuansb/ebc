#### Note

Please see the demo online here: https://responsivetable.firebaseapp.com

The table component folder: ``src/components/ResponsiveTable``
Demo source: ``src/App.js``

For your information, I using react-create-app to create this demo.

#### Design note:
- The component use html table to render the responsive table so that it's not limit in 12 cols.

- The JSX syntax is more succinct now, see in ``src/App.js``.

- Not using Redux: I think Redux is not fix for this kind of component. But I have worked a lot with Redux before. You can check my example that I wrote before here: https://github.com/thuansb/github-search-example

- Why I'm not using Context: as you can see in my component, I pass the data from root component to children by using props only. It seem like using Context is better in this case because the component tree having many levels, but as I checked the FB document, Context is not the recommended way so that I use props only. (https://facebook.github.io/react/docs/context.html

- Improvement point: should be use CSS module.

- To config width of column, we can do like this ``<Th style={{width: '10%'}}>ID</Th>``


#### Scripts

  - [npm start](#npm-start)
  - [npm run build](#npm-run-build)
