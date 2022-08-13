import { View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function APIData() {
  const saveJsonInLocalStorage = async () => {
    AsyncStorage.setItem(
      "TestDataJSON",
      JSON.stringify(await require("../JSON/data.json"))
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", Width: "50%" }}>
      <Button
        onPress={saveJsonInLocalStorage}
        title="Save Test JSON Data"
        color="#8a19e6"
        style={{
          backgroundColor: "#3b5f6b",
          color: "white",
          fontWeight: "bold"
        }}
      />
    </View>
  );
}

export default APIData;
