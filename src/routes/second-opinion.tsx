import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/second-opinion")({
  component: () => <Outlet />,
});
