# goit-node-hw-01

## Usage

```node
# Отримуємо і виводимо весь список контактів у вигляді таблиці
node index.js --action="list"
```

![Testing app step 1](./assets/screenshot_list_com.jpg)

```
# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
```

![Testing app step 2](./assets/screenshot_get_com.jpg)

```# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
```

![Testing app step 3](./assets/screenshot_add_com.jpg)

```
# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
```

![Testing app step 4](./assets/screenshot_remove_com.jpg)
