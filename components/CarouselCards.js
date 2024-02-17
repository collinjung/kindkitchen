import React from "react";
import { View, Text } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../utils/CarouselCardItem";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

const CarouselCards = () => {
  const data = useQuery(api.myPlates.get);
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View style={{ paddingTop: 50 }}>
      <Carousel
        layout="default"
        layoutCardOffset={10}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
    </View>
  );
};

export default CarouselCards;
