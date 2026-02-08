import { defaultConfig } from '@tamagui/config/v5'
import { animations } from '@tamagui/config/v5-reanimated'
import { createTamagui } from 'tamagui'

export const config = createTamagui({
  ...defaultConfig,
  animations,
})

type Conf = typeof config

// make imports typed
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}
