import { http, HttpResponse } from "msw";
import { listTodoMockData } from "../mockData/listTodoMockData";

export const handlers = [
  http.get("/reviewsData", () => {
    return HttpResponse.json(listTodoMockData);
  }),
];
