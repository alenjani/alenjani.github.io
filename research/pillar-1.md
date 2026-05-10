# Pillar I research — Visual inspection in the wild

Last collected: May 2026.

## Open questions / what's moving (2024-2026)

1. **Foundation models for vision in industrial settings.** SAM 2, DINOv3, Florence-2 / 2.5, Grounded-SAM-2 — production teams are starting to use them for zero/few-shot inspection. DINOv3 paper explicitly cites *"satellite data, protein structures, industrial inspection"* as targets where captions are scarce. ([DINOv3 — arXiv 2508.10104](https://arxiv.org/html/2508.10104v1), [Grounded-SAM-2 (IDEA-Research)](https://github.com/IDEA-Research/Grounded-SAM-2))

2. **Zero-shot anomaly detection with multimodal LLMs.** CVPR 2025 set: Anomaly-OneVision (Anomaly-OV) introduces "Look-Twice Feature Matching" — selecting/emphasizing abnormal visual tokens. First visual instruction-tuning dataset for AD: Anomaly-Instruct-125k. ([Towards Zero-Shot Anomaly Detection — CVPR 2025](https://openaccess.thecvf.com/content/CVPR2025/papers/Xu_Towards_Zero-Shot_Anomaly_Detection_and_Reasoning_with_Multimodal_Large_Language_CVPR_2025_paper.pdf))

3. **Data efficiency over scale.** Roboflow 2025 trends: **43% of enterprise CV models train with <1000 images**, **51% deploy same week as training**, models accept ~80% accuracy in production deliberately. ([Roboflow 2025 Vision AI Trends](https://blog.roboflow.com/vision-ai-trends/))

4. **Synthetic data via diffusion.** DefectFill (CVPR 2025) — realistic defect generation with inpainting diffusion models; closes the rare-defect data gap that's been the historical blocker for industrial CV.

5. **Multi-view / multimodal anomaly detection.** Multi-Flow (CVPR 2025) — multi-view-enriched normalizing flows. MANTA dataset: 137,338 multi-view images across 38 categories, focused on tiny-object safety problems. Multi-view fusion is finally beating single-view in real benchmarks.

6. **End-to-end perception in autonomous systems.** Late 2025: Waymo revealed they're now using foundation models trained end-to-end (EMMA architecture, Vision-Language Models) — previously single-task heads, now unified. Tesla's HydraNet is the canonical multi-task backbone. ([Comet — Computer Vision at Tesla](https://www.comet.com/site/blog/computer-vision-at-tesla/), [Understanding AI — Waymo & Tesla](https://www.understandingai.org/p/waymo-and-teslas-self-driving-systems))

## Reading list candidates

### Foundational / academic

- **Stanford CS231n** — *Deep Learning for Computer Vision* (Spring 2025 offering). The canonical entry point. Fei-Fei Li / Justin Johnson / Serena Yeung. Free notes + lectures on YouTube. ([cs231n.github.io](https://cs231n.github.io/))
- **Distill.pub — Feature Visualization** (Olah et al., 2017). Still the cleanest explainer of what convnets actually see.
- **Survey: Deep learning for industrial visual anomaly detection** — Springer AI Review 2025. Comprehensive lit review for industrial AD. ([link.springer.com](https://link.springer.com/article/10.1007/s10462-025-11287-7))
- **The Many Faces of Robustness** (Hendrycks et al., ICCV 2021). Foundational analysis of out-of-distribution accuracy in image classifiers — basis for understanding why models fail "in the wild".

### Industry / production

- **Roboflow 2025 Vision AI Trends Report** — best public data we have on what enterprise CV deployments actually look like. ([Report](https://roboflow.com/reports/vision-ai-trends))
- **Voxel51 / FiftyOne blog — Computer Vision in Manufacturing** — real-world lessons from teams that ship. ([voxel51.com/blog](https://voxel51.com/blog/deploy-computer-vision-in-manufacturing))
- **Tesla AI Day** transcripts + talks (Karpathy era + post-Karpathy). HydraNet, neural-net-replaces-300K-LOC narrative.
- **Waymo public talks on EMMA / VLM architecture** — late-2025 shift to end-to-end perception.
- **Edge AI and Vision Alliance** — practitioner content on vision at the edge.

### Tools & libraries

- **Ultralytics YOLO** — defacto detection baseline (YOLO11/12+).
- **segment-anything 2** (Meta) — promptable segmentation, video-aware.
- **Grounded-SAM-2** (IDEA-Research) — combines DINO + Florence-2 + SAM 2 for grounded video tracking.
- **Albumentations** — image augmentation library.
- **FiftyOne** (Voxel51) — open-source dataset visualization & curation.
- **Roboflow Universe** — datasets in production conditions.
- **PyTorch Lightning / Hugging Face transformers** — training infra.
- **Florence-2** (Microsoft) — open vision-language foundation model.

### Conferences / venues to follow

- **CVPR / ICCV / ECCV** main proceedings (CVF Open Access)
- **VAND workshop** at CVPR — Visual Anomaly and Novelty Detection (3rd-4th editions running 2024-2025)
- **CVinW workshop** — Computer Vision in the Wild (focus on multimodal models in unconstrained envs)
- **NeurIPS** for foundation-model papers

## Notable visualizations / interactive demos

1. **SAM 2 interactive demo** (Meta) — promptable segmentation in your browser. Live demo with video.
2. **Distill.pub feature-visualization** (Olah) — interactive deep-net visualizations.
3. **DINOv2/v3 attention maps** — what self-supervised vision models attend to.
4. **Karpathy CS231n convnet visualizations** — multilayer activations.
5. **Tesla HydraNet visualizations** — multi-task perception (from AI Day talks).

## Market data

- AVI market: $16.69B (2024) → $19.04B (2025) → $29.77B (2029) at 14.1% CAGR. ([thebusinessresearchcompany.com](https://www.thebusinessresearchcompany.com/report/automatic-visual-inspection-systems-global-market-report))
- Machine vision: $15.83B (2025) → $23.63B (2030) at 8.3% CAGR.
- McKinsey: AI-powered visual inspection cuts defect rates by **up to 50%**, productivity boost ~30%.
- 74% of manufacturers using or planning to integrate AI in operations (2025).
- 28% of manufacturers planning vision adoption by 2025.

## Awesome lists (curated meta-resources)

- [M-3LAB/awesome-industrial-anomaly-detection](https://github.com/M-3LAB/awesome-industrial-anomaly-detection) — papers + datasets, regularly updated
- [umitkacar/awesome-vision-models](https://github.com/umitkacar/awesome-vision-models) — SAM, ViT, CLIP, DINOv2 etc.

## Specific 2025 CVPR papers worth citing

- **Multi-Flow** — multi-view normalizing flows for AD. Kruse & Rosenhahn.
- **Anomaly-OneVision (Anomaly-OV)** — zero-shot AD with MLLMs. Xu et al.
- **MANTA dataset** — Fan et al. 137K multi-view images, 38 categories.
- **DefectFill** — realistic defect generation via inpainting diffusion.
- **Dinomaly** — "less is more" multi-class unsupervised AD.
- **Beyond Single-Modal Boundary** — cross-modal AD via visual prototypes.
- **SuperAD** — training-free AD/segmentation method, VAND 3.0 challenge winner.
