import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeToken = async (token: string) => {
  await AsyncStorage.setItem('authToken', token);
};

export const getToken = async () => {
  return await AsyncStorage.getItem('authToken');
};

export const removeToken = async () => {
  await AsyncStorage.removeItem('authToken');
};


// Function to store token and user details
export const storeTokenAndUser = async (token: string, user: object) => {
  try {
    const userData = JSON.stringify({ token, user });
    await AsyncStorage.setItem('authData', userData);
    console.log('Token and user stored successfully:', userData);
  } catch (error) {
    console.error('Failed to store token and user:', error);
  }
};

// Function to get the stored token and user details
export const getTokenAndUser = async () => {
  try {
    console.log('Retrieving token and user...');
    const userData = await AsyncStorage.getItem('authData');
    const data = userData ? JSON.parse(userData) : null;
    console.log('Token and data retrieved successfully:', data);
    return data;
  } catch (error) {
    console.error('Failed to retrieve token and user:', error);
    return null;
  }
};

// Function to remove the stored token and user details
export const removeTokenAndUser = async () => {
  try {
    await AsyncStorage.removeItem('authData');
    console.log('Token and user removed successfully');
  } catch (error) {
    console.error('Failed to remove token and user:', error);
  }
};
