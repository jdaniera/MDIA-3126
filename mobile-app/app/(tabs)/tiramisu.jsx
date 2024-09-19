import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return(
        <View>
            <Text>Welcome to TiramisuLand ☕️🐸</Text>
            <Link href="/soup">Visit Soup Sanctuary</Link>
        </View>
    )
}