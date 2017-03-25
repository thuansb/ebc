### UPDATED

- Generate table using div, flexbox.
- Using ``react-virtual components`` ``List``, ``InfiniteLoader``, ``AutoSizer`` to make table be able to render a large amount of records (>100000 records) with a good performance and support for lazy loading data from server.
- To set width of column, using flex property as in example.

Limitations:
- The height of record have to define when create a table, can not be set as auto. This is also a limitation of ``react-virtual``, because they render a large amount of records, so compute the height of all of them is an heavy task.

There're also one solution for this issue, using HOC component CellMeasurer to compute the row height but it not the recommended way as they mention in their document: https://github.com/bvaughn/react-virtualized/blob/master/docs/CellMeasurer.md
I tried to use this component but the performance is not good (You can check the implementation in in develop branch).


#### Note

Please see the demo online here: https://responsivetable.firebaseapp.com

The table component folder: ``src/components/ResponsiveTable``
Demo source: ``src/App.js``

For your information, I using react-create-app to create this demo.

#### Scripts

  - [npm start](#npm-start)
  - [npm run build](#npm-run-build)
