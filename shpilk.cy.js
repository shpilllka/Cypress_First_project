describe('Проверка авторизации', function () {

    // 1
    it('позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio');  // зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru');  // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1');  // ввели верный пароль
         cy.get('#loginButton').click();  // нажали "войти"
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверили наличие текста после авторизации
         cy.get('#messageHeader').should('be.visible');  // проверили, что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверили кнопку Х
     })

     // 2
     it('проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio');  // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru');  // ввели верный логин
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#forgotEmailButton').click();  // нажали "забыли пароль?"
        cy.get('#forgotForm > .header').contains('Восстановите пароль');
        cy.get('#forgotForm > .header').should('be.visible');
        cy.get('#restoreEmailButton').contains('Отправить код');
        cy.get('#restoreEmailButton').should('be.visible');
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible');
     })

     // 3
     it('проверка на негативный кейс авторизации #1', function () {
        cy.visit('https://login.qa.studio');  // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru');  // ввели верный логин
        cy.get('#pass').type('iLoveqastudio');  // ввели НЕверный пароль
        cy.get('#loginButton').click();  // нажали "войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     // 4
     it('проверка на негативный кейс авторизации #2', function () {
        cy.visit('https://login.qa.studio');  // зашли на сайт
        cy.get('#mail').type('geman@dolnikov.ru');  // ввели НЕверный логин
        cy.get('#pass').type('iLoveqastudio1');  // ввели верный пароль
        cy.get('#loginButton').click();  // нажали "войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     // 5
     it('проверка на негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio');  // зашли на сайт
        cy.get('#mail').type('germandolnikov.ru');  // ввели логин без @
        cy.get('#pass').type('iLoveqastudio1');  // ввели верный пароль
        cy.get('#loginButton').click();  // нажали "войти"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     // 6
     it('проверка на негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio');  // зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru');  // ввели логин GerMan@Dolnikov.ru
        cy.get('#pass').type('iLoveqastudio1');  // ввели верный пароль
        cy.get('#loginButton').click();  // нажали "войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверили наличие текста после авторизации
         cy.get('#messageHeader').should('be.visible');  // проверили, что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверили кнопку Х
     })
 })