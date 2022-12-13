# Шаблон Ideal Code для разработки статичных сайтов

[![](https://github.com/wrgraff/idealcode/workflows/EditorConfig/badge.svg)](https://github.com/wrgraff/idealcode/actions?query=workflow%3AEditorConfig)
[![](https://github.com/wrgraff/idealcode/workflows/Validator/badge.svg)](https://github.com/wrgraff/idealcode/actions?query=workflow%3AValidator)
[![](https://github.com/wrgraff/idealcode/workflows/Stylelint/badge.svg)](https://github.com/wrgraff/idealcode/actions?query=workflow%3AStylelint)
[![](https://github.com/wrgraff/idealcode/workflows/ESLint/badge.svg)](https://github.com/wrgraff/idealcode/actions?query=workflow%3AESLint)

Шаблон использует сборку с помощью Gulp.  
Вся разработка ведётся в директории `src`.  
Итоговый код попадает в директорию `dist`.

## Инструкция по работе
Для начала работы у вас должен быть установлен **Node.js** 16 версии или выше.

### Основные команды для работы
- Установка - `npm i`
- Запуск локального сервера - `npm start`  
  При запуске может возникнуть ошибка [digital envelope routines::unsupported](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported)
- Сборка проекта, минификация скриптов и оптимизация изображений перед деплоем на прод - `npm run build`
- Запуск тестирования на соответствие кодгайдам и валидатору - `npm test`

Если вы незнакомы с gulp или вам не до конца понятно как работает сборка, предлагаем ознакомиться с [кратким описанием работы gulp](./docs/gulp.md).

### [Работа с include в HTML](./docs/include.md)
### [Модалки](./docs/modals.md)
