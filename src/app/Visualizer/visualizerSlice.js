export const createVisualizerSlice = (set) => ({
  activeVisualizer: "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d",
  isVisualizerOn: false,
  visualizers: [
    {
      id: "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d",
      name: "Wavy",
      order: 1,
    },
    {
      id: "51dc50c8-eb06-4086-ad9c-a89758f63db6",
      name: "Bars",
      order: 2,
      variants: [
        {
          id: "b84ef625-e0af-4e8c-8ab6-b86ee9ee2147",
          name: "White",
        },
        {
          id: "5890028c-8554-4fa9-bb14-f0c496f207f1",
          name: "Black",
        },
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
      order: 3,
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
      ],
    },
  ],
  visualizerPrefs: [
    {
      id: "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d",
      lineWidth: 8,
    },
    {
      id: "51dc50c8-eb06-4086-ad9c-a89758f63db6",
      activeVariant: "12bfd49e-47a2-4cc8-90a9-3e669f7a0c78",
      barWidth: 30,
      borderWidth: 4,
      gap: 4,
    },
    {
      id: "685d0ec7-5c52-4e48-a43d-11184a39f3da",
      activeVariant: "b82df5dd-c7f4-4cc1-ad23-9e2b70ca491b",
    },
  ],
  changeActiveVisualizer: (payload) => {
    console.log("visualizerSlice: changeActiveVisualizer");
    console.log(payload);
    set((state) => {
      state.visualizer.activeVisualizer = payload;
    });
  },
  changeVisualizers: (payload) => {
    console.log("visualizerSlice: changeVisualizers");
    console.log(payload);
    set((state) => {
      state.visualizer.visualizers = payload;
    });
  },
  changeVisualizerPrefs: (payload) => {
    console.log("visualizerSlice: changeVisualizerPrefs");
    console.log(payload);
    set((state) => {
      state.visualizer.visualizerPrefs = payload;
    });
  },
  toggleIsVisualizerOn: () => {
    console.log("visualizerSlice: toggleIsVisualizerOn");
    set((state) => {
      state.visualizer.isVisualizerOn = !state.visualizer.isVisualizerOn;
    });
  },
});
