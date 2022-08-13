import { View, FlatList, Item } from "react-native";
import { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

function APIData() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("TestDataJSON").then((res) => {
      setJsonData(JSON.parse(res));
    });
  }, []);

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <FlatList
      data={jsonData["Data"]}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default APIData;
