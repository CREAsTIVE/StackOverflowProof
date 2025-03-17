# Доказательство, что eval - плохо

[Сайт](https://creastive.github.io/StackOverflowProof/)

[StackOverflow пост](https://ru.stackoverflow.com/a/1608806/428851)

Вредоносный код:
```js
(function() {alert("STEALED"); return eval("chapter3")})()
```
Вредоносная ссылка:
https://creastive.github.io/StackOverflowProof?chapter=%28function%28%29%20%7Balert%28%22STEALED%22%29%3B%20return%20eval%28%22chapter3%22%29%7D%29%28%29