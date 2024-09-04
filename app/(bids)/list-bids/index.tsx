import { FlatList, ScrollView } from "react-native";
import React from "react";
import ListBidCard from "@/components/cards/ListBidCard";
import styles from "@/styles/style";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatList
          data={sampleData}
          renderItem={({ item }) => <ListBidCard item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const sampleData = [
  {
    id: 1,
    product: "Apples",
    price: 2.99,
    pieces: 6,
    bid: 2.75,
    cartoons: 10,
    time: "2024-09-04T09:30:00Z",
  },
  {
    id: "B2C3D4",
    product: "Bananas",
    price: 1.49,
    pieces: 8,
    bid: 1.25,
    cartoons: 15,
    time: "2024-09-04T10:15:00Z",
  },
  {
    id: 3,
    product: "Oranges",
    price: 3.25,
    pieces: 10,
    bid: 3.0,
    cartoons: 8,
    time: "2024-09-04T11:00:00Z",
  },
  {
    id: "E5F6G7",
    product: "Strawberries",
    price: 4.99,
    pieces: 20,
    bid: 4.5,
    cartoons: 5,
    time: "2024-09-04T13:45:00Z",
  },
  {
    id: 5,
    product: "Grapes",
    price: 3.75,
    pieces: 30,
    bid: 3.5,
    cartoons: 12,
    time: "2024-09-04T15:30:00Z",
  },

  {
    id: "H8I9J0",
    product: "Pineapples",
    price: 5.99,
    pieces: 1,
    bid: 5.5,
    cartoons: 6,
    time: "2024-09-05T08:00:00Z",
  },
  {
    id: 7,
    product: "Mangoes",
    price: 2.49,
    pieces: 3,
    bid: 2.25,
    cartoons: 9,
    time: "2024-09-05T09:30:00Z",
  },
  {
    id: "K1L2M3",
    product: "Kiwis",
    price: 0.99,
    pieces: 5,
    bid: 0.85,
    cartoons: 20,
    time: "2024-09-05T11:15:00Z",
  },
  {
    id: 9,
    product: "Peaches",
    price: 3.5,
    pieces: 4,
    bid: 3.25,
    cartoons: 8,
    time: "2024-09-05T14:00:00Z",
  },
  {
    id: "N4O5P6",
    product: "Watermelons",
    price: 7.99,
    pieces: 1,
    bid: 7.5,
    cartoons: 4,
    time: "2024-09-05T16:45:00Z",
  },
];
