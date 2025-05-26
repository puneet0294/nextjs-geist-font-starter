"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface TourPackageCardProps {
  name: string;
  description: string;
  price: number;
  interestRate: number;
  location: string;
}

export default function TourPackageCard({
  name,
  description,
  price,
  interestRate,
  location,
}: TourPackageCardProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-500 ease-in-out cursor-pointer">
      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
        <p className="text-sm text-gray-500 mt-2 italic">Location: {location}</p>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-semibold">Price: ₹{price.toLocaleString()}</p>
        <p className="text-sm text-green-400 font-medium mt-1">
          Low Interest Rate: {interestRate}%
        </p>
      </CardContent>
      <CardFooter />
    </Card>
  );
}
