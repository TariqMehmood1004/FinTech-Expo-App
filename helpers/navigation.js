import { CommonActions } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';

// Todo: navigate
export function navigateToScreen(navigation, screenName, params = {}, transitionOptions = {}) {
    navigation.navigate(screenName, { ...params, transition: transitionOptions });
}

// Todo: go back
export function goBack(navigation) {
    navigation.goBack();
}

// Todo: reset
export function resetToScreen(navigation, screenName, params = {}, transitionOptions = {}) {
    navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name: screenName, params: { ...params, transition: transitionOptions } }],
        })
    );
}

// Todo: replace
export function replaceScreen(navigation, screenName, params = {}, transitionOptions = {}) {
    navigation.replace(screenName, { ...params, transition: transitionOptions });
}

// Todo: push
export function pushToScreen(navigation, screenName, params = {}, transitionOptions = {}) {
    navigation.push(screenName, { ...params, transition: transitionOptions });
}

// Todo: pop
export function popScreens(navigation, count = 1) {
    navigation.pop(count);
}
