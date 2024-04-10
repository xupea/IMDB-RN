import React from "react";
import type { ImageSourcePropType } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";

type Item = {
  title: string;
  subtitle: string;
  poster: string;
  media: string;
};

interface Props {
  index?: number;
  item: Item;
}

export const SBImageItem: React.FC<Props> = ({ index, item }) => {
  const { title, subtitle, poster, media } = item;

  return (
    <View style={[styles.container]}>
      <Image
        cachePolicy={"memory-disk"}
        style={styles.media}
        source={media}
        contentFit="contain"
      />
      <Image style={styles.poster} contentFit="contain" source={poster} />
      <View style={styles.description}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  media: {
    width: "100%",
    flex: 1,
  },
  poster: {
    width: 90,
    height: 133,
    position: "absolute",
    left: 10,
    bottom: 0,
  },
  description: {
    backgroundColor: "black",
    padding: 16,
    marginLeft: 100,
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    color: "white",
  },
  subTitle: {
    color: "rgba(255, 255, 255, 0.7)",
  },
});
