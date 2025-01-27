import { action } from "@firestart/firekit";

export default action({
  id: "ping-pong",
  name: "Ping Pong",
  description: "An example action",
  schema: {
    inputs: {
      type: "object",
      properties: {
        ping: {
          type: "string",
          title: "Ping",
          description: "A test field",
        },
      },
    },
    outputs: {
      type: "object",
      title: "Outputs",
      properties: {
        pong: {
          type: "string",
          title: "Pong",
          description: "A test field",
        },
      },
    },
  },
  hooks: {
    run({ args }) {
      return {
        outputs: {
          pong: args.inputs.ping,
        },
      };
    },
  },
});
