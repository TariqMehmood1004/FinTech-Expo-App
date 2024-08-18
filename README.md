### Step-by-Step Guide to Implementing the Fintech App

#### 1. **Project Setup**
   - **Initialize Project:**
     ```bash
     npx react-native init FintechApp --template react-native-template-typescript
     ```
   - **Install Dependencies:**
     ```bash
     npm install @reduxjs/toolkit react-redux @tanstack/react-query @react-native-async-storage/async-storage react-native-encrypted-storage
     ```
  
#### 2. **User Authentication**
   - **Login Screen:**
     - Create a `LoginScreen` component under `src/screens/`.
     - Use React Native components like `TextInput` and `Button` for email and password input.
   - **Secure Storage:**
     - Use `react-native-encrypted-storage` or `AsyncStorage` to securely store authentication tokens.
     - Store the token upon successful login and use Redux Toolkit to manage the authentication state.

   - **Auth Guard:**
     - Create an `AuthContext` using Context API to manage authentication guards.
     - Use `useContext` and `useSelector` to check if a user is authenticated before allowing access to certain screens.

#### 3. **Sensitive Data Handling**
   - **Fetch Mutual Fund Listing:**
     - Create an `api.ts` file in `src/api/`.
     - Use Tanstack Query for fetching:
       
   - **Secure API Calls:**
     - Ensure all API calls pass the stored token securely in headers.
  
#### 4. **Secure State Management**
   - **Redux Toolkit Setup:**
     - Create `authSlice` and `transactionSlice` in `src/store/`.
     - Use `combineReducers` in `store.ts` to combine slices and configure the store.
     
   - **Selectors:**
     - Create selectors for retrieving state values securely.
     

#### 5. **UI Design**
   - **Modular UI Components:**
     - Create components in `src/components/` for reusable UI elements (e.g., `Button`, `Input`).
     - Use `styled-components` or `StyleSheet` for styling, ensuring the separation of concerns.
  
#### 6. **Error Handling & User Feedback**
   - **Error Handling:**
     - Implement try-catch blocks in API calls.
     - Use `react-query`’s error handling mechanisms to show errors.
     - Provide user feedback using Toasts or Snackbar components.

#### **Output**
   - **GitHub Repository:**
     - Push your code to GitHub.
     - Ensure a clean and understandable README.
  
   - **Android APK:**
     - Build the APK using the command:
       ```bash
       npx react-native run-android --variant=release
       ```
     - Upload the APK to GitHub or any file-sharing service.

#### **Submission**
   - Share the GitHub repository URL.
   - Provide the download link for the APK.
