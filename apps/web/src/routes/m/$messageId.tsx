import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/m/$messageId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { messageId } = useParams({ from: "/m/$messageId" });
  return <div>Message ID: {messageId}</div>;
}
