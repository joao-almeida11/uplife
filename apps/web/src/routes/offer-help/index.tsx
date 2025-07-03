import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/offer-help/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/offer-help/"!</div>;
}
