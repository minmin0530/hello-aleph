import { serve } from "aleph/react-server";
import unocss from "aleph/unocss";
import routes from "./routes/_export.ts";
import config from "./unocss.config.ts";

serve({
  router: { routes },
  atomicCSS: unocss(config),
  ssr: true,
});
