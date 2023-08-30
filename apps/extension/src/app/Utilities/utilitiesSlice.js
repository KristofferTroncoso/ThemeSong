export const createUtilitiesSlice = (set, get) => ({
  sleepTimer: {
    isActive: false,
    isDialogOpen: false,
    minutesLeft: 0,
  },
  prefs: {
    notificationsEnabled: false,
  },
  setTimerIsActive: (payload) => {
    console.log("utilities: setTimerIsActive");
    console.log(payload);
    set((state) => {
      state.utilities.sleepTimer.isActive = payload;
    });
  },
  setTimerIsDialogOpen: (payload) => {
    console.log("utilities: setTimerIsDialogOpen");
    console.log(payload);
    set((state) => {
      state.utilities.sleepTimer.isDialogOpen = payload;
    });
  },
  setMinutesLeft: (payload) => {
    console.log("utilities: setMinutesLeft");
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
      state.utilities.prefs.notificationsEnabled = !state.utilities.prefs.notificationsEnabled;
    });
    chrome.storage.local.set({ utilitiesPrefs: get().utilities.prefs });
  },
  setNotificationsEnabled: (payload) => {
    console.log("utilities: setNotificationsEnabled");
    console.log(payload);
    set((state) => {
      state.utilities.prefs.notificationsEnabled = payload;
    });
    chrome.storage.local.set({ utilitiesPrefs: get().utilities.prefs });
  },
  mergeUtilitiesPrefs: (payload) => {
    console.log("utilities: mergeUtilitiesPrefs");
    set((state) => {
      state.utilities.prefs = { ...state.utilities.prefs, ...payload };
    });
  },
  overwriteAllUtilitiesPrefs: (payload) => {
    console.log("utilities: overwriteAllUtilitiesPrefs");
    set((state) => {
      state.utilities.prefs = payload;
    });
  },
});
