# Pillar II research — Digital twins & decisions under uncertainty

Last collected: May 2026.

## Open questions / what's moving (2024-2026)

1. **Real-time digital twins for engineering simulation.** NVIDIA Blackwell + the Omniverse ecosystem is letting CAE software run *orders of magnitude* faster — Ansys / Cadence / COMSOL / Siemens / Hexagon all integrating. Real-time twin where simulation lag was previously batch-mode. ([NVIDIA Blackwell + CAE](https://nvidianews.nvidia.com/news/nvidia-blackwell-accelerates-computer-aided-engineering-software-by-orders-of-magnitude-for-real-time-digital-twins))

2. **Foundation models trained end-to-end for control / robotics.** Boston Dynamics + Robotics & AI Institute partnership (Feb 2025) — Atlas humanoid, learned policies trained in simulation with zero-shot transfer. Over **150 million simulation runs per maneuver**. Sim-to-real via massive parallelism + simulator fidelity. ([RAI / Boston Dynamics partnership](https://rai-inst.com/resources/press-release/boston-dynamics-atlas-partnership/))

3. **Multi-fidelity ML for UQ and optimization.** Combining cheap-but-coarse and slow-but-precise simulators is moving from research into engineering practice. Graph neural surrogates + multi-fidelity polynomial chaos expansion + multi-fidelity Bayesian optimization. ([Multi-fidelity BO Review — arXiv 2311.13050](https://arxiv.org/abs/2311.13050), [ML for Multi-fidelity UQ — arXiv 2410.23482](https://arxiv.org/html/2410.23482v1))

4. **DARPA's CyPhER Forge** (active 2024-2026) — real-time digital twins with multi-physics-informed surrogates + UQ + continuous data assimilation + AI test agent with statistical safety guarantees. The frontier of cyber-physical systems for autonomous testing. ([CyPhER Forge — DARPA](https://www.darpa.mil/research/programs/cypher-forge))

5. **OpenUSD as the substrate.** Pixar's USD format is becoming the *interchange* for industrial digital twins — assets move between vendors (Siemens, NVIDIA, Hexagon) without rebuild. Foxconn's "FODT" entirely USD-based. Like glTF for 3D graphics, but for industrial assets. ([NVIDIA OpenUSD blog](https://blogs.nvidia.com/blog/openusd-digital-twins-industrial-physical-ai/))

6. **Industry consolidation / "physical AI" as the framing.** Synopsys ↔ Ansys ($35B, mid-2025), Siemens ↔ Altair ($10B, March 2025), Cadence ↔ Hexagon ($3.16B, Sept 2025). The marketing umbrella: *"Physical AI"* — NVIDIA's Omniverse positioned as "operating system for physical AI."

## Reading list candidates

### Foundational / academic

- **Sutton & Barto — Reinforcement Learning: An Introduction** (free PDF, 2nd ed.). Canonical, evergreen.
- **Probabilistic Graphical Models** — Koller & Friedman. The reference for Bayesian network modeling that underlies most coupled-system twins.
- **Survey of Multifidelity Methods in Uncertainty Propagation, Inference, and Optimization** — SIAM Review (Peherstorfer et al.). The lit review you'd send a new hire. ([SIAM Review](https://epubs.siam.org/doi/10.1137/16M1082469))
- **Sim-to-Real Transfer in Deep Reinforcement Learning for Robotics: a Survey** — Zhao & Queralta, arXiv 2009.13303. Also evergreen. ([arXiv 2009.13303](https://arxiv.org/abs/2009.13303))
- **NASA — Digital Twin Paradigm for Future NASA and U.S. Air Force Vehicles** (Glaessgen & Stargel, 2012). The early canonical NASA framing of digital twins. ([NTRS PDF](https://ntrs.nasa.gov/api/citations/20120008178/downloads/20120008178.pdf))

### Industry / production

- **NVIDIA Omniverse case studies** — BMW, Foxconn, TSMC, Pegatron (67% defect rate reduction). ([NVIDIA case studies](https://www.nvidia.com/en-us/case-studies/))
- **Siemens — Digital Twin Composer** (CES 2026) — unifies design, simulation, operations. ([Siemens news](https://news.siemens.com/en-us/digital-twin-composer-ces-2026/))
- **DARPA program pages** — CyPhER Forge, EMHAT, RACER. Funded research at the frontier of public cyber-physical work.
- **Duality AI / NASA JPL** — synthetic data for autonomy in complex environments. RACER Phase II.
- **Ansys digital twin product pages + case studies** — multiphysics simulation for engineering twins.
- **Digital Engineering 24/7** — *AI-Powered Digital Twins for Predictive Maintenance* — practitioner-focused magazine. ([digitalengineering247.com](https://www.digitalengineering247.com/article/ai-powered-digital-twins-raise-hopes-for-better-predictive-maintenance/simulate))

### Tools & libraries

- **NVIDIA Omniverse** — physical-AI sim/digital-twin platform.
- **Modelica** — open-standard physical-systems modeling language.
- **Mosaik** — co-simulation framework (esp. for power systems / smart grids).
- **OpenUSD** — Pixar's Universal Scene Description, increasingly the industrial-asset interchange standard.
- **NumPyro / Stan / PyMC** — Bayesian inference at scale.
- **Emukit** — multi-fidelity Gaussian processes (Amazon open-source).
- **GPyTorch / BoTorch** — GP regression + Bayesian optimization (Meta open-source).
- **Isaac Sim / Isaac Lab** (NVIDIA) — robotics simulation for sim-to-real RL training.

### Conferences / venues

- **NeurIPS** — sim-to-real, Bayesian methods, RL theory
- **ICRA / IROS** — robotics / sim-to-real
- **AIAA SciTech** / **ASME IDETC** — engineering systems modeling
- **AAAI / IJCAI** — Bayesian / probabilistic AI
- **SIAM Conf on Computational Science & Engineering** — multi-fidelity, UQ

## Notable visualizations / interactive demos

1. **NVIDIA Omniverse demo videos** — physically accurate factory twins (BMW, Foxconn assembly lines)
2. **Boston Dynamics Atlas RL videos** — agile humanoid behavior learned in sim, deployed zero-shot
3. **Tesla / Waymo perception visualizations** — also referenced in Pillar I but applies (sim-to-real perception)
4. **Distill.pub on Bayesian methods** — interactive explainers for prior/posterior, MCMC, etc.
5. **Pareto frontier interactive plots** — showing dominant vs. dominated solutions across objectives

## Market data

- Digital twin market: $13.6B (2024) → projected **$428.1B by 2034** (highest growth multiple of the three pillars). ([gminsights.com](https://www.gminsights.com/industry-analysis/digital-twin-market))
- Top 7 players: Siemens (largest, ~5% share), Dassault, Microsoft, Rockwell Automation, GE Vernova, Hexagon, AWS.
- Pegatron deployed digital twins → labor cost reduced 7%, defect rates down 67%.

## Awesome lists / curated resources

- *(Less consolidated than Pillar I. Most curation is vendor-specific. Could become an opportunity for Ali to maintain his own list.)*

## Specific 2025 work worth citing

- **High-Performance Reinforcement Learning on Spot** — ICRA 2025, RAI Institute. Distributional measures for optimizing simulation parameters. ([rai-inst.com PDF](https://rai-inst.com/wp-content/uploads/2025/05/ICRA_2025__High_Performance_Reinforcement_Learning_on_Spot__Optimizing_Simulation_Parameters_with_Distributional_Measures-1.pdf))
- **Multi-fidelity ML for UQ and Optimization** — perspective paper, arXiv 2410.23482, 2024-25.
- **Bayesian deep RL for UQ in deep foundation pit engineering** — Nature Scientific Reports 2025. ([nature.com](https://www.nature.com/articles/s41598-025-19002-w))
