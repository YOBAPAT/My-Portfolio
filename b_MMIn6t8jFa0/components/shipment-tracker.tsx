"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import {
  Package,
  Truck,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Search,
  RefreshCw,
  Box,
} from "lucide-react";

type ShipmentStatus =
  | "pending"
  | "picked_up"
  | "in_transit"
  | "out_for_delivery"
  | "delivered"
  | "exception";

interface TrackingEvent {
  date: string;
  time: string;
  location: string;
  status: string;
  description: string;
}

interface ShipmentData {
  trackingNumber: string;
  carrier: string;
  status: ShipmentStatus;
  estimatedDelivery: string;
  origin: string;
  destination: string;
  weight: string;
  events: TrackingEvent[];
}

const carriers = [
  { value: "fedex", label: "FedEx" },
  { value: "ups", label: "UPS" },
  { value: "usps", label: "USPS" },
  { value: "dhl", label: "DHL" },
];

const mockShipments: Record<string, ShipmentData> = {
  "1234567890": {
    trackingNumber: "1234567890",
    carrier: "FedEx",
    status: "in_transit",
    estimatedDelivery: "May 5, 2026",
    origin: "Los Angeles, CA",
    destination: "New York, NY",
    weight: "2.5 lbs",
    events: [
      {
        date: "May 2, 2026",
        time: "8:45 AM",
        location: "Denver, CO",
        status: "In Transit",
        description: "Package arrived at FedEx facility",
      },
      {
        date: "May 1, 2026",
        time: "6:30 PM",
        location: "Phoenix, AZ",
        status: "In Transit",
        description: "Departed FedEx facility",
      },
      {
        date: "May 1, 2026",
        time: "2:15 PM",
        location: "Phoenix, AZ",
        status: "In Transit",
        description: "Arrived at FedEx facility",
      },
      {
        date: "Apr 30, 2026",
        time: "4:00 PM",
        location: "Los Angeles, CA",
        status: "Picked Up",
        description: "Package picked up from sender",
      },
      {
        date: "Apr 30, 2026",
        time: "10:30 AM",
        location: "Los Angeles, CA",
        status: "Label Created",
        description: "Shipping label created",
      },
    ],
  },
  "9876543210": {
    trackingNumber: "9876543210",
    carrier: "UPS",
    status: "out_for_delivery",
    estimatedDelivery: "May 2, 2026",
    origin: "Seattle, WA",
    destination: "Portland, OR",
    weight: "1.2 lbs",
    events: [
      {
        date: "May 2, 2026",
        time: "7:00 AM",
        location: "Portland, OR",
        status: "Out for Delivery",
        description: "Package is out for delivery",
      },
      {
        date: "May 2, 2026",
        time: "5:30 AM",
        location: "Portland, OR",
        status: "In Transit",
        description: "Package arrived at local facility",
      },
      {
        date: "May 1, 2026",
        time: "8:00 PM",
        location: "Seattle, WA",
        status: "In Transit",
        description: "Package departed origin facility",
      },
      {
        date: "May 1, 2026",
        time: "3:00 PM",
        location: "Seattle, WA",
        status: "Picked Up",
        description: "Package picked up from sender",
      },
    ],
  },
  DELIVERED123: {
    trackingNumber: "DELIVERED123",
    carrier: "USPS",
    status: "delivered",
    estimatedDelivery: "May 1, 2026",
    origin: "Chicago, IL",
    destination: "Detroit, MI",
    weight: "0.8 lbs",
    events: [
      {
        date: "May 1, 2026",
        time: "2:30 PM",
        location: "Detroit, MI",
        status: "Delivered",
        description: "Package delivered to front door",
      },
      {
        date: "May 1, 2026",
        time: "8:00 AM",
        location: "Detroit, MI",
        status: "Out for Delivery",
        description: "Package is out for delivery",
      },
      {
        date: "Apr 30, 2026",
        time: "6:00 PM",
        location: "Detroit, MI",
        status: "In Transit",
        description: "Package arrived at local post office",
      },
      {
        date: "Apr 30, 2026",
        time: "10:00 AM",
        location: "Chicago, IL",
        status: "Picked Up",
        description: "Package accepted at USPS facility",
      },
    ],
  },
};

const statusConfig: Record<
  ShipmentStatus,
  { label: string; color: string; icon: typeof Package }
> = {
  pending: { label: "Pending", color: "bg-muted text-muted-foreground", icon: Clock },
  picked_up: { label: "Picked Up", color: "bg-blue-500/20 text-blue-400", icon: Box },
  in_transit: { label: "In Transit", color: "bg-yellow-500/20 text-yellow-400", icon: Truck },
  out_for_delivery: {
    label: "Out for Delivery",
    color: "bg-primary/20 text-primary",
    icon: MapPin,
  },
  delivered: { label: "Delivered", color: "bg-green-500/20 text-green-400", icon: CheckCircle },
  exception: { label: "Exception", color: "bg-red-500/20 text-red-400", icon: AlertCircle },
};

export function ShipmentTracker() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [carrier, setCarrier] = useState("");
  const [shipmentData, setShipmentData] = useState<ShipmentData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTrack = async () => {
    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number");
      return;
    }

    setIsLoading(true);
    setError(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const data = mockShipments[trackingNumber.toUpperCase()];
    if (data) {
      setShipmentData(data);
      setError(null);
    } else {
      setShipmentData(null);
      setError(
        "Tracking number not found. Try: 1234567890, 9876543210, or DELIVERED123"
      );
    }

    setIsLoading(false);
  };

  const handleRefresh = () => {
    if (shipmentData) {
      handleTrack();
    }
  };

  const StatusIcon = shipmentData
    ? statusConfig[shipmentData.status].icon
    : Package;

  return (
    <div className="space-y-6">
      {/* Search Form */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Search className="text-primary" size={20} />
            Track a Package
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <FieldGroup className="flex-1">
              <Field>
                <FieldLabel>Tracking Number</FieldLabel>
                <Input
                  placeholder="Enter tracking number..."
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                  className="bg-input"
                />
              </Field>
            </FieldGroup>
            <FieldGroup className="md:w-40">
              <Field>
                <FieldLabel>Carrier (Optional)</FieldLabel>
                <Select value={carrier} onValueChange={setCarrier}>
                  <SelectTrigger className="bg-input">
                    <SelectValue placeholder="Auto-detect" />
                  </SelectTrigger>
                  <SelectContent>
                    {carriers.map((c) => (
                      <SelectItem key={c.value} value={c.value}>
                        {c.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </FieldGroup>
            <div className="flex items-end">
              <Button onClick={handleTrack} disabled={isLoading} className="w-full md:w-auto">
                {isLoading ? (
                  <RefreshCw className="animate-spin mr-2" size={16} />
                ) : (
                  <Search className="mr-2" size={16} />
                )}
                Track
              </Button>
            </div>
          </div>
          {error && (
            <p className="text-destructive text-sm mt-4 flex items-center gap-2">
              <AlertCircle size={16} />
              {error}
            </p>
          )}
          <p className="text-muted-foreground text-xs mt-4">
            Demo: Try tracking numbers <span className="font-mono text-primary">1234567890</span>,{" "}
            <span className="font-mono text-primary">9876543210</span>, or{" "}
            <span className="font-mono text-primary">DELIVERED123</span>
          </p>
        </CardContent>
      </Card>

      {/* Results */}
      {shipmentData && (
        <div className="space-y-6">
          {/* Status Card */}
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <StatusIcon className="text-primary" size={28} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">
                      {shipmentData.carrier} • {shipmentData.trackingNumber}
                    </p>
                    <Badge
                      className={`mt-1 ${statusConfig[shipmentData.status].color}`}
                    >
                      {statusConfig[shipmentData.status].label}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRefresh}
                  disabled={isLoading}
                >
                  <RefreshCw
                    className={`mr-2 ${isLoading ? "animate-spin" : ""}`}
                    size={14}
                  />
                  Refresh
                </Button>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  {["Label", "Picked Up", "In Transit", "Out for Delivery", "Delivered"].map(
                    (step, index) => {
                      const statusOrder: ShipmentStatus[] = [
                        "pending",
                        "picked_up",
                        "in_transit",
                        "out_for_delivery",
                        "delivered",
                      ];
                      const currentIndex = statusOrder.indexOf(shipmentData.status);
                      const isActive = index <= currentIndex;
                      const isCurrent = index === currentIndex;

                      return (
                        <div
                          key={step}
                          className={`flex flex-col items-center ${
                            isActive ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          <div
                            className={`w-3 h-3 rounded-full ${
                              isActive ? "bg-primary" : "bg-muted"
                            } ${isCurrent ? "ring-4 ring-primary/20" : ""}`}
                          />
                          <span className="text-xs mt-2 hidden md:block">{step}</span>
                        </div>
                      );
                    }
                  )}
                </div>
                <div className="relative h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-primary rounded-full transition-all duration-500"
                    style={{
                      width: `${
                        (["pending", "picked_up", "in_transit", "out_for_delivery", "delivered"].indexOf(
                          shipmentData.status
                        ) /
                          4) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>

              {/* Shipment Details */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-muted-foreground text-xs mb-1">Estimated Delivery</p>
                  <p className="text-foreground font-semibold">{shipmentData.estimatedDelivery}</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-muted-foreground text-xs mb-1">Origin</p>
                  <p className="text-foreground font-semibold">{shipmentData.origin}</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-muted-foreground text-xs mb-1">Destination</p>
                  <p className="text-foreground font-semibold">{shipmentData.destination}</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-muted-foreground text-xs mb-1">Weight</p>
                  <p className="text-foreground font-semibold">{shipmentData.weight}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tracking History */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg">Tracking History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-0">
                {shipmentData.events.map((event, index) => (
                  <div key={index} className="relative pl-8 pb-6 last:pb-0">
                    {/* Timeline line */}
                    {index !== shipmentData.events.length - 1 && (
                      <div className="absolute left-[11px] top-6 w-px h-full bg-border" />
                    )}
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center ${
                        index === 0 ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      {index === 0 ? (
                        <CheckCircle className="text-primary-foreground" size={14} />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                      )}
                    </div>
                    {/* Event content */}
                    <div className="ml-4">
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-1">
                        <p className="text-foreground font-medium">{event.status}</p>
                        <span className="text-muted-foreground text-sm">
                          {event.date} at {event.time}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{event.description}</p>
                      <p className="text-muted-foreground text-xs mt-1 flex items-center gap-1">
                        <MapPin size={12} />
                        {event.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
