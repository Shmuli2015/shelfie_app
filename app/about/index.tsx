import { Text, View } from "react-native";
import styles from "./styles";
import { Link } from "expo-router";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Link href="/" style={styles.link}>Go Back to Home Page</Link>
    </View>
  );
};

export default About;