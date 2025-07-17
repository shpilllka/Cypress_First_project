describe('Покупка нового аватара для своего тренера', function () {

    // 1
    it('позитивный кейс покупки аватара', function () {
         cy.visit('https://pokemonbattle.ru');  // зашли на сайт
         cy.get('#k_email').type('[USER_EMAIL]');  // ввели верный логин
         cy.get('#k_password').type('[USER_PASSWORD]');  // ввели верный пароль
         cy.get('.MuiButton-root').click();  // нажали "Войти"
         cy.wait(2000);
         cy.get('.header_card_trainer').click();  // нажали на аву тренера
         cy.wait(2000);
         cy.get('[data-qa="shop"]').click();  // нажали "Смена аватара"
         cy.wait(2000);
         cy.get('.available > button').first().click();  // нажали "Купить" самую первую аву
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996');  // ввели номер карты
         cy.get(':nth-child(1) > .style_1_base_input').type('1226');  // ввели срок действия карты
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');  // ввели CVV код
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('[NAME]'); // ввели имя владельца карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();  // нажали "Оплатить"
         cy.get('.style_1_base_input').type('56456');  // ввели код из push-уведомления
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();  // нажали "Оплатить"
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно');  // проверили наличие сообщения
         cy.get('.payment_status_top_title').should('be.visible');  // проверили, видно ли сообщение пользователю
     })
 })