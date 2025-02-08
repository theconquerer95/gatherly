import { Button } from '@design/Button'
import { Pressable, View, Text } from 'react-native';
const Login = () => {
    return (<View className='flex-1 justify-center'>
        <View className='items-center'>
            <Text className='text-2xl font-bold'>
                Gatherly
            </Text>
        </View>
        <Button>
            {/* On Press, it will also log "Button pressed" since the `Button` props will be merged and passed to the `Pressable` */}
            <Pressable onPress={() => {
                console.log('Pressed')
            }}>
                <Text>Login</Text>
            </Pressable>
        </Button>

    </View>)
}

export default Login
