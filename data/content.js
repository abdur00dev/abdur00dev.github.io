window.SITE_CONTENT = {
  siteMeta: { lastUpdated: "October 11, 2026" },
  profile: {
    name: "Abdur Rahaman",
    title: "PhD Research Scholar in Machine Learning",
    affiliation: "Indian Institute of Technology Indore",
    affiliationUrl: "https://www.iiti.ac.in/",
    email: "phd2401141001@iiti.ac.in",
    avatar: "assets/img/profile_photo.jpeg",
    scholar: "https://scholar.google.com/citations?hl=en&user=OBP2g7wAAAAJ&view_op=list_works&sortby=pubdate",
    links: [
      { label: "Scholar", url: "https://scholar.google.com/citations?hl=en&user=OBP2g7wAAAAJ&view_op=list_works&sortby=pubdate" },
      { label: "GitHub", url: "https://github.com/abdur00dev" },
      { label: "ORCID", url: "https://orcid.org/0009-0005-1038-5180" },
      { label: "LinkedIn", url: "https://in.linkedin.com/in/abdur-rahaman-ml" }
    ]
  },
  about: [
    "I am a PhD Research Scholar in the Department of Mathematics at the Indian Institute of Technology Indore.",
    "My research focuses on developing efficient, robust, and interpretable machine-learning methods for biomedical, time-series, and multimodal data. I work on randomized neural networks, Broad Learning Systems, RVFL networks, complex-valued learning, deep learning, and signal-processing-based approaches.",
    "My research applications include early Alzheimer's disease diagnosis using MRI and EEG, multivariate time-series forecasting, medical signal analysis, and audio-visual speech enhancement. I am particularly interested in learning methods that perform reliably with limited, noisy, imbalanced, or heterogeneous data while maintaining computational efficiency.",
    "I have experience with Python, PyTorch, MATLAB, scikit-learn, machine-learning experimentation, statistical evaluation, medical imaging, EEG analysis, time-series forecasting, and multimodal learning."
  ],
  collaboration: "I am interested in research collaborations, internships, and future postdoctoral opportunities in machine learning, biomedical AI, trustworthy AI, time-series analysis, and computational healthcare.",
  researchInterests: [
    { title:"Randomized Neural Networks", text:"Robust and efficient RVFL networks, deep randomized learning systems, uncertainty-aware learning, fuzzy learning, and noise-robust randomized models." },
    { title:"Broad Learning Systems", text:"Efficient BLS architectures, complex-valued and augmented representations, robust losses, and computationally efficient shallow learning." },
    { title:"Biomedical AI", text:"Machine learning for Alzheimer's disease using MRI and EEG, medical signal analysis, data generation, and computational healthcare." },
    { title:"Time-Series Forecasting", text:"Multivariate and probabilistic forecasting, uncertainty quantification, dependence modeling, copula-based learning, and efficient forecasting architectures." },
    { title:"Multimodal & Trustworthy AI", text:"Audio-visual learning, multimodal signal fusion, interpretable learning, and robust models for noisy, limited, imbalanced, or heterogeneous data." }
  ],
  news: [
    { year:"2026", items:[
      {date:"Oct", text:"Correntropy-Based Robust Learning was accepted to ICONIP 2026."},
      {date:"Sep", text:"Two Alzheimer’s-disease papers appeared at MICCAI 2026 satellite events: BLS-X at MIRASOL and GraM-Diff at the EMERGE Workshop."},
      {date:"Aug", text:"ECA-BLS and RoBell-RVFL were accepted to WCCI 2026; I also co-authored GBFRVFL, Robust Dual-Model Collaborative RVFL, and Wave-BLS at WCCI 2026."},
      {date:"Apr", text:"Began serving as Vice Chair of the IEEE Student Branch, IIT Indore."},
      {date:"Mar", text:"Began serving as Student Representative of the IEEE Madhya Pradesh Section."}
    ]},
    { year:"2025", items:[
      {date:"Oct", text:"AUREXA-SE was published at the 4th Cogmhear Audio-Visual Speech Enhancement Challenge (AVSEC), Interspeech 2025."},
      {date:"Jul", text:"Co-organized the IEEE CIS Summer School on Emerging Trends in Computational Intelligence, Deep Learning, and Large Language Models at IIT Indore."}
    ]},
    { year:"2024", items:[{date:"Jul", text:"Joined the PhD programme in the Department of Mathematics at IIT Indore and began research in machine learning in the OPTIMAL Research Lab under Prof. M. Tanveer."}]}
  ],
  selectedPublications: [
    {id:"bls-x", title:"Beyond Real-Valued MRI Features: Complex Broad Learning for Early Alzheimer’s Disease Diagnosis", authors:"M. Sajid, Abdur Rahaman, M. Tanveer", venue:"MICCAI 2026 · MIRASOL Workshop", contribution:"Co-author", note:"Complex-valued Broad Learning for early Alzheimer’s disease diagnosis from MRI-derived features.", links:[{label:"Paper",url:"https://papers.miccai.org/miccai-2026-sat/paper/MIRASOL_058.pdf"},{label:"OpenReview",url:"https://openreview.net/forum?id=wY5X7Ah6Xm"}]},
    {id:"gram-diff", title:"GraM-Diff: A Unified Graph-Mamba Diffusion Framework for EEG-Based Alzheimer’s Disease Data Generation and Diagnosis", authors:"M. Tanveer, Ayush Singh Rana, Sanskriti Jain, Arnav Kumar, Aryaman Tiwari, Abdur Rahaman, Abdul Quadir, M. Sajid", venue:"MICCAI 2026 · EMERGE Workshop", contribution:"Co-author", note:"Oral presentation; classifier-guided Graph-Mamba diffusion for EEG synthesis and Alzheimer’s disease diagnosis.", links:[{label:"Paper",url:"https://arxiv.org/abs/2608.29755"},{label:"Code",url:"https://github.com/mtanveer1/GraM-Diff"},{label:"OpenReview",url:"https://openreview.net/forum?id=zhYDLtBCyB"}]},
    {id:"if-edrvfl", title:"Uncertainty-Aware Ensemble Deep Randomized Neural Networks for Classification", authors:"M. Sajid, Abdul Quadir, Abdur Rahaman, P. N. Suganthan, M. Tanveer", venue:"arXiv preprint · 2026", contribution:"Co-author", note:"Intuitionistic-fuzzy deep randomized learning for uncertainty-aware classification.", links:[{label:"Paper",url:"https://arxiv.org/abs/2608.10007"},{label:"Code",url:"https://github.com/AnonymousAuthor0011/IF-edRVFL"}]},
    {id:"corervfl", title:"Correntropy-Based Robust Learning", authors:"Abdur Rahaman, Abdul Quadir, M. Tanveer", venue:"ICONIP 2026 · Accepted", contribution:"First author", note:"Correntropy-based robust RVFL learning for noisy and unreliable observations.", links:[{label:"Scholar",url:"https://scholar.google.com/scholar?q=%22Correntropy-Based+Robust+Learning%22"},{label:"Code",url:"https://github.com/abdur00dev/CoreRVFL"}]},
    {id:"wave-bls", title:"Robust Broad Learning System with Wave Loss for Classification under Data Uncertainty", authors:"Mushir Akhtar, A. Varshney, Abdul Quadir, Abdur Rahaman, M. Tanveer, Mohd. Arshad", venue:"IEEE WCCI 2026", contribution:"Co-author", note:"Robust BLS with wave loss for uncertain and noisy data.", links:[{label:"Paper",url:"https://arxiv.org/abs/2608.29983"},{label:"Code",url:"https://github.com/Anonymous-X123/Wave-BLS"}]},
    {id:"eca-bls", title:"ECA-BLS: An Efficient Complex-Augmented Broad Learning System", authors:"Abdur Rahaman, Abdul Quadir, M. Sajid, Mushir Akhtar, M. Tanveer", venue:"IEEE WCCI 2026", contribution:"First author", note:"Efficient complex-augmented Broad Learning for complex-valued representations.", links:[{label:"Paper",url:"https://arxiv.org/abs/2608.29763"},{label:"Code",url:"https://github.com/AnonymousAuthor0011/ECA-BLS"}]},
    {id:"krprvfl", title:"Robust Dual-Model Collaborative Random Vector Functional Link Network", authors:"Abdul Quadir, Abdur Rahaman, Mushir Akhtar, M. Tanveer", venue:"IEEE WCCI 2026", contribution:"Co-author", note:"Collaborative robust RVFL learning with a kernel risk-sensitive objective.", links:[{label:"Paper",url:"https://arxiv.org/abs/2608.13628"},{label:"Code",url:"https://github.com/mtanveer1/KRPRVFL"}]},
    {id:"gbfrvfl", title:"GBFRVFL: Granular-Ball Computing-Based Fuzzy Random Vector Functional Link Network", authors:"Abdul Quadir, Abdur Rahaman, P. N. Suganthan, M. Tanveer", venue:"IEEE WCCI 2026", contribution:"Co-author", note:"Granular-ball and fuzzy RVFL learning for robust classification.", links:[{label:"Paper",url:"https://arxiv.org/abs/2609.29670"},{label:"Code",url:"https://github.com/mtanveer1/GBFRVFL"}]},
    {id:"robell-rvfl", title:"RoBell-RVFL: A Robust Generalized Bell Random Vector Functional Link Network", authors:"Abdur Rahaman, Abdul Quadir, M. Tanveer", venue:"IEEE WCCI 2026", contribution:"First author", note:"Generalized-bell sample weighting for robust and imbalance-aware RVFL learning.", links:[{label:"Paper",url:"https://arxiv.org/abs/2608.16965"},{label:"Code",url:"https://github.com/AnonymousAuthor0011/RoBell-RVFL"}]},
    {id:"aurexa-se", title:"AUREXA-SE: Audio-Visual Unified Representation Exchange Architecture with Cross-Attention and Squeezeformer for Speech Enhancement", authors:"M. Sajid, D. Gupta, Y. Modi, S. Jain, H. J. S. Ganji, Abdur Rahaman, H. Choudhary, N. Saleem, A. Hussain, M. Tanveer", venue:"Interspeech 2025 · AVSEC", contribution:"Co-author", note:"Audio-visual speech enhancement using cross-attention and Squeezeformer.", links:[{label:"Paper",url:"https://doi.org/10.21437/AVSEC.2025-13"},{label:"arXiv",url:"https://arxiv.org/abs/2510.05295"},{label:"Code",url:"https://github.com/mtanveer1/AVSEC-4-Challenge-2025"}]}
  ],
  education: [
    {period:"Jul 2024 – Present", title:"PhD in Machine Learning", organization:"Indian Institute of Technology Indore", location:"Indore, India", detail:"Department of Mathematics · OPTIMAL Research Lab · CPI: 9/10", summary:"Research in machine learning under Prof. M. Tanveer."},
    {period:"Aug 2020 – Aug 2022", title:"Master of Science", organization:"Jamia Millia Islamia", location:"New Delhi, India", detail:"Department of Mathematics · CGPA: 9.29/10"},
    {period:"Aug 2017 – Jul 2020", title:"Bachelor of Science (Mathematics)", organization:"Gauhati University", location:"Assam, India", detail:"CGPA: 7.64/10"}
  ],
  awards: [
    "Selected for the IJCNN 2026 Doctoral Consortium by the International Neural Network Society (INNS) and awarded an INNS travel grant, 2026.",
    "CSIR-UGC NET (Mathematical Science), 2023 — All India Rank 52.",
    "GATE (Mathematics), 2024 — All India Rank 347.",
  ],
  serviceGroups: [
    {title:"IEEE Leadership",items:["Vice Chair, IEEE Student Branch, IIT Indore — Apr. 2026–Present","Student Representative, IEEE Madhya Pradesh Section — 2026–Present","Webmaster, IEEE CIS Madhya Pradesh Section — 2025–2026"]},
    {title:"Schools, Workshops & Outreach",items:["Co-organized IEEE CIS Summer School on Emerging Trends in Computational Intelligence, Deep Learning, and Large Language Models — IIT Indore, Jul. 23–25, 2025.","Coordinated IEEE CIS Winter School on Computational Intelligence and Generative AI — IIT Indore, Jan. 8–9, 2025.","Organized IEEE CIS Workshop on Innovation & Leadership in Artificial Intelligence — IIT Indore, Oct. 16, 2024.","Organized IEEE Day Workshop on Membership Benefits of IEEE and IEEE Societies — IIT Indore, Oct. 9, 2024.","Led IEEE CIS High School Outreach Program on foundations of machine learning and AI and their impact on society — Sep. 27, 2025."]}
  ]
};
