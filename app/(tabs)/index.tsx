import {
  SectionList,
  StyleSheet,
} from "react-native";
import { Text, View } from "@/components/Themed";
import Trailers from "@/components/Trailers";

const DATA = [
  {
    data: [<Trailers />],
  },
  {
    title: "今日精选",
    data: [null],
  },
  {
    title: "推荐作品",
    data: [null],
  },
  {
    title: "幕后",
    data: [null],
  },
  {
    title: "探索电影和电视节目",
    data: [null],
  },
];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {item}
          </View>
        )}
        renderSectionHeader={({ section: { title } }) =>
          title ? <Text style={styles.header}>{title}</Text> : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  item: {
    backgroundColor: "black",
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
    color: "#f5c518",
  },
});
