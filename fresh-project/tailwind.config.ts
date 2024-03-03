import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  safelist: [
    "bg-gray-500",
    "bg-red-600",
    "bg-blue-500",
    "bg-yellow-400",
    "bg-green-500",
    "bg-blue-300",
    "bg-red-800",
    "bg-purple-600",
    "bg-yellow-600",
    "bg-purple-300",
    "bg-pink-500",
    "bg-lime-600",
    "bg-yellow-700",
    "bg-purple-700",
    "bg-indigo-800",
    "bg-gray-800",
    "bg-gray-400",
    "bg-pink-400",
  ],
} satisfies Config;
