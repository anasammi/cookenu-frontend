import { extendTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        header: {
            bg: "laranja.400"
        },
      },
    },
  },
  colors: {
    laranja: {
        400: "#FE7E02"
    }
  }
});
