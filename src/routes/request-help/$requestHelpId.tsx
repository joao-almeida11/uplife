import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/request-help/$requestHelpId")({
  component: RequestHelpDetailComponent,
});

function RequestHelpDetailComponent() {
  const { requestHelpId } = useParams({ from: "/request-help/$requestHelpId" });

  return (
    <div>
      <h1>Request Help Details</h1>
      <p>Viewing request: {requestHelpId}</p>
    </div>
  );
}
