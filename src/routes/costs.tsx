import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/costs")({
  component: () => <Outlet />,
});
