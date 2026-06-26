import "./styles.css";

const logoUrl = "./ornith_bird.png";

document.documentElement.style.setProperty("--ornith-logo", `url("${logoUrl}")`);

const stats = [
  ["69.4", "SWE-bench Verified"],
  ["43.1", "Terminal-Bench 2.1"],
  ["262K", "context window"],
  ["MIT", "license"],
];

const storyBlocks = [
  [
    "Self-scaffolding RL",
    "Ornith is trained to improve not only the answer, but the scaffold that guides the answer. That makes the release more interesting than a conventional post-trained coding model.",
  ],
  [
    "Agent-first interface",
    "The 9B checkpoint exposes OpenAI-compatible chat completions with structured tool calls, reasoning parsing, and drop-in agent framework support.",
  ],
  [
    "Built for local loops",
    "A dense 9B model at roughly 19GB bf16 can run behind vLLM or SGLang and serve coding CLIs, private repos, and terminal automation.",
  ],
];

const family = [
  ["9B Dense", "Single-GPU member", "Best fit for local agent endpoints and private engineering workflows."],
  ["31B Dense", "Larger dense sibling", "More headroom while staying simpler than MoE serving."],
  ["35B MoE", "Efficient expert model", "Published with GGUF builds for local-app ecosystems."],
  ["397B MoE", "Flagship scale", "Frontier-scale member for the highest benchmark ceiling."],
];

const benchmarks = [
  ["Terminal-Bench 2.1", "43.1", "21.3", "41.4", "42.1"],
  ["SWE-bench Verified", "69.4", "53.2", "70.0", "52.0"],
  ["SWE-bench Pro", "42.9", "31.3", "44.6", "35.7"],
  ["SWE-bench Multilingual", "52.0", "39.7", "60.3", "51.7"],
  ["NL2Repo", "27.2", "16.2", "20.5", "15.5"],
  ["Claw-eval Avg", "63.1", "53.2", "65.4", "48.5"],
];

const agentUses = [
  ["Codebase repair", "Inspect issues, edit files, run tests, and repeat until a patch lands."],
  ["Terminal workflows", "Point OpenCode, OpenHands, Hermes, or OpenClaw at the same local endpoint."],
  ["Tool execution", "Parse model-emitted function calls into the standard OpenAI tool_calls field."],
  ["Private serving", "Keep source code inside your own machine or GPU box instead of routing every task to a hosted model."],
];

const deployPaths = [
  ["vLLM", "--tool-call-parser qwen3_xml", "Best default for an OpenAI-compatible server on port 8000."],
  ["SGLang", "--tool-call-parser qwen3_coder", "Alternative high-throughput serving path with 262K context."],
  ["Transformers", "device_map=\"auto\"", "Useful for scripting offline generation and quick local checks."],
  ["GGUF", "llama.cpp / Ollama", "Published quantization path for local apps and smaller hardware."],
];

const sources = [
  ["Hugging Face model card", "https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B"],
  ["Ornith collection", "https://huggingface.co/collections/deepreinforce-ai/ornith-10"],
  ["TestingCatalog coverage", "https://www.testingcatalog.com/deepreinforce-releases-ornith-1-0-open-source-coding-models/"],
  ["MarkTechPost coverage", "https://www.marktechpost.com/2026/06/25/deepreinforce-releases-ornith-1-0-an-open-source-coding-model-family-that-learns-its-own-rl-scaffolds/"],
];

document.querySelector("#app").innerHTML = `
  <main class="page">
    <header class="nav" aria-label="Primary navigation">
      <a class="brand" href="#hero" aria-label="Ornith home">
        <img src="${logoUrl}" alt="Ornith logo" />
        <span>Ornith</span>
      </a>
      <nav class="links" aria-label="Page sections">
        <a href="#story">Story</a>
        <a href="#family">Family</a>
        <a href="#benchmarks">Scores</a>
        <a href="#deploy">Deploy</a>
        <a href="https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B" rel="noreferrer">Hugging Face</a>
      </nav>
    </header>

    <section id="hero" class="hero" aria-labelledby="hero-title">
      <div class="product-stage" aria-hidden="true">
        <div class="logo-orbit">
          <img src="${logoUrl}" alt="" />
        </div>
      </div>
      <p class="eyebrow">Ornith-1.0-9B</p>
      <h1 id="hero-title">
        <span class="gradient-line">Ornith-1.0-9B</span>
        <span>Agentic Coding</span>
        <span>Intelligence</span>
      </h1>
      <p class="lede">
        Ornith is an MIT-licensed open model for agentic coding: self-improving
        scaffolds, structured tool calls, long-context repair loops, and
        OpenAI-compatible local serving.
      </p>
      <div class="actions">
        <a class="button primary" href="https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B" rel="noreferrer">Get the model</a>
        <a class="button secondary" href="#story">Explore the release</a>
      </div>
      <div class="stat-row" aria-label="Model proof points">
        ${stats
          .map(
            ([value, label]) => `
              <div>
                <strong>${value}</strong>
                <span>${label}</span>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>

    <section id="story" class="section story-section" aria-labelledby="story-title">
      <p class="eyebrow">Why it matters</p>
      <h2 id="story-title">The release is about the agent loop, not just code completion.</h2>
      <div class="story-grid">
        ${storyBlocks
          .map(
            ([title, body]) => `
              <article>
                <h3>${title}</h3>
                <p>${body}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section id="family" class="section family-section" aria-labelledby="family-title">
      <div class="section-head">
        <p class="eyebrow">Model family</p>
        <h2 id="family-title">From local 9B deployment to frontier-scale MoE.</h2>
      </div>
      <div class="family-grid">
        ${family
          .map(
            ([name, label, body]) => `
              <article>
                <span>${label}</span>
                <h3>${name}</h3>
                <p>${body}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section id="benchmarks" class="section benchmark-section" aria-labelledby="benchmark-title">
      <div class="section-head">
        <p class="eyebrow">Scores</p>
        <h2 id="benchmark-title">The 9B checkpoint is the small member with unusually visible benchmark signal.</h2>
      </div>
      <div class="benchmark-table" aria-label="Ornith benchmark comparison">
        <div class="benchmark-row benchmark-head">
          <span>Benchmark</span>
          <strong>Ornith 9B</strong>
          <span>Qwen3.5 9B</span>
          <span>Qwen3.5 35B</span>
          <span>Gemma4 31B</span>
        </div>
        ${benchmarks
          .map(
            ([name, ornith, qwen9, qwen35, gemma31]) => `
              <div class="benchmark-row">
                <span>${name}</span>
                <strong>${ornith}</strong>
                <span>${qwen9}</span>
                <span>${qwen35}</span>
                <span>${gemma31}</span>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="section agent-section" aria-labelledby="agent-title">
      <p class="eyebrow">Use cases</p>
      <h2 id="agent-title">Where users spend time with it.</h2>
      <div class="agent-grid">
        ${agentUses
          .map(
            ([title, body]) => `
              <article>
                <h3>${title}</h3>
                <p>${body}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section id="deploy" class="section deploy-section" aria-labelledby="deploy-title">
      <div class="section-head">
        <p class="eyebrow">Deploy</p>
        <h2 id="deploy-title">One model, several ways into an agent stack.</h2>
      </div>
      <div class="deploy-grid">
        ${deployPaths
          .map(
            ([name, detail, body]) => `
              <article>
                <h3>${name}</h3>
                <span>${detail}</span>
                <p>${body}</p>
              </article>
            `,
          )
          .join("")}
      </div>
      <div class="code-card">
        <pre><code>vllm serve deepreinforce-ai/Ornith-1.0-9B \\
  --served-model-name Ornith-1.0-9B \\
  --host 0.0.0.0 --port 8000 \\
  --max-model-len 262144 \\
  --enable-prefix-caching \\
  --enable-auto-tool-choice \\
  --tool-call-parser qwen3_xml \\
  --reasoning-parser qwen3 \\
  --trust-remote-code</code></pre>
      </div>
    </section>

    <section class="section sources-section" aria-labelledby="sources-title">
      <div class="section-head">
        <p class="eyebrow">Sources</p>
        <h2 id="sources-title">Read the release, then run the checkpoint.</h2>
      </div>
      <div class="source-list">
        ${sources
          .map(
            ([name, url]) => `
              <a href="${url}" rel="noreferrer">
                <span>${name}</span>
                <strong>${new URL(url).hostname}</strong>
              </a>
            `,
          )
          .join("")}
      </div>
    </section>
  </main>
`;
