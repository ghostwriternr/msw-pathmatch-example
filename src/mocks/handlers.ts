import { rest } from "msw";
import { endpoints } from "../endpoints";
import { mockedResponses } from "./mockedResponses";

export const handlers = [
  rest.get(endpoints.FETCH_C3PO, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedResponses.c3poData));
  }),
  rest.get("https://swapi.dev/api/people/3/", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedResponses.r2d2Data));
  }),
];
