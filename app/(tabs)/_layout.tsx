import { Tabs, usePathname, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Layout() {
  const router = useRouter();
  const path = usePathname();
  return (
    <Tabs
      screenOptions={{
        headerTitle: "Quick Dish",
        headerStyle: { backgroundColor: "#1c388e" },
        headerTitleStyle: { fontSize: 18 },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerLeft: () => {
          return path !== "/" ? (
            <Pressable
              onPress={() => {
                router.back();
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 12,
              }}
            >
              <Ionicons name="arrow-back-sharp" size={16} color="white" />
              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: "500",
                  marginLeft: 5,
                }}
              >
                Back
              </Text>
            </Pressable>
          ) : null;
        },
        tabBarStyle: {
          backgroundColor: "#1c388e",
        },
        tabBarLabelStyle: { color: "#fff", fontSize: 18 },
        tabBarItemStyle: { paddingVertical: 7, height: 100 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  color: focused ? "white" : "#888",
                  fontSize: 18,
                }}
              >
                Home
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="home"
                size={24}
                color={focused ? "white" : "#888"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  textTransform: "capitalize",
                  fontSize: 18,
                  color: focused ? "white" : "#888",
                }}
              >
                Profile
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="user"
                size={24}
                color={focused ? "white" : "#888"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarStyle: { display: "none" },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  textTransform: "capitalize",
                  fontSize: 18,
                  color: focused ? "white" : "#888",
                }}
              >
                Cart
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="shoppingcart"
                size={24}
                color={focused ? "white" : "#888"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="(cart)/[id]"
        options={{ tabBarItemStyle: { display: "none" } }}
      />
    </Tabs>
  );
}
