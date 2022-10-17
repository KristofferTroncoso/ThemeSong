export const createSnippetsSlice = (set) => ({
  snippets: [
    {
      id: 'uniqueId',
      name: 'My Super Snippet',
      css: `body {background: red;}`,
      enabled: false
    },
    {
      id: 'uniqueId2',
      name: 'Hide Dislike',
      css: `
        .dislike {
          display: none;
        }
    
        .like {
          margin-left: 20px;
        }
      `,
      enabled: true
    }
  ],
  addSnippet: (payload) => {
    console.log('snippets: addSnippet')
    set(state => { 
      state.snippets.snippets = [...state.snippets.snippets, payload];
    });
  }
})