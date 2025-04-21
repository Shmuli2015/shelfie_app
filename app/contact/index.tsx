import { Link } from 'expo-router'
import { View, Text } from 'react-native'
import styles from "./styles"


const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>

      <Link href="/" style={styles.link}>Home Page</Link>
    </View>
  )
}

export default Contact