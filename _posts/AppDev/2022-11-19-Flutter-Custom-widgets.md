---
title: "Custom Widgets"

categories:
- App Development

tags:
- Flutter

toc: true
toc_sticky: true
---

## Making custom widgets
- `stless` + Tab after the code for `MyApp`
- Creating a 'function' that can be reused
```Dart
class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {

    // Construct the app with widgets
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(),
        body: ShopItem(),
      )
    );
  }
}

class ShopItem extends StatelessWidget {
  const ShopItem({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
        child: Text('Custom Widget')
    );
  }
}
```

## Creating a variable
- Only unchanged components should be saved within variables 
```Dart
var shopItem = SizedBox(
  child: Text('Variable')
);

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {

    // Construct the app with widgets
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(),
        body: shopItem,
      )
    );
  }
}
```