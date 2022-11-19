---
title: "Layout Styling"

categories:
- App Development

tags:
- Flutter

toc: true
toc_sticky: true
---

# Styling in Flutter
## Text: `TextStyle`
- Picking colors: `Color.fromRGBO(r, g, b, opacity)` / `Color(0xffaaaaaa)` / `Colors.ColorName`
- Other styles include `fontSize`, `letterSpacing`, `fontWeight`, etc.

```Dart
return MaterialApp(
  home: Scaffold(
    appBar: AppBar( title: Text('MyApp')),
    body: SizedBox(
      child: Text('Hello World',
      style: TextStyle(
        color: Color(0xff3a0e55),
        fontSize: 20,
        letterSpacing: 1,
        fontWeight: FontWeight.w900
      ),)
    )
  )
);
```

## Icon
- Can change `size`, `color`
```Dart
return MaterialApp(
  home: Scaffold(
    appBar: AppBar( title: Text('MyApp')),
    body: SizedBox(
      child: Icon(Icons.star, color: Colors.amber, size: 300)
    )
  )
);
```

## Buttons
- `TextButton()`, `IconButton()`, `ElevatedButton()`
- Two parameters needed: `child`, `onPressed`
```Dart
return MaterialApp(
  home: Scaffold(
    appBar: AppBar( title: Text('MyApp')),
    body: Row(
      children: [
        SizedBox(
          child: TextButton(
            onPressed: (){},
            child: Text('Text Button')
          )
        ),
        SizedBox(
          child: ElevatedButton(
            onPressed: (){},
            style: ButtonStyle(),
            child: Text('Elevated Button'),
          )
        ),
        SizedBox(
          child: IconButton(
            icon: Icon(Icons.star),
            onPressed: (){},
          ),
        )
      ],
    )
  )
);
```

## Designing `AppBar`
```Dart
return MaterialApp(
  home: Scaffold(
    appBar: AppBar(
      title: Text('MyApp'), // Title on the left
      leading: Icon(Icons.add_card), // Icon on the left
      actions: const [Icon(Icons.settings), Icon(Icons.notifications_active)], // Icon on the right
    ),
    body: SizedBox()
  )
);
```

# Steps of creating a layout
1. Prepare an example layout
2. Draw boxes around each component
3. Start creating a widget from the outmost box
4. Align and decorate