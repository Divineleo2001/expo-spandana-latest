import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '~/components/ui/Header'
import Slider from '~/components/ui/Slider'

const Home = () => {

  return (
    <SafeAreaView>
      <View>
        <View className="ml-3 flex flex-row items-center justify-center">
          <Slider />
        </View>
        </View>

    </SafeAreaView>
  )
}

export default Home