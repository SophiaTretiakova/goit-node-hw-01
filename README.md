# goit-node-hw-01

Команда для отримання і виведення всього списку контактів у вигляді таблиці

```node
node index.js --action="list"
```

![Testing app step 1](./assets/screenshot_list_com.jpg)

Команда для отримання контакта по id і виведення у консоль об'єкта контакту або null, якщо контакту з таким id не існує.

```
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
```

![Testing app step 2](./assets/screenshot_get_com.jpg)

Команда для додавання контакта та виведення в консоль об'єкта новоствореного контакту

```
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
```

![Testing app step 3](./assets/screenshot_add_com.jpg)

Команда для видалення контакта та виведення в консоль об'єкта видаленого контакту або null, якщо контакту з таким id не існує.

```
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
```

![Testing app step 4](./assets/screenshot_remove_com.jpg)
