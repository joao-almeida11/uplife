import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/u/$userId")({
  component: RouteComponent,
});

import { useParams } from "@tanstack/react-router";

function RouteComponent() {
  const { userId } = useParams({ from: "/u/$userId" });
  return <div>User ID: {userId}</div>;
}
