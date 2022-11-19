---
title: "Stateful and stateless widgets"

categories:
- App Development

tags:
- Flutter

toc: true
toc_sticky: true
---

> ✒ Reference: [Write your first Flutter app, part 1](https://docs.flutter.dev/get-started/codelab)

## Stateless vs Stateful
- Stateless widgets
  - Immutable (properties cannot change, all values are final)
- Stateful widgets
  - Maintain state that might change during the lifetime of the widget
  - Requires at least two classes:
    1. a `StatefulWidget` class that creates an instance of 
    2. a `State` class
  - `StatefulWidget` class is immutable, can be thrown away and regenerated
  - `State` class persists over the lifetime of the widget
    - Prefixed with underscore - enforces privacy, best practice for `State` objects

- Example: boiler plate (`stless` + Return)
    ```Dart
    class RandomWords extends StatefulWidget {
    const RandomWords({Key? key}) : super(key: key);

    @override
    State<RandomWords> createState() => _RandomWordsState();
    }

    // Accompanying State class of RandomWords widget
    class _RandomWordsState extends State<RandomWords> {
    @override
    Widget build(BuildContext context) {
        return Container();
    }
    }
    ```

## `ListView` Widget
- A builder property, `itemBuilder`
  - Factory builder and a callback function specified as an anonymous function
  - Two parameters
    1. `BuildContext`
    2. row iterator `i`: begins at 0, increments each time the function is called
- `ListTile`: a fixed height row that contains text as well as leading or trailing icons or other widgets

- Example
    ```Dart
    class _RandomWordsState extends State<RandomWords> {
      final _suggestions = <WordPair>[];
      final _biggerFont = const TextStyle(fontSize: 18);

      @override
      Widget build(BuildContext context) {
        final wordPair = WordPair.random();
        return ListView.builder(
          // itemBuilder is called once per row, 
          // places each suggestion into a LilstTile row for the word pairing
          itemBuilder: (context, i) {
            // For odd rows, add a Divider widget to separate the entries
            if (i.isOdd) return const Divider();

            // i ~/ 2 : truncating division operator
            // Calculate the actual number of word pairings in the ListView (minus the divider widgets)
            // i.e. 1, 2, 3, 4, 5 becomes 0, 1, 1, 2, 2
            final index = i ~/ 2;
            if (index >= _suggestions.length) {
              // Generate 10 more pairings and add to the suggestions list
              _suggestions.addAll(generateWordPairs().take(10));
            }
            return ListTile(
              title: Text(
                _suggestions[index].asPascalCase,
                style: _biggerFont,
              )
            );
          }
        );
      }
    }
    ```
