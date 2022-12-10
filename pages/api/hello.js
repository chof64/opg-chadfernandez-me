import { withOGImage } from "next-api-og-image";

import Home from "/src/components/chadfernandez-me/Home";

export default withOGImage({
  template: {
    react: ({ myQueryParam }) => (
      <>
        <Home />
      </>
    ),
  },
});
