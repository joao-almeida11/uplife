import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/m/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/m/"!</div>;
}
