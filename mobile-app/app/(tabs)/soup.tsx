import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return(
        <View>
            <Text>This is the SoupSanctuary 🍲🍜🌧️</Text>
            <Link href="/tiramisu">Return to TiramisuLand</Link>
        </View>
    )
}