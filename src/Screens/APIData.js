import { View, Text, FlatList, Item } from "react-native";
import { useEffect, useState } from "react";

function APIData() {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setFetchedData(response);
      });
  }, []);

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={fetchedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default APIData;
