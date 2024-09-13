describe('テスト大項目01', () => {
    context('テスト中項目01', () =>{
        it('テスト小項目01:ページを開く', () => {
            cy.viewport(1440, 798);
            // top indexにアクセスする
            cy.visit('http://localhost:3333');
        })

        it('テスト小項目02:指定idの要素があるか', () => {
            // https://docs.cypress.io/api/commands/get
            // id要素が存在するか
            cy.get('#title').should('exist');
        })
        it('テスト小項目03:指定id titleの内容が「福岡市の魅力」なのか', () => {
            // https://docs.cypress.io/api/commands/get
            // id要素が存在するか
            cy.get('#title').should('have.text','福岡市の魅力');
        })
        const timeout = 1500 // ms

        it('テスト小項目04:index.cssでのh1タグの色指定が「#ff69b4」なのか', () => {
        //   cy.visit('/')
          cy.waitForResource('/css/index.css')
          // red color means the style from "app.css" has been loaded and applied
          cy.get('h1', { timeout }).should('have.css', 'color', '#ff69b4')
        })
    })
})
