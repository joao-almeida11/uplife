import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/m/$messageId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/m/$messageId"!</div>;
}
