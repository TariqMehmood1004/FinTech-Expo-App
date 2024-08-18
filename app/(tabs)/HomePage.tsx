// app/(tabs)/HomePage.tsx
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppBar from '@/components/AppBar';
import Card from '@/components/Card';
import { Colors } from '@/constants/Colors';
import { hp, wp } from '@/helpers/common';
import { IconButton } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import TileList from '@/components/TileList';
import { useRouter } from 'expo-router';
import ScreenWrapper from '@/components/ScreenWrapper';

const HomePage = () => {
  return (
    <ScreenWrapper backgroundColor={Colors.colors.white}>
      <AppBar />
      <SafeAreaView style={{ flex: 1, paddingHorizontal: wp(5) }}>
        <ScrollView
          style={styles.container}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          showsVerticalScrollIndicator={false} >
          <View>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              paddingVertical: hp(2),
              gap: 16,
            }}>
              <View style={{ width: '50%' }}>
                <Card
                  containerStyle={{
                    backgroundColor: Colors.colors.green,
                    height: hp(35),
                    justifyContent: 'flex-start',
                    padding: wp(5),
                    borderRadius: wp(5),
                  }}
                  title="Current Balance"
                  subtitle="Rs. 56,000"
                  titleStyle={{ color: Colors.colors.white, fontWeight: 'bold', fontSize: wp(3.5) }}
                  subtitleStyle={{ color: Colors.colors.white, fontWeight: '900', fontSize: wp(6) }}>
                  <IconButton icon={'chevron-right'} size={wp(7)} iconColor='white' style={{ alignSelf: 'flex-end', position: 'absolute', right: wp(3), bottom: wp(3), backgroundColor: Colors.colors.black }} />
                </Card>
              </View>

              <View style={{ width: '50%', flex: 1 }}>
                <Card
                  containerStyle={{
                    backgroundColor: Colors.colors.blue,
                    height: hp(35 / 2),
                    justifyContent: 'flex-start',
                    padding: wp(5),
                    borderRadius: wp(5),
                  }}
                  title="Current Balance"
                  subtitle="Rs. 56,000"
                  titleStyle={{ color: Colors.colors.white, fontWeight: 'bold', fontSize: wp(3.5) }}
                  subtitleStyle={{ color: Colors.colors.white, fontWeight: '900', fontSize: wp(6) }}>
                  <IconButton icon={'chevron-right'} size={wp(7)} iconColor='black' style={{ alignSelf: 'flex-end', position: 'absolute', right: wp(3), bottom: wp(3), backgroundColor: Colors.colors.white }} />
                </Card>

                <Card
                  containerStyle={{
                    backgroundColor: Colors.colors.rose,
                    height: hp(35 / 2),
                    justifyContent: 'flex-start',
                    padding: wp(5),
                    borderRadius: wp(5),
                  }}
                  title="Current Balance"
                  subtitle="Rs. 56,000"
                  titleStyle={{ color: Colors.colors.white, fontWeight: 'bold', fontSize: wp(3.5) }}
                  subtitleStyle={{ color: Colors.colors.white, fontWeight: '900', fontSize: wp(6) }}>
                  <IconButton icon={'chevron-right'} size={wp(7)} iconColor='black' style={{ alignSelf: 'flex-end', position: 'absolute', right: wp(3), bottom: wp(3), backgroundColor: Colors.colors.white }} />
                </Card>
              </View>
            </View>

          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={{ fontSize: wp(5), fontWeight: 'bold', color: Colors.colors.text, paddingBottom: 10 }}>My Plan</Text>

            {[
              { title: 'Gold Smith buy navel', subtitle: 'Gold Smith buy navel', image: 'data:image/jpeg;base64,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' },
              { title: 'Smith is very smart', subtitle: 'Smith is very smart', image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEX///8NIk8AAD4AAEIAAD0AAEAAHUwAGEoAG0sAGksAADsJIE4AAEMAE0gAFkkAEUcAC0W7v8iAhpkACkXKzdTk5umYnazZ2+Hd3+Ty8/WRlqZGUXCfo7G1uMKKkKFhaoIuPGFRW3dsdYrFx9B4gJQ5RmdQWnf09fbQ09issbxud4wnNV05RWgdLVcSJlJlboUAADJZYn2lq7nnQT+uAAAP7ElEQVR4nO1daXeqPBetDIqgggNax9rRodW+9v//uFdNgB1ISFBQ77OyP9y1rlpNcnKmfU7C05OGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGxn8Oq+f1++ZvNjxitukORuN7D6hEPM8nvz8t17BNsx+c0DdN03at3aG3+ecnunpfTJuG6XfqtSzqDd80+suPeXjvYV6K0XBqmb7jcSaH82yb7nfv/d6DLY7nxc4IZLOLZ+mb/ts/NcnxbOn6vI0phtexnd7zvQeuiNGv3c9Oz3M67aBvm63W0d74nWZWvJ5vfXbvPXgFvE+tDjt6rxEcTWcw/f2YzDbz+XzzN+ltX/euZfbTFsix97N7T0CC7rfhsJvPtPaHSZe3/8LB7G1ptNjt7Nmt4ermw1bG4MfG4dZ9O3jb5PuCcbe3swOHmaPzqHIMD24TxRHsFmu1P5xNTUaO5u4h9XFhNBidai8K/PGAmWKtbhweLgwY7Psp61jfFfjzj3bKsDaMB9uqWzfrH8y58p+PW5m/rpmfDyTG0S6IdSgZovOj/AXDIPmz+Bua5l+FYy6EYSLABvp6U83QHNGGhfGD+D/24TEcx8GOhlS3DuFnYvkbL4rfME/sjGc+T9zYZPm7Bwjkwr0fjSfYvTOjrbmKmrRMBN/5PX7la7Jm7t39xsB34sH0zq9AzNbuqX2HDYty3tnzVid6wZhUN3gVzN1oPv6eat2sn4y3paRHX0mg4HySl8aJGO1tVYNXwSyeoP0STWaVWIpaX8WpPRvJktjxppxZ0dZtHaoZvAom0QQ99M+9WDGPll/hW8DbY5SwrkU7NZiWPnJFLKxob/noF0IXZCL3+mPQwhZ6wNU02u/+naY4iSbof7OM2UsSoCp4/Uni7b0W+9bWuOsUZ5Go+l+pd9aoWFKvD9l+kA7W40UMXssbuCrm0Y+bWb8+Tbx+R2YmNhCSmhn29C/SdPu3rIGrYhBJ0HzLvtlFByfx+t+Jt29z/EK8kHaRZKwEhJFL4E3w6WkHw873+gPY0S4vRIs9rrUpY+DK2Du5m+cv2XqenUvcg7dvpvWZYE53i+eOrh+3Mg6+xACg1x/mfNEz7GdTwAnPqJjr9dsVOWZ0XJ1P0ScW4ALaOd+0BW+/FH5Z9HM38xkjqhrOXhh2ohvPyfXHEByYYj37pa7fvFUUTu3IMZUTf+YtEY4jlDTj7b2cX/wkMYRnKefUV2FLh5WbumE4bQxEn6qDt89T13GDfLAQu3UxBtRDmfkOapoYyYbI628gW7ZzE601VYy+WsZ5HfZkjzYkao9prSHw+ujtP/K/bki/7gYuY0G03uvLTPdSOvx3hUWI8UVU0VleMugiCOmoLGlahFuwxV2OL4WNHGPcIvvUrppiPJClbCgEwn2J13+2kiVQMJJzsraeGjNyMaKAW4UoHCaEjedw3t/GbFOOt09AZ1jzqzU2P1FeZMg1fmwmQuR4fQwKbAXOMCbD7SrZ/iQtkisOQ8BwDAR4exU3l6h1m5vOlAQw7wpmGwkbK+P1gcm3FSg5SMhUieYL8A6BijR5f4rNElfmG2Ty5cYDLbPMd16BKVajLbkQ14mqeXYqiIXt4Cuk7zus3mXZjpIwAvOuZk4/YRrswqO3VzAdc6ZGHFSVY/x28Gf4pAOLLgzMYhYewtaOgm/dsQ0bwcVzyMXYZuvYKkLcJyNjkodnMEIKNmtuM79cpLxcBFhyOa+kIRfiDDQRE8C3ZDs4Cpn7d6qG3qwm21+mS/UduRBXELpBEh8CSWrLW/bSIqzIYeDGolJR0EQo09S/41eBxoFXhUiLUJIvX4oFGasDHkPBRoSgvEmub3IlKwIaUq+jvC6FQcxZZ/ubuHFPwc6DAY69Pnr7hvyXQT08Z0OsQdq9loARiWfsASY9CkIccUht2HUKrg218Phx36tom5KWF6/59PQK3V0KGg+BEC1MMLm9PDyB9Tglh8QMq1jggiADPY0RQ5uOPM6H+XhkPuDtFUJMLPOcym9dYofdsiO3lXXeHOYpkXstponpPYkrZMnVaenArx2ntSIzNstuQ3k3iRBOWcAahqiQrEGF0Ks/Md5eIctEEfbPIfrreQsodrKog/gKuvuBQvIsuRBbjG8YG8l/s1ljBhhnkCxrdrYIKsRHIRA1pJZvDc6fV9ZMYcL49wXEAPJRprXwKbbOfP7uchBaPYqwXkGIUqaT6a1sfEMnqUIAjVoYJcqk68qWy78ISBnCi1LPgkIEVq0Gm87bS/8SWYU4USa2OCi3xZYETsmumqKBkwoxG9KeodAxBSJMKhtknys4qiIgqpTwwIw5lfu0L7YFnMKQ0jMowiA2nvPzrq+rN+iqgESXECqBOVUIbAaZ9KemRO3+YDgTW5bR+ds849LJ5PwUeNkBaqJciEunloZnShcGwztYj5WruLBFQKyhDXwDhF4KY2WZpDMUSJBP2CgYwJI+CHm7VQFEqwa/go0wCkL0Mie5XOkABSI8ri7ZUWWSNbRmbeFraE4tqfcdpkievOp+hB/Y2gxFSuK+Ut0FoXbPUWWMQSFzukqfqJBHzu/wA6xVItSICpGsDBJ3p5YdGfCWVBM/fGaCCsWYqUALo1y1VHKfGIpUJoAuwJf+Wuj6bYArpWeYcIZ1LJvzLytQfer4O2tROoqAoxWePCEd9AAf8lr1J4Yz7LcTly/og7sMJGHppCLQgXiVr8dAqIVRml8qkSHY+FORsSsBqIXp9sYuzyxcB8EMByKHdT1yLTXX8F0HkfFCXVFgzQoAQ6ZMh2plM0zrYZ7LymLcRUjqTfkRE92lZeoh35Y+pXxirhBXfdsE/C+/HoNamI16K7ClhIbnxMrcHJyLGZtA5dfH1vmZy4bnnq8D2Ra8US1Vzek+FXrnNuSgCDmelu+8rsKasKUcXoWJ/3OE2E2nT3n0Dh5J8TmfW5Qfl9Ks2ua89YMaIxbitMlOMDcfQdKDl3tu04zD9aD92C6HWGGoFOGqsm0c5MPCqpOUySMUil3qAQzSosst2i1VzOkb28ZxFmJd8FmGUudSFYS8NUslTEl5lHsigsNKZzDOkhji6i9qIV9biYwVGiUKgPRv8bNqxpzyCcJJOsM/QdTuiyLkcrGUcXAvnAsfvRwStivXxCDD0pzAr8vI+XRil71y+/Y3eZEg1hZ8nhA3vE0qSmEP0hIzpafLTIBj3eB3IEs1kSmvwAR4e5Bh0/k+k1RoS25uG9MOCD4DiDU+zrkJyIS89hhkxPPZCgVmLylHlwgyCYGTZTQxu7Qwp+O7IzwInfksviuovdBmEDkNXQyko7kpOI2HHS8ZTcRW4VPUA+FN9mgBaqGgvEwSHYXSXDFQWr7FfxejzowQofHrrFjw4Uxrk0qfBzkqrtKzWQhUEKI4ItXzgsA7FkjrBTSLptv2DhD7iCovhFsOSj9ZQuYgSuSxb6nPCnGWiKxBcta/5JVUQsZooUBI9Eqp8rsTyV4TUtViTYQmWtq6t4LrT9g0Ee4qEDY+0oGU37pHeTVR4soIES0uJJBxkRzaMZgMXqlljpwsqeLkjJ//zaBcXh9eB8sZh9rjlHWNIA9nYo6q5E6MM0gCdGrd40IgRGhS8Mz4VWjJxM9CL6qwKEGH0SlhRmnQ7SY8ooTmNOmlh8Pa4EagJRMOfb0k8xb2kNMqXTWHSsihXZHTZwrZcR8JJoaYHk+T/RiXcrEnRShCaoeNSo48U88tNNOoidFehoYvJowG+9OMEpYX9IWi7JbslEqaoON4Q7hBUIgmFSLcs8sOGr0+kQdqoTAzoqxQJY3sT3GVQkjGoBDJRQow6RRDDV6fTgdP5Ai7uAnH7pVbI0lA80Aho4ZCbJ2FCL0GafOeeH2SJIUuiFDEZtM0tfSYNAblrYWH6VCIJyZtzfH2EcDrn5cM2TjhOSFK4Sgcm7sQtPYg9PqblBBfOBYzAhySPTnKZ0NBC2kjVqklmRRot68w+dxjdIqhC+dYBdyccUwTUQuFJQ1qCBQ6iy8GvdlA6K2Yk57b10QLOZk/pILeHitTwtOpNGwqtTKaxopaf1e0inhOsCOpaGCZF5tthFpIjVOVIoyTPWGDtoA35PpQrHgAhIa0R6KHRoVaeAIVkvAunBqX++XHQdkjaWcRCUQ4ohGBwoG5q0BpNU90FOSPJ0SBWDac24PFIqKkK6+eWC4OkjtG9hzBiJK59PXReSJckKXz/Mqvwwqp9pgCp8gRolBr4aBlLEJB6hL1JFd+tclTwiy5gm6K7FMPhIcoOZdcC/pqI2pHdu9POaC9yaI7eDJCzLnjKlM4FYUrX/SDld76ESOkU2gu+e+nNTEn1ckcxBBktj36k8aNbvj+owFIwA9t/ti95/Gq/xFSDQwCAmFDw5/2ze7bPdCQUnAfJauJuZTKO9tHxNfC6KKveuNmF5ivouDM4pa9Z6iJknsJmEP+fF/4HJ38roac4SPWH5d7IgAumpP1ZjFhHncKYfQQk9s+LaFrRUrGIxfRnMriZKjbODwRhh5V1X6VVwtxMIkUyOBNsREPW3q/GrBxvIxlXKMTbN/8suRtZDF5XfdJuic92JIwqrx+0bBDc0ynGv4wFwe6+B7P3EQ8U+6NlgSx1+dEr6PoGTv15j0eQTeN0lY36w8ic6pAbEYFJ44IuxGFWvfv87ySeIpm1lFTTVTp4I8ItIwIJxE7VW/d6zEX08hKtDNP2iBCVCqgEK+fbc99iZTZCe73HI/XqF+tnmmFPHmBzAVffJxz/fQ1rs+7aIc0G/d8pM5vbDStFA89bImTvRROXj9NoM3MiKhrf9/3mUGLODtoO2zCWGs3Va9T3flNNiINp/HK9af3fprOJn5QkGe84WDCw1S1Lyv90VnS/GbcOJLhYVSP01i/lCc0rZfxJUv1x3hy13gaj8izl9c+bDN8cWOqvN25YTaRi4kR50B1d3rNqMKemxAbxoM80OqE9S5pc24aX5fS7uGHmdD7zVvQagXQg0fLNa3lJQcFBi9WUo7y7OkDPVjujPUS6vCOGfSKVTHHs28b+oV8/7EESPDX8pM5er61nKgGW+PNq4uPpGu428fRQMSqZ+ODGuuBXeu9S0Pv9fDHMJFyc6yvB3ienADh1mUeRum1TfOntxFt2LA7+fLZ56zWGtZnpfXBqxF+2KnDFU7btN3aS282fx+F4fiIcDTo/i3elq5l+izz6HWsiw3x7TCe9M30QbWa12j3W6ZhGbZtn/5t9f1GPV3gqAfW7y2fJXMF5lM3KPZY7tOGNr6H96AqLkQ4/E7pVy7qbbvz8SgRmjKeh1PXbMtF6XUC97v3+NrHxbjbW7bszPPFk8k1fNPe//49WvRSDOPB7O3Hsmwz8NudptM8wmm0/cA0DXf3Mun+27NLEK7ns8XHy+v08/Nz+nXYLoabweO6dQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ2NC/F/ScT2BndvE+UAAAAASUVORK5CYII=' },
              { title: 'ScrollView is the best', subtitle: 'ScrollView is the best', image: 'data:image/png;base64,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' },
              { title: 'Not or Never', subtitle: 'Not or Never', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsiueDhlBpRXB5dpPSeB7c_JPiu3vNGo2Jw&s' },
            ].map((item, index) => (
              <TileList
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                navigateTo={() => useRouter().push('../(tabs)/funds')}
                containerStyle={{ borderWidth: 1, borderColor: Colors.colors.grey }}
                titleStyle={{ color: 'black' }}
                subtitleStyle={{ color: 'gray' }}
                imageStyle={{ width: 35, height: 35 }}
              />
            ),
            )}

          </View>
        </ScrollView>
      </SafeAreaView >
    </ScreenWrapper>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colors.white,
  },
});
