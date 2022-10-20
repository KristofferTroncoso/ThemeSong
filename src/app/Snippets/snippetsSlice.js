export const createSnippetsSlice = (set) => ({
  snippets: [
    {
      id: 'uniqueId',
      name: 'Hide Cast Button',
      css:
`ytmusic-cast-button {
  display: none;
}`,
      enabled: false
    },
    {
      id: 'uniqueId2',
      name: 'Hide Dislike',
      css: 
`.dislike {
  display: none;
}

.like {
  margin-left: 20px;
}`,
      enabled: false
    }
  ],
  changeSnippets: (payload) => {
    console.log('snippets: changeSnippets')
    console.log(payload)
    set(state => { 
      state.snippets.snippets = payload;
    });
  },
  addSnippet: (payload) => {
    console.log('snippets: addSnippet')
    set(state => { 
      state.snippets.snippets = [...state.snippets.snippets, payload];
    });
  },
  deleteSnippet: (payload) => {
    console.log('snippets: deleteSnippet')
    set(state => { 
      let arrCopy = [...state.snippets.snippets];
      console.log(arrCopy)
      let newArr = arrCopy.filter(snippet => snippet.id !== payload);
      console.log(newArr);
      state.snippets.snippets = newArr;
    });
  },
  toggleSnippet: (payload) => {
    console.log('snippets: toggleSnippet')
    set(state => { 
      let arrCopy = [...state.snippets.snippets];
      let newArr = arrCopy.map(snippet => {
        if (snippet.id === payload) {
          return {
            ...snippet,
            enabled: !snippet.enabled
          }
        } else {
          return snippet;
        }
      })
      state.snippets.snippets = newArr;
    });
  },
  editSnippet: (payload) => {
    console.log('snippets: editSnippet')
    set(state => { 
      let arrCopy = [...state.snippets.snippets];
      let newArr = arrCopy.map(snippet => {
        if (snippet.id === payload.id) {
          return payload;
        } else {
          return snippet;
        }
      })
      state.snippets.snippets = newArr;
    });
  },
})