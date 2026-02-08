import { Paragraph, View } from "tamagui";
import { Check } from "./icons/check";

export default function Index() {
  return (
    <View flex={1} items='center' justify='center'>
      <Paragraph>Should be $color and size=$4:</Paragraph>
      <Check />
      <Paragraph>Bigger and red:</Paragraph>
      <Check size='$8' color='$red10' />
      <Paragraph>Setting stroke explicitly works (size is getting set too!):</Paragraph>
      <Check size='$8' color='$red10' stroke='$red10' />
    </View>
  );
}
