
## Mock Data & Pricing Plan for Developer APIs

This document outlines the structure and display logic for the mock phase of the SMART MINIONS AI agent marketplace. During this stage, you will showcase developer-submitted APIs/codes, their associated metadata, and pricing on the Developers page. Payment and token deduction features are not active yet; this is a UI/UX demonstration of how the marketplace will present agent data and pricing.

---

## 1. Data Model for Developer APIs

Each AI agent/API entry in the mock Supabase database should include:

- *id*: Unique identifier for the agent.
- *name*: Name of the AI agent.
- *description*: Brief summary of what the agent does.
- *developer*: Name or user ID of the developer who submitted the code.
- *gradio_url*: Public URL of the Gradio-powered API endpoint.
- *code_snippet*: (Optional) Displayable code or code summary.
- *tags*: Array of tags (e.g., NLP, vision, chatbot).
- *created_at*: Timestamp of submission.
- *price_per_call*: Mock price per API call (e.g., $0.01/call).
- *status*: (e.g., "active", "pending", "disabled")
- *preview_image*: (Optional) Screenshot or Spline preview link.

*Example JSON:*

{
  "id": "agent_001",
  "name": "Text Summarizer",
  "description": "Summarizes long articles into concise bullet points.",
  "developer": "dev_jane",
  "gradio_url": "https://xyz.gradio.app/",
  "code_snippet": "def summarize(text): ...",
  "tags": ["NLP", "summarization"],
  "created_at": "2024-05-01T12:00:00Z",
  "price_per_call": 0.01,
  "status": "active",
  "preview_image": "https://cdn.smartminions.com/screenshots/agent_001.png"
}


---

## 2. Display Logic for Developers Page

- *Grid/List View*:  
  Show all available agents/APIs as cards or rows.
- *Each Agent Card Includes*:
  - Name
  - Description
  - Developer name
  - Price per call (e.g., "$0.01 per call")
  - Gradio API URL (with "Copy" or "Try" button)
  - Tags
  - Status badge (e.g., "Active")
  - (Optional) Preview image or interactive Spline element
- *Sort/Filter*:  
  Allow users to filter by tags, search by name, or sort by price.

---

## 3. Mock Pricing Plan

- *Display Only*:  
  Prices are for demonstration; no real payment or token deduction occurs.
- *Price Field*:  
  Use a simple price per call (e.g., $0.01, $0.05, $0.10).
- *Future Integration*:  
  Indicate that payment and token logic will be added in the next phase.

---

## 4. Example UI Copy

- On each agent card:  
  - *Price:* "$0.02 per call (mock pricing)"
  - *Note:* "Payments and usage tracking coming soon!"
- On page header or banner:  
  - "Browse developer-submitted AI agents. Pricing is for demonstration only—payments will be enabled in the next release."

---

## 5. Supabase Mock Table Structure

Create a table (e.g., mock_agents) with the following columns:
- id (text, primary key)
- name (text)
- description (text)
- developer (text)
- gradio_url (text)
- code_snippet (text)
- tags (array of text)
- created_at (timestamp)
- price_per_call (numeric)
- status (text)
- preview_image (text)

---

## 6. Next Steps

- Populate the mock Supabase table with sample agent/API entries.
- Integrate the Developers page frontend to fetch and display this data.
- Clearly indicate that all pricing and API usage is for demo purposes only.
- Prepare for future integration of payment and token deduction features.