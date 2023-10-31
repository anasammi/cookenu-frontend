import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        header: {
          bg: "laranja.400",
        },
        form: {
          width: "100%",
          bg: "laranja.400",
        },
      },
    },
  },
  colors: {
    laranja: {
      400: "#FE7E02",
    },
    cinza: {
      200: "#d4d4d4"
    }
  },
});
