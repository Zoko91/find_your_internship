import AsyncStorage from "@react-native-async-storage/async-storage";

// AsyncStorage key used for storing ideas
const STORAGE_KEY = "ASYNC_STORAGE_WORKADVENTURE";

// Clear local storage
export const resetUser = async () => {
  console.log("Removing User from local storage...");
  try {
    await AsyncStorage.multiRemove([STORAGE_KEY]);
  } catch (e) {
    console.error("Failed to clear user");
  }
};

// Save ideas array parameter to local storage
export const saveUser = async (user) => {
  console.log(`Saving user [${user}] to local storage...`);
  try {
    // Turn User array into a JSON string
    const jsonUser = JSON.stringify(user);
    // Store User string
    await AsyncStorage.setItem(STORAGE_KEY, jsonUser);
  } catch (e) {
    console.error("Failed to save user");
  }
};

// Load user from local storage
export const loadUser = async (onLoaded) => {
  console.log("Loading User from local storage...");
  try {
    // Load user string
    const jsonUser = await AsyncStorage.getItem(STORAGE_KEY);
    if (jsonUser !== null) {
      // Turn stored JSON string into an array
      const user = JSON.parse(jsonUser);
      // Call callback
      onLoaded(user);
      console.log("User loaded");
    }
  } catch (e) {
    console.error("Failed to load user");
  }
};
