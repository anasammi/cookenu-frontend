import { extendTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

export const theme = extendTheme({
    components:{
        Button: {
            baseStyle: {
                colorScheme: "#4d4c4c"
            }
        }
    }
})