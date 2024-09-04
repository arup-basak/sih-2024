import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import styles from "@/styles/style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dropdown } from "react-native-element-dropdown";
import { router } from "expo-router";

export default function index() {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState<any>(null);

  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View className="p-4">
        <Text className="text-2xl text-green w-full text-center font-semibold">
          ADD A PRODUCT
        </Text>
        <View className="pt-12 gap-4">
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select item" : "Choose Options"}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />

          <TextInput
            mode="outlined"
            theme={{ roundness: 8 }}
            placeholder="Enter Product Description"
          />
          <TextInput
            mode="outlined"
            theme={{ roundness: 8 }}
            placeholder="Enter Product Price"
            keyboardType="number-pad"
          />

          <Button mode="contained" style={{ borderRadius: 12 }} onPress={() => router.navigate("/list-bids")}>
            Upload
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
