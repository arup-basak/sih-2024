import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

interface IData {
  id: string | number;
  product: string;
  price: number;
  pieces: number;
  bid: number;
  cartoons: number;
  time: string;
}

interface Props {
  item: IData;
}

export default function ListBidCard({item}: Props) {
  return (
    <View className="bg-secondary m-4 rounded pb-3">
      <View className="p-3 flex-row justify-between">
        <Text>{`ID: ${item.id}`}</Text>
        <Text>{item.time}</Text>
      </View>
      <View className="border-t p-3">
        <Text>{`${item.pieces} X ${item.product} (${item.cartoons} cartoons)`}</Text>
        <Text>{`Total Bids: ${item.bid}`}</Text>
      </View>
      <View className="flex-row gap-2">
        <Button mode="contained">Accept</Button>
        <Button mode="contained">Reject</Button>
      </View>
    </View>
  );
}
