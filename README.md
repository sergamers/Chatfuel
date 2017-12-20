# Chatfuel

![N|Solid](https://image.prntscr.com/image/1TzWWQ4bQniMc-CTb-NRGg.png)

## Общее
* Проект основан на [Angular CLI](https://github.com/angular/angular-cli) версии 1.6.1
* В качестве ускорения вертски использовался [Materialize](http://materializecss.com/)

## Как запустить проект
* Необходимо установить зависимости `npm i`
* Выполнить `npm run start` для запуска дев сервера
* Перейдите по адресу `http://localhost:4200/`

## Как запустить документацию
* Необходимо установить зависимости `npm i`
* Выполнить `npm run doc:open` для запуска сервера
* Документация сама откроется в браузере

# Команды
* `npm run start` - запускает сервер `http://localhost:4200/`
* `npm run doc` - Делает сборку документации, запускает сервер
* `npm run doc:open` - Делает сборку документации, запускает сервер, открывает страницу в браузере
* `ng build` - собирает проект. Сборка осуществляется в `dist/` директорию. Использование флага `-prod` для продакшен сборки
* `ng test` - выполняет unit тесты через [Karma](https://karma-runner.github.io)
* `ng e2e` - выполняет end-to-end тесты через [Protractor](http://www.protractortest.org/)
Подробнее [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)
