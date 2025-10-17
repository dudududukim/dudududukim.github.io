// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "collections for my personal projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "저의 교육 및 강의 경험 목록입니다.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-hobbies",
          title: "hobbies",
          description: "Duhyeon in rest Time.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hobbies/";
          },
        },{id: "post-where-should-i-focus",
        
          title: "Where should i focus?",
        
        description: "Thinking about my interests",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Where-should-i-focus/";
          
        },
      },{id: "post-jetson-nano-dev-log",
        
          title: "Jetson Nano Dev Log",
        
        description: "Jetson Nano object Tracking Dev Logs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/jetson-nano-dev-log/";
          
        },
      },{id: "post-cursor-amp-lovable",
        
          title: "Cursor &amp; Lovable",
        
        description: "AI agent-powered development workflow using Lovable for automated web application development.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/lovable_curosr/";
          
        },
      },{id: "post-best-practices-for-pytorch-training",
        
          title: "Best Practices for PyTorch Training",
        
        description: "Clean, efficient PyTorch code conventions, libraries, structure, best practices.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/good_code_for_pytorch/";
          
        },
      },{id: "post-tips-to-write-blog-md",
        
          title: "Tips to write blog .md",
        
        description: "this is the page for me to write the _posts markdown",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/key_features_of_blog/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-my-website-renewal-type-theme-️-al-folio",
          title: 'My website renewal (type-theme ➡️ al-folio) 🧑‍💻',
          description: "",
          section: "News",},{id: "news-expected-to-start-m-s-in-semiconductor-system-engineering-at-idslab-march-2026",
          title: 'Expected to start M.S. in Semiconductor System Engineering at IDSLab, March 2026. ✅...',
          description: "",
          section: "News",},{id: "projects-systolic-array-and-vector-multiplier",
          title: 'Systolic Array and Vector Multiplier',
          description: "based on FPGA Implementation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Comparison%20of%20Systolic%20and%20VM/";
            },},{id: "projects-d2f-digital-2-film",
          title: 'd2f (digital 2 film)',
          description: "deep learning-based film grain and color synthesis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/d2f/";
            },},{id: "projects-dct-module-area-optimization",
          title: 'DCT Module area optimization',
          description: "methologys for VLSI optimizations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dct/";
            },},{id: "projects-jetson-nano-4gb-for-ai",
          title: 'Jetson Nano 4GB for AI',
          description: "Utilizing Jetson Nano for my pet monitoring",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jetson_nano_dev_log/";
            },},{id: "projects-lyrics-based-music-recommandation",
          title: 'Lyrics based Music recommandation',
          description: "with klue/bert-base fine-tunning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lyrics_sentiment_NLP/";
            },},{id: "projects-pytorch-seminar-2025",
          title: 'PyTorch Seminar 2025',
          description: "Lecturing PyTorch training code structure and Neural Style Transfer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pytorhc_seminar_2025/";
            },},{id: "projects-smart-shared-fridge-system",
          title: 'Smart Shared Fridge System',
          description: "embedded system with RPi and OpenCV",
          section: "Projects",handler: () => {
              window.location.href = "/projects/smart_fridge/";
            },},{id: "projects-uegan-mps-implementation",
          title: 'UEGAN mps Implementation',
          description: "focusing on changes for Apple Silicon (mps) support.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/uegan_mps/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%64%68%6C%75%63%6B@%6E%61%76%65%72.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dudududukim", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/duhyeon-kim-6623082b1", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
