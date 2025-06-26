import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/request-help/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Request Help</h1>
      <p>Submit a request for assistance from the community.</p>
      {/* TODO: Add request help form */}
    </div>
  );
}
