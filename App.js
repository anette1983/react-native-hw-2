import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Alert,
  Button,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ImageBackground,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
// import * as Font from "expo-font";

// import { AppLoading } from "expo";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const loginHandler = (text) => setLogin(text);
  const passwordHandler = (text) => setPassword(text);
  const emailHandler = (text) => setEmail(text);

  const reset = () => {
    setLogin("");
    setEmail("");
    setPassword("");
  };

  const onRegister = () => {
    if (!login || !email || !password) {
      Alert.alert("Fill in all the fields!");
      return;
    }
    Alert.alert("Credentials", `${login} + ${password} + ${email}`);
    setIsShownKeyboard(false);
    Keyboard.dismiss();
    reset();
  };

  const onPressWithoutFeedback = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
  };

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require("./assets/images/bg-image.png")}
          style={styles.image}
          // style={{ flex: 1, width: null, height: null }}
        >
          <TouchableWithoutFeedback onPress={onPressWithoutFeedback}>
            <View
              style={{
                ...styles.form,
                marginBottom: isShownKeyboard ? -162 : 0,
              }}
            >
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                // keyboardVerticalOffset={-50}
              >
                <View style={styles.avatarWrapper}></View>
                <Text style={styles.title}>Реєстрація</Text>
                <TextInput
                  style={styles.input}
                  placeholder="login"
                  placeholderTextColor={"#BDBDBD"}
                  name="login"
                  value={login}
                  onChangeText={loginHandler}
                  onFocus={() => setIsShownKeyboard(true)}
                />
                <TextInput
                  style={{ ...styles.input, marginTop: 16 }}
                  placeholder="email"
                  placeholderTextColor={"#BDBDBD"}
                  name="email"
                  value={email}
                  onChangeText={emailHandler}
                  onFocus={() => setIsShownKeyboard(true)}
                />
                <TextInput
                  style={{ ...styles.input, marginTop: 16 }}
                  placeholder="password"
                  placeholderTextColor={"#BDBDBD"}
                  name="password"
                  value={password}
                  onChangeText={passwordHandler}
                  secureTextEntry={true}
                  onFocus={() => setIsShownKeyboard(true)}
                />
                <Pressable
                  title={"Register"}
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? "#c75502" : "#FF6C00",
                    },
                    styles.btn,
                  ]}
                  onPress={onRegister}
                >
                  <Text style={styles.btnTitle}>Зареєстуватися</Text>
                </Pressable>
                <Text style={styles.linkTitle}>Вже є акаунт? Увійти</Text>
                <View style={styles.homeIndicator}>
                  <Text>kjhkh</Text>
                </View>
              </KeyboardAvoidingView>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // alignItems: "center",
  },

  form: {
    marginTop: 263,
    // marginBottom: -147,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    // width: "100%",
    // height: "100%",
    backgroundColor: "white",
    paddingBottom: 8,
    paddingTop: 50,
    // marginHorizontal: 16,
    paddingHorizontal: 16,
  },

  avatarWrapper: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
    resizeMode: "cover",
    marginTop: "-30%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    fontFamily: "Roboto_500Medium",
    color: "#212121",
    fontSize: 30,
    lineHeight: 36,
    textAlign: "center",
    marginVertical: 33,
  },

  input: {
    fontFamily: "Roboto_400Regular",

    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
    backgroundColor: "#F6F6F6",

    height: 50,

    color: "#212121",
    padding: 16,
  },

  btn: {
    // backgroundColor: "#FF6C00",
    alignItems: "center",
    maxWidth: "100%",
    paddingVertical: 16,

    fontSize: 16,
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
  },
  btnTitle: {
    color: "#ffffff",

    fontFamily: "Roboto_400Regular",
    fontSize: 16,

    fontWeight: 400,
    lineHeight: 19,
  },

  linkTitle: {
    textAlign: "center",
    color: "#1b4371",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 66,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    borderRadius: 100,
    background: "black",
    marginBottom: 8,
  },
});
