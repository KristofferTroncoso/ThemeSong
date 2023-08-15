export const createUtilitiesSlice = (set) => ({
  sleepTimer: {
    isActive: false,
    isDialogOpen: false,
    minutesLeft: 0,
  },
  notificationsEnabled: false,
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
  toggleNotifications: (payload) => {
    console.log("utilities: toggleNotifications");
    console.log(payload);
    set((state) => {
      state.utilities.notificationsEnabled = !state.utilities.notificationsEnabled;
    });
  },
  changeNotificationsEnabled: (payload) => {
    console.log("utilities: changeNotificationsEnabled");
    console.log(payload);
    set((state) => {
      state.utilities.notificationsEnabled = payload;
    });
  },
});
