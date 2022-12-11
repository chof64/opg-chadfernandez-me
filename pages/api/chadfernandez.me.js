import { withOGImage } from "next-api-og-image";

import Frame from "/src/components/Frame";
import Home from "/src/components/chadfernandez-me/Home";

export default withOGImage({
  template: {
    react: () => (
      <Frame>
        <Home />
      </Frame>
    ),
  },
});
