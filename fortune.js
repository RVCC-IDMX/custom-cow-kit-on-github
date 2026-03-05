// fortune.js - Custom Cow with song lyrics fortunes
// Based on HAP's Fortunate Cow — now using JSON objects

import * as cowsay from "cowsay";
import { readFileSync } from "fs";
import chalk from "chalk";

const fortunes = JSON.parse(readFileSync("./fortunes.json", "utf8"));

// Map moods to cowsay eye styles
const moodEyes = {
  happy: "^^",
  sad: ";(",
  motivational: "**",
  reflective: "oo",
  energetic: "@@"
};

// Map moods to chalk colors
const moodColors = {
  happy: chalk.green,
  sad: chalk.blue,
  motivational: chalk.yellow,
  reflective: chalk.cyan,
  energetic: chalk.red
};

// Get command-line arguments (skip node and script path)
const args = process.argv.slice(2);

// Handle CLI commands
if (args.includes('--list')) {
  // List all unique categories
  const categories = [...new Set(fortunes.map(f => f.category))];
  console.log("Available categories:");
  categories.forEach(category => console.log(`  - ${category}`));
  process.exit(0);
}

if (args.includes('--count')) {
  // Count fortunes by category
  const counts = {};
  fortunes.forEach(f => {
    counts[f.category] = (counts[f.category] || 0) + 1;
  });
  console.log("Fortune counts by category:");
  Object.entries(counts).forEach(([category, count]) => {
    console.log(`  ${category}: ${count}`);
  });
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
  console.log(`  Total: ${total}`);
  process.exit(0);
}

// Check if first arg is a category for filtering
let filteredFortunes = fortunes;
const categoryFilter = args[0];
if (categoryFilter && !categoryFilter.startsWith('--')) {
  filteredFortunes = fortunes.filter(f => f.category === categoryFilter);
  if (filteredFortunes.length === 0) {
    console.log(`No fortunes found for category "${categoryFilter}".`);
    const availableCategories = [...new Set(fortunes.map(f => f.category))];
    console.log("Available categories:", availableCategories.join(", "));
    process.exit(1);
  }
}

// Get the current hour (0-23)
// HAP learned that getHours() uses 24-hour time, not 12-hour!
const hour = new Date().getHours();

// Choose greeting based on time of day
let greeting;
if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

// Pick a random fortune from filtered list
const randomIndex = Math.floor(Math.random() * filteredFortunes.length);
const todaysFortune = filteredFortunes[randomIndex];

// Combine greeting and fortune
const fullMessage = `${greeting}! ${todaysFortune.text}`;

// Get eyes based on mood, default to "oo" if mood not found
const eyes = moodEyes[todaysFortune.mood] || "oo";

// Get color function based on mood, default to white
const color = moodColors[todaysFortune.mood] || chalk.white;

// Display Tux the penguin (HAP likes penguins!)
// Notice: cowsay.say() takes an OBJECT as its parameter
const output = cowsay.say({ text: color(fullMessage), f: "bunny", e: eyes });
console.log(output);
