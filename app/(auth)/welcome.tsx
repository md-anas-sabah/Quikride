import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const Onboarding = () => {
  const swipeRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView className="flex h-full justify-between bg-white items-center">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swipeRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] bg-[#E2E8F0] mx-1 rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] bg-[#0286ff] rounded-full mx-1" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center">
            <Image
              source={item.image}
              className="w-full  h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>

            <Text className="text-lg font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3 ">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton title={"Next"} className={"w-11/12 mt-10"} />
    </SafeAreaView>
  );
};

export default Onboarding;
