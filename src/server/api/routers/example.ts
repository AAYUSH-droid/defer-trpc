import helloWorld from "~/defer/helloWorld";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  //hello function setup in trpc
  hello: publicProcedure.query(async () => {
    await helloWorld("hello");
    return {
      greeting: `Hello`,
    };
  }),
});
