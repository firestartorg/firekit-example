import { integration } from "@firestart/firekit";
import action from "src/actions/example";

export default integration({
  id: "example",
  name: "Example",
  resources: [action],
});
