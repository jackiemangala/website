"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Reviews() {
  return (
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
  );
}

const testimonials = [
  {
    quote:
      "Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder ",
    name: "jackiee_m",
    title: "Owner",
  },
];

export default Reviews