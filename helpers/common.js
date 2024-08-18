import { Dimensions } from "react-native";

// Todo: Assigned the values dynamically
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");



// Todo: make it dynamic with percentage
export const hp = percentage => {
    return (percentage * screenHeight) / 100;
}

export const wp = percentage => {
    return (percentage * screenWidth) / 100;
}