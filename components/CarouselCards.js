import React from "react";
import { View, Text } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../utils/CarouselCardItem";

const CarouselCards = () => {
  const data = [
    {
      title: "Plate 1",
      body: "Pickup date: 2/14/2023. Pickup time: 8am",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "Plate 2",
      body: "Pickup date: 2/14/2023. Pickup time: 2pm",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "Plate 3",
      body: "Pickup date: 2/14/2023. Pickup time: 6pm",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View style={{ paddingTop: 50, backgroundColor: "green" }}>
      <Carousel
        layout="default"
        layoutCardOffset={14}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      {index === 0 ? (
        <View style={{ backgroundColor: "red" }}>
          <Text>Hello World 1</Text>
        </View>
      ) : null}
      {index === 1 ? <Text>Testing 2</Text> : null}
      {index === 2 ? <Text>3</Text> : null}
    </View>
  );
};

export default CarouselCards;
