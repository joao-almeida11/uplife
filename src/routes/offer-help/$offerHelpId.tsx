import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/offer-help/$offerHelpId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/offer-help/$offerHelpId"!</div>;
}
