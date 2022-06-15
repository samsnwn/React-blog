import React from 'react'
import { Text } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
  <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%", marginTop:'100px',
        }}
        weight="bold"
      >
        Welcome
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",
        }}
        weight="bold"
      >
        to our 
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
        blog site
      </Text>
  </div>
  )
}
