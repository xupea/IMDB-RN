import React from "react";
import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";
import type { ScaledSize } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import { SBImageItem } from "./SBImageItem";

export const window: ScaledSize = Dimensions.get("window");

export default function Trailers() {
  const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue<number>(0);
  const [data2, setData2] = React.useState([
    {
      title: "Fly Me to the Moon",
      subtitle: "Starring Scarlett Johansson ",
      poster: "https://m.media-amazon.com/images/M/MV5BYTUzMmE0NjQtZGEzMi00ZWU3LWIzN2QtMzk5MGE0Nzg0MmE0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_QL75_UX280_CR0,0,280,414_.jpg",
      media: "https://m.media-amazon.com/images/M/MV5BN2E5OWQzNjUtZTU4Zi00ZDdmLTkxZDYtZjRjZjhkYWYyNjkyXkEyXkFqcGdeQWRvb2xpbmhk._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg",
    },
    {
      title: "The Art of the Con",
      subtitle: "The Ripley Cast Reveal Their Process",
      poster: "https://m.media-amazon.com/images/M/MV5BN2JjNjIwNDgtNTgxNy00OTViLTk0YWUtMTI0OWYwZWNmMDJmXkEyXkFqcGdeQXVyNDYzNjU3ODM@._V1_QL75_UX280_CR0,0,280,414_.jpg",
      media: "https://m.media-amazon.com/images/M/MV5BZTczN2M3MTMtNGY0Ni00MjdhLTgyYWUtMmE3NDYxN2ZkZDE3XkEyXkFqcGdeQXJoYW5uYWg@._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg",
    },
  ]);

  console.log(windowWidth);
  console.log((windowWidth * 563) / 1000);

  const baseOptions = {
    vertical: false,
    width: windowWidth,
    height: (windowWidth * 563) / 1000 + 66,
  };
  return (
    <Carousel
      {...baseOptions}
      loop={false}
      enabled // Default is true, just for demo
      defaultScrollOffsetValue={scrollOffsetValue}
      testID={"xxx"}
      style={{ width: "100%" }}
      autoPlay={false}
      autoPlayInterval={2000}
      data={data2}
      onScrollEnd={() => {
        console.log("===2");
      }}
      pagingEnabled={true}
      onSnapToItem={(index) => console.log("current index:", index)}
      renderItem={({ item, index }) => <SBImageItem key={index} item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
