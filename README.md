# 🌿 WasteWise — Smart Waste Scanner

An AI-powered waste classification app that scans items and tells you which bin to use.

## 📋 Prerequisites

- **Node.js** (v18+) — [Download here](https://nodejs.org)
- **Python** (3.8+) — [Download here](https://python.org) (check **"Add Python to PATH"** during install)

## 🚀 Setup Instructions

### Step 1: Install JavaScript dependencies
```bash
cd "hack garbage"
npm install
```

### Step 2: Install Python dependencies
```bash
cd wastewise-app
pip install -r requirements.txt
```

### Step 3: Start the AI backend (Terminal 1)
```bash
cd wastewise-app
python api.py
```
You should see: `✅ AI model ready!` and the server running on port 5000.

### Step 4: Start the website (Terminal 2)
```bash
cd "hack garbage"
npm run dev
```

### Step 5: Open in browser
Go to **http://localhost:3000**

## 📁 Project Structure

```
hack garbage/
├── wastewise-complete.html   ← Main homepage (single-page app)
├── scanner.html              ← Camera scanner page
├── dusbin/index.html         ← Scan results page
├── ai_model/                 ← TensorFlow.js model files
│   ├── model.json
│   └── group1-shard*.bin
├── wastewise-app/            ← Python AI backend
│   ├── api.py                ← Flask API server (port 5000)
│   ├── waste_segragation_ai_model.py  ← AI inference code
│   ├── convert_model.py      ← Model format converter
│   └── requirements.txt      ← Python dependencies
├── indore*.jpg               ← Background slideshow images
├── package.json              ← Node.js config (Vite)
└── vite.config.js            ← Dev server config
```

## 🔧 Troubleshooting

| Problem | Solution |
|---|---|
| `npm: command not found` | Install Node.js from nodejs.org |
| `python: command not found` | Install Python and check "Add to PATH" |
| Scanner shows "Could not connect to AI" | Make sure `python api.py` is running in a separate terminal |
| Model load fails | Check that `ai_model/` folder has `model.json` and all `.bin` files |
| Website won't open | Make sure you ran `npm install` first, then `npm run dev` |
