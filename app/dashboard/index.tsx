import { View, FlatList } from "react-native";
import React from "react";
import styles from "@/styles/style";
import { SafeAreaView } from "react-native-safe-area-context";
import DashboardIcon from "@/components/DashboardIcon";
import DashboardCard from "@/components/cards/DashboardCard";
import { StatusBar } from "expo-status-bar";

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View className="flex-1 flex-row gap-4">
        <View
          style={{ flex: 1 }}
          className="bg-secondary h-full items-center p-2"
        >
          <FlatList
            data={sideBarData}
            renderItem={({ item }) => <DashboardIcon item={item} />}
            keyExtractor={(item, keyExtractor) => keyExtractor.toString()}
            contentContainerStyle={{ gap: 12 }}
          />
        </View>
        <View style={{ flex: 5 }}>
          <FlatList
            data={sampleVegetables}
            renderItem={({ item }) => <DashboardCard item={item} />}
            keyExtractor={(item) => item.title.toString()}
            contentContainerStyle={{ gap: 12 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const sideBarData = [
  {
    heading: "All",
    icon: "@/assets/icons/icon.png",
  },
  {
    heading: "Indian Vegitables",
    icon: "@/assets/icons/icon.png",
  },
  {
    heading: "Potatos",
    icon: "@/assets/icons/icon.png",
  },
  {
    heading: "Tomatos",
    icon: "@/assets/icons/icon.png",
  },
  {
    heading: "Onions",
    icon: "@/assets/icons/icon.png",
  },
];

const sampleVegetables = [
  {
    bestseller: true,
    title: "Organic Carrots",
    price: "$2.99",
    src: "/images/carrots.jpg",
  },
  {
    bestseller: false,
    title: "Fresh Spinach",
    price: "$3.49",
    src: "/images/spinach.jpg",
  },
  {
    bestseller: true,
    title: "Red Bell Peppers",
    price: "$1.99",
    src: "/images/red-peppers.jpg",
  },
  {
    bestseller: false,
    title: "Broccoli Crowns",
    price: "$2.49",
    src: "/images/broccoli.jpg",
  },
  {
    bestseller: true,
    title: "Cherry Tomatoes",
    price: "$3.99",
    src: "/images/cherry-tomatoes.jpg",
  },

  {
    bestseller: true,
    title: "Organic Carrots",
    price: "$2.99",
    src: "/images/carrots.jpg",
  },
  {
    bestseller: false,
    title: "Fresh Spinach",
    price: "$3.49",
    src: "/images/spinach.jpg",
  },
  {
    bestseller: true,
    title: "Red Bell Peppers",
    price: "$1.99",
    src: "/images/red-peppers.jpg",
  },
  {
    bestseller: false,
    title: "Broccoli Crowns",
    price: "$2.49",
    src: "/images/broccoli.jpg",
  },
  {
    bestseller: true,
    title: "Cherry Tomatoes",
    price: "$3.99",
    src: "/images/cherry-tomatoes.jpg",
  },
  {
    bestseller: false,
    title: "Romaine Lettuce",
    price: "$2.29",
    src: "/images/romaine-lettuce.jpg",
  },
  {
    bestseller: true,
    title: "Sweet Potatoes",
    price: "$1.79",
    src: "/images/sweet-potatoes.jpg",
  },
  {
    bestseller: false,
    title: "Green Beans",
    price: "$2.99",
    src: "/images/green-beans.jpg",
  },
  {
    bestseller: true,
    title: "Zucchini",
    price: "$1.49",
    src: "/images/zucchini.jpg",
  },
  {
    bestseller: false,
    title: "Cauliflower",
    price: "$3.79",
    src: "/images/cauliflower.jpg",
  },
];
