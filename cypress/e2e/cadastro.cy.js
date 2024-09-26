import ActionsPage from '../support/help/index.cy'
import Register from '../support/pages/index.cy'

describe('Teste MarkL', () => {

    describe('Teste validadção dos campos MarkL',() => {
        it('Deve acessar a pagína do MarkL', () => {
            ActionsPage.AcessPage()
           
             
         });
        
     
         it('Deve fazer a validação dos componenetes da tela de cadastro', () => {
             ActionsPage.AcessPage()
             cy.get('input[placeholder="Add a new Task"]').should('be.visible')
             cy.contains('button', 'Create ').should('have.text','Create ')
             cy.contains('div', 'Created Tasks').should('be.visible')
             cy.contains('div', 'Done Tasks').should('be.visible')
             cy.contains('div', "You don't have any tasks registered yet.");
             cy.contains('div', "Create tasks and organize your to-do items");
             cy.contains('span', '0').should('be.visible')
          });
     
     
          it('Quando clicar em Create, deve me alertar: This is a required field  ', () => {
             ActionsPage.AcessPage()
             cy.get('input[placeholder="Add a new Task"]').should('be.visible')
             cy.contains('button', 'Create ').click()
            
            
          });

    }) 


     describe('Cadastro de atividade no MarkL',() => {
        it('Quando cadastrar algo, deve aparecer o que foi cadastrado sem erros', () => {
            ActionsPage.AcessPage()
            cy.get('input[placeholder="Add a new Task"]').type('Atividade de automação')
            cy.contains('button', 'Create ').click()
            cy.contains('span','1').should('be.visible','1')
            
            cy.contains('div', 'Done Tasks').should('be.visible')
            cy.contains('div', "You don't have any tasks registered yet.").should('not.exist')
            cy.contains('div', "Create tasks and organize your to-do items").should('not.exist')
           
             
         });


         it('Quando cadastrar algo ja existente, deve aparecer uma popup informando que o cadastro esta duplicado', () => {
            ActionsPage.AcessPage()
            cy.get('input[placeholder="Add a new Task"]').type('Atividade de automação')
            cy.contains('button', 'Create ').click()
            cy.contains('span','1').should('be.visible','1')
            cy.get('#swal2-html-container').should('be.visible').contains('Task already exists!')
            
           
             
         });

     })
    

    //  describe('Listar cadastro no MarkL',() => {
    //     it.only('Quando eu listar uma atividade, deve listar o nome da atividade cadastrada sem erros ', () => {
           
    //         ActionsPage.AcessPage()
    //         Register.RegisterActivity('atividade um')
    //         Register.RegisterActivity('atividade dois')
    //         cy.get('input[placeholder="Add a new Task"]').type('Atividade dois')


    //     });

    // })
     describe('Excluir cadastro no MarkL',() => {
        it('Quando eu excluir uma atividade, deve excluir a atividade cadastrada sem erros ', () => {
            ActionsPage.AcessPage()
            ActionsPage.AcessPage()
            Register.RegisterActivity('atividade um')
            Register.RegisterActivity('atividade dois')
            cy.get('button[class*=listItemDeleteButton]').each(($el) => {
                cy.wrap($el).click();
              });
        });

     })


})