class Register {

    RegisterActivity(name){
       
        cy.get('input[placeholder="Add a new Task"]').type(name)
        cy.contains('button', 'Create ').click()
       
    }

}

export default new Register;