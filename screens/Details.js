import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from "../components";

function Details({ route, navigation }) {
  console.log(route);
  return <Text>Details</Text>;
}

export default Details;
