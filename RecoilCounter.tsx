import React from "react";
import { Text, View, Button } from "react-native";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const RecoilCounter = () => {
  const countState = atom({
    key: "countState",
    default: 1,
  });

  const [count, setCount] = useRecoilState(countState);
  const plus = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <View>
      <Text>count : {count}</Text>
      <Button title="+" onPress={() => plus()} />
    </View>
  );
};

export default RecoilCounter;
