import React from "react";
import TSplashscreen from './TSplashscreen';
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";


const StartPage = () => {

    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <TSplashscreen />
            </Provider>
        </SafeAreaProvider>
    );
}

export default StartPage