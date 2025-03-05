describe("loads home page", ()=>{
    beforeEach(()=>{
        cy.visit("https://vegan-cuisine.vercel.app/")
    })
    it("check that website loads", ()=>{
        cy.visit("https://vegan-cuisine.vercel.app/")
    })
    it("verify that nav bar opens", ()=> {
        cy.get(".links").should("exist").click()
        cy.contains("a", "our story").should("exist")
    })
    it("verify recipe button works", ()=>{
        cy.get(".cta-sec").should("exist").click()
    })
    it("verify sign up today button works", ()=>{
        cy.get(".cta-main").should("exist").click()
    })
})