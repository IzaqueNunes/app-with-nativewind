import { View, Text, Switch } from "react-native";
import { useColorScheme } from "nativewind";

import colors from "tailwindcss/colors";

export function ToggleTheme() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-row items-center">
      <Text className="light:text-gray-900 dark:text-white">Dark</Text>

      <Switch
        trackColor={{ true: colors.blue[400], false: colors.gray[500] }}
        thumbColor={
          colorScheme === "light" ? colors.blue[900] : colors.gray[900]
        }
        onValueChange={toggleColorScheme}
        value={colorScheme === "light"}
      />

      <Text className="light:text-gray-900 dark:text-white">Light</Text>
    </View>
  );
}
