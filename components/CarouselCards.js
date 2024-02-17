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
      title: "Veggie Plate",
      body: "Pickup date: 2/14/2023. Pickup time: 8am",
      info: "This plate contains cucumbers, eggs, tomato, cauliflower, and broccoli.",
      imgUrl:
        "https://www.shutterstock.com/image-vector/vector-illustration-fried-eggs-vegetables-600nw-1519043639.jpg",
    },
    {
      title: "Plate 2",
      body: "Pickup date: 2/14/2023. Pickup time: 2pm",
      info: "testing testingSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
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
