import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/request-help/$requestHelpId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/request-help/$requestHelpId"!</div>;
}
