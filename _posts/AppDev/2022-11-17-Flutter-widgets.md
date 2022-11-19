---
title: "Flexible and Extended"

categories:
- App Development

tags:
- Flutter

toc: true
toc_sticky: true
---

## `Flexible`
- Controlling the width/height by %
```Dart
return MaterialApp(
  home: Scaffold(
    appBar: AppBar(),
    body: Row (
      children: [
        // First box takes up 30%, second box takes up 70%
        Flexible(child: Container(color: Colors.blue), flex: 3),
        Flexible(child: Container(color: Colors.green), flex: 7)
      ]
    )
  )
)
```

## `Expanded`
- Flexible box with one child, `flex: 1`
- Takes up what is left
```Dart
return MaterialApp(
  home: Scaffold(
    appBar: AppBar(),
    body: Row (
      children: [
        Expanded(child: Container(color: Colors.blue)),
        Container(width: 100, color: Colors.green)
      ]
    )
  )
)
```

## `ListView`
- Column with a scroll view
- Saves memory, checkes where the user is at (`controller`)
```Dart
return MaterialApp(
  home: Scaffold(
    appBar: AppBar(),
    body: ListView(
      children: const [
        Text('Hi', style: TextStyle(fontSize: 300)),
        Text('Hi', style: TextStyle(fontSize: 300)),
        Text('Hi', style: TextStyle(fontSize: 300)),
        Text('Hi', style: TextStyle(fontSize: 300)),
        Text('Hi', style: TextStyle(fontSize: 300)),
      ],
    )
  )
);
```

## Widget layout example
```Dart
return MaterialApp(
  home: Scaffold(
    appBar: AppBar(),
    body: Container(
      height: 150,
      child: Row(
        children: [
          Image.asset('dog.jpg', width: 150),
          Container(
            padding: EdgeInsets.all(10),
            width: 300,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Look at my dog'),
                Text('West Melbourne VIC 3003'),
                Text('$ 2,000'),
                Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: const [
                    Icon(Icons.favorite_border),
                    Text('4')
                  ],
                )
              ],
            )
          )
        ],
      )
    )
  )
);
```