describe('page title', () => {
	it('has the right title', () => {
		cy.visit('/')
			.title()
			.should('equal', 'React App')
	})
})
