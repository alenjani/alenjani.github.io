import type { FieldGuideContent } from "@/lib/field-guide";

export const twinsFieldGuide: FieldGuideContent = {
  lastReviewed: "May 2026",

  openQuestions: (
    <>
      <p>
        The digital-twin market is in a consolidation phase that mirrors what happened to CAD
        twenty years ago — Synopsys / Ansys (<strong>$35B</strong>), Siemens / Altair
        (<strong>$10B</strong>), Cadence / Hexagon (<strong>$3.16B</strong>) all closed in 2025,
        and <em>OpenUSD</em> is becoming the interchange substrate the way glTF did for graphics.
        NVIDIA&apos;s Blackwell + Omniverse stack is letting CAE software run <em>orders of
        magnitude</em> faster, taking real-time twins from research demo into engineering practice.
      </p>
      <p>
        On the methods side, multi-fidelity Bayesian optimization is finally shipping in
        production trade studies, and DARPA&apos;s <em>CyPhER Forge</em> program is the public
        frontier for real-time twins with statistically-guaranteed AI test agents. The other
        inflection: sim-to-real for robotics learned policies — Boston Dynamics&apos; Atlas now
        runs <strong>150M+ simulation rollouts per maneuver</strong> with zero-shot transfer to
        the physical robot, suggesting the simulator-fidelity ceiling has moved up sharply.
      </p>
    </>
  ),

  reading: {
    foundational: [
      {
        domain: "stanford.edu",
        title: "Reinforcement Learning: An Introduction (2nd ed.)",
        source: "Sutton & Barto, free PDF",
        url: "http://incompleteideas.net/book/the-book.html",
        why:
          "Canonical RL textbook; the language any sim-to-real conversation eventually retreats to.",
      },
      {
        domain: "mit.edu",
        title: "Probabilistic Graphical Models",
        source: "Koller & Friedman, MIT Press",
        url: "https://mitpress.mit.edu/9780262013192/probabilistic-graphical-models/",
        why:
          "The reference for Bayesian-network modeling that underlies most coupled-system digital twins.",
      },
      {
        domain: "siam.org",
        title: "Survey of Multifidelity Methods in UQ, Inference, and Optimization",
        source: "Peherstorfer et al., SIAM Review 2018",
        url: "https://epubs.siam.org/doi/10.1137/16M1082469",
        why:
          "The lit review you'd send a new hire onboarding into multi-fidelity / trade-space methods.",
      },
      {
        domain: "arxiv.org",
        title: "Sim-to-Real Transfer in Deep RL for Robotics: a Survey",
        source: "Zhao & Queralta, arXiv 2009.13303",
        url: "https://arxiv.org/abs/2009.13303",
        why:
          "Evergreen survey on closing the simulator-to-hardware gap; cited by every robotics paper since.",
      },
      {
        domain: "nasa.gov",
        title: "The Digital Twin Paradigm for Future NASA and US Air Force Vehicles",
        source: "Glaessgen & Stargel, NASA 2012",
        url: "https://ntrs.nasa.gov/api/citations/20120008178/downloads/20120008178.pdf",
        why:
          "The early canonical NASA framing of digital twins; still useful as a terminological anchor.",
      },
    ],

    industry: [
      {
        domain: "nvidia.com",
        title: "Omniverse industrial digital twin case studies",
        source: "NVIDIA — BMW, Foxconn, TSMC, Pegatron",
        url: "https://blogs.nvidia.com/blog/industrial-ai-digital-twins-omniverse/",
        why:
          "The clearest public look at what industrial-scale digital twins ship like; Pegatron reports 67% defect-rate reduction post-deployment.",
      },
      {
        domain: "siemens.com",
        title: "Digital Twin Composer — unified design, sim, operations",
        source: "Siemens, CES 2026 launch",
        url: "https://news.siemens.com/en-us/digital-twin-composer-ces-2026/",
        why:
          "The largest digital-twin vendor's read on where the platform goes next; integrated single-model workflow.",
      },
      {
        domain: "darpa.mil",
        title: "CyPhER Forge — real-time twins + AI test agents",
        source: "DARPA program, ongoing 2024-26",
        url: "https://www.darpa.mil/research/programs/cypher-forge",
        why:
          "The public frontier for real-time digital twins with multi-physics surrogates, UQ, and statistically-guaranteed AI testing.",
      },
      {
        domain: "bostondynamics.com",
        title: "Atlas RL — 150M+ sim runs per maneuver, zero-shot transfer",
        source: "Boston Dynamics + RAI Institute, Feb 2025",
        url: "https://rai-inst.com/resources/press-release/boston-dynamics-atlas-partnership/",
        why:
          "The new bar for sim-to-real fidelity; agile humanoid behavior learned in simulation and deployed without fine-tuning.",
      },
    ],

    tools: [
      { name: "NVIDIA Omniverse + Isaac Sim", url: "https://www.nvidia.com/en-us/omniverse/", domain: "nvidia.com", note: "physical-AI simulation platform" },
      { name: "Modelica", url: "https://modelica.org/", domain: "modelica.org", note: "open-standard physical systems modeling" },
      { name: "OpenUSD", url: "https://openusd.org/", domain: "pixar.com", note: "industrial-asset interchange (3D)" },
      { name: "NumPyro", url: "https://num.pyro.ai/", domain: "github.com", note: "Bayesian inference, JAX-backed" },
      { name: "BoTorch + GPyTorch", url: "https://botorch.org/", domain: "meta.com", note: "GP + Bayesian optimization" },
      { name: "Emukit", url: "https://emukit.github.io/", domain: "amazon.com", note: "multi-fidelity Gaussian processes" },
      { name: "Mosaik", url: "https://mosaik.offis.de/", domain: "github.com", note: "co-simulation framework, power-systems focus" },
    ],

    awesome: [],
  },

  visualizations: [
    {
      source: "NVIDIA Omniverse — BMW factory twin",
      domain: "bmw.com",
      what: "Photorealistic real-time factory digital twin with AI-driven robot interaction and ergonomic simulation.",
      url: "https://www.nvidia.com/en-us/case-studies/paving-the-future-of-factories-with-nvidia-omniverse-enterprise/",
    },
    {
      source: "Boston Dynamics — Atlas RL demonstration",
      domain: "bostondynamics.com",
      what: "Humanoid agility — jogging, crawling, breakdancing — learned in simulation and deployed zero-shot.",
      url: "https://www.youtube.com/watch?v=I44_zbEwz_w",
    },
    {
      source: "Foxconn FODT — OpenUSD production lines",
      domain: "foxconn.com",
      what: "Entire factory floor virtually assembled in OpenUSD; layouts cloned across global sites in days, not months.",
      url: "https://www.nvidia.com/en-us/case-studies/foxconn-develops-physical-ai-enabled-smart-factories-with-digital-twins/",
    },
    {
      source: "BoTorch — interactive Pareto-frontier tutorials",
      domain: "meta.com",
      what: "Multi-objective Bayesian optimization with interactive plots showing dominated vs. non-dominated solutions.",
      url: "https://botorch.org/docs/tutorials/multi_objective_bo/",
    },
    {
      source: "Purdue RETHi — cyber-physical habitat testbed",
      domain: "purdue.edu",
      what: "NASA STRI work on resilient extraterrestrial habitats; cyber-physical validation across coupled subsystems.",
      url: "https://www.purdue.edu/rethi/",
    },
  ],
};
