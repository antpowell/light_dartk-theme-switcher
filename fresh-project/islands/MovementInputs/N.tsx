import { DirectionalCommandVariants } from "../../models/MovementsModels.ts";

export function N({ hold }: DirectionalCommandVariants) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="M341.462-270.155 480-353.539l139.538 84.384-37.308-157.153 122.692-106.461L543.538-547 480-696.153 417.462-548l-161.384 14.231L378.77-427.923l-37.308 157.768Zm-88.46 121.613 60.307-257.766L112.85-580.23l264.613-21.922L480-845.842l103.537 243.69L847.15-580.23 646.691-406.308l60.307 257.766L480-285.463 253.002-148.542ZM480-472.846Z" />
    </svg>
  );
}

const styleSheet = {};
