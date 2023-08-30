export const createVisualizerSlice = (set, get) => ({
  isVisualizerOn: false,
  visualizers: [
    {
      id: "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d",
      name: "Wavy",
    },
    {
      id: "51dc50c8-eb06-4086-ad9c-a89758f63db6",
      name: "Bars",
      variants: [
        {
          id: "12bfd49e-47a2-4cc8-90a9-3e669f7a0c78",
          name: "RGB",
        },
        {
          id: "c67d53cf-d708-4d31-93e8-c01819e70248",
          name: "Accent",
        },
        {
          id: "f1b5822f-32a1-4232-87fa-620963c49f0e",
          name: "Palette",
        },
        {
          id: "f3015c0d-1528-4615-b74f-bd7ab4f91667",
          name: "Dancing Palette",
        },
      ],
    },
    {
      id: "685d0ec7-5c52-4e48-a43d-11184a39f3da",
      name: "Circles",
      variants: [
        {
          id: "2040b849-8c7c-4290-8ff8-c0d7716cca77",
          name: "RGB",
        },
        {
          id: "820e69c5-1531-44b7-8da4-5d43c1b17bfe",
          name: "Accent",
        },
        {
          id: "b82df5dd-c7f4-4cc1-ad23-9e2b70ca491b",
          name: "Palette",
        },
        {
          id: "6b14efe2-f082-4f23-9186-8dad394d0b55",
          name: "Party",
        },
        {
          id: "7dbd8080-84cc-47a8-b199-cfe12c3d9e67",
          name: "Bubbles",
        },
        {
          id: "aadb67e9-ee59-45f3-8335-d34a39223525",
          name: "OT9",
        },
        {
          id: "3d0b31ae-008e-474a-a33e-71d19c3d335d",
          name: "Swith",
        },
      ],
    },
    {
      id: "8315ac5f-0de5-4ef1-ac5d-a4bc6d7b21ae",
      name: "Experimental",
    },
    {
      id: "57e7f170-a53d-4207-87f0-67633df37959",
      name: "Spider-Verse",
    },
    {
      id: "2f34a5b3-6d29-42c8-bac0-a7356ee88151",
      name: "Disco Ball",
    },
    {
      id: "86a81510-3e5d-4d1e-9318-3ea0750393a3",
      name: "Snowfall",
    },
    {
      id: "f8cfcb9f-6639-4702-aa44-2261ba7a543b",
      name: "RetroBars",
    },
  ],
  prefs: {
    activeVisualizer: "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d",
    "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d": {
      lineWidth: 8,
    },
    "51dc50c8-eb06-4086-ad9c-a89758f63db6": {
      activeVariant: "12bfd49e-47a2-4cc8-90a9-3e669f7a0c78",
      barWidth: 30,
      gap: 8,
    },
    "685d0ec7-5c52-4e48-a43d-11184a39f3da": {
      activeVariant: "b82df5dd-c7f4-4cc1-ad23-9e2b70ca491b",
    },
    "8315ac5f-0de5-4ef1-ac5d-a4bc6d7b21ae": {
      activeVariant: 1,
    },
  },
  setActiveVisualizer: (payload) => {
    console.log("visualizerSlice: setActiveVisualizer");
    console.log(payload);
    set((state) => {
      state.visualizer.prefs.activeVisualizer = payload;
    });
    chrome.storage.local.set({ visualizerPrefs: get().visualizer.prefs });
  },
  setSingleVisualizerPrefs: (visualizerId, newVisualizerPrefObject) => {
    console.log("visualizerSlice: setSingleVisualizerPrefs");
    console.log(newVisualizerPrefObject);
    set((state) => {
      state.visualizer.prefs[visualizerId] = newVisualizerPrefObject;
    });
    chrome.storage.local.set({ visualizerPrefs: get().visualizer.prefs });
  },
  toggleIsVisualizerOn: () => {
    console.log("visualizerSlice: toggleIsVisualizerOn");
    set((state) => {
      state.visualizer.isVisualizerOn = !state.visualizer.isVisualizerOn;
    });
  },
  mergeVisualizerPrefs: (payload) => {
    console.log("visualizerSlice: mergeVisualizerPrefs");
    console.log(payload);
    set((state) => {
      state.visualizer.prefs = { ...state.visualizer.prefs, ...payload };
    });
  },
  overwriteAllVisualizerPrefs: (payload) => {
    console.log("visualizerSlice: overwriteAllVisualizerPrefs");
    console.log(payload);
    set((state) => {
      state.visualizer.prefs = payload;
    });
  },
});
