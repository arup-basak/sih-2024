import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { router } from "expo-router";

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

export default function ListBidCard({ item }: Props) {
  return (
    <View className="bg-secondary m-4 rounded-lg">
      <View className="p-3 flex-row justify-between">
        <Text>{`ID: ${item.id}`}</Text>
        <Text>{item.time}</Text>
      </View>
      <View className="border-t border-gray-500 p-3">
        <Text className="text-md font-semibold">{`${item.pieces} X ${item.product} (${item.cartoons} cartoons)`}</Text>
        <Text>{`Total Bids: ${item.bid}`}</Text>
      </View>
      <View className="flex-row gap-2 justify-between p-2">
        <Button
          mode="contained"
          buttonColor="#B60909"
          style={{ borderRadius: 12, flex: 1 }}
          onPress={() => {}}
        >
          Reject
        </Button>
        <Button
          mode="contained"
          style={{ borderRadius: 12, flex: 1 }}
          onPress={() => router.navigate("/place-bid")}
        >
          Accept
        </Button>
      </View>
    </View>
  );
}
