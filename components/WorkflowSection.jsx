"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Layers,
  Code2,
  Rocket,
  CheckCircle2,
  Clock,
  Sparkles,
  FileSearch,
  Palette,
  Terminal,
  Gauge,
} from "lucide-react";
import { getWorkflow } from "@/lib/dataService";

/* ─── Inline SVG Illustrations for Each Workflow Step ─── */

function WireframeIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Grid */}
      <rect x="0" y="0" width="400" height="300" rx="4" fill="#F4F4F0" />
      <line x1="0" y1="60" x2="400" y2="60" stroke="#E5E7EB" strokeDasharray="4 4" />
      <line x1="0" y1="120" x2="400" y2="120" stroke="#E5E7EB" strokeDasharray="4 4" />
      <line x1="0" y1="180" x2="400" y2="180" stroke="#E5E7EB" strokeDasharray="4 4" />
      <line x1="0" y1="240" x2="400" y2="240" stroke="#E5E7EB" strokeDasharray="4 4" />
      <line x1="100" y1="0" x2="100" y2="300" stroke="#E5E7EB" strokeDasharray="4 4" />
      <line x1="200" y1="0" x2="200" y2="300" stroke="#E5E7EB" strokeDasharray="4 4" />
      <line x1="300" y1="0" x2="300" y2="300" stroke="#E5E7EB" strokeDasharray="4 4" />

      {/* Browser Window Frame */}
      <rect x="30" y="20" width="340" height="260" rx="8" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
      <rect x="30" y="20" width="340" height="28" rx="8" fill="#111111" />
      <rect x="30" y="40" width="340" height="8" fill="#111111" />
      <circle cx="48" cy="34" r="4" fill="#E63946" />
      <circle cx="62" cy="34" r="4" fill="#F59E0B" />
      <circle cx="76" cy="34" r="4" fill="#10B981" />
      <rect x="130" y="30" width="140" height="8" rx="4" fill="#333333" />

      {/* Top Navigation Bar */}
      <rect x="42" y="58" width="316" height="18" fill="#F4F4F0" stroke="#D1D5DB" strokeWidth="1" />
      <rect x="48" y="62" width="40" height="10" rx="2" fill="#E63946" />
      <rect x="200" y="62" width="30" height="10" rx="2" fill="#D1D5DB" />
      <rect x="236" y="62" width="30" height="10" rx="2" fill="#D1D5DB" />
      <rect x="272" y="62" width="30" height="10" rx="2" fill="#D1D5DB" />
      <rect x="312" y="62" width="40" height="10" rx="2" fill="#111111" />

      {/* Hero Section Wireframe */}
      <rect x="42" y="86" width="190" height="80" fill="#F4F4F0" stroke="#D1D5DB" strokeWidth="1" />
      <rect x="54" y="96" width="100" height="8" rx="2" fill="#111111" />
      <rect x="54" y="110" width="130" height="6" rx="2" fill="#D1D5DB" />
      <rect x="54" y="120" width="110" height="6" rx="2" fill="#D1D5DB" />
      <rect x="54" y="136" width="70" height="18" rx="4" fill="#E63946" />
      <text x="68" y="149" fontSize="8" fill="#FFFFFF" fontWeight="700" fontFamily="monospace">CTA</text>

      {/* Hero Image Placeholder */}
      <rect x="242" y="86" width="116" height="80" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1" />
      <line x1="242" y1="86" x2="358" y2="166" stroke="#D1D5DB" strokeWidth="1" />
      <line x1="358" y1="86" x2="242" y2="166" stroke="#D1D5DB" strokeWidth="1" />

      {/* Content Cards Row */}
      <rect x="42" y="176" width="100" height="60" rx="4" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" />
      <rect x="52" y="186" width="40" height="6" rx="2" fill="#E63946" />
      <rect x="52" y="198" width="80" height="4" rx="2" fill="#D1D5DB" />
      <rect x="52" y="206" width="70" height="4" rx="2" fill="#D1D5DB" />
      <rect x="52" y="214" width="60" height="4" rx="2" fill="#D1D5DB" />

      <rect x="150" y="176" width="100" height="60" rx="4" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" />
      <rect x="160" y="186" width="40" height="6" rx="2" fill="#F59E0B" />
      <rect x="160" y="198" width="80" height="4" rx="2" fill="#D1D5DB" />
      <rect x="160" y="206" width="70" height="4" rx="2" fill="#D1D5DB" />
      <rect x="160" y="214" width="60" height="4" rx="2" fill="#D1D5DB" />

      <rect x="258" y="176" width="100" height="60" rx="4" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" />
      <rect x="268" y="186" width="40" height="6" rx="2" fill="#2563EB" />
      <rect x="268" y="198" width="80" height="4" rx="2" fill="#D1D5DB" />
      <rect x="268" y="206" width="70" height="4" rx="2" fill="#D1D5DB" />
      <rect x="268" y="214" width="60" height="4" rx="2" fill="#D1D5DB" />

      {/* Footer Bar */}
      <rect x="42" y="246" width="316" height="22" fill="#111111" />
      <rect x="54" y="252" width="60" height="6" rx="2" fill="#333333" />
      <rect x="280" y="252" width="60" height="6" rx="2" fill="#333333" />

      {/* Magnifying Glass Overlay */}
      <circle cx="330" cy="110" r="28" fill="none" stroke="#E63946" strokeWidth="3" opacity="0.8" />
      <line x1="350" y1="130" x2="368" y2="148" stroke="#E63946" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

      {/* Annotation Lines */}
      <line x1="22" y1="96" x2="38" y2="96" stroke="#E63946" strokeWidth="1.5" />
      <circle cx="18" cy="96" r="3" fill="#E63946" />
      <line x1="22" y1="186" x2="38" y2="186" stroke="#E63946" strokeWidth="1.5" />
      <circle cx="18" cy="186" r="3" fill="#E63946" />
    </svg>
  );
}

function FigmaUIIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect x="0" y="0" width="400" height="300" rx="4" fill="#F4F4F0" />

      {/* Figma-style Canvas */}
      <rect x="20" y="15" width="360" height="270" rx="6" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />

      {/* Left Sidebar - Layers Panel */}
      <rect x="20" y="15" width="80" height="270" rx="6" fill="#111111" />
      <rect x="100" y="15" width="1" height="270" fill="#111111" />
      <rect x="28" y="24" width="64" height="6" rx="2" fill="#E63946" />
      <rect x="28" y="38" width="50" height="4" rx="1" fill="#444" />
      <rect x="28" y="48" width="55" height="4" rx="1" fill="#555" />
      <rect x="28" y="58" width="45" height="4" rx="1" fill="#444" />
      <rect x="28" y="68" width="60" height="4" rx="1" fill="#555" />
      <rect x="28" y="78" width="42" height="4" rx="1" fill="#E63946" opacity="0.7" />
      <rect x="28" y="88" width="52" height="4" rx="1" fill="#444" />
      <rect x="28" y="98" width="48" height="4" rx="1" fill="#555" />
      <rect x="28" y="108" width="56" height="4" rx="1" fill="#444" />

      {/* Color Swatches */}
      <rect x="28" y="130" width="64" height="4" rx="1" fill="#666" />
      <rect x="28" y="142" width="12" height="12" rx="2" fill="#E63946" />
      <rect x="44" y="142" width="12" height="12" rx="2" fill="#111111" />
      <rect x="60" y="142" width="12" height="12" rx="2" fill="#F4F4F0" stroke="#555" strokeWidth="0.5" />
      <rect x="76" y="142" width="12" height="12" rx="2" fill="#2563EB" />
      <rect x="28" y="160" width="12" height="12" rx="2" fill="#F59E0B" />
      <rect x="44" y="160" width="12" height="12" rx="2" fill="#10B981" />
      <rect x="60" y="160" width="12" height="12" rx="2" fill="#FFFFFF" stroke="#555" strokeWidth="0.5" />
      <rect x="76" y="160" width="12" height="12" rx="2" fill="#6366F1" />

      {/* Typography samples */}
      <rect x="28" y="186" width="64" height="4" rx="1" fill="#666" />
      <rect x="28" y="198" width="60" height="8" rx="1" fill="#888" />
      <rect x="28" y="212" width="55" height="6" rx="1" fill="#777" />
      <rect x="28" y="224" width="50" height="4" rx="1" fill="#666" />

      {/* Main Canvas - UI Component Design */}
      {/* Card Component */}
      <rect x="120" y="35" width="160" height="120" rx="6" fill="#FFFFFF" stroke="#E63946" strokeWidth="2" strokeDasharray="6 3" />
      <rect x="120" y="35" width="160" height="120" rx="6" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" />

      {/* Card Image Area */}
      <rect x="128" y="43" width="144" height="50" rx="3" fill="#E5E7EB" />
      <rect x="170" y="56" width="60" height="8" rx="2" fill="#D1D5DB" />
      <rect x="185" y="68" width="30" height="6" rx="2" fill="#D1D5DB" />

      {/* Card Content */}
      <rect x="128" y="101" width="90" height="6" rx="2" fill="#111111" />
      <rect x="128" y="113" width="120" height="4" rx="1" fill="#D1D5DB" />
      <rect x="128" y="121" width="100" height="4" rx="1" fill="#D1D5DB" />
      <rect x="128" y="133" width="60" height="14" rx="3" fill="#E63946" />
      <text x="142" y="143" fontSize="7" fill="#FFFFFF" fontWeight="700" fontFamily="monospace">SHOP NOW</text>

      {/* Selection Handles */}
      <rect x="116" y="31" width="8" height="8" rx="1" fill="#E63946" />
      <rect x="276" y="31" width="8" height="8" rx="1" fill="#E63946" />
      <rect x="116" y="151" width="8" height="8" rx="1" fill="#E63946" />
      <rect x="276" y="151" width="8" height="8" rx="1" fill="#E63946" />

      {/* Spacing Guides */}
      <line x1="120" y1="28" x2="280" y2="28" stroke="#E63946" strokeWidth="0.75" strokeDasharray="3 2" />
      <text x="188" y="26" fontSize="7" fill="#E63946" fontFamily="monospace">160px</text>
      <line x1="284" y1="35" x2="284" y2="155" stroke="#E63946" strokeWidth="0.75" strokeDasharray="3 2" />
      <text x="288" y="98" fontSize="7" fill="#E63946" fontFamily="monospace" transform="rotate(90, 288, 98)">120px</text>

      {/* Button Component */}
      <rect x="120" y="176" width="100" height="32" rx="4" fill="#111111" stroke="#111111" strokeWidth="1.5" />
      <text x="140" y="196" fontSize="9" fill="#FFFFFF" fontWeight="700" fontFamily="monospace">PRIMARY</text>
      <rect x="228" y="176" width="100" height="32" rx="4" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
      <text x="244" y="196" fontSize="9" fill="#111111" fontWeight="700" fontFamily="monospace">SECONDARY</text>

      {/* Input Field Component */}
      <rect x="120" y="218" width="208" height="28" rx="4" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
      <rect x="128" y="227" width="80" height="6" rx="2" fill="#D1D5DB" />
      <text x="120" y="215" fontSize="7" fill="#111111" fontWeight="700" fontFamily="monospace">EMAIL ADDRESS</text>

      {/* Right Properties Panel */}
      <rect x="340" y="35" width="32" height="240" rx="4" fill="#F4F4F0" stroke="#D1D5DB" strokeWidth="1" />
      <rect x="346" y="45" width="20" height="20" rx="3" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" />
      <rect x="353" y="52" width="6" height="6" fill="#E63946" />
      <rect x="346" y="75" width="20" height="20" rx="3" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" />
      <rect x="349" y="82" width="14" height="2" fill="#111111" />
      <rect x="355" y="79" width="2" height="8" fill="#111111" />
      <rect x="346" y="105" width="20" height="20" rx="3" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" />
      <circle cx="356" cy="115" r="5" fill="none" stroke="#111111" strokeWidth="1.5" />
      <rect x="346" y="135" width="20" height="20" rx="3" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" />
      <rect x="350" y="141" width="12" height="8" rx="1" fill="none" stroke="#111111" strokeWidth="1.5" />

      {/* Figma cursor */}
      <path d="M300 130 L300 150 L308 144 L316 156 L320 154 L312 142 L322 140 Z" fill="#111111" stroke="#FFFFFF" strokeWidth="1" />
    </svg>
  );
}

function CodeBuildIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect x="0" y="0" width="400" height="300" rx="4" fill="#F4F4F0" />

      {/* Code Editor Window */}
      <rect x="20" y="15" width="360" height="270" rx="8" fill="#1E1E2E" stroke="#111111" strokeWidth="2" />

      {/* Title Bar */}
      <rect x="20" y="15" width="360" height="30" rx="8" fill="#111111" />
      <rect x="20" y="37" width="360" height="8" fill="#111111" />
      <circle cx="38" cy="30" r="5" fill="#E63946" />
      <circle cx="55" cy="30" r="5" fill="#F59E0B" />
      <circle cx="72" cy="30" r="5" fill="#10B981" />
      <rect x="140" y="26" width="120" height="8" rx="3" fill="#333" />
      <text x="158" y="33" fontSize="6" fill="#888" fontFamily="monospace">WorkflowSection.tsx</text>

      {/* Tab Bar */}
      <rect x="20" y="45" width="360" height="18" fill="#181825" />
      <rect x="20" y="45" width="100" height="18" fill="#1E1E2E" />
      <rect x="20" y="62" width="100" height="1" fill="#E63946" />
      <text x="34" y="57" fontSize="7" fill="#CDD6F4" fontFamily="monospace">index.tsx</text>
      <text x="134" y="57" fontSize="7" fill="#6C7086" fontFamily="monospace">styles.css</text>
      <text x="224" y="57" fontSize="7" fill="#6C7086" fontFamily="monospace">layout.tsx</text>

      {/* Line Numbers Gutter */}
      <rect x="20" y="63" width="30" height="222" fill="#181825" />

      {/* Line Numbers */}
      <text x="28" y="80" fontSize="7" fill="#6C7086" fontFamily="monospace">1</text>
      <text x="28" y="92" fontSize="7" fill="#6C7086" fontFamily="monospace">2</text>
      <text x="28" y="104" fontSize="7" fill="#6C7086" fontFamily="monospace">3</text>
      <text x="28" y="116" fontSize="7" fill="#6C7086" fontFamily="monospace">4</text>
      <text x="28" y="128" fontSize="7" fill="#6C7086" fontFamily="monospace">5</text>
      <text x="28" y="140" fontSize="7" fill="#6C7086" fontFamily="monospace">6</text>
      <text x="28" y="152" fontSize="7" fill="#6C7086" fontFamily="monospace">7</text>
      <text x="28" y="164" fontSize="7" fill="#6C7086" fontFamily="monospace">8</text>
      <text x="28" y="176" fontSize="7" fill="#6C7086" fontFamily="monospace">9</text>
      <text x="24" y="188" fontSize="7" fill="#6C7086" fontFamily="monospace">10</text>
      <text x="24" y="200" fontSize="7" fill="#6C7086" fontFamily="monospace">11</text>
      <text x="24" y="212" fontSize="7" fill="#6C7086" fontFamily="monospace">12</text>
      <text x="24" y="224" fontSize="7" fill="#6C7086" fontFamily="monospace">13</text>
      <text x="24" y="236" fontSize="7" fill="#6C7086" fontFamily="monospace">14</text>
      <text x="24" y="248" fontSize="7" fill="#6C7086" fontFamily="monospace">15</text>
      <text x="24" y="260" fontSize="7" fill="#6C7086" fontFamily="monospace">16</text>
      <text x="24" y="272" fontSize="7" fill="#6C7086" fontFamily="monospace">17</text>

      {/* Active Line Highlight */}
      <rect x="50" y="119" width="330" height="14" fill="rgba(230,57,70,0.08)" />

      {/* Code Lines - Shopify Liquid / React style */}
      <text x="58" y="80" fontSize="8" fill="#CBA6F7" fontFamily="monospace">import</text>
      <text x="97" y="80" fontSize="8" fill="#F38BA8" fontFamily="monospace">{'{'}</text>
      <text x="106" y="80" fontSize="8" fill="#CDD6F4" fontFamily="monospace">useState</text>
      <text x="154" y="80" fontSize="8" fill="#F38BA8" fontFamily="monospace">{'}'}</text>
      <text x="163" y="80" fontSize="8" fill="#CBA6F7" fontFamily="monospace">from</text>
      <text x="193" y="80" fontSize="8" fill="#A6E3A1" fontFamily="monospace">&quot;react&quot;</text>

      <text x="58" y="104" fontSize="8" fill="#CBA6F7" fontFamily="monospace">export</text>
      <text x="101" y="104" fontSize="8" fill="#CBA6F7" fontFamily="monospace">default</text>
      <text x="149" y="104" fontSize="8" fill="#89B4FA" fontFamily="monospace">function</text>
      <text x="197" y="104" fontSize="8" fill="#F9E2AF" fontFamily="monospace">ProductCard</text>
      <text x="273" y="104" fontSize="8" fill="#CDD6F4" fontFamily="monospace">() {'{'}</text>

      <text x="66" y="116" fontSize="8" fill="#CBA6F7" fontFamily="monospace">const</text>
      <text x="100" y="116" fontSize="8" fill="#CDD6F4" fontFamily="monospace">[cart, setCart]</text>
      <text x="186" y="116" fontSize="8" fill="#89DCEB" fontFamily="monospace">=</text>
      <text x="196" y="116" fontSize="8" fill="#F9E2AF" fontFamily="monospace">useState</text>
      <text x="240" y="116" fontSize="8" fill="#CDD6F4" fontFamily="monospace">([])</text>

      <text x="66" y="128" fontSize="8" fill="#CBA6F7" fontFamily="monospace">return</text>
      <text x="100" y="128" fontSize="8" fill="#CDD6F4" fontFamily="monospace">(</text>

      <text x="74" y="140" fontSize="8" fill="#89B4FA" fontFamily="monospace">{'<div'}</text>
      <text x="104" y="140" fontSize="8" fill="#F9E2AF" fontFamily="monospace">className</text>
      <text x="153" y="140" fontSize="8" fill="#89DCEB" fontFamily="monospace">=</text>
      <text x="160" y="140" fontSize="8" fill="#A6E3A1" fontFamily="monospace">&quot;product-grid&quot;</text>
      <text x="266" y="140" fontSize="8" fill="#89B4FA" fontFamily="monospace">{'>'}</text>

      <text x="82" y="152" fontSize="8" fill="#89B4FA" fontFamily="monospace">{'<section'}</text>
      <text x="139" y="152" fontSize="8" fill="#F9E2AF" fontFamily="monospace">id</text>
      <text x="149" y="152" fontSize="8" fill="#89DCEB" fontFamily="monospace">=</text>
      <text x="156" y="152" fontSize="8" fill="#A6E3A1" fontFamily="monospace">&quot;shopify-store&quot;</text>
      <text x="264" y="152" fontSize="8" fill="#89B4FA" fontFamily="monospace">{'>'}</text>

      <text x="90" y="164" fontSize="8" fill="#89B4FA" fontFamily="monospace">{'<h2>'}</text>
      <text x="116" y="164" fontSize="8" fill="#CDD6F4" fontFamily="monospace">{'{'}product.title{'}'}</text>
      <text x="206" y="164" fontSize="8" fill="#89B4FA" fontFamily="monospace">{'</h2>'}</text>

      <text x="90" y="176" fontSize="8" fill="#89B4FA" fontFamily="monospace">{'<span'}</text>
      <text x="125" y="176" fontSize="8" fill="#F9E2AF" fontFamily="monospace">className</text>
      <text x="174" y="176" fontSize="8" fill="#89DCEB" fontFamily="monospace">=</text>
      <text x="181" y="176" fontSize="8" fill="#A6E3A1" fontFamily="monospace">&quot;price&quot;</text>
      <text x="224" y="176" fontSize="8" fill="#89B4FA" fontFamily="monospace">{'>'}</text>

      <text x="98" y="188" fontSize="8" fill="#CDD6F4" fontFamily="monospace">{'{'}formatPrice(variant){'}'}</text>

      <text x="90" y="200" fontSize="8" fill="#89B4FA" fontFamily="monospace">{'</span>'}</text>

      <text x="90" y="212" fontSize="8" fill="#89B4FA" fontFamily="monospace">{'<button'}</text>
      <text x="138" y="212" fontSize="8" fill="#F9E2AF" fontFamily="monospace">onClick</text>
      <text x="180" y="212" fontSize="8" fill="#89DCEB" fontFamily="monospace">=</text>
      <text x="187" y="212" fontSize="8" fill="#F38BA8" fontFamily="monospace">{'{'}addToCart{'}'}</text>
      <text x="238" y="212" fontSize="8" fill="#89B4FA" fontFamily="monospace">{'>'}</text>

      <text x="98" y="224" fontSize="8" fill="#CDD6F4" fontFamily="monospace">Add to Cart</text>

      <text x="90" y="236" fontSize="8" fill="#89B4FA" fontFamily="monospace">{'</button>'}</text>
      <text x="82" y="248" fontSize="8" fill="#89B4FA" fontFamily="monospace">{'</section>'}</text>
      <text x="74" y="260" fontSize="8" fill="#89B4FA" fontFamily="monospace">{'</div>'}</text>
      <text x="66" y="272" fontSize="8" fill="#CDD6F4" fontFamily="monospace">)</text>

      {/* Terminal Overlay at Bottom-Right */}
      <rect x="240" y="200" width="130" height="78" rx="6" fill="#111111" stroke="#E63946" strokeWidth="1.5" opacity="0.95" />
      <rect x="248" y="208" width="6" height="6" rx="1" fill="#E63946" />
      <rect x="258" y="208" width="6" height="6" rx="1" fill="#F59E0B" />
      <rect x="268" y="208" width="6" height="6" rx="1" fill="#10B981" />
      <text x="248" y="228" fontSize="6.5" fill="#10B981" fontFamily="monospace">$ npm run build</text>
      <text x="248" y="240" fontSize="6.5" fill="#CDD6F4" fontFamily="monospace">Compiling...</text>
      <text x="248" y="252" fontSize="6.5" fill="#10B981" fontFamily="monospace">✓ Built in 1.2s</text>
      <text x="248" y="264" fontSize="6.5" fill="#A6E3A1" fontFamily="monospace">Ready on :3000</text>
    </svg>
  );
}

function SpeedLaunchIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect x="0" y="0" width="400" height="300" rx="4" fill="#F4F4F0" />

      {/* Speed Dashboard Panel */}
      <rect x="30" y="20" width="340" height="260" rx="8" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />

      {/* Dashboard Header */}
      <rect x="30" y="20" width="340" height="32" rx="8" fill="#111111" />
      <rect x="30" y="44" width="340" height="8" fill="#111111" />
      <text x="48" y="40" fontSize="9" fill="#FFFFFF" fontWeight="800" fontFamily="monospace">PERFORMANCE DASHBOARD</text>
      <circle cx="348" cy="36" r="8" fill="#10B981" />
      <text x="344" y="39" fontSize="7" fill="#FFFFFF" fontWeight="800" fontFamily="monospace">✓</text>

      {/* Score Gauge - Center */}
      <circle cx="200" cy="120" r="52" fill="none" stroke="#E5E7EB" strokeWidth="8" />
      <circle cx="200" cy="120" r="52" fill="none" stroke="#10B981" strokeWidth="8" strokeDasharray="290 326.7" strokeLinecap="round" transform="rotate(-90 200 120)" />
      <circle cx="200" cy="120" r="40" fill="#FFFFFF" />
      <text x="182" y="126" fontSize="22" fill="#10B981" fontWeight="800" fontFamily="monospace">98</text>
      <text x="185" y="138" fontSize="7" fill="#6B7280" fontWeight="700" fontFamily="monospace">SCORE</text>

      {/* Left Mini Gauges */}
      <circle cx="90" cy="100" r="22" fill="none" stroke="#E5E7EB" strokeWidth="4" />
      <circle cx="90" cy="100" r="22" fill="none" stroke="#10B981" strokeWidth="4" strokeDasharray="124 138.2" strokeLinecap="round" transform="rotate(-90 90 100)" />
      <text x="82" y="104" fontSize="12" fill="#10B981" fontWeight="800" fontFamily="monospace">96</text>
      <text x="66" y="132" fontSize="6.5" fill="#111111" fontWeight="700" fontFamily="monospace">PERFORMANCE</text>

      <circle cx="90" cy="170" r="22" fill="none" stroke="#E5E7EB" strokeWidth="4" />
      <circle cx="90" cy="170" r="22" fill="none" stroke="#2563EB" strokeWidth="4" strokeDasharray="130 138.2" strokeLinecap="round" transform="rotate(-90 90 170)" />
      <text x="82" y="174" fontSize="12" fill="#2563EB" fontWeight="800" fontFamily="monospace">99</text>
      <text x="62" y="200" fontSize="6.5" fill="#111111" fontWeight="700" fontFamily="monospace">ACCESSIBILITY</text>

      {/* Right Mini Gauges */}
      <circle cx="310" cy="100" r="22" fill="none" stroke="#E5E7EB" strokeWidth="4" />
      <circle cx="310" cy="100" r="22" fill="none" stroke="#E63946" strokeWidth="4" strokeDasharray="131 138.2" strokeLinecap="round" transform="rotate(-90 310 100)" />
      <text x="299" y="104" fontSize="12" fill="#E63946" fontWeight="800" fontFamily="monospace">100</text>
      <text x="285" y="132" fontSize="6.5" fill="#111111" fontWeight="700" fontFamily="monospace">BEST PRACTICES</text>

      <circle cx="310" cy="170" r="22" fill="none" stroke="#E5E7EB" strokeWidth="4" />
      <circle cx="310" cy="170" r="22" fill="none" stroke="#F59E0B" strokeWidth="4" strokeDasharray="126 138.2" strokeLinecap="round" transform="rotate(-90 310 170)" />
      <text x="302" y="174" fontSize="12" fill="#F59E0B" fontWeight="800" fontFamily="monospace">95</text>
      <text x="300" y="200" fontSize="6.5" fill="#111111" fontWeight="700" fontFamily="monospace">SEO</text>

      {/* Core Web Vitals Cards */}
      <rect x="46" y="216" width="90" height="48" rx="4" fill="#F4F4F0" stroke="#D1D5DB" strokeWidth="1" />
      <text x="56" y="232" fontSize="6" fill="#6B7280" fontWeight="700" fontFamily="monospace">LCP</text>
      <text x="56" y="246" fontSize="14" fill="#10B981" fontWeight="800" fontFamily="monospace">1.2s</text>
      <circle cx="120" cy="240" r="6" fill="#10B981" opacity="0.15" />
      <text x="116" y="243" fontSize="7" fill="#10B981" fontWeight="800">✓</text>

      <rect x="146" y="216" width="90" height="48" rx="4" fill="#F4F4F0" stroke="#D1D5DB" strokeWidth="1" />
      <text x="156" y="232" fontSize="6" fill="#6B7280" fontWeight="700" fontFamily="monospace">FID</text>
      <text x="156" y="246" fontSize="14" fill="#10B981" fontWeight="800" fontFamily="monospace">8ms</text>
      <circle cx="220" cy="240" r="6" fill="#10B981" opacity="0.15" />
      <text x="216" y="243" fontSize="7" fill="#10B981" fontWeight="800">✓</text>

      <rect x="246" y="216" width="110" height="48" rx="4" fill="#F4F4F0" stroke="#D1D5DB" strokeWidth="1" />
      <text x="256" y="232" fontSize="6" fill="#6B7280" fontWeight="700" fontFamily="monospace">CLS</text>
      <text x="256" y="246" fontSize="14" fill="#10B981" fontWeight="800" fontFamily="monospace">0.01</text>
      <circle cx="340" cy="240" r="6" fill="#10B981" opacity="0.15" />
      <text x="336" y="243" fontSize="7" fill="#10B981" fontWeight="800">✓</text>

      {/* Rocket Icon */}
      <g transform="translate(178, 155)">
        <path d="M22 2 C22 2 14 8 12 16 L8 16 L4 22 L10 22 L10 26 L16 22 L16 18 C24 16 30 8 30 8 Z" fill="#E63946" stroke="#111111" strokeWidth="1.5" />
        <circle cx="20" cy="12" r="3" fill="#FFFFFF" />
        <path d="M6 24 L2 28" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 26 L8 30" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 22 L0 24" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

const stepMeta = [
  { icon: Search, footerIcon: FileSearch, illustration: WireframeIllustration, label: "WIREFRAME BLUEPRINT", footerText: "Research & discovery phase visualization" },
  { icon: Layers, footerIcon: Palette, illustration: FigmaUIIllustration, label: "UI DESIGN SYSTEM", footerText: "High-fidelity Figma prototype preview" },
  { icon: Code2, footerIcon: Terminal, illustration: CodeBuildIllustration, label: "CODE ARCHITECTURE", footerText: "Custom development build pipeline" },
  { icon: Rocket, footerIcon: Gauge, illustration: SpeedLaunchIllustration, label: "LAUNCH METRICS", footerText: "Core Web Vitals & performance audit" },
];

export default function WorkflowSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [workflowPipeline, setWorkflowPipeline] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadLiveWorkflow() {
      try {
        const live = await getWorkflow();
        if (live && live.length > 0) {
          const merged = live.map((step, idx) => {
            const meta = stepMeta[idx] || stepMeta[0];
            return {
              ...step,
              icon: meta.icon,
              footerIcon: meta.footerIcon,
              illustration: meta.illustration,
              illustrationLabel: meta.label,
              illustrationFooterText: meta.footerText,
            };
          });
          setWorkflowPipeline(merged);
        }
      } catch (err) {
        console.warn("Could not load live workflow from Supabase:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadLiveWorkflow();
  }, []);

  const currentStep = workflowPipeline[activeTab] || workflowPipeline[0] || {};
  const CurrentIllustration = currentStep.illustration;
  const FooterStepIcon = currentStep.footerIcon;

  return (
    <section id="workflow" className="workflow-section">
      <div className="container-custom">

        {/* Section Header */}
        <div className="section-header">
          <div className="swiss-badge-red mb-2">
            SECTION 04 — PROJECT WORKFLOW
          </div>
          <h2>
            DEVELOPMENT WORKFLOW & PROCESS
          </h2>
          <p className="workflow-subtitle">
            A battle-tested 4-step pipeline ensuring zero design compromises, sub-second page speed, and seamless handover.
          </p>
        </div>

        {/* 4 Tab Buttons / Skeleton */}
        <div className="workflow-tabs-row">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="workflow-tab-btn" style={{ minHeight: "80px", cursor: "default" }}>
                <div className="skeleton-box" style={{ width: "4rem", height: "1rem", marginBottom: "0.5rem" }} />
                <div className="skeleton-box" style={{ width: "80%", height: "1.25rem" }} />
              </div>
            ))
          ) : (
            workflowPipeline.map((step, idx) => {
              const isActive = activeTab === idx;
              const TabIcon = step.icon;

              return (
                <button
                  key={step.stepId || idx}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`workflow-tab-btn ${isActive ? "active" : ""}`}
                >
                  <div className="workflow-tab-header">
                    <span className={`workflow-tab-label ${isActive ? "active" : ""}`}>
                      {step.stepLabel}
                    </span>
                    {TabIcon && (
                      <TabIcon
                        className={`workflow-tab-icon ${isActive ? "active" : ""}`}
                      />
                    )}
                  </div>

                  <div className="workflow-tab-title">
                    {step.tabTitle}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Active Step Content Panel / Skeleton */}
        <div className="workflow-content-panel">
          {isLoading ? (
            <div className="workflow-content-grid">
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div className="skeleton-box" style={{ width: "60%", height: "2rem" }} />
                <div className="skeleton-box" style={{ width: "100%", height: "4rem" }} />
                <div className="skeleton-box" style={{ width: "90%", height: "5rem" }} />
              </div>
              <div className="skeleton-box" style={{ minHeight: "300px", border: "1px solid #111" }} />
            </div>
          ) : (
            <div className="workflow-content-grid">

            {/* Left Column: Step Detail & Key Deliverables */}
            <div className="workflow-detail-left">

              {/* Header Title & Badge */}
              <div className="workflow-detail-header">
                <div className="workflow-step-badge">
                  {currentStep.stepId}
                </div>
                <div>
                  <h3 className="workflow-detail-title">
                    {currentStep.tabTitle}
                  </h3>
                  <p className="workflow-detail-tagline">
                    {currentStep.tagline}
                  </p>
                </div>
              </div>

              {/* Detailed Description */}
              <p className="workflow-detail-desc">
                {currentStep.description}
              </p>

              {/* Key Deliverables Checklist */}
              <div className="workflow-deliverables">
                <div className="workflow-deliverables-label">
                  KEY DELIVERABLES & SPECS:
                </div>
                <div className="space-y-2">
                  {currentStep.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="workflow-deliverable-item"
                    >
                      <CheckCircle2 className="workflow-deliverable-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Metadata Bar */}
              <div className="workflow-meta-bar">
                <div className="workflow-meta-item">
                  <Clock className="workflow-meta-icon" />
                  <span>Timeline: {currentStep.timeline}</span>
                </div>

                <div className="workflow-meta-item red">
                  <Sparkles className="workflow-meta-icon red" />
                  <span>Milestone: {currentStep.milestone}</span>
                </div>
              </div>

            </div>

            {/* Right Column: Step Illustration Card */}
            <div>
              <div className="workflow-illustration-card">

                {/* Illustration Header */}
                <div className="workflow-illustration-header">
                  <span>{currentStep.illustrationLabel}</span>
                  <span className="workflow-illustration-status">
                    <span className="workflow-illustration-dot" />
                    STEP {currentStep.stepId}
                  </span>
                </div>

                {/* Illustration Body */}
                <div className="workflow-illustration-body">
                  <CurrentIllustration />
                </div>

                {/* Illustration Footer */}
                <div className="workflow-illustration-footer">
                  <FooterStepIcon className="workflow-illustration-footer-icon" />
                  <span>{currentStep.illustrationFooterText}</span>
                </div>

              </div>
            </div>

          </div>
          )}
        </div>

      </div>
    </section>
  );
}
