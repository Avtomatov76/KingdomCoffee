import { Pressable, View, Text } from "react-native";
import { Colors } from "@/constants/Colors";
//Colors.light.main
export default function Button(props: any) {
  return (
    <Pressable
      style={{
        justifyContent: "center",
        height: 40,
        width: 150,
        backgroundColor: `${Colors.light.purple}`,
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
      }}
      onPress={() => console.log("You just have pressed on KNOPKA!!!!!!!")}
    >
      <Text
        style={{
          alignSelf: "center",
          color: "#FFFFFF",
          fontWeight: "600",
        }}
      >
        Start an order
      </Text>
    </Pressable>
  );
}
