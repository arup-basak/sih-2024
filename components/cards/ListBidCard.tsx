import { View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

interface Props {
  title: string;
  id: string | number;
  description: string;
  price: number;
}

export default function ListBidCard(props: Props) {
  return (
    <View>
      <Button>Accept</Button>
      <Button>Reject</Button>
    </View>
  );
}
