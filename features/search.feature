# language: ru
Функция: Поиск

  Контекст:
    Дано Я открыл "https://www.bsuir.by/" страницу
    То Страница должна быть: "https://www.bsuir.by/"

  Сценарий: Простой поиск
    Допустим Я пишу "ИТиУвТС" в поле поиска
    Затем Я нажимаю Enter
    И Результатов поиска должно быть "10"

  Сценарий: 
    Допустим Я пишу "@#" в поле поиска
    Затем Я нажимаю Enter
    
    И Результатов поиска должно быть "0"
    
    