import { defineConfig } from "umi";

export default defineConfig({
  plugins: ['@umijs/plugins/dist/react-query'],
  reactQuery: {},
  routes: [
    { path: "/", component: "index" ,name:"home"},
  ],
  npmClient: 'npm',
});
