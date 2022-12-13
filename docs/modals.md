[Назад](../readme.md)

# Модалки
В сборку добавлена сущность модалок.

`html/base/modal.html` + `sass/blocks/modal.scss` + `js/utils/modal.js` + `js/modules/init-modals.js`

Также в main.html добавлены две модалки для примера.

## Создаем модалку
1. В html для интерактивных элементов вызывающих модалку вам необходимо добавить `data-modal="x"`. 
2. В инклюд передаем `name` соответствующий второй части имени файла модалки в `html/components/modal-name` и соответствующий тому что вы передали в 1 пункте, который также автоматически создаст модификатор у модалки `modal--@@name`
3. Передаем `fitContent`, если у вас стоит задача, чтобы модалка подстраивалась под ширину контента
4. Передаем `mod`, если нам необходим дополнительный модификатор (к примеру, `no-overlay`) 

```html
  <!-- вызов модалки -->
  <a href="#" data-modal="success"></a>

  <!-- инклюд модалки -->
  @@include("source/html/base/modal.html", {
    "name": "success",
    "fitContent": true,
    "mod": "some-mod"
  })
```

В `js/modules/init-modals.js` необходимо найти модалку + ссылки на нее и передать как аргументы в `setupModal()`.

```js
  // аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault)
  // возможна инициализация только с первыми аргументом,
  // если вам нужно открывать модалку в другом месте под какими-нибудь условиями
  const initModals = () => {
    if (modalFeedback && modalFeedbackBtns.length) {
      setupModal(modalFeedback, false, modalFeedbackBtns, false, false);
    }
    if (modalSuccess && modalSuccessBtns.length) {
      setupModal(modalSuccess, false, modalSuccessBtns);
    }
  };
```

Готово. Остается поправить стили через модификатор при необходимости.
Также стоит учесть, если на проекте в разных модалках одинаковый размер заголовков, вертикальные отступы и т.д. - такие элементы имеет смысл внести в базу `sass/blocks/modal.scss`, а не стилизовать каждый раз отдельно для каждой модалки.
