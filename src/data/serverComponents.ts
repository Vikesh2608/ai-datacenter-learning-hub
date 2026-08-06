export interface ServerComponent {
  slug: string;
  name: string;
  category: string;

  shortDescription: string;

  overview: string;

  whyItMatters: string;

  architecture: string;

  howItWorks: string;

  image: string;

  difficulty: "Beginner" | "Intermediate" | "Advanced";

  readTime: string;

  manufacturer: string[];

  power: string;

  interfaces: string[];

  applications: string[];

  keyFacts: string[];

  gallery: string[];

  related: string[];

  videos: {
    title: string;
    url: string;
  }[];
}

export const serverComponents: ServerComponent[] = [

    {
  slug: "cpu",
  name: "CPU",
  category: "Processing",

  shortDescription:
    "The Central Processing Unit coordinates every operation inside an AI server.",

  overview:
    "The CPU executes operating systems, applications, networking, storage management, virtualization and communicates with GPUs. Although GPUs perform AI computation, CPUs orchestrate the entire server.",

  whyItMatters:
    "Without CPUs, GPUs cannot receive workloads, access storage or communicate with the operating system.",

  architecture:
    "CPU → Memory → PCIe → GPU",

  howItWorks:
    "The CPU continuously fetches instructions from memory, processes them and distributes work across connected hardware devices.",

  image: "/images/infrastructure/cpu.png",

  difficulty: "Beginner",

  readTime: "8 min",

  manufacturer: [
    "Intel",
    "AMD"
  ],

  power: "150W - 500W",

  interfaces: [
    "PCIe Gen5",
    "DDR5",
    "CXL"
  ],

  applications: [
    "AI Servers",
    "Cloud Computing",
    "Virtualization",
    "Databases"
  ],

  keyFacts: [
    "Acts as the brain of the server.",
    "Coordinates GPUs.",
    "Manages operating systems.",
    "Processes sequential workloads."
  ],

  gallery: [
    "/images/infrastructure/cpu.png"
  ],

  related: [
    "memory",
    "pcie",
    "gpu"
  ],

  videos: [
    {
      title: "How CPUs Work",
      url: "https://www.youtube.com/results?search_query=how+cpu+works"
    }
  ]
},

{
  slug: "gpu",
  name: "GPU",
  category: "Processing",

  shortDescription:
    "Graphics Processing Units accelerate AI training and inference using thousands of parallel processing cores.",

  overview:
    "GPUs are specialized processors designed to execute thousands of mathematical operations simultaneously. Modern AI relies on GPUs because neural networks require massive parallel computation.",

  whyItMatters:
    "Without GPUs, today's large language models would require months or years to train.",

  architecture:
    "CPU → PCIe → GPU → HBM → NVLink → GPU",

  howItWorks:
    "The CPU prepares workloads while GPUs execute parallel matrix operations using CUDA or Tensor cores.",

  image: "/images/infrastructure/gpu.png",

  difficulty: "Beginner",

  readTime: "10 min",

  manufacturer: [
    "NVIDIA",
    "AMD",
    "Intel"
  ],

  power: "300W - 1000W",

  interfaces: [
    "PCIe Gen5",
    "NVLink",
    "HBM"
  ],

  applications: [
    "Artificial Intelligence",
    "Deep Learning",
    "Computer Vision",
    "Scientific Computing"
  ],

  keyFacts: [
    "Contains thousands of processing cores.",
    "Optimized for matrix calculations.",
    "Uses HBM memory.",
    "Supports NVLink."
  ],

  gallery: [
    "/images/infrastructure/gpu.png"
  ],

  related: [
    "cpu",
    "memory",
    "pcie",
    "nvlink"
  ],

  videos: [
    {
      title: "How GPUs Work",
      url: "https://www.youtube.com/results?search_query=how+gpu+works"
    }
  ]
},

{
  slug: "dpu",
  name: "DPU",
  category: "Processing",

  shortDescription:
    "Data Processing Units accelerate networking, storage and security workloads.",

  overview:
    "DPUs remove infrastructure processing from CPUs, allowing CPUs and GPUs to focus on applications and AI.",

  whyItMatters:
    "Modern hyperscale AI data centers increasingly deploy DPUs to improve efficiency.",

  architecture:
    "CPU → DPU → Network",

  howItWorks:
    "The DPU processes networking, storage and security independently from the CPU.",

  image: "/images/infrastructure/dpu.png",

  difficulty: "Intermediate",

  readTime: "9 min",

  manufacturer: [
    "NVIDIA",
    "Intel",
    "AMD"
  ],

  power: "50W - 150W",

  interfaces: [
    "PCIe",
    "Ethernet"
  ],

  applications: [
    "Networking",
    "Cloud",
    "Security"
  ],

  keyFacts: [
    "Offloads networking.",
    "Improves server efficiency.",
    "Popular in hyperscale data centers."
  ],

  gallery: [
    "/images/infrastructure/dpu.png"
  ],

  related: [
    "cpu",
    "networking"
  ],

  videos: [
    {
      title: "What is a DPU?",
      url: "https://www.youtube.com/results?search_query=data+processing+unit"
    }
  ]
},

{
  slug: "tpu",
  name: "TPU",
  category: "Processing",

  shortDescription:
    "Tensor Processing Units are AI accelerators designed by Google.",

  overview:
    "TPUs are custom processors optimized for machine learning workloads running in Google Cloud.",

  whyItMatters:
    "TPUs enable efficient large-scale machine learning within Google's infrastructure.",

  architecture:
    "CPU → TPU",

  howItWorks:
    "TPUs execute tensor operations using highly specialized hardware.",

  image: "/images/infrastructure/tpu.png",

  difficulty: "Intermediate",

  readTime: "8 min",

  manufacturer: [
    "Google"
  ],

  power: "Varies",

  interfaces: [
    "PCIe"
  ],

  applications: [
    "Machine Learning",
    "TensorFlow"
  ],

  keyFacts: [
    "Designed by Google.",
    "Optimized for TensorFlow.",
    "Purpose-built for AI."
  ],

  gallery: [
    "/images/infrastructure/tpu.png"
  ],

  related: [
    "gpu",
    "cpu"
  ],

  videos: [
    {
      title: "Google TPU",
      url: "https://www.youtube.com/results?search_query=google+tpu"
    }
  ]
},

{
  slug: "fpga",
  name: "FPGA",
  category: "Processing",

  shortDescription:
    "Field Programmable Gate Arrays are reconfigurable chips used for specialized acceleration.",

  overview:
    "FPGAs can be programmed after manufacturing, making them suitable for custom AI inference, networking and embedded systems.",

  whyItMatters:
    "They provide flexibility and energy efficiency for specialized workloads.",

  architecture:
    "CPU → FPGA",

  howItWorks:
    "Logic circuits are configured to perform dedicated tasks with low latency.",

  image: "/images/infrastructure/fpga.png",

  difficulty: "Advanced",

  readTime: "10 min",

  manufacturer: [
    "AMD",
    "Intel"
  ],

  power: "20W - 150W",

  interfaces: [
    "PCIe"
  ],

  applications: [
    "Networking",
    "AI Inference",
    "Telecommunications"
  ],

  keyFacts: [
    "Reprogrammable hardware.",
    "Low latency.",
    "Energy efficient."
  ],

  gallery: [
    "/images/infrastructure/fpga.png"
  ],

  related: [
    "cpu",
    "gpu"
  ],

  videos: [
    {
      title: "FPGA Explained",
      url: "https://www.youtube.com/results?search_query=fpga+explained"
    }
  ]
},

{
  slug: "memory",

  name: "Server Memory",

  category: "Memory",

  shortDescription:
    "Server memory temporarily stores active data used by CPUs and GPUs.",

  overview:
    "Memory (RAM) stores active applications, operating systems and AI datasets while they are being processed. Unlike SSDs, RAM is extremely fast but loses its contents when power is removed.",

  whyItMatters:
    "AI workloads constantly move data between CPUs, GPUs and memory. Faster memory improves overall server performance.",

  architecture:
    "CPU ↔ DDR5 Memory ↔ PCIe ↔ GPU",

  howItWorks:
    "Applications load data into RAM before CPUs and GPUs begin computation.",

  image: "/images/infrastructure/memory.png",

  difficulty: "Beginner",

  readTime: "7 min",

  manufacturer: [
    "Samsung",
    "Micron",
    "SK hynix"
  ],

  power: "5W - 20W",

  interfaces: [
    "DDR5"
  ],

  applications: [
    "Servers",
    "Cloud",
    "Artificial Intelligence"
  ],

  keyFacts: [
    "Temporary storage.",
    "Extremely fast.",
    "Volatile memory."
  ],

  gallery: [
    "/images/infrastructure/memory.png"
  ],

  related: [
    "cpu",
    "gpu",
    "ddr5"
  ],

  videos: [
    {
      title: "Server Memory Explained",
      url: "https://www.youtube.com/results?search_query=server+memory"
    }
  ]
},

{
  slug: "ddr5",

  name: "DDR5 Memory",

  category: "Memory",

  shortDescription:
    "The latest generation of server memory offering higher bandwidth and efficiency.",

  overview:
    "DDR5 provides faster speeds, increased capacity and improved power efficiency compared to DDR4.",

  whyItMatters:
    "Modern AI servers depend on DDR5 to feed data quickly to CPUs and GPUs.",

  architecture:
    "CPU ↔ DDR5",

  howItWorks:
    "DDR5 transfers data at very high speeds across multiple memory channels.",

  image: "/images/infrastructure/ddr5.png",

  difficulty: "Intermediate",

  readTime: "7 min",

  manufacturer: [
    "Samsung",
    "Micron",
    "SK hynix"
  ],

  power: "1.1V",

  interfaces: [
    "DDR5 DIMM"
  ],

  applications: [
    "AI Servers",
    "Cloud",
    "Enterprise"
  ],

  keyFacts: [
    "Higher bandwidth.",
    "Lower power.",
    "Greater capacity."
  ],

  gallery: [
    "/images/infrastructure/ddr5.png"
  ],

  related: [
    "memory",
    "cpu"
  ],

  videos: [
    {
      title: "DDR5 Explained",
      url: "https://www.youtube.com/results?search_query=ddr5+memory"
    }
  ]
},

{
  slug: "hbm",

  name: "HBM Memory",

  category: "Memory",

  shortDescription:
    "High Bandwidth Memory used in modern AI GPUs.",

  overview:
    "HBM stacks memory vertically, providing extremely high bandwidth while consuming less power.",

  whyItMatters:
    "AI GPUs require enormous memory bandwidth that traditional memory cannot provide.",

  architecture:
    "GPU ↔ HBM",

  howItWorks:
    "HBM is integrated very close to the GPU, reducing latency and increasing throughput.",

  image: "/images/infrastructure/hbm.png",

  difficulty: "Intermediate",

  readTime: "8 min",

  manufacturer: [
    "Samsung",
    "SK hynix",
    "Micron"
  ],

  power: "Low",

  interfaces: [
    "HBM3",
    "HBM3E"
  ],

  applications: [
    "Artificial Intelligence",
    "Scientific Computing"
  ],

  keyFacts: [
    "Very high bandwidth.",
    "Stacked memory.",
    "Used in NVIDIA AI GPUs."
  ],

  gallery: [
    "/images/infrastructure/hbm.png"
  ],

  related: [
    "gpu",
    "memory"
  ],

  videos: [
    {
      title: "HBM Memory",
      url: "https://www.youtube.com/results?search_query=hbm+memory"
    }
  ]
},

{
  slug: "dimm",

  name: "DIMM",

  category: "Memory",

  shortDescription:
    "Dual Inline Memory Module used in enterprise servers.",

  overview:
    "DIMMs are physical memory modules installed into server motherboards.",

  whyItMatters:
    "DIMMs determine memory capacity and bandwidth.",

  architecture:
    "CPU ↔ DIMM",

  howItWorks:
    "DIMMs connect to CPU memory controllers through dedicated channels.",

  image: "/images/infrastructure/dimm.png",

  difficulty: "Beginner",

  readTime: "6 min",

  manufacturer: [
    "Samsung",
    "Micron",
    "SK hynix"
  ],

  power: "5W",

  interfaces: [
    "DDR5 DIMM"
  ],

  applications: [
    "Servers",
    "Workstations"
  ],

  keyFacts: [
    "Physical memory module.",
    "Installed on the motherboard."
  ],

  gallery: [
    "/images/infrastructure/dimm.png"
  ],

  related: [
    "memory",
    "cpu"
  ],

  videos: [
    {
      title: "DIMM Explained",
      url: "https://www.youtube.com/results?search_query=dimm+memory"
    }
  ]
},

{
  slug: "nvme",

  name: "NVMe SSD",

  category: "Storage",

  shortDescription:
    "High-speed storage using the NVMe protocol over PCIe.",

  overview:
    "NVMe SSDs provide significantly faster performance than SATA SSDs, making them ideal for AI datasets and enterprise workloads.",

  whyItMatters:
    "AI systems frequently read massive datasets. Fast storage reduces loading bottlenecks.",

  architecture:
    "SSD → PCIe → CPU",

  howItWorks:
    "Data travels over PCIe using the NVMe protocol, minimizing latency.",

  image: "/images/infrastructure/nvme.png",

  difficulty: "Beginner",

  readTime: "7 min",

  manufacturer: [
    "Samsung",
    "Solidigm",
    "Kioxia"
  ],

  power: "5W - 20W",

  interfaces: [
    "PCIe",
    "NVMe"
  ],

  applications: [
    "AI",
    "Enterprise Storage",
    "Cloud"
  ],

  keyFacts: [
    "Very low latency.",
    "High throughput.",
    "Uses PCIe."
  ],

  gallery: [
    "/images/infrastructure/nvme.png"
  ],

  related: [
    "ssd",
    "pcie",
    "cpu"
  ],

  videos: [
    {
      title: "NVMe SSD Explained",
      url: "https://www.youtube.com/results?search_query=nvme+ssd"
    }
  ]
},

{
  slug: "ssd",

  name: "Solid State Drive",

  category: "Storage",

  shortDescription:
    "Persistent flash storage used in servers and AI systems.",

  overview:
    "SSDs store operating systems, applications and AI datasets using flash memory instead of spinning disks.",

  whyItMatters:
    "Fast storage improves AI startup times and reduces dataset loading delays.",

  architecture:
    "SSD → PCIe/SATA → CPU",

  howItWorks:
    "Flash memory stores data electronically, providing faster access than hard drives.",

  image: "/images/infrastructure/ssd.png",

  difficulty: "Beginner",

  readTime: "6 min",

  manufacturer: [
    "Samsung",
    "Micron",
    "Kioxia",
    "Solidigm"
  ],

  power: "3W - 15W",

  interfaces: [
    "SATA",
    "NVMe",
    "PCIe"
  ],

  applications: [
    "Servers",
    "Cloud",
    "AI Storage"
  ],

  keyFacts: [
    "No moving parts.",
    "Low latency.",
    "High reliability."
  ],

  gallery: [
    "/images/infrastructure/ssd.png"
  ],

  related: [
    "nvme",
    "pcie",
    "memory"
  ],

  videos: [
    {
      title: "SSD Explained",
      url: "https://www.youtube.com/results?search_query=ssd+explained"
    }
  ]
},

{
  slug: "pcie",

  name: "PCI Express (PCIe)",

  category: "Interconnect",

  shortDescription:
    "The high-speed communication bus connecting CPUs, GPUs, storage, and networking devices.",

  overview:
    "PCI Express (PCIe) is the primary expansion bus used in modern servers. It enables high-bandwidth communication between CPUs and peripheral devices such as GPUs, NVMe SSDs, NICs, and accelerators.",

  whyItMatters:
    "Without PCIe, CPUs would not be able to communicate efficiently with GPUs or high-speed storage devices.",

  architecture:
    "CPU ⇄ PCIe ⇄ GPU / SSD / NIC",

  howItWorks:
    "PCIe transfers data using dedicated lanes. More lanes provide higher bandwidth for demanding AI workloads.",

  image: "/images/infrastructure/pcie.png",

  difficulty: "Intermediate",

  readTime: "9 min",

  manufacturer: [
    "PCI-SIG"
  ],

  power: "N/A",

  interfaces: [
    "PCIe Gen3",
    "PCIe Gen4",
    "PCIe Gen5",
    "PCIe Gen6"
  ],

  applications: [
    "AI Servers",
    "Storage",
    "Networking",
    "GPU Computing"
  ],

  keyFacts: [
    "Uses high-speed serial lanes.",
    "Scales from x1 to x16 lanes.",
    "Foundation of modern server expansion."
  ],

  gallery: [
    "/images/infrastructure/pcie.png"
  ],

  related: [
    "cpu",
    "gpu",
    "nvme",
    "retimer"
  ],

  videos: [
    {
      title: "PCIe Explained",
      url: "https://www.youtube.com/results?search_query=pcie+explained"
    }
  ]
},

{
  slug: "cxl",

  name: "Compute Express Link (CXL)",

  category: "Interconnect",

  shortDescription:
    "A modern high-speed interconnect for memory sharing and accelerator communication.",

  overview:
    "CXL builds on PCIe to allow processors and accelerators to share memory efficiently.",

  whyItMatters:
    "Future AI servers will increasingly rely on CXL for memory expansion and resource sharing.",

  architecture:
    "CPU ⇄ CXL ⇄ Memory / Accelerator",

  howItWorks:
    "CXL enables coherent memory communication between processors and devices.",

  image: "/images/infrastructure/cxl.png",

  difficulty: "Advanced",

  readTime: "9 min",

  manufacturer: [
    "CXL Consortium"
  ],

  power: "N/A",

  interfaces: [
    "PCIe Gen5",
    "PCIe Gen6"
  ],

  applications: [
    "Memory Expansion",
    "AI",
    "Cloud Computing"
  ],

  keyFacts: [
    "Built on PCIe.",
    "Supports memory pooling.",
    "Designed for future AI systems."
  ],

  gallery: [
    "/images/infrastructure/cxl.png"
  ],

  related: [
    "pcie",
    "memory"
  ],

  videos: [
    {
      title: "CXL Explained",
      url: "https://www.youtube.com/results?search_query=cxl+explained"
    }
  ]
},

{
  slug: "nvlink",

  name: "NVLink",

  category: "Interconnect",

  shortDescription:
    "Ultra-high-speed communication technology connecting NVIDIA GPUs.",

  overview:
    "NVLink enables GPUs to communicate directly with much higher bandwidth than PCIe.",

  whyItMatters:
    "Large AI models require GPUs to exchange enormous amounts of data quickly.",

  architecture:
    "GPU ⇄ NVLink ⇄ GPU",

  howItWorks:
    "Dedicated NVLink connections provide direct GPU-to-GPU communication.",

  image: "/images/infrastructure/nvlink.png",

  difficulty: "Intermediate",

  readTime: "8 min",

  manufacturer: [
    "NVIDIA"
  ],

  power: "N/A",

  interfaces: [
    "NVLink"
  ],

  applications: [
    "AI",
    "Deep Learning",
    "GPU Clusters"
  ],

  keyFacts: [
    "GPU-to-GPU communication.",
    "Higher bandwidth than PCIe.",
    "Critical for large AI clusters."
  ],

  gallery: [
    "/images/infrastructure/nvlink.png"
  ],

  related: [
    "gpu",
    "pcie",
    "nvswitch"
  ],

  videos: [
    {
      title: "NVLink Explained",
      url: "https://www.youtube.com/results?search_query=nvlink"
    }
  ]
},

{
  slug: "nvswitch",

  name: "NVSwitch",

  category: "Interconnect",

  shortDescription:
    "Switching fabric enabling many GPUs to communicate through NVLink.",

  overview:
    "NVSwitch allows every GPU in an AI server to communicate efficiently with every other GPU.",

  whyItMatters:
    "Large GPU systems rely on NVSwitch to scale AI workloads.",

  architecture:
    "GPU ⇄ NVSwitch ⇄ GPU",

  howItWorks:
    "NVSwitch routes NVLink traffic between multiple GPUs.",

  image: "/images/infrastructure/nvswitch.png",

  difficulty: "Advanced",

  readTime: "8 min",

  manufacturer: [
    "NVIDIA"
  ],

  power: "N/A",

  interfaces: [
    "NVLink"
  ],

  applications: [
    "AI Supercomputers",
    "GPU Servers"
  ],

  keyFacts: [
    "Switches NVLink traffic.",
    "Connects multiple GPUs.",
    "Used in HGX platforms."
  ],

  gallery: [
    "/images/infrastructure/nvswitch.png"
  ],

  related: [
    "gpu",
    "nvlink"
  ],

  videos: [
    {
      title: "NVSwitch",
      url: "https://www.youtube.com/results?search_query=nvswitch"
    }
  ]
},

{
  slug: "retimer",

  name: "PCIe Retimer",

  category: "Interconnect",

  shortDescription:
    "Regenerates PCIe signals to maintain signal integrity over longer distances.",

  overview:
    "As PCIe speeds increase, signals weaken over distance. Retimers restore and clean these signals.",

  whyItMatters:
    "Modern AI servers often require retimers to ensure reliable PCIe Gen5 and Gen6 communication.",

  architecture:
    "CPU → Retimer → GPU",

  howItWorks:
    "Retimers regenerate high-speed electrical signals before forwarding them.",

  image: "/images/infrastructure/retimer.png",

  difficulty: "Advanced",

  readTime: "8 min",

  manufacturer: [
    "Astera Labs",
    "Broadcom"
  ],

  power: "5W - 15W",

  interfaces: [
    "PCIe Gen5",
    "PCIe Gen6"
  ],

  applications: [
    "AI Servers",
    "Enterprise Servers"
  ],

  keyFacts: [
    "Improves signal integrity.",
    "Supports high-speed PCIe.",
    "Essential for long PCB traces."
  ],

  gallery: [
    "/images/infrastructure/retimer.png"
  ],

  related: [
    "pcie",
    "gpu"
  ],

  videos: [
    {
      title: "PCIe Retimers",
      url: "https://www.youtube.com/results?search_query=pcie+retimer"
    }
  ]
},

{
  slug: "ethernet",

  name: "Ethernet",

  category: "Networking",

  shortDescription:
    "The most widely used networking technology connecting servers, storage and switches.",

  overview:
    "Ethernet enables communication between devices in local area networks. Modern AI data centers use 100GbE, 200GbE, 400GbE and 800GbE Ethernet for high-performance workloads.",

  whyItMatters:
    "Every AI server needs reliable networking to exchange data, access storage and communicate with other servers.",

  architecture:
    "Server → NIC → Ethernet Switch → Network",

  howItWorks:
    "Network Interface Cards convert digital data into Ethernet frames that travel across copper or fiber cables.",

  image: "/images/infrastructure/ethernet.png",

  difficulty: "Beginner",

  readTime: "8 min",

  manufacturer: [
    "IEEE"
  ],

  power: "N/A",

  interfaces: [
    "RJ45",
    "SFP",
    "QSFP",
    "OSFP"
  ],

  applications: [
    "Enterprise",
    "Cloud",
    "AI Data Centers"
  ],

  keyFacts: [
    "Most common networking technology.",
    "Supports speeds from 1GbE to 800GbE.",
    "Works with copper and fiber."
  ],

  gallery: [
    "/images/infrastructure/ethernet.png"
  ],

  related: [
    "connectx",
    "fiber",
    "switch"
  ],

  videos: [
    {
      title: "Ethernet Explained",
      url: "https://www.youtube.com/results?search_query=ethernet+explained"
    }
  ]
},

{
  slug: "infiniband",

  name: "InfiniBand",

  category: "Networking",

  shortDescription:
    "Ultra-low latency networking technology used in AI supercomputers.",

  overview:
    "InfiniBand provides extremely high bandwidth and low latency communication between AI servers.",

  whyItMatters:
    "Large GPU clusters rely on InfiniBand to synchronize training across thousands of GPUs.",

  architecture:
    "GPU → NIC → InfiniBand Switch → GPU",

  howItWorks:
    "RDMA technology enables direct memory communication between servers with minimal CPU involvement.",

  image: "/images/infrastructure/infiniband.png",

  difficulty: "Intermediate",

  readTime: "9 min",

  manufacturer: [
    "NVIDIA"
  ],

  power: "N/A",

  interfaces: [
    "QSFP",
    "OSFP"
  ],

  applications: [
    "AI",
    "HPC",
    "Supercomputing"
  ],

  keyFacts: [
    "Ultra-low latency.",
    "Supports RDMA.",
    "Preferred for large AI clusters."
  ],

  gallery: [
    "/images/infrastructure/infiniband.png"
  ],

  related: [
    "connectx",
    "gpu"
  ],

  videos: [
    {
      title: "InfiniBand Explained",
      url: "https://www.youtube.com/results?search_query=infiniband"
    }
  ]
},

{
  slug: "connectx",

  name: "ConnectX NIC",

  category: "Networking",

  shortDescription:
    "High-performance NVIDIA network interface card for AI infrastructure.",

  overview:
    "ConnectX adapters provide Ethernet and InfiniBand connectivity for modern AI servers.",

  whyItMatters:
    "AI clusters depend on high-speed NICs to move data between GPUs.",

  architecture:
    "GPU → PCIe → ConnectX → Network",

  howItWorks:
    "The NIC transfers network packets between the server and the network fabric.",

  image: "/images/infrastructure/connectx.png",

  difficulty: "Intermediate",

  readTime: "8 min",

  manufacturer: [
    "NVIDIA"
  ],

  power: "20W - 60W",

  interfaces: [
    "PCIe Gen5",
    "QSFP",
    "OSFP"
  ],

  applications: [
    "AI",
    "Cloud",
    "Networking"
  ],

  keyFacts: [
    "Supports Ethernet.",
    "Supports InfiniBand.",
    "High bandwidth networking."
  ],

  gallery: [
    "/images/infrastructure/connectx.png"
  ],

  related: [
    "ethernet",
    "infiniband",
    "pcie"
  ],

  videos: [
    {
      title: "NVIDIA ConnectX",
      url: "https://www.youtube.com/results?search_query=nvidia+connectx"
    }
  ]
},

{
  slug: "smartnic",

  name: "SmartNIC",

  category: "Networking",

  shortDescription:
    "Programmable network interface card that offloads networking and security tasks.",

  overview:
    "SmartNICs reduce CPU utilization by processing networking functions directly on the card.",

  whyItMatters:
    "Improves efficiency in cloud and AI data centers.",

  architecture:
    "CPU → SmartNIC → Network",

  howItWorks:
    "Networking tasks execute on dedicated processors inside the NIC.",

  image: "/images/infrastructure/smartnic.png",

  difficulty: "Intermediate",

  readTime: "8 min",

  manufacturer: [
    "NVIDIA",
    "Intel",
    "AMD"
  ],

  power: "20W - 60W",

  interfaces: [
    "PCIe"
  ],

  applications: [
    "Cloud",
    "Security",
    "Networking"
  ],

  keyFacts: [
    "Offloads networking.",
    "Reduces CPU utilization.",
    "Programmable."
  ],

  gallery: [
    "/images/infrastructure/smartnic.png"
  ],

  related: [
    "connectx",
    "dpu"
  ],

  videos: [
    {
      title: "SmartNIC Explained",
      url: "https://www.youtube.com/results?search_query=smartnic"
    }
  ]
},

{
  slug: "fiber",

  name: "Fiber Optics",

  category: "Networking",

  shortDescription:
    "High-speed optical cables used to connect AI infrastructure.",

  overview:
    "Fiber optic cables transmit data using pulses of light, enabling extremely high bandwidth over long distances.",

  whyItMatters:
    "Large AI data centers depend on fiber for reliable, high-speed communication.",

  architecture:
    "NIC → Fiber → Switch",

  howItWorks:
    "Optical transceivers convert electrical signals into light and back again.",

  image: "/images/infrastructure/fiber.png",

  difficulty: "Beginner",

  readTime: "7 min",

  manufacturer: [
    "Corning",
    "CommScope"
  ],

  power: "Passive",

  interfaces: [
    "LC",
    "MPO"
  ],

  applications: [
    "Data Centers",
    "AI Clusters",
    "Telecommunications"
  ],

  keyFacts: [
    "Uses light instead of electricity.",
    "Very long transmission distance.",
    "High bandwidth."
  ],

  gallery: [
    "/images/infrastructure/fiber.png"
  ],

  related: [
    "ethernet",
    "switch"
  ],

  videos: [
    {
      title: "Fiber Optics Explained",
      url: "https://www.youtube.com/results?search_query=fiber+optics"
    }
  ]
},

{
  slug: "switch",

  name: "Network Switch",

  category: "Networking",

  shortDescription:
    "Connects multiple servers and networking devices together.",

  overview:
    "Network switches intelligently forward data between servers, storage systems and network appliances.",

  whyItMatters:
    "Every AI cluster depends on switches to connect thousands of servers efficiently.",

  architecture:
    "Server → Switch → AI Cluster",

  howItWorks:
    "Switches examine packet headers and forward traffic to the correct destination.",

  image: "/images/infrastructure/switch.png",

  difficulty: "Beginner",

  readTime: "8 min",

  manufacturer: [
    "Cisco",
    "Arista",
    "NVIDIA",
    "Juniper"
  ],

  power: "200W - 3000W",

  interfaces: [
    "Ethernet",
    "InfiniBand"
  ],

  applications: [
    "Enterprise",
    "Cloud",
    "AI Data Centers"
  ],

  keyFacts: [
    "Connects servers together.",
    "Supports thousands of ports.",
    "Foundation of AI networking."
  ],

  gallery: [
    "/images/infrastructure/switch.png"
  ],

  related: [
    "ethernet",
    "infiniband",
    "connectx"
  ],

  videos: [
    {
      title: "Network Switch Explained",
      url: "https://www.youtube.com/results?search_query=network+switch"
    }
  ]
},

{
  slug: "psu",

  name: "Power Supply Unit (PSU)",

  category: "Power",

  shortDescription:
    "Converts AC power into regulated DC power for server components.",

  overview:
    "A PSU converts incoming alternating current (AC) from the electrical grid into multiple regulated direct current (DC) voltages required by CPUs, GPUs, memory, storage, and networking devices.",

  whyItMatters:
    "Without a reliable PSU, none of the hardware inside an AI server can operate safely.",

  architecture:
    "Utility Power → PSU → Motherboard → CPU / GPU / Memory",

  howItWorks:
    "The PSU converts, filters, and regulates electrical power before distributing it throughout the server.",

  image: "/images/infrastructure/psu.png",

  difficulty: "Beginner",

  readTime: "7 min",

  manufacturer: [
    "Delta",
    "Lite-On",
    "Flex",
    "Super Flower"
  ],

  power: "800W - 3200W",

  interfaces: [
    "AC Input",
    "DC Output"
  ],

  applications: [
    "Servers",
    "AI Infrastructure",
    "Enterprise Computing"
  ],

  keyFacts: [
    "Converts AC to DC.",
    "High efficiency (80 Plus Platinum/Titanium).",
    "Redundant power supplies improve availability."
  ],

  gallery: [
    "/images/infrastructure/psu.png"
  ],

  related: [
    "ups",
    "pdu",
    "vrm"
  ],

  videos: [
    {
      title: "How Server Power Supplies Work",
      url: "https://www.youtube.com/results?search_query=server+power+supply"
    }
  ]
},

{
  slug: "ups",

  name: "UPS",

  category: "Power",

  shortDescription:
    "Provides backup power during electrical interruptions.",

  overview:
    "A UPS protects servers against outages and voltage fluctuations by supplying temporary battery power.",

  whyItMatters:
    "Prevents data loss and allows graceful shutdown during power failures.",

  architecture:
    "Utility → UPS → PDU → Server",

  howItWorks:
    "When utility power fails, batteries immediately provide power until generators or backup systems take over.",

  image: "/images/infrastructure/ups.png",

  difficulty: "Beginner",

  readTime: "8 min",

  manufacturer: [
    "Schneider Electric",
    "Eaton",
    "Vertiv"
  ],

  power: "5kVA - 2MVA",

  interfaces: [
    "AC"
  ],

  applications: [
    "Data Centers",
    "Hospitals",
    "Enterprise"
  ],

  keyFacts: [
    "Battery backup.",
    "Protects against outages.",
    "Supports graceful shutdown."
  ],

  gallery: [
    "/images/infrastructure/ups.png"
  ],

  related: [
    "psu",
    "pdu"
  ],

  videos: [
    {
      title: "UPS Explained",
      url: "https://www.youtube.com/results?search_query=ups+data+center"
    }
  ]
},

{
  slug: "pdu",

  name: "Power Distribution Unit (PDU)",

  category: "Power",

  shortDescription:
    "Distributes electrical power to servers inside a rack.",

  overview:
    "PDUs receive power from UPS systems and safely distribute electricity to rack-mounted equipment.",

  whyItMatters:
    "Every rack depends on PDUs for organized and monitored power distribution.",

  architecture:
    "UPS → PDU → Servers",

  howItWorks:
    "The PDU routes electrical circuits to multiple devices while monitoring power usage.",

  image: "/images/infrastructure/pdu.png",

  difficulty: "Beginner",

  readTime: "7 min",

  manufacturer: [
    "APC",
    "Vertiv",
    "Raritan"
  ],

  power: "Variable",

  interfaces: [
    "C13",
    "C19"
  ],

  applications: [
    "Server Racks",
    "Data Centers"
  ],

  keyFacts: [
    "Rack mounted.",
    "Distributes electricity.",
    "Can monitor power consumption."
  ],

  gallery: [
    "/images/infrastructure/pdu.png"
  ],

  related: [
    "ups",
    "psu"
  ],

  videos: [
    {
      title: "What is a PDU?",
      url: "https://www.youtube.com/results?search_query=data+center+pdu"
    }
  ]
},

{
  slug: "vrm",

  name: "Voltage Regulator Module (VRM)",

  category: "Power",

  shortDescription:
    "Converts DC voltage into precise levels required by CPUs and GPUs.",

  overview:
    "VRMs deliver stable voltage to processors, ensuring reliable performance under changing workloads.",

  whyItMatters:
    "Modern CPUs and GPUs require extremely stable voltage for AI workloads.",

  architecture:
    "PSU → VRM → CPU / GPU",

  howItWorks:
    "The VRM continuously adjusts voltage based on processor demand.",

  image: "/images/infrastructure/vrm.png",

  difficulty: "Intermediate",

  readTime: "8 min",

  manufacturer: [
    "Infineon",
    "Texas Instruments",
    "Renesas"
  ],

  power: "Variable",

  interfaces: [
    "Motherboard"
  ],

  applications: [
    "Servers",
    "Workstations"
  ],

  keyFacts: [
    "Provides stable voltage.",
    "Essential for CPUs and GPUs.",
    "Improves reliability."
  ],

  gallery: [
    "/images/infrastructure/vrm.png"
  ],

  related: [
    "cpu",
    "gpu",
    "psu"
  ],

  videos: [
    {
      title: "VRM Explained",
      url: "https://www.youtube.com/results?search_query=vrm+explained"
    }
  ]
},

{
  slug: "air-cooling",

  name: "Air Cooling",

  category: "Cooling",

  shortDescription:
    "Uses fans and airflow to remove heat from server components.",

  overview:
    "Air cooling is the traditional method of removing heat from servers. Fans move cool air through the chassis while heat sinks transfer heat away from CPUs, GPUs, memory and other components.",

  whyItMatters:
    "Reliable airflow keeps processors within safe operating temperatures and prevents thermal throttling.",

  architecture:
    "Cool Air → Fans → Heat Sink → CPU/GPU → Hot Air",

  howItWorks:
    "Fans move air across heat sinks where heat is transferred into the airflow and exhausted from the server.",

  image: "/images/infrastructure/air-cooling.png",

  difficulty: "Beginner",

  readTime: "7 min",

  manufacturer: [
    "Delta",
    "Nidec",
    "Sunon"
  ],

  power: "10W - 300W",

  interfaces: [
    "PWM Fan Header"
  ],

  applications: [
    "Enterprise Servers",
    "Data Centers",
    "Workstations"
  ],

  keyFacts: [
    "Most common cooling technology.",
    "Uses high-speed fans.",
    "Lower installation cost than liquid cooling."
  ],

  gallery: [
    "/images/infrastructure/air-cooling.png"
  ],

  related: [
    "heat-sink",
    "fan",
    "liquid-cooling"
  ],

  videos: [
    {
      title: "Air Cooling Explained",
      url: "https://www.youtube.com/results?search_query=server+air+cooling"
    }
  ]
},

{
  slug: "heat-sink",

  name: "Heat Sink",

  category: "Cooling",

  shortDescription:
    "Transfers heat away from CPUs and GPUs into the surrounding air.",

  overview:
    "Heat sinks are aluminum or copper structures with fins that increase surface area, allowing heat to dissipate efficiently.",

  whyItMatters:
    "Without heat sinks, processors would overheat within seconds.",

  architecture:
    "CPU/GPU → Thermal Paste → Heat Sink → Air",

  howItWorks:
    "Heat moves through thermal paste into the heat sink where airflow removes it.",

  image: "/images/infrastructure/heat-sink.png",

  difficulty: "Beginner",

  readTime: "6 min",

  manufacturer: [
    "Cooler Master",
    "Noctua",
    "Dynatron"
  ],

  power: "Passive",

  interfaces: [
    "Processor Socket"
  ],

  applications: [
    "Servers",
    "AI Systems"
  ],

  keyFacts: [
    "Usually aluminum or copper.",
    "Works together with fans.",
    "Large surface area improves cooling."
  ],

  gallery: [
    "/images/infrastructure/heat-sink.png"
  ],

  related: [
    "air-cooling",
    "fan"
  ],

  videos: [
    {
      title: "Heat Sink Explained",
      url: "https://www.youtube.com/results?search_query=heat+sink"
    }
  ]
},

{
  slug: "fan",

  name: "Server Fan",

  category: "Cooling",

  shortDescription:
    "Moves air through servers to remove heat from components.",

  overview:
    "High-speed server fans create airflow through the chassis, cooling processors, memory, storage and networking equipment.",

  whyItMatters:
    "Without airflow, even the best heat sink cannot remove enough heat.",

  architecture:
    "Fan → Airflow → Heat Sink",

  howItWorks:
    "Brushless DC motors rotate blades at high speed to create airflow.",

  image: "/images/infrastructure/fan.png",

  difficulty: "Beginner",

  readTime: "5 min",

  manufacturer: [
    "Delta",
    "Nidec"
  ],

  power: "10W - 80W",

  interfaces: [
    "PWM"
  ],

  applications: [
    "Servers",
    "Networking"
  ],

  keyFacts: [
    "High RPM.",
    "PWM controlled.",
    "Critical for airflow."
  ],

  gallery: [
    "/images/infrastructure/fan.png"
  ],

  related: [
    "air-cooling",
    "heat-sink"
  ],

  videos: [
    {
      title: "Server Fans",
      url: "https://www.youtube.com/results?search_query=server+fans"
    }
  ]
},

{
  slug: "liquid-cooling",

  name: "Liquid Cooling",

  category: "Cooling",

  shortDescription:
    "Uses coolant instead of air to remove heat from high-power AI servers.",

  overview:
    "Liquid cooling transfers heat far more efficiently than air, making it ideal for modern AI GPUs consuming hundreds of watts each.",

  whyItMatters:
    "As GPU power consumption increases, liquid cooling becomes increasingly important for maintaining performance and energy efficiency.",

  architecture:
    "CPU/GPU → Cold Plate → Coolant → CDU → Heat Exchanger",

  howItWorks:
    "Coolant circulates through cold plates attached to processors, carrying heat to an external cooling system.",

  image: "/images/infrastructure/liquid-cooling.png",

  difficulty: "Intermediate",

  readTime: "9 min",

  manufacturer: [
    "Vertiv",
    "CoolIT",
    "Schneider Electric"
  ],

  power: "Cooling Infrastructure",

  interfaces: [
    "Quick Disconnect"
  ],

  applications: [
    "AI Data Centers",
    "HPC"
  ],

  keyFacts: [
    "Much more efficient than air.",
    "Supports high-density GPU servers.",
    "Reduces fan power consumption."
  ],

  gallery: [
    "/images/infrastructure/liquid-cooling.png"
  ],

  related: [
    "cdu",
    "heat-sink",
    "air-cooling"
  ],

  videos: [
    {
      title: "Liquid Cooling Explained",
      url: "https://www.youtube.com/results?search_query=liquid+cooling+data+center"
    }
  ]
},

{
  slug: "cdu",

  name: "Coolant Distribution Unit (CDU)",

  category: "Cooling",

  shortDescription:
    "Circulates and manages coolant in liquid-cooled AI data centers.",

  overview:
    "The CDU pumps coolant through liquid cooling loops while regulating temperature, pressure and flow.",

  whyItMatters:
    "Without a CDU, large liquid-cooled AI clusters cannot operate safely.",

  architecture:
    "CDU → Coolant → Cold Plate → GPU",

  howItWorks:
    "The CDU continuously pumps coolant, removes heat and returns cooled liquid to the servers.",

  image: "/images/infrastructure/cdu.png",

  difficulty: "Advanced",

  readTime: "10 min",

  manufacturer: [
    "Vertiv",
    "CoolIT"
  ],

  power: "Facility Cooling",

  interfaces: [
    "Liquid Loop"
  ],

  applications: [
    "Hyperscale AI Data Centers"
  ],

  keyFacts: [
    "Controls coolant flow.",
    "Maintains coolant temperature.",
    "Supports liquid-cooled GPU clusters."
  ],

  gallery: [
    "/images/infrastructure/cdu.png"
  ],

  related: [
    "liquid-cooling"
  ],

  videos: [
    {
      title: "CDU Explained",
      url: "https://www.youtube.com/results?search_query=coolant+distribution+unit"
    }
  ]
},

{
  slug: "baseboard",

  name: "Baseboard (Motherboard)",

  category: "Motherboard",

  shortDescription:
    "The primary circuit board connecting all server components.",

  overview:
    "The baseboard, often called the motherboard, provides the physical and electrical connections for CPUs, memory, storage, networking, power delivery, and expansion cards.",

  whyItMatters:
    "Every server component communicates through the motherboard. It is the foundation of the entire server.",

  architecture:
    "CPU + Memory + PCIe + Storage + Networking + Power",

  howItWorks:
    "Copper traces on the motherboard route power and high-speed signals between every component.",

  image: "/images/infrastructure/baseboard.png",

  difficulty: "Beginner",

  readTime: "8 min",

  manufacturer: [
    "Supermicro",
    "ASUS",
    "Gigabyte",
    "Dell",
    "HPE"
  ],

  power: "Receives power from PSU",

  interfaces: [
    "CPU Socket",
    "DIMM Slots",
    "PCIe Slots",
    "M.2",
    "SATA"
  ],

  applications: [
    "Servers",
    "Workstations",
    "AI Infrastructure"
  ],

  keyFacts: [
    "Connects every server component.",
    "Contains multiple communication buses.",
    "Provides power distribution."
  ],

  gallery: [
    "/images/infrastructure/baseboard.png"
  ],

  related: [
    "cpu",
    "memory",
    "pcie",
    "bmc"
  ],

  videos: [
    {
      title: "Server Motherboard Explained",
      url: "https://www.youtube.com/results?search_query=server+motherboard"
    }
  ]
},

{
  slug: "bmc",

  name: "Baseboard Management Controller (BMC)",

  category: "Management",

  shortDescription:
    "Dedicated processor for remote server management.",

  overview:
    "The BMC allows administrators to monitor, configure, and troubleshoot servers even when the operating system is offline.",

  whyItMatters:
    "Large data centers rely on BMCs for remote management and monitoring.",

  architecture:
    "Administrator → Network → BMC → Server",

  howItWorks:
    "The BMC continuously monitors hardware sensors and allows remote access through a dedicated management interface.",

  image: "/images/infrastructure/bmc.png",

  difficulty: "Intermediate",

  readTime: "8 min",

  manufacturer: [
    "ASPEED",
    "Nuvoton"
  ],

  power: "Low Power",

  interfaces: [
    "Dedicated Ethernet",
    "IPMI"
  ],

  applications: [
    "Remote Management",
    "Monitoring"
  ],

  keyFacts: [
    "Works even when the OS is off.",
    "Monitors temperatures.",
    "Supports remote console."
  ],

  gallery: [
    "/images/infrastructure/bmc.png"
  ],

  related: [
    "bios",
    "uefi",
    "baseboard"
  ],

  videos: [
    {
      title: "What is a BMC?",
      url: "https://www.youtube.com/results?search_query=bmc+server"
    }
  ]
},

{
  slug: "bios",

  name: "BIOS",

  category: "Firmware",

  shortDescription:
    "Basic firmware that initializes server hardware during startup.",

  overview:
    "The BIOS performs hardware initialization and launches the operating system boot process.",

  whyItMatters:
    "Without BIOS, the server cannot begin the startup sequence.",

  architecture:
    "Power On → BIOS → Hardware Check → Boot",

  howItWorks:
    "The BIOS performs POST (Power-On Self Test), initializes hardware, and hands control to the operating system.",

  image: "/images/infrastructure/bios.png",

  difficulty: "Beginner",

  readTime: "6 min",

  manufacturer: [
    "AMI",
    "Phoenix"
  ],

  power: "Firmware",

  interfaces: [
    "Firmware ROM"
  ],

  applications: [
    "Server Boot"
  ],

  keyFacts: [
    "Runs before the operating system.",
    "Performs POST.",
    "Initializes hardware."
  ],

  gallery: [
    "/images/infrastructure/bios.png"
  ],

  related: [
    "uefi",
    "bmc"
  ],

  videos: [
    {
      title: "BIOS Explained",
      url: "https://www.youtube.com/results?search_query=bios+explained"
    }
  ]
},

{
  slug: "uefi",

  name: "UEFI",

  category: "Firmware",

  shortDescription:
    "Modern firmware replacing the traditional BIOS.",

  overview:
    "UEFI provides faster startup, better security, and support for modern storage devices compared to legacy BIOS.",

  whyItMatters:
    "Nearly all modern AI servers boot using UEFI.",

  architecture:
    "Power On → UEFI → Boot Manager → Operating System",

  howItWorks:
    "UEFI initializes hardware and loads the operating system through a modern boot environment.",

  image: "/images/infrastructure/uefi.png",

  difficulty: "Beginner",

  readTime: "6 min",

  manufacturer: [
    "AMI",
    "Phoenix",
    "Insyde"
  ],

  power: "Firmware",

  interfaces: [
    "UEFI Firmware"
  ],

  applications: [
    "Server Boot",
    "Security"
  ],

  keyFacts: [
    "Replaces BIOS.",
    "Supports Secure Boot.",
    "Faster startup."
  ],

  gallery: [
    "/images/infrastructure/uefi.png"
  ],

  related: [
    "bios",
    "bmc"
  ],

  videos: [
    {
      title: "UEFI Explained",
      url: "https://www.youtube.com/results?search_query=uefi"
    }
  ]
},

{
  slug: "chipset",

  name: "Chipset",

  category: "Motherboard",

  shortDescription:
    "Controls communication between the CPU and motherboard devices.",

  overview:
    "The chipset manages data flow between processors, storage, networking, USB, and other peripherals.",

  whyItMatters:
    "It enables coordinated communication between many components in the server.",

  architecture:
    "CPU ⇄ Chipset ⇄ Storage / USB / Network",

  howItWorks:
    "The chipset routes data between devices that are not directly connected to the CPU.",

  image: "/images/infrastructure/chipset.png",

  difficulty: "Intermediate",

  readTime: "7 min",

  manufacturer: [
    "Intel",
    "AMD"
  ],

  power: "Low Power",

  interfaces: [
    "Motherboard"
  ],

  applications: [
    "Servers",
    "Workstations"
  ],

  keyFacts: [
    "Controls peripheral communication.",
    "Supports storage controllers.",
    "Supports USB and networking."
  ],

  gallery: [
    "/images/infrastructure/chipset.png"
  ],

  related: [
    "baseboard",
    "cpu"
  ],

  videos: [
    {
      title: "Chipset Explained",
      url: "https://www.youtube.com/results?search_query=motherboard+chipset"
    }
  ]
},


{
  slug: "ai-server",

  name: "AI Server",

  category: "Infrastructure",

  shortDescription:
    "A high-performance server designed specifically for Artificial Intelligence workloads.",

  overview:
    "AI servers combine powerful CPUs, multiple GPUs, large amounts of memory, high-speed storage, advanced networking and efficient cooling to train and run machine learning models. They are the foundation of modern AI infrastructure.",

  whyItMatters:
    "Artificial Intelligence applications require enormous computational resources that traditional servers often cannot provide efficiently.",

  architecture:
    "Power → Motherboard → CPU → PCIe → GPUs → Memory → Storage → Networking",

  howItWorks:
    "The CPU coordinates workloads while GPUs perform parallel computation. Storage supplies datasets, networking connects multiple servers, and cooling removes heat generated by high-performance components.",

  image: "/images/infrastructure/ai-server.png",

  difficulty: "Beginner",

  readTime: "12 min",

  manufacturer: [
    "Dell Technologies",
    "HPE",
    "Lenovo",
    "Supermicro",
    "ASUS",
    "Gigabyte"
  ],

  power: "2kW–15kW",

  interfaces: [
    "PCIe Gen5",
    "Ethernet",
    "InfiniBand"
  ],

  applications: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Scientific Computing"
  ],

  keyFacts: [
    "Contains CPUs and multiple GPUs.",
    "Designed for AI training and inference.",
    "Requires advanced cooling.",
    "Supports high-speed networking."
  ],

  gallery: [
    "/images/infrastructure/ai-server.png"
  ],

  related: [
    "cpu",
    "gpu",
    "memory",
    "pcie",
    "networking"
  ],

  videos: [
    {
      title: "What is an AI Server?",
      url: "https://www.youtube.com/results?search_query=AI+server"
    }
  ]
},

{
  slug: "rack-server",

  name: "Rack Server",

  category: "Infrastructure",

  shortDescription:
    "A server designed to be mounted inside a standard equipment rack.",

  overview:
    "Rack servers are the most common server form factor in enterprise data centers. They are measured in rack units (U) such as 1U, 2U and 4U.",

  whyItMatters:
    "Rack servers maximize space, simplify cable management and improve scalability.",

  architecture:
    "Rack → Rack Server → CPU → GPU → Storage → Networking",

  howItWorks:
    "Servers slide into standardized racks, allowing hundreds of systems to be deployed efficiently.",

  image: "/images/infrastructure/rack-server.png",

  difficulty: "Beginner",

  readTime: "8 min",

  manufacturer: [
    "Dell Technologies",
    "HPE",
    "Lenovo",
    "Supermicro"
  ],

  power: "500W–8kW",

  interfaces: [
    "Ethernet",
    "PCIe",
    "USB"
  ],

  applications: [
    "Enterprise",
    "Cloud",
    "AI",
    "Virtualization"
  ],

  keyFacts: [
    "Mounted in 19-inch racks.",
    "Available in multiple rack heights.",
    "Optimized for dense deployments."
  ],

  gallery: [
    "/images/infrastructure/rack-server.png"
  ],

  related: [
    "rack",
    "ai-server"
  ],

  videos: [
    {
      title: "Rack Servers Explained",
      url: "https://www.youtube.com/results?search_query=rack+server"
    }
  ]
},

{
  slug: "blade-server",

  name: "Blade Server",

  category: "Infrastructure",

  shortDescription:
    "A compact server that shares power, cooling and networking through a blade enclosure.",

  overview:
    "Blade servers reduce hardware duplication by sharing infrastructure components within a common chassis.",

  whyItMatters:
    "Blade systems improve density and simplify management in enterprise environments.",

  architecture:
    "Blade Chassis → Blade Server → CPU → Memory → Networking",

  howItWorks:
    "Each blade is an independent server inserted into a shared enclosure.",

  image: "/images/infrastructure/blade-server.png",

  difficulty: "Intermediate",

  readTime: "8 min",

  manufacturer: [
    "Cisco",
    "Dell Technologies",
    "HPE"
  ],

  power: "Shared Chassis",

  interfaces: [
    "Ethernet",
    "PCIe"
  ],

  applications: [
    "Virtualization",
    "Enterprise Computing"
  ],

  keyFacts: [
    "High-density computing.",
    "Shared cooling.",
    "Shared networking."
  ],

  gallery: [
    "/images/infrastructure/blade-server.png"
  ],

  related: [
    "rack-server",
    "rack"
  ],

  videos: [
    {
      title: "Blade Servers Explained",
      url: "https://www.youtube.com/results?search_query=blade+server"
    }
  ]
},

{
  slug: "server-chassis",

  name: "Server Chassis",

  category: "Infrastructure",

  shortDescription:
    "The physical enclosure that houses server components.",

  overview:
    "The server chassis provides structural support, airflow management and mounting locations for processors, storage, power supplies and networking hardware.",

  whyItMatters:
    "Proper chassis design improves cooling, serviceability and reliability.",

  architecture:
    "Front → Fans → CPU → GPU → Storage → PSU → Rear I/O",

  howItWorks:
    "The chassis directs airflow while protecting internal hardware.",

  image: "/images/infrastructure/server-chassis.png",

  difficulty: "Beginner",

  readTime: "7 min",

  manufacturer: [
    "Supermicro",
    "Dell Technologies",
    "HPE"
  ],

  power: "Supports redundant PSUs",

  interfaces: [
    "Drive Bays",
    "PCIe Slots",
    "Fan Modules"
  ],

  applications: [
    "Servers",
    "AI Infrastructure"
  ],

  keyFacts: [
    "Provides structural support.",
    "Optimizes airflow.",
    "Simplifies maintenance."
  ],

  gallery: [
    "/images/infrastructure/server-chassis.png"
  ],

  related: [
    "rack-server",
    "baseboard",
    "psu"
  ],

  videos: [
    {
      title: "Server Chassis Explained",
      url: "https://www.youtube.com/results?search_query=server+chassis"
    }
  ]
},

{
  slug: "rack",

  name: "Data Center Rack",

  category: "Infrastructure",

  shortDescription:
    "A standardized enclosure used to organize and house IT equipment.",

  overview:
    "Most enterprise data centers use 42U or 48U racks to mount servers, networking equipment, storage systems and power distribution units.",

  whyItMatters:
    "Racks improve scalability, airflow, cable management and maintenance.",

  architecture:
    "Top-of-Rack Switch → Servers → Storage → PDU",

  howItWorks:
    "Equipment is mounted vertically in rack units while power and networking are routed through organized cable paths.",

  image: "/images/infrastructure/rack.png",

  difficulty: "Beginner",

  readTime: "8 min",

  manufacturer: [
    "APC",
    "Vertiv",
    "Rittal"
  ],

  power: "Up to 100kW+ per rack (depending on design)",

  interfaces: [
    "Rack Rails",
    "PDU",
    "Cable Management"
  ],

  applications: [
    "Enterprise Data Centers",
    "Cloud",
    "AI Infrastructure"
  ],

  keyFacts: [
    "Measured in rack units (U).",
    "Supports standardized equipment.",
    "Improves airflow management."
  ],

  gallery: [
    "/images/infrastructure/rack.png"
  ],

  related: [
    "rack-server",
    "ai-server",
    "pdu"
  ],

  videos: [
    {
      title: "Data Center Rack Explained",
      url: "https://www.youtube.com/results?search_query=data+center+rack"
    }
  ]
},

{
  slug: "ai-cluster",

  name: "AI Cluster",

  category: "Infrastructure",

  shortDescription:
    "A collection of interconnected AI servers working together to train and run large machine learning models.",

  overview:
    "An AI cluster combines many GPU servers through high-speed networking such as InfiniBand or Ethernet. Instead of relying on a single server, workloads are distributed across multiple systems, enabling the training of very large AI models.",

  whyItMatters:
    "Modern foundation models require thousands of GPUs working together. AI clusters make this possible.",

  architecture:
    "GPU Servers → High-Speed Network → Shared Storage → AI Cluster",

  howItWorks:
    "Training workloads are divided among many GPUs and synchronized over the network while accessing shared datasets.",

  image: "/images/infrastructure/ai-cluster.png",

  difficulty: "Intermediate",

  readTime: "12 min",

  manufacturer: [
    "Vendor Neutral"
  ],

  power: "100kW–10MW+",

  interfaces: [
    "InfiniBand",
    "Ethernet",
    "NVLink"
  ],

  applications: [
    "Large Language Models",
    "Computer Vision",
    "Scientific Computing"
  ],

  keyFacts: [
    "Contains multiple AI servers.",
    "Uses high-speed networking.",
    "Supports distributed training."
  ],

  gallery: [
    "/images/infrastructure/ai-cluster.png"
  ],

  related: [
    "ai-server",
    "gpu",
    "infiniband",
    "switch"
  ],

  videos: [
    {
      title: "What is an AI Cluster?",
      url: "https://www.youtube.com/results?search_query=AI+cluster"
    }
  ]
},

{
  slug: "hpc",

  name: "High-Performance Computing (HPC)",

  category: "Infrastructure",

  shortDescription:
    "A computing environment designed to solve complex scientific and engineering problems.",

  overview:
    "HPC systems combine thousands of processors, GPUs, storage devices and networking components to solve problems much faster than traditional computers.",

  whyItMatters:
    "Many AI techniques evolved from HPC technologies, and both rely on large-scale parallel computing.",

  architecture:
    "Compute Nodes → High-Speed Network → Parallel Storage",

  howItWorks:
    "Workloads are divided into smaller tasks and processed simultaneously across many compute nodes.",

  image: "/images/infrastructure/hpc.png",

  difficulty: "Intermediate",

  readTime: "10 min",

  manufacturer: [
    "Vendor Neutral"
  ],

  power: "Variable",

  interfaces: [
    "InfiniBand",
    "Ethernet"
  ],

  applications: [
    "Weather Forecasting",
    "Research",
    "Drug Discovery",
    "Artificial Intelligence"
  ],

  keyFacts: [
    "Uses parallel computing.",
    "Supports scientific research.",
    "Often uses GPU acceleration."
  ],

  gallery: [
    "/images/infrastructure/hpc.png"
  ],

  related: [
    "ai-cluster",
    "gpu",
    "networking"
  ],

  videos: [
    {
      title: "HPC Explained",
      url: "https://www.youtube.com/results?search_query=high+performance+computing"
    }
  ]
},

{
  slug: "data-center",

  name: "Data Center",

  category: "Infrastructure",

  shortDescription:
    "A facility that houses servers, networking, storage, power and cooling systems.",

  overview:
    "Data centers provide the physical infrastructure required to operate cloud computing, AI, enterprise applications and digital services.",

  whyItMatters:
    "Nearly every online service depends on data centers for computing, storage and connectivity.",

  architecture:
    "Utility Power → UPS → PDU → Rack → AI Servers → Network",

  howItWorks:
    "Electricity powers racks of servers while cooling systems remove heat and networking connects systems to users and other facilities.",

  image: "/images/infrastructure/data-center.png",

  difficulty: "Beginner",

  readTime: "12 min",

  manufacturer: [
    "Vendor Neutral"
  ],

  power: "MW–GW Scale",

  interfaces: [
    "Power",
    "Networking",
    "Cooling"
  ],

  applications: [
    "Cloud Computing",
    "Artificial Intelligence",
    "Enterprise IT"
  ],

  keyFacts: [
    "Contains thousands of servers.",
    "Requires reliable power.",
    "Uses advanced cooling."
  ],

  gallery: [
    "/images/infrastructure/data-center.png"
  ],

  related: [
    "rack",
    "ai-server",
    "cooling",
    "power"
  ],

  videos: [
    {
      title: "How Data Centers Work",
      url: "https://www.youtube.com/results?search_query=data+center+explained"
    }
  ]
},

{
  slug: "hyperscale-data-center",

  name: "Hyperscale Data Center",

  category: "Infrastructure",

  shortDescription:
    "A very large data center designed for massive-scale cloud and AI computing.",

  overview:
    "Hyperscale data centers contain thousands of servers, extensive networking, large power systems and advanced cooling infrastructure to support cloud services and AI workloads.",

  whyItMatters:
    "The rapid growth of AI has increased demand for hyperscale facilities that can support extremely large compute clusters.",

  architecture:
    "Power → Cooling → Networking → AI Clusters → Storage",

  howItWorks:
    "Standardized infrastructure is deployed at scale, allowing computing resources to grow efficiently as demand increases.",

  image: "/images/infrastructure/hyperscale.png",

  difficulty: "Intermediate",

  readTime: "12 min",

  manufacturer: [
    "Vendor Neutral"
  ],

  power: "100MW+",

  interfaces: [
    "High-Speed Networking"
  ],

  applications: [
    "Cloud Services",
    "Artificial Intelligence"
  ],

  keyFacts: [
    "Large-scale infrastructure.",
    "Highly automated operations.",
    "Designed for rapid expansion."
  ],

  gallery: [
    "/images/infrastructure/hyperscale.png"
  ],

  related: [
    "data-center",
    "ai-cluster"
  ],

  videos: [
    {
      title: "Hyperscale Data Centers",
      url: "https://www.youtube.com/results?search_query=hyperscale+data+center"
    }
  ]
},

{
  slug: "ai-factory",

  name: "AI Factory",

  category: "Infrastructure",

  shortDescription:
    "A large-scale AI computing environment that transforms data and electricity into AI models and AI-powered services.",

  overview:
    "The term 'AI Factory' is increasingly used in the industry to describe integrated AI infrastructure where compute, storage, networking, power and cooling work together to build, train and deploy AI models.",

  whyItMatters:
    "Thinking of AI infrastructure as a complete system helps explain how hardware, software and facilities combine to support modern AI.",

  architecture:
    "Power → Cooling → AI Servers → Storage → Networking → AI Models",

  howItWorks:
    "AI workloads move through data preparation, model training, validation and deployment using coordinated infrastructure.",

  image: "/images/infrastructure/ai-factory.png",

  difficulty: "Intermediate",

  readTime: "10 min",

  manufacturer: [
    "Industry Concept"
  ],

  power: "Facility Scale",

  interfaces: [
    "Integrated Infrastructure"
  ],

  applications: [
    "Model Training",
    "Inference",
    "Research"
  ],

  keyFacts: [
    "Combines compute, storage and networking.",
    "Supports the AI lifecycle.",
    "Designed for scalable AI operations."
  ],

  gallery: [
    "/images/infrastructure/ai-factory.png"
  ],

  related: [
    "ai-cluster",
    "data-center",
    "ai-server"
  ],

  videos: [
    {
      title: "AI Infrastructure Overview",
      url: "https://www.youtube.com/results?search_query=AI+infrastructure"
    }
  ]
}

];