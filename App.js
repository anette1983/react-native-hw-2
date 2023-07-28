import React, { useState } from "react";

import {
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";

export default function App() {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const onPressWithoutFeedback = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback
        style={styles.mainContainer}
        onPress={onPressWithoutFeedback}
      >
        <ImageBackground
          source={require("./assets/images/bg-image.png")}
          style={styles.image}
          resizeMode="cover"
        >
          <RegistrationScreen
            isShownKeyboard={isShownKeyboard}
            setIsShownKeyboard={setIsShownKeyboard}
          />

          {/* <LoginScreen
            isShownKeyboard={isShownKeyboard}
            setIsShownKeyboard={setIsShownKeyboard}
          /> */}

          {/* <PostsScreen /> */}
        </ImageBackground>
      </TouchableWithoutFeedback>
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
    justifyContent: "flex-end",
  },

  form: {
    marginTop: 263,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    backgroundColor: "white",
    paddingBottom: 8,
    paddingTop: 50,

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
