---
title: "Flutter Basics"

categories:
- App Development

tags:
- Flutter

toc: true
toc_sticky: true
---

# Flutter Basics
## Main structure
Dart only runs code inside `void main()` 
```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp()); // Run main page
}
```

## Creating The main page
In Android studio, type `stless` then tab
```Dart
class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: // Start coding here
    );
  }
}
```

## Four main widgets

1. `Text('Hello World')`
2. `Icon(Icons.star)`
3. `Image.asset('assets/dog.jpg')` 
    - Create an assets folder to save the images
    - Publish the image in `pubspec.yaml` under `test` folder
    - Use all files in the folder `assets`:
        ```yaml
        # The following section is specific to Flutter packages.
        flutter:
        assets:
          - assets/
        ```
4. `Container( width: 50, height: 50, color: Colors.blueGrey )`
    - Adds a container
    - Alternative: `SizedBox()`
    - Unit of size: `LP`, where `50 LP == 1.2cm`
    - Where to locate the container? create a parent widget (like using `<div>`)
    ```Dart
    return MaterialApp(
      home: Center(
        child: Container( width: 50, height: 50, color: Colors.blueGrey)
      )
    );
    ```
# Layout
## Using `MaterialApp`
- Allows us to use the UI provided by google
- Icon based: `Cupertino...()`

## `Scaffold`
- Splits the app into three components
```Dart
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(),
        body: Container(),
        bottomNavigationBar: 
            BottomAppBar( child: Text('footer')
        )
      )
    );
```

## Displaying items in rows and columns
- Make use of auto fill: `ctrl + space`
```Dart
// Single row:
return MaterialApp(
  home: Scaffold(
    body: Container( // Added to align the icons along column
      width: 100,
      height: 100,
      color: Colors.blueGrey,
      child: Row( // Can also use `Column()`
        // Align along main axis (row)
        mainAxisAlignment: MainAxisAlignment.center,
        // Align along cross axis (column)
        crossAxisAlignment: CrossAxisAlignment.center,
        // Items within the row
        children : const [
          Icon(Icons.star),
          Icon(Icons.star)
        ]
    )
    )
  )
);
```

## Example
```Dart
return MaterialApp(
  home: Scaffold(
    appBar: AppBar( title: Text('MyApp')),
    body: Text('Hello World'),
    bottomNavigationBar: BottomAppBar(
      child: SizedBox(
        height: 70,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: const [
            Icon(Icons.phone),
            Icon(Icons.message),
            Icon(Icons.contact_page)
          ]
        )
      )
    )
  )
);
```

## Adding Margin and Padding
- `decoration`: border, color, shadow, radius, etc.
- Cannot provide both a color and a decoration: need to declare color inside the decoration
- If you want to align it in the center, just click `wrap with Center`
```Dart
return MaterialApp(
  home: Scaffold(
    appBar: AppBar( title: Text('MyApp')),
    body: Align(
      alignment: Alignment.bottomCenter,
      child: Container(
        width: double.infinity, // Make the box expand to fit the parent container (align)
        height: 50,
        padding: EdgeInsets.all(20),
        margin: EdgeInsets.fromLTRB(0, 30, 0, 0),
        decoration: BoxDecoration(
          color: Colors.blueGrey,
          border: Border.all(color: Colors.black),
          borderRadius: BorderRadius.all(Radius.elliptical(10, 10))
        ),
      ),
    )
  )
);
```