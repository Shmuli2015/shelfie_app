import { Text, View, Image } from "react-native";
import logo from "../assets/img/logo_light.png";
import styles from "./styles";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img} />
      <Text style={styles.title}>The Number 1</Text>
      <Text style={styles.subtitle}>Reading List App</Text>
      <Link href="/about" style={styles.link}>About Page</Link>
      <Link href="/contact" style={styles.link}>Contact Page</Link>
    </View>
  );
};
export default Home;