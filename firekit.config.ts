import { Config } from '@firestart/firekit';

const config = {
  name: "example",

  // This will spawn a cluster of x workers
  // HINT: For production, you should set this to true
  cluster: true,

  hooks: {
    // Add hooks here
  },
  providers: {
    // Add providers here
  }
} as const satisfies Config;

export default config;