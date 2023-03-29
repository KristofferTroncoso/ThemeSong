export const createUtilitiesSlice = (set) => ({
  sleepTimer: {
    isActive: false,
    isDialogOpen: false,
    minutesLeft: 0,
  },
  changeIsActive: (payload) => {
    console.log("utilities: changeSleepTimer");
    console.log(payload);
    set((state) => {
      state.utilities.sleepTimer.isActive = payload;
    });
  },
  changeIsDialogOpen: (payload) => {
    console.log("utilities: changeIsDialogOpen");
    console.log(payload);
    set((state) => {
      state.utilities.sleepTimer.isDialogOpen = payload;
    });
  },
  changeMinutesLeft: (payload) => {
    console.log("utilities: changeMinutesLeft");
    console.log(payload);
    set((state) => {
      state.utilities.sleepTimer.minutesLeft = payload;
    });
  },
  decrementMinutesLeft: () => {
    console.log("utilities: decrementMinutesLeft");
    set((state) => {
      state.utilities.sleepTimer.minutesLeft--;
    });
  },
});
