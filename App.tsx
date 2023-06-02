/**
 * MyTimer App
 * 
 * https://github.com/SoraLinken/MyTimer
 *
 * @format
 */

import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/**
 * Main component for the MyTimer app.
 */
function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#F6FAF6',
    flex: 1,
    padding: 10,
    borderColor: '#000000',
  };

const dismissKeyboard = (): void => {
  Keyboard.dismiss();
};

return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={backgroundStyle}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image source={require('./assets/logoMyCar.png')} style={styles.logo} />
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.rootContainer}>
          <View style={styles.mainContainer}>

            {/* Input label */}
            <Text style={styles.labelText}>
              להתחברות לאפלקציית אמדוקס אנא הזינו את מספר הטלפון והמייל שלכם
            </Text>

            {/* Phone number input */}
            <View style={styles.iconWithInput}>
              <TextInput
                style={styles.input}
                placeholder="מספר טלפון"
                placeholderTextColor="#888888"
                keyboardType="numeric"
                textAlign="right"
              />
              <Image source={require('./assets/callSquare.png')} style={styles.icon} />
            </View>

            {/* Email input */}
            <View style={styles.iconWithInput}>
              <TextInput
                style={styles.input}
                placeholder="כתובת מייל"
                placeholderTextColor="#888888"
                textAlign="right"
              />
              <Image source={require('./assets/messageSquare.png')} style={styles.icon} />
            </View>

            {/* Footer */}
            <View style={styles.footerContainer}>
              <Pressable style={styles.button}>
                <LinearGradient
                  colors={['#F15B5D', '#E83C38', '#D92536', '#B21028']}
                  start={{ x: 0.0, y: 0.0 }}
                  end={{ x: 1.0, y: 1.0 }}
                  style={styles.gradient}
                >
                  <Image
                    style={styles.arrow}
                    source={require('./assets/login-button-arrow.png')}
                  />
                </LinearGradient>
              </Pressable>

              {/* Footer text */}
              <View style={styles.footerTextContainer}>
                <Text style={styles.footerText}>צריך עזרה?</Text>
                <Text style={styles.footerText2}>יצירת קשר עם התמיכה</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>

  );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  headerContainer: {
    width: '100%',
    height: windowHeight * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 10,
    marginTop: 30,
  },
  logo: {
    width: 250,
    height: 70,
    marginRight: 10,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  labelText: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    height: 50,
    minWidth: 300,
    fontFamily: 'Arial',
    fontSize: 17,
    marginRight: 10,
    color: '#000000',
  },
  input: {
    height: 50,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    minWidth: 300,
    fontSize: 17,
    textAlign: 'right',
  },
  iconWithInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    margin: 15,
    width: '100%',
    borderRadius: 8,
    paddingRight: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 4,
    borderColor: '#F6FAF6',
    shadowRadius: 2,
  },
  footerContainer: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  footerTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  footerText2: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0000FF',
  },
  icon: {
    padding: 10,
    margin: 5,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 30 / 2,
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: 24,
    height: 24,
    backgroundColor: 'transparent',
    tintColor: '#FFFFFF',
  },
});

export default App;
