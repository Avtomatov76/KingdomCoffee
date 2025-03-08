import { Image, StyleSheet } from "react-native";
import Button from "./Button";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

export default function Tile(props: any) {
  return (
    <ThemedView style={styles.titleContainer}>
      <Image
        source={require("@/assets/images/logo.jpg")}
        style={styles.reactLogo}
      />

      <ThemedView
        style={{
          flexDirection: "column",
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 10,
          paddingBottom: 30,
        }}
      >
        <ThemedText
          style={{
            paddingTop: 5,
            paddingBottom: 10,
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Shaken to Perfection
        </ThemedText>
        <ThemedText style={{ paddingBottom: 20, fontSize: 14 }}>
          Experience a feel-good Iced Brown Sugar Oatmilk Shaken Espresso or
          Iced Hazelnut Oatmilk Shaken Espresso - made with StarBuck's Blonde
          Espresso, and just 150 calories for a grande.
        </ThemedText>
        <Button />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    //gap: 8,
    backgroundColor: "gray", //"orange",
    borderRadius: 4,
    //borderBottomWidth: 1,
    //borderColor: "gray",
    ///////
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  reactLogo: {
    height: 300, //178,
    width: "100%", // 290,
    bottom: 0,
    left: 0,
    //position: "absolute",
  },
});
