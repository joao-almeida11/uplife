import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/request-help/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/request-help/"!</div>;
}
