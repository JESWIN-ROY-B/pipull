# 🛠️ Pipul — AI-Powered Blue-Collar Marketplace

> A hyper-efficient, low-friction labor marketplace bridging unorganized trade workers and recruiters in urban India. Built with role-based workflows, semantic match scoring, and friction-optimized UX.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/stage-MVP%20Ready-success.svg)
![Stack](https://img.shields.io/badge/tech-Next.js%20|%20TypeScript%20|%20Tailwind-informational)

---

## 🚀 Live Demo & One-Click Test Accounts

Evaluators can test role-specific dashboards instantly using pre-configured accounts:

| Role | Email | Focus / Expertise | Location |
| :--- | :--- | :--- | :--- |
| **Recruiter** | `harvey@pipul.com` | Commercial Contracting & Emergency Trades | Delhi / NCR |
| **Recruiter** | `louislitt@pipul.com` | Facility Management & Corporate Security | Noida |
| **Job Seeker** | `mikeross@pipull.com` | Senior Electrician & Smart Lock Specialist | Delhi / NCR |

---

## 💡 The Problem & Architecture Decisions

Traditional blue-collar job boards suffer from three major points of friction: **cold-start emptiness**, **marketplace clutter from duplicate job posts**, and **high drop-off rates during complex onboarding**.

Pipul engineered specific technical and UX guardrails to solve these:

* **Zero Cold-Start (25 Pre-Seeded Trades):** Pre-loaded with 25 active worker profiles and 25 matching job listings across localized Indian market rates (₹120–₹450/hr), spanning plumbers, smart lock installers, solar technicians, and home chefs.
* **Search-First Posting Gate:** Users cannot create a new job or availability post without passing through the semantic search engine first. Manual posting unlocks strictly as a last resort if zero suitable matches exist.
* **3-Step Conversion Funnel:** Onboarding is restricted to `OTP Auth → Role Selection → Location & Core Trade` to maximize user retention.
* **Smart Settlement & Chat Routing:** Offers accepted without price variance trigger immediate contact release. If terms differ, a job-contextual in-app chat opens automatically for real-time negotiation.

---

## ⚙️ Core Technical Features

### 1. Role-Based Dashboards
* **Recruiter View:** Profile & Business Details, Active Requests & Applicant Tracking, In-Demand Skills & Market Rates, City Overview & Labor Density.
* **Job Seeker View:** Worker Profile & Verification, Applied & Accepted Jobs, Trending High-Pay Gigs, Micro-Certification Upskilling.

### 2. Semantic Matching Engine
Replaces rigid dropdown filters with natural language vector/keyword comparison across worker bios, trade tags, and location parameters—sorting candidate cards automatically by **Match Percentage**.

### 3. Transparent Checkout & Commission Pipeline
Integrated payment breakdown displaying base service rates alongside a transparent **3.5% platform transaction fee** prior to payment confirmation.

---

## 🛠️ Tech Stack

* **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS, Lucide Icons
* **State & Data Handling:** React Context / Zustand, Seeded Mock DB (`seedData.ts`)
* **Utilities:** Native `Intl.NumberFormat` for localized INR currency rendering

---

## ⚡ Quickstart

```bash
# Clone the repository
git clone [https://github.com/your-username/pipul-marketplace.git](https://github.com/your-username/pipul-marketplace.git)

# Navigate to project directory
cd pipul-marketplace

# Install dependencies
npm install

# Run local development server
npm run dev
