describe('Teste de login', () => {

  it.only('Login com sucesso', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('railton543h@gmail.com')
    cy.get('#password').type('railton22')
    cy.get('#btnLogin').click()
    cy.get('#swal2-title').should('have.text','Login realizado')
  })

  it('Login com erro na Senha', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('railton543h@gmail.com')
    cy.get('#password').type('546')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text','Senha inválida.')
    
  })
  
  it('Login com erro no E-mail', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('r543@')
    cy.get('#password').type('546')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text','E-mail inválido.')
  })

  it('Login com E-mail e Senha vázios', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text','E-mail inválido.')
    
  })


})
