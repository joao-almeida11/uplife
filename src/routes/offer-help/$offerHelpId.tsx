import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/offer-help/$offerHelpId")({
  component: OfferHelpDetailComponent,
});

function OfferHelpDetailComponent() {
  const { offerHelpId } = useParams({ from: "/offer-help/$offerHelpId" });

  return (
    <div>
      <h1>Offer Help Details</h1>
      <p>Viewing helper: {offerHelpId}</p>
    </div>
  );
}
