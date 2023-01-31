[Назад](/README.md)

# Как писать по правилам БЭМ

Чтобы код проекта выглядел единообразно, писать классы и стили по БЭМ нужно в едином подходе.

## Стиль

Мы пишем БЭМ в классическим стиле:
- `.block`
- `.block--mod`
- `.block__element`
- `.block__element--mod`

Допускается для пар "ключ: значение" использовать подобный стиль записи модификатора:  
`.block__element--key_value`

Однако, не стоит усердствовать и создавать такие модификаторы без особой нужды. Например, не создавайте модификаторы кнопки `button--size_large` и `button--color_primary`, если для понимания достаточно использовать `button--large` и `button--primary`.

## Порядок

В разметке при миксовании всегда указываем первым класс элемента, а затем — класс блока.

### 🟢 Правильно:
```html
<div class="parent__element child">
  ...
</div>
```

### 🔴 Неправильно:
```html
<div class="child parent__element">
  ...
</div>
```

Модификаторы должны следовать за своими блоками и элементами.

### 🟢 Правильно:
```html
<div class="parent__element parent__element--mod child">
  ...
</div>
```

### 🔴 Неправильно:
```html
<div class="parent__element child parent__element--mod">
  ...
</div>
```

## Декларативность

Следует расставлять классы максимально подробно. Если БЭМ-блок имеет другие вложенные блоки, они обязательно дожны миксоваться с классом родительского элемента.  
Даже если никаких стилей для них не будет прописано.

### 🟢 Правильно:
```html
<main class="main">
  <header class="main__header header">
    ...
  </header>
</main>
```

### 🔴 Неправильно:
```html
<main class="main">
  <header class="header">
    ...
  </header>
</main>
```

Если у тега не предусмотрен класс и он не является блоком, то добавлять к нему класс элемента не обязательно (например, тег `<b>` часто используется для оформления текста без дополнительных классов).

### 🟢 Правильно:
```html
<p class="some__text">
  <b>Важная часть текста</b>, после которой идет менее важная.
</p>
```

Правилом можно пренебречь, однако придется обосновать такое решение.

## Порядок написания стилей

Каждый файл в директории `blocks` должен соответствовать одному БЭМ-блоку.  
Разрешено использование утилитарного класса `.no-js` внутри файлов.

### 🟢 Правильно:
```scss
.block {
  .no-js & {
    ...
  }
}
```

### 🔴 Неправильно:
```scss
.header {
  .main & {
    ...
  }
}
```

Мы не пишем через `&` классы элементов и классы модификаторов.

### 🟢 Правильно:
```scss
.block {
  ...
}

.block__element {
  ...
}

.block__element--mod {
  ...
}
```

### 🔴 Неправильно:
```scss
.block {
  ...
}

.block__element {
  ...

  &--mod {
    ...
  }
}
```

И мы пишем через `&` псевдоклассы, псевдоэлементы и другие уточняющие селекторы.

### 🟢 Правильно:
```scss
.block__element {
  &:hover {
    ...
  }

  &[data-attr] {
    ...
  }

  &::before {
    ...
  }

  .block--mod & {
    ...
  }
}
```


### 🔴 Неправильно:
```scss
.block__element {
  ...
}

.block__element:hover {
  ...
}

.block__element[data-attr] {
  ...
}

.block__element::before {
  ...
}
```

Запись в стиле `.block--mod .block__element` допустима, чтобы лучше организовать код, но если кода мало, то стараемся использовать вложенность.

## Строгость БЭМ

Мы используем строгий подход и не указываем для БЭМ-блоков параметры:
- `width`
- `height`
- `margin`
- `grid-column` / `grid-row` / `grid-area`

Блоки должны быть независимы, управление их размером должно происходить только через элемент блока-родителя.

Допускается использование `width`, `height` и `margin` если они не влияют на независимость блока. Например, блок модального окна, спозиционированный абсолютно, может иметь заданную ширину, так как он существует в отдельном "слое" интерфейса и не может влиять на другие блоки.