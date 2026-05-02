import { ShipmentTracker } from "@/components/shipment-tracker";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipment Tracker | Alex Chen",
  description: "Track your packages across multiple carriers with real-time status updates.",
};

export default function ShipmentTrackerPage() {
  return (
    <main className="min-h-screen py-8 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Shipment Tracker
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Track your packages in real-time across multiple carriers. Get live status updates, 
            estimated delivery times, and detailed tracking history.
          </p>
        </div>

        <ShipmentTracker />
      </div>
    </main>
  );
}
