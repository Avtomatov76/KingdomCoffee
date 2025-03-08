import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import Tile from "@/components/elements/Tile";

export default function HomeScreen() {
  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    //   headerImage={
    //     <Image
    //       source={require("@/assets/images/logo.jpg")}
    //       style={styles.reactLogo}
    //     />
    //   }
    // >

    <View style={{ marginTop: 30 }}>
      <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            backgroundColor: "#FFFFFF",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 40,
            paddingBottom: 10,
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: "600" }}>
            Can we get something started for you&#63;
          </Text>
        </View>
        <View
          style={{
            paddingTop: 15,
            paddingBottom: 15,
            backgroundColor: "#FFFFFF",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                size={28}
                name="sign-in"
                color={`${Colors.light.purple}`}
              />
              <ThemedText
                style={{ marginLeft: 10, marginRight: 20, fontWeight: "400" }}
              >
                Sign in
              </ThemedText>
            </Pressable>

            <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                size={28}
                name="inbox"
                color={`${Colors.light.purple}`}
              />
              <ThemedText
                style={{ marginLeft: 10, marginRight: 20, fontWeight: "400" }}
              >
                Inbox
              </ThemedText>
            </Pressable>
            <Pressable
              style={{ position: "absolute", right: 0, paddingRight: 20 }}
            >
              <FontAwesome
                size={28}
                name="user-circle-o"
                color={`${Colors.light.purple}`}
              />
            </Pressable>
          </View>
        </View>

        <Tile />
        <ThemedText style={{ paddingBottom: 20, fontSize: 14 }}>
          2. Experience a feel-good Iced Brown Sugar Oatmilk Shaken Espresso or
          Iced Hazelnut Oatmilk Shaken Espresso - made with StarBuck's Blonde
          Espresso, and just 150 calories for a grande.
        </ThemedText>
        <ThemedText style={{ paddingBottom: 20, fontSize: 14 }}>
          3. Experience a feel-good Iced Brown Sugar Oatmilk Shaken Espresso or
          Iced Hazelnut Oatmilk Shaken Espresso - made with StarBuck's Blonde
          Espresso, and just 150 calories for a grande.
        </ThemedText>
        <ThemedText style={{ paddingBottom: 20, fontSize: 14 }}>
          4. Experience a feel-good Iced Brown Sugar Oatmilk Shaken Espresso or
          Iced Hazelnut Oatmilk Shaken Espresso - made with StarBuck's Blonde
          Espresso, and just 150 calories for a grande.
        </ThemedText>
        <ThemedText style={{ paddingBottom: 20, fontSize: 14 }}>
          5. Experience a feel-good Iced Brown Sugar Oatmilk Shaken Espresso or
          Iced Hazelnut Oatmilk Shaken Espresso - made with StarBuck's Blonde
          Espresso, and just 150 calories for a grande.
        </ThemedText>
        <ThemedText style={{ paddingBottom: 20, fontSize: 14 }}>
          6. Experience a feel-good Iced Brown Sugar Oatmilk Shaken Espresso or
          Iced Hazelnut Oatmilk Shaken Espresso - made with StarBuck's Blonde
          Espresso, and just 150 calories for a grande.
        </ThemedText>
        <ThemedText style={{ paddingBottom: 20, fontSize: 14 }}>
          7. Experience a feel-good Iced Brown Sugar Oatmilk Shaken Espresso or
          Iced Hazelnut Oatmilk Shaken Espresso - made with StarBuck's Blonde
          Espresso, and just 150 calories for a grande.
        </ThemedText>
        <ThemedText style={{ paddingBottom: 20, fontSize: 14 }}>
          8. Experience a feel-good Iced Brown Sugar Oatmilk Shaken Espresso or
          Iced Hazelnut Oatmilk Shaken Espresso - made with StarBuck's Blonde
          Espresso, and just 150 calories for a grande.
        </ThemedText>
        <ThemedText style={{ paddingBottom: 20, fontSize: 14 }}>
          9. Experience a feel-good Iced Brown Sugar Oatmilk Shaken Espresso or
          Iced Hazelnut Oatmilk Shaken Espresso - made with StarBuck's Blonde
          Espresso, and just 150 calories for a grande.
        </ThemedText>
        <ThemedText style={{ paddingBottom: 20, fontSize: 14 }}>
          10. Experience a feel-good Iced Brown Sugar Oatmilk Shaken Espresso or
          Iced Hazelnut Oatmilk Shaken Espresso - made with StarBuck's Blonde
          Espresso, and just 150 calories for a grande.
        </ThemedText>
        <ThemedText style={{ paddingBottom: 20, fontSize: 14 }}>
          11. Experience a feel-good Iced Brown Sugar Oatmilk Shaken Espresso or
          Iced Hazelnut Oatmilk Shaken Espresso - made with StarBuck's Blonde
          Espresso, and just 150 calories for a grande.
        </ThemedText>
        <ThemedText style={{ paddingBottom: 20, fontSize: 14 }}>
          12. Experience a feel-good Iced Brown Sugar Oatmilk Shaken Espresso or
          Iced Hazelnut Oatmilk Shaken Espresso - made with StarBuck's Blonde
          Espresso, and just 150 calories for a grande.
        </ThemedText>
        <ThemedText style={{ paddingBottom: 20, fontSize: 14 }}>
          13. Experience a feel-good Iced Brown Sugar Oatmilk Shaken Espresso or
          Iced Hazelnut Oatmilk Shaken Espresso - made with StarBuck's Blonde
          Espresso, and just 150 calories for a grande.
        </ThemedText>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    //gap: 8,
    backgroundColor: "gray", //"orange",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 200, //178,
    width: "100%", // 290,
    bottom: 0,
    left: 0,
    //position: "absolute",
  },
});
