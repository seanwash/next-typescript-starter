import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const client = new QueryClient();
const isDev = process.env.NODE_ENV === "development";

const ReactQueryProvider: React.FC = ({ children }) => (
  <QueryClientProvider client={client}>
    {children}
    {isDev && <ReactQueryDevtools />}
  </QueryClientProvider>
);

export default ReactQueryProvider;
