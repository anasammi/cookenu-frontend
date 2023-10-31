import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        header: {
          bg: "laranja.400",
        },
        formMain: {
          width: "100%",
          bg: "laranja.400",
          color: "white",
          _hover: {
            bg: "white",
            color: "laranja.400",
            border: "3px solid #FE7E02"
          }
        },
        formSecondary : {
          width: "100%",
          bg: "white",
          color: "laranja.400",
          _hover: {
            fontWeight: "normal",
            color: "black",
            textDecoration: "underline",
            // border: "1px solid grey"
          }
        }
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
