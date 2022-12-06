import { Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "tailwindcss/colors";
import { Button } from "../components/Button";
import { ToggleTheme } from "../components/ToggleTheme";

export function Home() {
  return (
    <View className="flex-1 dark:bg-black light:bg-white items-center justify-center p-8">
      <Feather name="home" size={34} color={colors.green[500]} />
      <Text className="dark:text-white light:text-black text-2xl font-bold mt-4">
        Home
      </Text>

      <TextInput className="mb-2 w-full h-14 light:border-black dark:border-white border-2 px-4 rounded-md my-4 text-white focus:border-green-500" />

      <TextInput className="w-full h-14 light:border-black dark:border-white border-2 px-4 rounded-md my-4 text-white focus:border-green-500" />

      <Button className="w-full mt-8" />
      <ToggleTheme />
    </View>
  );
}
