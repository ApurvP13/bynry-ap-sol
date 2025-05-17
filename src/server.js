import { createServer } from "miragejs";
import profiles from "./data/data";

export default function makeServer() {
  if (window.server) {
    // Don't create a new one if it already exists
    return window.server;
  }

  window.server = createServer({
    namespace: "api",

    routes() {
      this.get("/profiles", () => {
        return { profiles };
      });

      this.post("/profiles", (schema, request) => {
        const newProfile = JSON.parse(request.requestBody);
        profiles.push({ id: Date.now(), ...newProfile });
        return { profiles };
      });

      this.delete("/profiles/:id", (schema, request) => {
        const id = request.params.id;
        const index = profiles.findIndex((p) => p.id === parseInt(id));
        if (index > -1) profiles.splice(index, 1);
        return { profiles };
      });
    },
  });

  return window.server;
}
