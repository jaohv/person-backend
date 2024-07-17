import fastify from "fastify";
import cors from '@fastify/cors';
import { appRoutes } from "./http/routes";

export const app = fastify();

app.register(cors, {
  origin: (origin, cb) => {
    if (!origin) {
      cb(null, true);
      return;
    }
    const hostname = new URL(origin).hostname;
    if (hostname === "localhost") {
      cb(null, true);
      return;
    }   
    cb(new Error("Not allowed"), false);
  },
});

app.register(appRoutes);