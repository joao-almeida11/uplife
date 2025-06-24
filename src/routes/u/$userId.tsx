import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/u/$userId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/u/$userId"!</div>;
}
