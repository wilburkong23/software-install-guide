const translations = {
  zh: {
    sidebarGroups: ["下载与安装", "软硬件规格要求", "FAQ"],
    lang: "zh-CN",
    brand: "轻链 LightChain",
    manual: "试衣终端用户手册",
    languageLabel: "切换语言",
    nav: ["下载、安装与更新", "设备规格", "常见问题"],
    home: "手册首页",
    heading: "试衣终端",
    intro: "从第一次安装到每一次更新，找到适合你设备的操作指引。",
    choose: "选择你的设备",
    devices: ["iPad", "安卓终端", "安卓平板"],
    channels: [
      "通过 TestFlight 安装与更新",
      "通过轻链更新助手安装与更新",
      "通过轻链更新助手安装与更新",
    ],
    start: "查看安装指引",
    version: "适用版本",
    versionHelp: "如何查看 App 版本",
    specsTitle: "找到适合的设备。",
    specsDesc: "了解系统要求、推荐配置和网络条件，为顺畅使用做好准备。",
    specsLink: "查看软硬件规格",
    faqTitle: "遇到问题？从这里开始。",
    faqDesc: "查看安装与更新中的常见问题，找到下一步处理方法。",
    faqLink: "查看常见问题",
    footer: "试衣终端：用户手册",
    updated: "适用 V1.1–V1.2：更新于 2026 年 11 月 9 日",
    skip: "跳转到正文",
    scenes: ["首次安装", "老版本换装", "现有版本更新"],
    preparation: "开始前，请先检查",
    ipadPrep:
      "请在您需要安装应用的 iPad 上确认系统为 <b>iPadOS 16.4 或以上</b>，并对照设备规格检查<b>芯片、内存、存储及摄像头等硬件满足最低要求</b>。存储容量至少为 <b>64GB</b>，并留有足够可用空间；若芯片版本低于 A14，请与技术人员确认是否满足安装条件。准备好 Apple 账户及稳定网络，并保持供电。",
    androidPrep:
      "请在您需要安装应用的安卓设备上确认系统为 <b>Android 12 或以上</b>，并对照对应设备规格核对<b>处理器、内存、存储、屏幕及摄像头</b>。当前最低选型建议为 <b>8GB 内存、64GB 存储</b>，并保留安装、更新所需空间。连接稳定网络并保持供电，准备好官方提供的登录账号。",
    legacy: "适用范围待确认",
    legacyIpadTitle: "安装前，请删除旧应用",
    legacyAndroid:
      "旧版设备换装需要卸载旧的试衣终端 App 和轻链更新助手。请先联系官方确认当前版本属于需要换装的范围，并确认照片保存及账号信息，再继续以下安装步骤。",
    legacyIpad:
      "请在您需要安装应用的 iPad 上，先保存所需照片并确认登录账号，再<b>删除旧版本的试衣终端应用</b>。安装新版本前，请确认旧应用已删除，然后按以下步骤安装。",
    installed: "完成后确认",
    installedText:
      "打开试衣终端，核对实际 App 版本与官方通知一致，并确认账号、门店内容及相机权限。更新助手或 TestFlight 安装完成后，还需要完成试衣终端 App 的安装。",
    video: "视频教程",
    videoText: "正在准备，当前请按上方步骤操作。",
    ipadSteps: [
      [
        "安装 TestFlight",
        "请在您需要安装应用的 iPad 上打开 App Store，获取 Apple 提供的 TestFlight，安装后打开并完成首次设置。",
        "获取 TestFlight",
        "https://apps.apple.com/app/testflight/id899247664",
      ],
      [
        "返回此页，打开应用邀请",
        "完成 TestFlight 设置后，请在您需要安装应用的 iPad 上回到本手册，点击下方入口，在邀请页选择“在 TestFlight 中查看”。 如果 TestFlight 提示需要输入邀请码，请在该 iPad 上返回本手册，点击下方“安装试衣终端”，再从邀请页进入 TestFlight。",
        "安装试衣终端",
        "https://testflight.apple.com/join/NdJvT2Gt",
      ],
      [
        "接受邀请并安装",
        "请在该 iPad 的 TestFlight 中核对应用名称为试衣终端，首次加入时点击“接受”，再点击“安装”。",
      ],
      [
        "打开试衣终端",
        "等待安装完成，点击“打开”，或在主屏幕找到试衣终端。",
      ],
    ],
    androidSteps: [
      [
        "下载轻链更新助手",
        "请在您需要安装应用的安卓设备上，使用浏览器打开下载页，通过右上角语言菜单选择“中文”，再向下滑动找到“轻链更新助手”，点击其下方的“下载 Updater App”。",
        "打开下载页",
        "https://tryon-mirror.lightchainai.com/d",
      ],
      [
        "安装更新助手",
        "请在您需要安装应用的安卓设备上，从浏览器下载记录或文件管理中打开 APK。当前版本通过官方安装包安装，应用商店上架正在推进中。如出现“信任第三方来源”“允许来自此来源”或类似提示，请开启当前浏览器或文件管理器的允许安装开关，返回后继续安装。受管设备请联系管理员。",
      ],
      [
        "安装试衣终端 App",
        "请在您需要安装应用的安卓设备上打开轻链更新助手，点击“检查并更新”。若系统要求允许助手安装应用，按提示授权后继续下载和安装。",
      ],
      [
        "打开并核对版本",
        "安装结束后打开试衣终端。助手的“业务版本”仅用于辅助排查，请以 App 内的当前版本为准。",
      ],
    ],
    ipadUpdate: [
      ["结束当前体验", "保存本次照片，保持网络与电量。"],
      [
        "在 TestFlight 中更新",
        "请在您需要更新应用的 iPad 上打开 TestFlight，找到试衣终端，点击“更新”。若仅显示“打开”，请核对版本是否符合官方通知。",
      ],
      [
        "重新打开并检查",
        "启动试衣终端 App，核对版本、账号和门店内容。没有目标构建时，请联系官方。",
      ],
    ],
    androidUpdate: [
      [
        "结束当前体验",
        "确认无人正在拍照、生成或实时试衣，保存照片，保持网络与供电。",
      ],
      [
        "在 App 中检查更新",
        "请在您需要更新应用的安卓设备上打开试衣终端，连续点击首页左上 Logo 7 次进入个人中心，记录当前版本并点击“检查更新”。",
      ],
      [
        "通过更新助手完成安装",
        "请在同一台安卓设备上跳转至轻链更新助手后点击“检查并更新”，按提示下载和安装。无法跳转时可从桌面打开助手。",
      ],
      [
        "返回 App 核对",
        "重新打开试衣终端 App，确认当前版本与发布通知一致。检查失败时检查网络并重试，持续失败请联系官方。",
      ],
    ],
    specIntro:
      "按设备类型查看系统限制与推荐配置。实际交付还需在现场设备与网络上验证。",
    headers: ["项目", "最低要求 / 限制", "推荐配置"],
    ipadRows: [
      ["系统", "iPadOS 16.4 及以上", "iPadOS 26.0 及以上"],
      ["芯片", "具体机型需验证", "A14 及更新 A 系列 / M 系列"],
      ["内存", "按机型核对", "高频使用优先 M 系列、8GB 及以上"],
      ["存储", "64GB", "128GB 及以上，保留 20GB 可用空间"],
      [
        "摄像头与屏幕",
        "相机可调用并已授权；竖屏全屏",
        "1080p / 30fps；10.9 英寸及以上",
      ],
    ],
    androidRows: [
      ["系统", "Android 12 及以上", "Android 15 及以上，验证匹配的稳定固件"],
      ["内存", "8GB（最低选型建议）", "8GB 及以上，高频使用可选 12GB"],
      ["存储", "64GB", "平板优先 128GB，保留 20GB 可用空间"],
      ["处理器", "需结合整机实测", "终端 RK3588 级别；平板同档处理器"],
      [
        "摄像头",
        "App 可持续采集，按 1080p / 30fps 验证",
        "终端 Insta360 Link 2C；平板使用实测内置相机",
      ],
    ],
    ipadCaution:
      "已反馈 iPad Pro 12.9 英寸第 4 代（A12Z）出现视频或整机卡住，当前不推荐该机型。",
    network: "网络条件",
    networkText:
      "两端均需稳定访问业务、实时视频与媒体上传服务。固定终端优先有线，平板优先稳定的 5GHz Wi-Fi。使用 pro 模型实时视频时，项目推荐每台设备上行、下行各至少 10 Mbps 可用带宽，多台并发按设备数累加。",
    networkDetail: "现场实施与网络配置",
    networkDetailText:
      "场地网络还需验证实时媒体所需 UDP、WebSocket 及相关域名的可达性。请向实施人员获取交付环境的放行清单，并在实际并发量下测试真实试衣会话。",
    faqIntro: "按当前 V1.1–V1.2 安装与更新流程整理。",
    faqs: [
      [
        "如何查看 App 版本？",
        "在首页左上 Logo 连续点击 7 次，进入个人中心查看“当前版本”。将它与官方发布通知核对。",
        "common"
      ],
      [
        "安卓提示安装失败，怎么办？",
        "先检查系统是否为 Android 12 及以上，再确认是否仍有旧版试衣终端和更新助手。需要换装时先向官方确认版本范围，再按老版本换装流程处理。",
        "android"
      ],
      [
        "安卓安装时提示“信任第三方来源”，怎么办？",
        "当前版本暂未完成应用商店上架，官方正在积极推进上架，目前通过官方安装包安装。请确认安装包来自本手册提供的官方下载页面；如系统提示“信任第三方来源”“允许来自此来源”或“安装未知应用”，请开启当前用于安装的浏览器、文件管理器或轻链更新助手的允许安装开关，再返回继续安装。不同设备的提示名称可能略有不同；受管设备无法开启时，请联系管理员。",
        "android"
      ],
      [
        "已经安装 TestFlight，为什么找不到试衣终端？",
        "请在您需要安装应用的 iPad 上打开本手册，返回 iPad 安装教程，点击“安装试衣终端”，从邀请页进入 TestFlight，接受邀请并安装应用。",
        "ios"
      ],
      [
        "更新助手显示最新，为什么 App 版本没变？",
        "请打开试衣终端 App 核对当前版本。检查是否完成系统安装确认。持续异常时记录 App 版本、助手业务版本和提示截图，联系官方。",
        "android"
      ],
      [
        "TestFlight 提示需要输入邀请码，怎么办？",
        "请在您需要安装应用的 iPad 上返回本手册，进入<a href=\"#/zh/v1.1-v1.2/guide/ipad/install/guide-install\">iPad 安装指引</a>，点击“安装试衣终端”。在邀请页选择“在 TestFlight 中查看”，然后按提示接受邀请并安装。",
        "ios"
      ],
      [
        "TestFlight 没有安装按钮或目标版本？",
        "记录页面提示，确认机型和系统版本，并将截图发给官方核对测试资格、名额及构建有效期。",
        "ios"
      ],
      [
        "可以通过应用商店安装吗？",
        "本手册对应更新助手与 TestFlight 渠道。应用宝、Google Play 和 App Store 渠道将在正式发布后，随对应版本手册提供入口和迁移说明。",
        "common"
      ],
      [
        "轻链更新助手多次更新失败，怎么办？",
        "如果在轻链更新助手中多次点击“检查并更新”仍然失败，可以重新下载安装试衣终端。请先保存所需照片并确认登录账号，然后在需要安装应用的安卓设备上删除当前的试衣终端 App。用该设备的浏览器打开<a href=\"https://tryon-mirror.lightchainai.com/d\" target=\"_blank\" rel=\"noopener noreferrer\">下载页面</a>，在右上角语言菜单选择“中文”，点击“下载 Android APK”，直接下载并安装新版试衣终端安装包。此处选择的是试衣终端安装包，无需再次下载更新助手。安装完成后，打开试衣终端核对版本并登录；若仍失败，请联系官方。",
        "android"
      ],
      [
        "更新持续失败，需要提供哪些信息？",
        "请记录设备型号、系统版本、App 版本、安装渠道及完整提示截图，联系官方协助处理。",
        "common"
      ]
    ],
  },
  en: {
    sidebarGroups: ["Download & installation", "Hardware & software requirements", "FAQ"],
    lang: "en",
    brand: "LightChain",
    manual: "Live Fitting User Guide",
    languageLabel: "Switch language",
    nav: ["Install & update", "Specifications", "FAQ"],
    home: "Guide home",
    heading: "Live Fitting",
    intro:
      "Find the right instructions for your device, from your first installation to your next update.",
    choose: "Choose your device",
    devices: ["iPad", "Android terminal", "Android tablet"],
    channels: [
      "Install and update with TestFlight",
      "Install and update with Light Chain Updater",
      "Install and update with Light Chain Updater",
    ],
    start: "View installation guide",
    version: "For version",
    versionHelp: "Find your app version",
    specsTitle: "Find the right device.",
    specsDesc:
      "Explore system requirements, recommended hardware and network conditions.",
    specsLink: "View specifications",
    faqTitle: "Need a little help?",
    faqDesc: "Find answers to common installation and update questions.",
    faqLink: "Explore common questions",
    footer: "Live Fitting: User Guide",
    updated: "For V1.1–V1.2: Updated November 9, 2026",
    skip: "Skip to content",
    scenes: [
      "First installation",
      "Replace a legacy version",
      "Update your app",
    ],
    preparation: "Before you begin",
    ipadPrep:
      "On the iPad where you want to install the app, confirm that the system runs <b>iPadOS 16.4 or later</b> and check the device specifications to ensure that the <b>chip, memory, storage and camera meet the minimum requirements</b>. Storage capacity must be at least <b>64GB</b>, with enough free space. If your chip is older than A14, please consult technical support to confirm whether the device meets the installation requirements. Have an Apple Account and a stable connection ready, and keep the device powered.",
    androidPrep:
      "On the Android device where you want to install the app, confirm <b>Android 12 or later</b> and check the relevant specifications for its <b>processor, memory, storage, screen and camera</b>. Current minimum selection guidelines are <b>8GB RAM and 64GB storage</b>, with free space for installation and updates. Keep the device powered and connected, and have the account provided by official support ready.",
    legacy: "Confirm applicability first",
    legacyIpadTitle: "Delete the old app before installing",
    legacyAndroid:
      "Replacing a legacy installation requires removing the old terminal app and Light Chain Updater. Ask official support to confirm that this applies to your version, save your photos and confirm your account details before following the steps below.",
    legacyIpad:
      "On the iPad where you want to install the app, save any photos you need and confirm your login details, then <b>delete the old “Live Fitting” app</b>. Before installing the new version, confirm that the old app has been deleted, then follow the steps below.",
    installed: "Check when finished",
    installedText:
      "Open the “Live Fitting” app and verify its version against the release notice. Check your account, store content and camera permissions. After installing TestFlight or the updater, complete the “Live Fitting” app installation too.",
    video: "Video tutorial",
    videoText: "In preparation. Please follow the steps above for now.",
    ipadSteps: [
      [
        "Install TestFlight",
        "On the iPad where you want to install the app, open the App Store and get TestFlight by Apple. Open it and complete the initial setup.",
        "Get TestFlight",
        "https://apps.apple.com/app/testflight/id899247664",
      ],
      [
        "Return here and open the invitation",
        "After setup, return to this guide on the iPad where you want to install the app and use the link below. Select “View in TestFlight” on the invitation page. If TestFlight asks for an invitation code, return to this guide on the same iPad and tap “Install Live Fitting” below, then open TestFlight from the invitation page.",
        "Install Live Fitting",
        "https://testflight.apple.com/join/NdJvT2Gt",
      ],
      [
        "Accept and install",
        "In TestFlight on that iPad, check the app name is “Live Fitting”. When joining for the first time, select Accept, then Install.",
      ],
      [
        "Open the “Live Fitting” app",
        "Wait for installation to finish, then select Open or find the “Live Fitting” app on your Home Screen.",
      ],
    ],
    androidSteps: [
      [
        "Download Light Chain Updater",
        "On the Android device where you want to install the app, open the download page in a browser. Select “English” from the language menu in the top-right corner. Scroll down to “Light Chain Updater” and tap “Download Updater App” below it.",
        "Open download page",
        "https://tryon-mirror.lightchainai.com/d",
      ],
      [
        "Install the updater",
        "On the Android device where you want to install the app, open the APK from browser downloads or your file manager. This version is distributed as an official installation package while app-store listing is in progress. If you see “Allow from this source”, “Trust third-party sources” or a similar prompt, enable installation permission for the browser or file manager you are using, then return to continue installation. Contact your administrator for managed devices.",
      ],
      [
        "Install the “Live Fitting” app",
        "On the Android device where you want to install the app, open Light Chain Updater and select “检查并更新” (Check and update). Grant installation permission if requested and finish downloading and installing.",
      ],
      [
        "Open and check the version",
        "Open the “Live Fitting” app. Use the version shown inside the app for verification. The updater’s business version is for troubleshooting.",
      ],
    ],
    ipadUpdate: [
      [
        "Finish the current session",
        "Save your photos and keep the device connected and charged.",
      ],
      [
        "Update in TestFlight",
        "On the iPad where you want to update the app, open TestFlight, find the “Live Fitting” app and select Update. If it shows Open, compare the version with the official release notice.",
      ],
      [
        "Open and verify",
        "Check the app version, account and store content. Contact official support if the required build is unavailable.",
      ],
    ],
    androidUpdate: [
      [
        "Finish the current session",
        "Wait for active photo, generation or live fitting tasks to finish. Save photos and maintain power and connectivity.",
      ],
      [
        "Check for updates in the app",
        "On the Android device where you want to update the app, open the “Live Fitting” app and tap the top-left logo on the home screen seven times to open the profile. Record the current version and select Check for updates.",
      ],
      [
        "Complete installation with the updater",
        "On the same Android device, open Light Chain Updater and select “检查并更新” (Check and update). Follow the download and installation prompts. Open the updater from the desktop if needed.",
      ],
      [
        "Return to the app",
        "Verify that the installed version matches the release notice. Check connectivity and retry if checking fails. Contact official support if the problem persists.",
      ],
    ],
    specIntro:
      "Review system requirements and recommendations for your device. Validate the actual device and network before deployment.",
    headers: ["Item", "Minimum / requirement", "Recommendation"],
    ipadRows: [
      ["System", "iPadOS 16.4 or later", "iPadOS 26.0 or later"],
      [
        "Chip",
        "Validate the specific model",
        "A14 or later A-series / M-series",
      ],
      [
        "Memory",
        "Check the model",
        "M-series with 8GB or more for intensive use",
      ],
      ["Storage", "64GB", "128GB or more; keep 20GB free"],
      [
        "Camera & screen",
        "Camera access; portrait, full screen",
        "1080p / 30fps; 10.9 inches or larger",
      ],
    ],
    androidRows: [
      [
        "System",
        "Android 12 or later",
        "Android 15 or later; validated firmware",
      ],
      [
        "Memory",
        "8GB minimum selection guideline",
        "8GB or more; 12GB for intensive use",
      ],
      ["Storage", "64GB", "128GB for tablets; keep 20GB free"],
      [
        "Processor",
        "Validate the complete device",
        "RK3588-class terminal or comparable tablet chip",
      ],
      [
        "Camera",
        "Validate continuous 1080p / 30fps capture",
        "Terminal: Insta360 Link 2C; tablet: tested built-in camera",
      ],
    ],
    ipadCaution:
      "The 12.9-inch iPad Pro (4th generation, A12Z) has reported video or device freezes and is currently not recommended.",
    network: "Network requirements",
    networkText:
      "Both platforms need reliable access to business, live video and media-upload services. Prefer Ethernet for fixed terminals or stable 5GHz Wi-Fi for tablets. For live video with the pro model, the project recommends at least 10 Mbps available upload and download per device. Multiply by concurrent devices.",
    networkDetail: "Deployment and network configuration",
    networkDetailText:
      "Validate the UDP, WebSocket and domain access required for real-time media. Obtain the environment-specific allowlist from your deployment team and test live sessions at the planned concurrency.",
    faqIntro: "Answers for the V1.1–V1.2 installation and update workflow.",
    faqs: [
      [
        "Where can I find the app version?",
        "Open Live Fitting and tap the top-left logo on the home screen seven times. Find Current version in the profile and compare it with the official release notice.",
        "common"
      ],
      [
        "Why does installation fail on Android?",
        "Check for Android 12 or later and existing legacy terminal and updater apps. Ask official support whether legacy replacement applies before removing anything.",
        "android"
      ],
      [
        "Android asks me to trust a third-party source. What should I do?",
        "This version is not yet listed in app stores; official store listing is actively in progress, and installation currently uses the official package. Confirm that the package comes from the official download page linked in this guide. If Android shows “Trust third-party sources”, “Allow from this source” or “Install unknown apps”, enable installation permission for the browser, file manager or Light Chain Updater currently handling the installation, then return and continue. Wording varies by device. Contact your administrator if a managed device prevents this setting.",
        "android"
      ],
      [
        "TestFlight is installed. Where is the “Live Fitting” app?",
        "On the iPad where you want to install the app, open this manual, return to the iPad guide and select Install Live Fitting. Open the invitation in TestFlight, accept and install.",
        "ios"
      ],
      [
        "The updater says up to date, but the app version is unchanged.",
        "Check the version inside the “Live Fitting” app and ensure the system installation confirmation was completed. Send the app version, updater business version and screenshots to official support if needed.",
        "android"
      ],
      [
        "TestFlight asks for an invitation code. What should I do?",
        "On the iPad where you want to install the app, return to this guide and open the <a href=\"#/en/v1.1-v1.2/guide/ipad/install/guide-install\">iPad installation instructions</a>. Tap “Install Live Fitting”, select “View in TestFlight” on the invitation page, then follow the prompts to accept the invitation and install the app.",
        "ios"
      ],
      [
        "TestFlight has no installation button or required build.",
        "Record the message, device model and OS version. Ask official support to check eligibility, capacity and build validity.",
        "ios"
      ],
      [
        "Can I use an app store?",
        "This guide covers the updater and TestFlight channels. Official store links and migration instructions will be included with the relevant version guide after release.",
        "common"
      ],
      [
        "What if Light Chain Updater repeatedly fails to update?",
        "If “检查并更新” (Check and update) repeatedly fails in Light Chain Updater, you can reinstall Live Fitting. Save any photos you need and confirm your login details, then delete the current Live Fitting app from the Android device where you want to install it. In that device’s browser, open the <a href=\"https://tryon-mirror.lightchainai.com/d\" target=\"_blank\" rel=\"noopener noreferrer\">download page</a> select “English” from the top-right language menu, and tap “Download Android APK” to download and install the new Live Fitting package directly. Choose the app package; you do not need to download the updater again. Open Live Fitting, verify its version and sign in. Contact official support if installation still fails.",
        "android"
      ],
      [
        "What should I provide if updates keep failing?",
        "Send your device model, OS version, app version, installation channel and a complete screenshot of the message to official support.",
        "common"
      ]
    ],
  },
  ja: {
    sidebarGroups: ["ダウンロードとインストール", "ハードウェア・ソフトウェア要件", "FAQ"],
    lang: "ja",
    brand: "LightChain",
    manual: "Live Fittingユーザーガイド",
    languageLabel: "言語を切り替える",
    nav: ["インストールと更新", "動作環境", "よくある質問"],
    home: "ガイドのホーム",
    heading: "Live Fitting",
    intro: "お使いのデバイスに合った手順で、インストールからアップデートまで。",
    choose: "デバイスを選択",
    devices: ["iPad", "Android端末", "Androidタブレット"],
    channels: [
      "TestFlightでインストール・更新",
      "Light Chain 更新アシスタントを使用",
      "Light Chain 更新アシスタントを使用",
    ],
    start: "インストール手順を見る",
    version: "対象バージョン",
    versionHelp: "アプリのバージョンを確認する",
    specsTitle: "適切なデバイスを選ぶ。",
    specsDesc:
      "システム要件、推奨構成、ネットワーク条件を確認して、導入に備えましょう。",
    specsLink: "動作環境を確認する",
    faqTitle: "お困りのときは。",
    faqDesc: "インストールや更新に関するよくある質問と対処方法をご案内します。",
    faqLink: "よくある質問を見る",
    footer: "Live Fitting：ユーザーガイド",
    updated: "V1.1–V1.2 対応：2026年11月9日更新",
    skip: "本文へ移動",
    scenes: ["初めてのインストール", "旧版からの入れ替え", "アプリの更新"],
    preparation: "開始前に確認",
    ipadPrep:
      "アプリをインストールするiPadで、OSが<b>iPadOS 16.4以降</b>であることを確認してください。動作環境と照合し、<b>チップ、メモリ、ストレージ、カメラなどが最低要件を満たしていること</b>も確認します。ストレージ容量は<b>64GB以上</b>で、十分な空き容量が必要です。A14より前のチップを搭載している場合は、インストール条件を満たすか技術担当者に確認してください。Apple Account、安定したネットワーク、電源を用意してください。",
    androidPrep:
      "アプリをインストールするAndroid端末で、OSが<b>Android 12以降</b>であることを確認し、該当する端末の動作環境と照合して<b>プロセッサ、メモリ、ストレージ、画面、カメラ</b>を確認してください。現在の最低選定目安は<b>メモリ8GB、ストレージ64GB</b>で、インストール・更新用の空き容量も必要です。電源と安定したネットワークを確保し、公式サポートから案内されたアカウントを用意してください。",
    legacy: "対象バージョンの確認が必要です",
    legacyIpadTitle: "インストール前に旧版アプリを削除",
    legacyAndroid:
      "旧版からの入れ替えでは、旧「Live Fitting」アプリと更新アシスタントの削除が必要です。公式サポートに対象バージョンか確認し、写真の保存とアカウント情報を確認してから、以下の手順を進めてください。",
    legacyIpad:
      "アプリをインストールするiPadで、必要な写真を保存し、ログイン情報を確認してから、<b>旧版の「Live Fitting」アプリを削除</b>してください。新しいバージョンをインストールする前に、旧版アプリが削除済みであることを確認し、以下の手順に進んでください。",
    installed: "完了後の確認",
    installedText:
      "「Live Fitting」アプリを開き、バージョンをリリース案内と照合します。アカウント、店舗情報、カメラ権限も確認してください。TestFlightや更新アシスタントの導入後、「Live Fitting」アプリ自体のインストールも完了させます。",
    video: "動画ガイド",
    videoText: "準備中です。現在は上記の手順をご利用ください。",
    ipadSteps: [
      [
        "TestFlightをインストール",
        "アプリをインストールするiPadでApp Storeを開き、Apple提供のTestFlightを入手し、起動して初期設定を完了します。",
        "TestFlightを入手",
        "https://apps.apple.com/app/testflight/id899247664",
      ],
      [
        "このページに戻り、招待を開く",
        "初期設定後、アプリをインストールするiPadでこのガイドに戻って下のリンクを開き、招待ページで「TestFlightで表示」を選択します。 TestFlightで招待コードの入力を求められた場合は、同じiPadで本ガイドに戻り、下の「Live Fittingをインストール」をタップして、招待ページからTestFlightを開いてください。",
        "Live Fittingをインストール",
        "https://testflight.apple.com/join/NdJvT2Gt",
      ],
      [
        "招待を承認してインストール",
        "同じiPadのTestFlightでアプリ名が「Live Fitting」であることを確認します。初回は「承認」を選択し、「インストール」をタップします。",
      ],
      [
        "「Live Fitting」アプリを開く",
        "完了後に「開く」をタップするか、ホーム画面の「Live Fitting」アプリを開きます。",
      ],
    ],
    androidSteps: [
      [
        "更新アシスタントをダウンロード",
        "アプリをインストールするAndroidデバイスのブラウザでダウンロードページを開きます。右上の言語メニューで「日本語」を選択します。下にスクロールして「Light Chain 更新アシスタント」を見つけ、その下の「更新アプリをダウンロード」をタップしてください。",
        "ダウンロードページへ",
        "https://tryon-mirror.lightchainai.com/d",
      ],
      [
        "更新アシスタントをインストール",
        "アプリをインストールするAndroidデバイスで、ブラウザのダウンロード履歴またはファイル管理からAPKを開きます。現在は公式インストールパッケージで配布しており、アプリストアへの公開を進めています。「この提供元を許可」「サードパーティの提供元を信頼」などが表示されたら、使用中のブラウザまたはファイル管理アプリのインストール許可をオンにし、元の画面に戻って続行してください。管理対象デバイスは管理者にご相談ください。",
      ],
      [
        "「Live Fitting」アプリをインストール",
        "アプリをインストールするAndroidデバイスで更新アシスタントを開き、「检查并更新」（更新を確認）を選択します。必要な権限を許可し、ダウンロードとインストールを完了します。",
      ],
      [
        "アプリとバージョンを確認",
        "「Live Fitting」アプリを開き、アプリ内のバージョンを確認します。更新アシスタントの業務バージョンは調査用の情報です。",
      ],
    ],
    ipadUpdate: [
      ["利用中の操作を終了", "写真を保存し、ネットワークと電源を確保します。"],
      [
        "TestFlightで更新",
        "アプリを更新するiPadでTestFlightを開き、「Live Fitting」アプリを見つけ、「アップデート」を選択します。「開く」と表示される場合は、案内されたバージョンか確認してください。",
      ],
      [
        "再起動して確認",
        "アプリのバージョン、アカウント、店舗情報を確認します。対象ビルドがない場合は公式サポートにご連絡ください。",
      ],
    ],
    androidUpdate: [
      [
        "利用中の操作を終了",
        "撮影、画像生成、リアルタイム試着の終了を確認し、写真を保存します。電源とネットワークを維持してください。",
      ],
      [
        "アプリで更新を確認",
        "アプリを更新するAndroidデバイスで「Live Fitting」アプリを開き、ホーム画面左上のロゴを7回タップして個人ページを開きます。現在のバージョンを記録し、更新確認を選択します。",
      ],
      [
        "更新アシスタントでインストール",
        "同じAndroidデバイスで更新アシスタントを開き、「检查并更新」（更新を確認）を選択し、案内に従ってダウンロードとインストールを完了します。自動で開かない場合はデスクトップから起動してください。",
      ],
      [
        "アプリに戻って確認",
        "リリース案内とバージョンを照合します。確認に失敗した場合は通信状態を確認して再試行し、解消しない場合は公式サポートにご連絡ください。",
      ],
    ],
    specIntro:
      "デバイス別にシステム要件と推奨構成を確認できます。導入時は実機と現場のネットワークで検証してください。",
    headers: ["項目", "最低要件・制限", "推奨構成"],
    ipadRows: [
      ["システム", "iPadOS 16.4以降", "iPadOS 26.0以降"],
      ["チップ", "機種ごとに検証", "A14以降のAシリーズ / Mシリーズ"],
      ["メモリ", "機種ごとに確認", "高頻度利用はMシリーズ・8GB以上"],
      ["ストレージ", "64GB", "128GB以上、空き容量20GBを確保"],
      [
        "カメラ・画面",
        "カメラ権限、縦向き全画面",
        "1080p / 30fps、10.9インチ以上",
      ],
    ],
    androidRows: [
      ["システム", "Android 12以降", "Android 15以降、検証済みファームウェア"],
      ["メモリ", "8GB（選定時の最低目安）", "8GB以上、高頻度利用は12GBも検討"],
      ["ストレージ", "64GB", "タブレットは128GB推奨、空き20GB"],
      [
        "プロセッサ",
        "実機で検証",
        "端末はRK3588クラス、タブレットは同等クラス",
      ],
      [
        "カメラ",
        "1080p / 30fpsの連続取得を検証",
        "端末はInsta360 Link 2C、タブレットは検証済み内蔵カメラ",
      ],
    ],
    ipadCaution:
      "12.9インチiPad Pro（第4世代、A12Z）では映像や本体の停止が報告されており、現在は推奨していません。",
    network: "ネットワーク条件",
    networkText:
      "両プラットフォームとも業務サービス、リアルタイム映像、メディアアップロードへの安定した接続が必要です。固定端末は有線、タブレットは安定した5GHz Wi-Fiを推奨します。proモデル利用時は1台あたり上り・下り各10Mbps以上の実効帯域を推奨し、同時利用台数分を確保してください。",
    networkDetail: "現場導入とネットワーク設定",
    networkDetailText:
      "リアルタイム映像に必要なUDP、WebSocket、関連ドメインへの接続を確認してください。導入担当者から環境に応じた許可リストを入手し、予定する同時利用台数で実際の試着を検証します。",
    faqIntro: "V1.1–V1.2のインストールと更新に関するご案内です。",
    faqs: [
      [
        "アプリのバージョンはどこで確認できますか？",
        "ホーム画面左上のロゴを7回タップし、個人ページの現在のバージョンを確認します。リリース案内と照合してください。",
        "common"
      ],
      [
        "Androidでインストールに失敗します。",
        "Android 12以降か、旧版アプリと更新アシスタントが残っていないかを確認します。削除前に公式サポートへ入れ替え対象か確認してください。",
        "android"
      ],
      [
        "Androidで「サードパーティの提供元を信頼」などと表示された場合は？",
        "現在のバージョンはアプリストアでの公開がまだ完了しておらず、公式では公開を積極的に進めています。現在は公式インストールパッケージを使用します。本ガイドの公式ダウンロードページから入手したことを確認し、「この提供元を許可」「不明なアプリのインストール」などが表示されたら、インストールに使用中のブラウザ、ファイル管理アプリ、または更新アシスタントの許可をオンにして、元の画面に戻り続行してください。表示名は端末によって異なります。管理対象端末で変更できない場合は管理者にお問い合わせください。",
        "android"
      ],
      [
        "TestFlightを入れましたが、「Live Fitting」アプリがありません。",
        "アプリをインストールするiPadで本マニュアルのiPadガイドに戻り、「Live Fittingをインストール」を選択します。招待からTestFlightに移動し、承認とインストールを完了してください。",
        "ios"
      ],
      [
        "更新アシスタントでは最新ですが、アプリのバージョンが変わりません。",
        "システムのインストール確認を完了したか確認します。解消しない場合はアプリのバージョン、業務バージョン、画面の画像を公式サポートに送ってください。",
        "android"
      ],
      [
        "TestFlightで招待コードの入力を求められた場合は？",
        "アプリをインストールするiPadで本ガイドに戻り、<a href=\"#/ja/v1.1-v1.2/guide/ipad/install/guide-install\">iPadのインストール手順</a>を開いて「Live Fittingをインストール」をタップしてください。招待ページで「TestFlightで表示」を選択し、案内に従って招待を承認してインストールします。",
        "ios"
      ],
      [
        "TestFlightにインストールボタンや対象ビルドがありません。",
        "メッセージ、機種、OSバージョンを記録し、公式サポートにテスト資格、定員、有効期限の確認を依頼してください。",
        "ios"
      ],
      [
        "公式ストアからインストールできますか？",
        "本ガイドは更新アシスタントとTestFlightを対象としています。公式ストアの入口と移行手順は、正式公開後に該当バージョンのガイドでご案内します。",
        "common"
      ],
      [
        "更新アシスタントで何度更新しても失敗する場合は？",
        "更新アシスタントの「检查并更新」（更新を確認）を何度実行しても失敗する場合は、Live Fittingを再インストールできます。必要な写真を保存してログイン情報を確認し、対象のAndroid端末から現在のLive Fittingアプリを削除してください。同じ端末のブラウザで<a href=\"https://tryon-mirror.lightchainai.com/d\" target=\"_blank\" rel=\"noopener noreferrer\">ダウンロードページ</a>を開き、右上の言語メニューで「日本語」を選択して「Android APK をダウンロード」をタップし、新版のLive Fittingを直接ダウンロードし、インストールします。ここではアプリ本体を選び、更新アシスタントを再ダウンロードする必要はありません。完了後にLive Fittingを開き、バージョンを確認してログインしてください。解決しない場合は公式サポートにご連絡ください。",
        "android"
      ],
      [
        "更新に失敗し続ける場合は？",
        "機種、OSバージョン、アプリのバージョン、インストール経路、メッセージ全体のスクリーンショットを公式サポートにお送りください。",
        "common"
      ]
    ],
  },
};
const deviceKeys = ["ipad", "terminal", "pad"];
const sceneKeys = ["install", "legacy", "update"];
let state;
const icons = {
  specs:
    '<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="5" y="5" width="22" height="17" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M11 27h10M16 22v5M10 11h12M10 16h7" stroke="currentColor" stroke-width="1.5"/></svg>',
  faq: '<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="1.5"/><path d="M12 12a4 4 0 0 1 8 0c0 3-4 3-4 6M16 22v1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
};
function href(page, device = state.device, scene = state.scene) {
  return `#/${state.locale}/v1.1-v1.2/${page}/${device}/${scene}`;
}
function link(page, label, device, scene, className = "") {
  return /* HTML */ `<a class="${className}" href="${href(page, device, scene)}"
    >${label}</a
  >`;
}
function deviceArt(type) {
  if (type === "terminal") {
    return /* HTML */ `<div class="device-art terminal" aria-hidden="true">
      <img src="./assets/android-terminal.png" alt="" width="270" height="658">
    </div>`;
  }
  return /* HTML */ `<div class="device-art ${type}" aria-hidden="true">
    <div class="device">
      <div class="screen"><div class="shirt"></div></div>
    </div>
  </div>`;
}
function renderHome(t) {
  return /* HTML */ `<main id="main">
    <div class="wrap">
      <section class="hero">
        <h1>${t.heading}</h1>
        <p class="eyebrow">${t.manual}</p>
        <p class="intro">${t.intro}</p>
        <label class="version"
          >${t.version}<select aria-label="${t.version}">
            <option>V1.1–V1.2</option>
          </select></label
        >
      </section>
      <section>
        <h2 class="section-heading">${t.choose}</h2>
        <div class="device-grid">
          ${deviceKeys.map((key, i) => link("guide", `${deviceArt(key)}<h3>${t.devices[i]}</h3><p>${t.channels[i]}</p><span class="link">${t.start} <span aria-hidden="true">›</span></span>`, key, "install", "device-card")).join("")}
        </div>
        <div class="quicklinks">${link("faq", `${t.versionHelp} ›`)}</div>
      </section>
    </div>
    <section class="feature-band">
      <div class="wrap feature-grid">
        <div class="feature">
          ${icons.specs}
          <h2>${t.specsTitle}</h2>
          <p>${t.specsDesc}</p>
          ${link("specs", `${t.specsLink} ›`)}
        </div>
        <div class="feature">
          ${icons.faq}
          <h2>${t.faqTitle}</h2>
          <p>${t.faqDesc}</p>
          ${link("faq", `${t.faqLink} ›`)}
        </div>
      </div>
    </section>
  </main>`;
}
function stepImage(t, ipad, index, scene) {
  let filename;
  if (ipad && scene !== "update" && index === 1)
    filename = "ipad-invitation.png";
  if (!ipad && scene !== "update" && index === 0)
    filename = "android-download.png";
  if (!ipad && index === 2) filename = "android-updater.png";
  if (!filename) return "";
  const imagePath = ipad ? `${state.locale}/ipad-invitation-named.png` : index === 0 ? `${state.locale}/android-download-localized.png` : "android-updater.png";
  const captions = {
    zh: ipad ? "TestFlight 页面参考，应用名已校正为“试衣终端”。点击图片可放大查看。" : index === 0 ? "中文版下载页参考，应用名已校正为“试衣终端”。版本和系统要求以本手册及官方通知为准。" : "更新助手界面参考。安装完成后，请在试衣终端内核对实际版本。",
    en: ipad ? "TestFlight reference with the app name corrected to “Live Fitting”. The publisher’s description remains in Chinese." : index === 0 ? "English download page reference, with the app name corrected to “Live Fitting”. Follow this guide and official notices for version and system requirements." : "The updater screenshot shows its Chinese interface. See the button explanations alongside it and verify the installed version in Live Fitting.",
    ja: ipad ? "アプリ名を「Live Fitting」に修正したTestFlightの参考画像です。公開元のアプリ説明は中国語のままです。" : index === 0 ? "日本語のダウンロードページの参考画像です。アプリ名は「Live Fitting」に修正しています。バージョンと動作要件は本ガイドと公式案内に従ってください。" : "更新アシスタントの中国語画面です。併記したボタン説明を参照し、インストール後はLive Fitting内でバージョンを確認してください。",
  };
  const labels = {
    zh: {title: "操作对照", updater: [["业务版本", "仅用于辅助排查，不是试衣终端 App 的当前版本。"], ["检查并更新", "点击此按钮，按系统提示完成下载和安装。"], ["已经是最新版本", "仍需回到试衣终端 App 核对实际版本。"]], open: "点击放大查看"},
    en: {title: "Buttons in the screenshot", updater: [["业务版本", "Business version: a troubleshooting value, not the terminal app version."], ["检查并更新", "Check and update: tap here, then complete the system download and installation prompts."], ["已经是最新版本", "Up to date: still verify the actual version inside the terminal app."]], open: "Enlarge image"},
    ja: {title: "画像内のボタン説明", updater: [["业务版本", "業務バージョン：調査用の値です。試着アプリのバージョンではありません。"], ["检查并更新", "更新を確認：このボタンを押し、OSの案内に従ってダウンロードとインストールを完了します。"], ["已经是最新版本", "最新バージョン：試着アプリ内で実際のバージョンも確認してください。"]], open: "画像を拡大する"},
  };
  const copy = labels[state.locale];
  const showKey = !ipad && index !== 0 && state.locale !== "zh";
  const dimensions = ipad ? [889, state.locale === "ja" ? 568 : 530] : index === 0 ? [640, 1006] : [1086, 1448];
  return `<figure class="tutorial-image ${showKey ? "tutorial-annotated" : ""}">
    <button type="button" class="image-preview-trigger" aria-haspopup="dialog" aria-label="${copy.open}">
      <img src="./assets/${imagePath}" width="${dimensions[0]}" height="${dimensions[1]}" alt="${ipad ? t.ipadSteps[1][0] : index === 0 ? t.androidSteps[0][0] : t.androidSteps[2][0]}" loading="lazy" />
    </button>
    ${showKey ? `<div class="tutorial-key"><h4>${copy.title}</h4><dl>${copy.updater.map(([label, explanation]) => `<dt lang="zh-CN">${label}</dt><dd>${explanation}</dd>`).join("")}</dl></div>` : ""}
    <figcaption>${captions[state.locale]} ${copy.open}</figcaption>
  </figure>`;
}
function openImageViewer(trigger) {
  const source = trigger.querySelector("img");
  const copy = {
    zh: { title: "图片预览", close: "关闭大图" },
    en: { title: "Image preview", close: "Close image" },
    ja: { title: "画像プレビュー", close: "画像を閉じる" },
  }[state.locale];
  const dialog = document.createElement("dialog");
  dialog.className = "image-viewer";
  dialog.setAttribute("aria-label", copy.title);
  dialog.innerHTML = `<div class="image-viewer-panel"><button type="button" class="image-viewer-close" autofocus><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button><img class="image-viewer-image" /></div>`;
  const closeButton = dialog.querySelector("button");
  closeButton.setAttribute("aria-label", copy.close);
  closeButton.title = copy.close;
  const image = dialog.querySelector("img");
  image.src = source.currentSrc || source.src;
  image.alt = source.alt;
  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("keydown", event => {
    if (event.key === "Tab") {
      event.preventDefault();
      closeButton.focus();
    }
  });
  let startedOnBackdrop = false;
  dialog.addEventListener("pointerdown", event => { startedOnBackdrop = event.target === dialog; });
  dialog.addEventListener("click", event => {
    if (startedOnBackdrop && event.target === dialog) dialog.close();
  });
  const closeOnNavigation = () => dialog.close();
  window.addEventListener("hashchange", closeOnNavigation);
  dialog.addEventListener("close", () => {
    document.documentElement.classList.remove("image-viewer-open");
    window.removeEventListener("hashchange", closeOnNavigation);
    dialog.remove();
    if (trigger.isConnected) trigger.focus({ preventScroll: true });
  }, { once: true });
  document.body.append(dialog);
  document.documentElement.classList.add("image-viewer-open");
  dialog.showModal();
}

function renderTutorialVideo(t, scene, sceneIndex) {
  if (state.device === "ipad") return `<div class="video"><span class="play" aria-hidden="true">▷</span><div><h3>${t.video}</h3><p>${t.videoText}</p></div></div>`;
  if (scene === "update") return "";
  const kind = scene === "legacy" ? "replace" : "install";
  const base = `./assets/videos/20261109/${state.locale}-${kind}`;
  const copy = {
    zh: { download: "下载视频", note: "无声教程，含步骤字幕。可全屏观看。", fallback: "浏览器暂不支持视频播放，请下载观看。" },
    en: { download: "Download video", note: "Silent tutorial with step-by-step captions. Full-screen viewing is available.", fallback: "Your browser does not support video playback. Download the video to watch it." },
    ja: { download: "動画をダウンロード", note: "音声なし・操作字幕付き。全画面で視聴できます。", fallback: "このブラウザでは動画を再生できません。ダウンロードしてご覧ください。" },
  }[state.locale];
  return `<div class="tutorial-video">
    <h3>${t.video} · ${t.scenes[sceneIndex]}</h3>
    <video controls playsinline preload="none" poster="${base}.jpg" aria-label="${t.video}: ${t.scenes[sceneIndex]}">
      <source src="${base}.mp4" type="video/mp4" />
      <a href="${base}.mp4">${copy.fallback}</a>
    </video>
    <div class="tutorial-video-footer"><p>${copy.note}</p><a href="${base}.mp4" download>${copy.download} ↓</a></div>
  </div>`;
}

function renderGuide(t) {
  const ipad = state.device === "ipad";
  const sections = sceneKeys.map((scene, sceneIndex) => {
    const steps = scene === "update"
      ? (ipad ? t.ipadUpdate : t.androidUpdate)
      : (ipad ? t.ipadSteps : t.androidSteps);
    return /* HTML */ `<section class="anchor-section" id="guide-${scene}" tabindex="-1" aria-labelledby="guide-title-${scene}">
      <h2 id="guide-title-${scene}">${t.scenes[sceneIndex]}</h2>
      <div class="note note-check"><strong>${t.preparation}</strong>${ipad ? t.ipadPrep : t.androidPrep} <a href="${href("specs", state.device)}/spec-${state.device}">${t.specsLink} ›</a></div>
      ${scene === "legacy" ? `<div class="note note-warning"><strong>${ipad ? t.legacyIpadTitle : t.legacy}</strong>${ipad ? t.legacyIpad : t.legacyAndroid}</div>` : ""}
      <ol class="steps">
        ${steps.map((step, index) => `<li><h3>${step[0]}</h3><p>${step[1]}</p>${step[2] ? `<a class="action" href="${step[3]}" target="_blank" rel="noopener noreferrer">${step[2]} <span aria-hidden="true">↗</span></a>` : ""}${stepImage(t, ipad, index, scene)}</li>`).join("")}
      </ol>
      <div class="note note-check"><strong>${t.installed}</strong>${t.installedText}</div>
      ${renderTutorialVideo(t, scene, sceneIndex)}
    </section>`;
  }).join("");
  return /* HTML */ `<h1>${t.devices[deviceKeys.indexOf(state.device)]}${state.locale === "en" ? ": " : "："}${t.nav[0]}</h1>
    <p class="lede">${t.channels[deviceKeys.indexOf(state.device)]}</p>
    <nav class="section-anchors" aria-label="${t.nav[0]}">
      ${sceneKeys.map((scene, index) => `<a href="${href("guide", state.device, scene)}/guide-${scene}" data-section-anchor="guide-${scene}">${t.scenes[index]}</a>`).join("")}
    </nav>
    ${sections}
    ${link("faq", `${t.faqLink} ›`)}`;
}
function renderSpecTable(headers, rows) {
  return `<div class="table-wrap"><table><thead><tr>${headers.map(title => `<th scope="col">${title}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
function renderSpecs(t) {
  const spec = specificationUpdates[state.locale];
  const sections = deviceKeys.map((key, index) => {
    const rows = key === "ipad" ? spec.ipadRows : key === "terminal" ? spec.terminalRows : spec.padRows;
    return /* HTML */ `<section class="anchor-section" id="spec-${key}" tabindex="-1" aria-labelledby="spec-title-${key}">
      <h2 id="spec-title-${key}">${t.devices[index]}</h2>
      ${key === "ipad" ? "" : `<p>${key === "terminal" ? spec.terminalIntro : spec.padIntro}</p>`}
      <div class="table-wrap">
        <table>
          <thead><tr>${t.headers.map(title => `<th scope="col">${title}</th>`).join("")}</tr></thead>
          <tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
      ${key === "ipad" ? `<p class="note">${t.ipadCaution}</p><h3 class="spec-subheading">${spec.modelTitle}</h3><ul class="spec-list">${spec.models.map(model => `<li>${model}</li>`).join("")}</ul>` : `<p class="note">${spec.recording}</p>`}
      ${key === "pad" ? `<h3 class="spec-subheading">${spec.processorTitle}</h3><p>${spec.processorNote}</p>${renderSpecTable(spec.processorHeaders, spec.processorRows)}` : ""}
    </section>`;
  }).join("");
  return /* HTML */ `<h1>${t.nav[1]}</h1>
    <p class="lede">${t.specIntro}</p>
    <nav class="section-anchors" aria-label="${t.choose}">
      ${deviceKeys.map((key, index) => `<a href="${href("specs", key)}/spec-${key}" data-section-anchor="spec-${key}">${t.devices[index]}</a>`).join("")}
    </nav>
    ${sections}
    <h2>${t.network}</h2>
    <p>${t.networkText}</p>
    <h3 class="spec-subheading">${spec.networkTitle}</h3>
    ${renderSpecTable(spec.networkHeaders, spec.networkRows)}
    <p class="note">${spec.capacity}</p>
    <details>
      <summary>${t.networkDetail}</summary>
      <ul class="spec-list">${spec.deployment.map(item => `<li>${item}</li>`).join("")}</ul>
    </details>`;
}
function renderFaq(t) {
  const android = state.device !== "ipad";
  const names = state.locale === "zh" ? ["安卓", "iOS（iPad）"] : ["Android", "iOS (iPad)"];
  const platforms = ["android", "ios"];
  return `<h1>${t.nav[2]}</h1><p class="lede">${t.faqIntro}</p>
    <div class="faq-tabs" role="tablist" aria-label="${t.choose}">
      ${platforms.map((platform, i) => `<button type="button" role="tab" id="faq-tab-${platform}" aria-controls="faq-panel-${platform}" aria-selected="${(platform === "android") === android}" tabindex="${(platform === "android") === android ? 0 : -1}" data-faq-platform="${platform}">${names[i]}</button>`).join("")}
    </div>
    ${platforms.map(platform => `<section role="tabpanel" id="faq-panel-${platform}" aria-labelledby="faq-tab-${platform}" ${(platform === "android") === android ? "" : "hidden"}>${t.faqs.filter(([, , category]) => category === platform || category === "common").map(([q, a], i) => `<details ${i === 0 ? "open" : ""}><summary>${q}</summary><p>${a}</p></details>`).join("")}</section>`).join("")}`;
}
function activateFaqTab(tab) {
  const platform = tab.dataset.faqPlatform;
  state.device = platform === "ios" ? "ipad" : (state.device === "pad" ? "pad" : "terminal");
  state.anchor = "";
  history.replaceState(null, "", href("faq"));
  document.querySelectorAll("[data-faq-platform]").forEach(button => {
    const selected = button === tab;
    button.setAttribute("aria-selected", String(selected));
    button.tabIndex = selected ? 0 : -1;
    document.getElementById(button.getAttribute("aria-controls")).hidden = !selected;
  });
}

function renderArticle(t) {
  const labels = { guide: t.nav[0], specs: t.nav[1], faq: t.nav[2] };
  const body =
    state.page === "guide"
      ? renderGuide(t)
      : state.page === "specs"
        ? renderSpecs(t)
        : renderFaq(t);
  return /* HTML */ `<main id="main" class="wrap">
    <div class="breadcrumb">
      ${link("home", t.home)} <span aria-hidden="true">›</span> V1.1–V1.2
      <span aria-hidden="true">›</span> ${labels[state.page]}
    </div>
    <div class="article-layout">
      <aside class="sidebar">
        <section class="sidebar-group">
          <h2>${t.sidebarGroups[0]}</h2>
          <div class="sidebar-items">
            ${deviceKeys.map((key, i) => `<a href="${href("guide", key)}" ${state.page === "guide" && state.device === key ? 'aria-current="page"' : ""}>${t.devices[i]}</a>`).join("")}
          </div>
        </section>
        <hr class="sidebar-divider">
        <section class="sidebar-group">
          <h2>${t.sidebarGroups[1]}</h2>
          <div class="sidebar-items">
            <a href="${href("specs")}" ${state.page === "specs" ? 'aria-current="page"' : ""}>${t.nav[1]}</a>
          </div>
        </section>
        <hr class="sidebar-divider">
        <section class="sidebar-group">
          <h2>${t.sidebarGroups[2]}</h2>
          <div class="sidebar-items">
            <a href="${href("faq")}" ${state.page === "faq" ? 'aria-current="page"' : ""}>${t.nav[2]}</a>
          </div>
        </section>
      </aside>
      <article class="article">${body}</article>
    </div>
  </main>`;
}
function render() {
  const parts = location.hash.replace(/^#\//, "").split("/");
  state = {
    locale: translations[parts[0]] ? parts[0] : "zh",
    page: ["guide", "specs", "faq"].includes(parts[2]) ? parts[2] : "home",
    device: deviceKeys.includes(parts[3]) ? parts[3] : "ipad",
    scene: sceneKeys.includes(parts[4]) ? parts[4] : "install",
    anchor: [...deviceKeys.map(key => `spec-${key}`), ...sceneKeys.map(scene => `guide-${scene}`)].includes(parts[5]) ? parts[5] : "",
  };
  const t = translations[state.locale];
  document.documentElement.lang = t.lang;
  document.title = `${state.page === "home" ? t.manual : t.nav[["guide", "specs", "faq"].indexOf(state.page)]}${state.locale === "en" ? ": " : "："}LightChain`;
  document.getElementById("app").innerHTML =
    /* HTML */
    `<a class="skip" href="#main">${t.skip}</a>
      <header>
        <div class="topbar">
          ${link("home", `<img src="./assets/lightchain-logo.svg" alt="${t.brand}" width="117" height="24">`, undefined, undefined, "brand")}
          <div class="utility">
            <label for="language">${t.languageLabel}</label
            ><select id="language" aria-label="${t.languageLabel}">
              ${[
                ["zh", "🇨🇳 简体中文"],
                ["ja", "🇯🇵 日本語"],
                ["en", "🇺🇸 English"],
              ]
                .map(
                  ([key, label]) =>
                    `<option value="${key}" ${key === state.locale ? "selected" : ""}>${label}</option>`,
                )
                .join("")}
            </select>
          </div>
        </div>
      </header>
      <nav class="localnav" aria-label="${t.manual}">
        <div class="localbar">
          ${link("home", t.manual, undefined, undefined, "localtitle")}
          <div class="navlinks">
            ${["guide", "specs", "faq"].map((page, i) => `<a href="${href(page)}" ${state.page === page ? 'aria-current="page"' : ""}>${t.nav[i]}</a>`).join("")}
          </div>
        </div>
      </nav>
      ${state.page === "home" ? renderHome(t) : renderArticle(t)}
      <footer class="wrap footer">
        <span>${t.footer}</span><span>${t.updated}</span>
      </footer>`;
  document.getElementById("language").addEventListener("change", (event) => {
    state.locale = event.target.value;
    location.hash = href(state.page) + (state.anchor ? `/${state.anchor}` : "");
  });
  document.querySelectorAll("[data-section-anchor]").forEach(anchor => {
    anchor.addEventListener("click", () => {
      if (anchor.hash === location.hash) scrollToRoute();
    });
  });
  document.querySelector(".skip").addEventListener("click", (event) => {
    event.preventDefault();
    const main = document.getElementById("main");
    main.tabIndex = -1;
    main.focus();
  });
  const faqTabs = [...document.querySelectorAll("[data-faq-platform]")];
  faqTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateFaqTab(tab));
    tab.addEventListener("keydown", event => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === "Home" ? 0 : event.key === "End" ? faqTabs.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + faqTabs.length) % faqTabs.length;
      faqTabs[next].focus();
      activateFaqTab(faqTabs[next]);
    });
  });
  document.querySelectorAll(".image-preview-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => openImageViewer(trigger));
  });
  updateAnchorLayout();
}
function updateAnchorLayout() {
  const utilityHeight = document.querySelector("#app > header").getBoundingClientRect().height;
  const stackHeight = utilityHeight + document.querySelector(".localnav").getBoundingClientRect().height;
  document.documentElement.style.setProperty("--utility-bar-height", `${utilityHeight}px`);
  document.documentElement.style.setProperty("--header-stack-height", `${stackHeight}px`);
  const navigation = document.querySelector(".section-anchors");
  if (!navigation) return;
  const top = stackHeight + 12;
  document.documentElement.style.setProperty("--anchor-nav-top", `${top}px`);
  document.documentElement.style.setProperty("--anchor-scroll-offset", `${top + navigation.getBoundingClientRect().height + 24}px`);
  updateActiveSection();
}
function updateActiveSection() {
  const navigation = document.querySelector(".section-anchors");
  if (!navigation) return;
  const offset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--anchor-scroll-offset"));
  let activeId = document.querySelector(".anchor-section")?.id;
  document.querySelectorAll(".anchor-section").forEach(section => {
    if (section.getBoundingClientRect().top <= offset + 2) activeId = section.id;
  });
  navigation.querySelectorAll("a").forEach(anchor => {
    if (anchor.dataset.sectionAnchor === activeId) {
      anchor.setAttribute("aria-current", "location");
    } else {
      anchor.removeAttribute("aria-current");
    }
  });
}
window.addEventListener("resize", updateAnchorLayout);
window.addEventListener("scroll", updateActiveSection, { passive: true });
function scrollToRoute() {
  const targetId = state.anchor || (state.page === "guide" && state.scene !== "install" ? `guide-${state.scene}` : "");
  const section = document.getElementById(targetId);
  if (section) {
    section.focus({ preventScroll: true });
    section.scrollIntoView({ block: "start" });
    updateActiveSection();
  } else {
    window.scrollTo(0, 0);
  }
}
window.addEventListener("hashchange", () => {
  render();
  scrollToRoute();
});
render();
scrollToRoute();
