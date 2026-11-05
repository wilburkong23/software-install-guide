const translations = {
  zh: {
    lang: "zh-CN",
    brand: "轻链 LightChain",
    manual: "AI试衣终端用户手册",
    support: "产品支持",
    nav: ["下载、安装与更新", "设备规格", "常见问题"],
    home: "手册首页",
    heading: "轻链AI试衣终端",
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
    footer: "轻链AI试衣终端 · 用户手册",
    updated: "适用 V1.1–V1.2 · 更新于 2026 年 11 月 5 日",
    skip: "跳转到正文",
    scenes: ["首次安装", "老版本换装", "现有版本更新"],
    preparation: "开始前，请先检查",
    ipadPrep:
      "准备 iPadOS 16.4 或以上系统的 iPad、Apple 账户及稳定网络。保持供电，并确认有足够存储空间。",
    androidPrep:
      "确认设备为 Android 12 或以上系统，连接稳定网络并保持供电。安装前请查看设备规格，准备好运营提供的登录账号。",
    legacy: "适用范围待确认",
    legacyAndroid:
      "旧版设备换装需要卸载旧的试衣终端 App 和轻链更新助手。请先联系运营确认当前版本属于需要换装的范围，并确认照片保存及账号信息，再继续以下安装步骤。",
    legacyIpad:
      "现有资料尚未明确 iPad 老版本是否需要卸载。请先向运营确认版本与处理方式，再按首次安装指引操作。",
    installed: "完成后确认",
    installedText:
      "打开轻链AI试衣终端，核对实际 App 版本与运营通知一致，并确认账号、门店内容及相机权限。更新助手或 TestFlight 安装完成后，还需要完成终端 App 的安装。",
    video: "视频教程",
    videoText: "正在准备，当前请按上方步骤操作。",
    ipadSteps: [
      [
        "安装 TestFlight",
        "在 App Store 中获取 Apple 提供的 TestFlight，安装后打开并完成首次设置。",
        "获取 TestFlight",
        "https://apps.apple.com/app/testflight/id899247664",
      ],
      [
        "打开轻链AI试衣终端安装邀请",
        "完成 TestFlight 初次设置后，点击下方“安装轻链AI试衣终端”按钮，在邀请页选择“在 TestFlight 中查看”。",
        "安装轻链AI试衣终端",
        "https://testflight.apple.com/join/NdJvT2Gt",
      ],
      [
        "接受邀请并安装",
        "核对应用名称为轻链AI试衣终端，首次加入时点击“接受”，再点击“安装”。",
      ],
      [
        "打开试衣终端",
        "等待安装完成，点击“打开”，或在主屏幕找到轻链AI试衣终端。",
      ],
    ],
    androidSteps: [
      [
        "下载轻链更新助手",
        "在需要安装的安卓设备浏览器中打开下载页，选择“下载 Updater App”。",
        "打开下载页",
        "https://tryon-mirror.lightchainai.com/d",
      ],
      [
        "安装更新助手",
        "从浏览器下载记录或文件管理中打开 APK。按系统提示允许当前浏览器或文件管理安装应用，再继续安装。受管设备请联系管理员。",
      ],
      [
        "安装试衣终端 App",
        "打开轻链更新助手，点击“检查并更新”。若系统要求允许助手安装应用，按提示授权后继续下载和安装。",
      ],
      [
        "打开并核对版本",
        "安装结束后打开轻链AI试衣终端。助手的“业务版本”仅用于辅助排查，请以 App 内的当前版本为准。",
      ],
    ],
    ipadUpdate: [
      ["结束当前体验", "保存本次照片，保持网络与电量。"],
      [
        "在 TestFlight 中更新",
        "打开 TestFlight，找到轻链AI试衣终端，点击“更新”。若仅显示“打开”，请核对版本是否符合运营通知。",
      ],
      [
        "重新打开并检查",
        "启动终端 App，核对版本、账号和门店内容。没有目标构建时，请联系运营。",
      ],
    ],
    androidUpdate: [
      [
        "结束当前体验",
        "确认无人正在拍照、生成或实时试衣，保存照片，保持网络与供电。",
      ],
      [
        "在 App 中检查更新",
        "首页左上 Logo 连续点击 7 次进入个人中心，记录当前版本并点击“检查更新”。",
      ],
      [
        "通过更新助手完成安装",
        "跳转轻链更新助手后点击“检查并更新”，按提示下载和安装。无法跳转时可从桌面打开助手。",
      ],
      [
        "返回 App 核对",
        "重新打开终端 App，确认当前版本与发布通知一致。检查失败时检查网络并重试，持续失败请联系运营。",
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
      "两端均需稳定访问业务、实时视频与媒体上传服务。固定终端优先有线，平板优先稳定的 5GHz Wi-Fi。使用 Decart 实时视频时，项目推荐每台设备上行、下行各至少 10 Mbps 可用带宽，多台并发按设备数累加。",
    networkDetail: "现场实施与网络配置",
    networkDetailText:
      "场地网络还需验证实时媒体所需 UDP、WebSocket 及相关域名的可达性。请向实施人员获取交付环境的放行清单，并在实际并发量下测试真实试衣会话。",
    faqIntro: "按当前 V1.1–V1.2 安装与更新流程整理。",
    faqs: [
      [
        "如何查看 App 版本？",
        "在首页左上 Logo 连续点击 7 次，进入个人中心查看“当前版本”。将它与运营发布通知核对。",
      ],
      [
        "安卓提示安装失败，怎么办？",
        "先检查系统是否为 Android 12 及以上，再确认是否仍有旧版试衣终端和更新助手。需要换装时先向运营确认版本范围，再按老版本换装流程处理。",
      ],
      [
        "已经安装 TestFlight，为什么找不到试衣终端？",
        "返回 iPad 安装教程，点击“安装轻链AI试衣终端”，从邀请页进入 TestFlight，接受邀请并安装应用。",
      ],
      [
        "更新助手显示最新，为什么 App 版本没变？",
        "请打开试衣终端 App 核对当前版本。检查是否完成系统安装确认。持续异常时记录 App 版本、助手业务版本和提示截图，联系运营。",
      ],
      [
        "TestFlight 没有安装按钮或目标版本？",
        "记录页面提示，确认机型和系统版本，并将截图发给运营核对测试资格、名额及构建有效期。",
      ],
      [
        "可以通过应用商店安装吗？",
        "本手册对应更新助手与 TestFlight 渠道。应用宝、Google Play 和 App Store 渠道将在正式发布后，随对应版本手册提供入口和迁移说明。",
      ],
      [
        "更新持续失败，需要提供哪些信息？",
        "请记录设备型号、系统版本、App 版本、安装渠道及完整提示截图，联系运营协助处理。",
      ],
    ],
  },
  en: {
    lang: "en",
    brand: "LightChain",
    manual: "AI Fitting Terminal User Guide",
    support: "Product support",
    nav: ["Install & update", "Specifications", "FAQ"],
    home: "Guide home",
    heading: "LightChain AI Fitting Terminal",
    intro:
      "Find the right instructions for your device, from your first installation to your next update.",
    choose: "Choose your device",
    devices: ["iPad", "Android terminal", "Android tablet"],
    channels: [
      "Install and update with TestFlight",
      "Install and update with LightChain Updater",
      "Install and update with LightChain Updater",
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
    footer: "LightChain AI Fitting Terminal · User Guide",
    updated: "For V1.1–V1.2 · Updated November 5, 2026",
    skip: "Skip to content",
    scenes: [
      "First installation",
      "Replace a legacy version",
      "Update your app",
    ],
    preparation: "Before you begin",
    ipadPrep:
      "Prepare an iPad running iPadOS 16.4 or later, an Apple Account and a stable connection. Keep the device powered and check available storage.",
    androidPrep:
      "Check that your device runs Android 12 or later. Keep it powered and connected. Review device specifications and have your operator-provided account ready.",
    legacy: "Confirm applicability first",
    legacyAndroid:
      "Replacing a legacy installation requires removing the old terminal app and LightChain Updater. Ask your operator to confirm that this applies to your version, save your photos and confirm your account details before following the steps below.",
    legacyIpad:
      "The current instructions do not specify whether a legacy iPad app must be removed. Confirm the procedure with your operator before following the first-installation steps.",
    installed: "Check when finished",
    installedText:
      "Open the terminal app and verify its version against the release notice. Check your account, store content and camera permissions. After installing TestFlight or the updater, complete the terminal app installation too.",
    video: "Video tutorial",
    videoText: "In preparation. Please follow the steps above for now.",
    ipadSteps: [
      [
        "Install TestFlight",
        "Get TestFlight by Apple from the App Store. Open it and complete the initial setup.",
        "Get TestFlight",
        "https://apps.apple.com/app/testflight/id899247664",
      ],
      [
        "Open the LightChain AI Fitting Terminal invitation",
        "After completing TestFlight setup, select “Install LightChain AI Fitting Terminal” below, then select “View in TestFlight” on the invitation page.",
        "Install LightChain AI Fitting Terminal",
        "https://testflight.apple.com/join/NdJvT2Gt",
      ],
      [
        "Accept and install",
        "Check the app name. When joining for the first time, select Accept, then Install.",
      ],
      [
        "Open the terminal app",
        "Wait for installation to finish, then select Open or find the terminal app on your Home Screen.",
      ],
    ],
    androidSteps: [
      [
        "Download LightChain Updater",
        "Open the download page on your Android device and select “下载 Updater App”.",
        "Open download page",
        "https://tryon-mirror.lightchainai.com/d",
      ],
      [
        "Install the updater",
        "Open the APK from browser downloads or your file manager. If prompted, allow this source to install apps. Contact your administrator for managed devices.",
      ],
      [
        "Install the terminal app",
        "Open LightChain Updater and select “检查并更新” (Check and update). Grant installation permission if requested and finish downloading and installing.",
      ],
      [
        "Open and check the version",
        "Open the terminal app. Use the version shown inside the app for verification. The updater’s business version is for troubleshooting.",
      ],
    ],
    ipadUpdate: [
      [
        "Finish the current session",
        "Save your photos and keep the device connected and charged.",
      ],
      [
        "Update in TestFlight",
        "Find the terminal app in TestFlight and select Update. If it shows Open, compare the version with your operator’s release notice.",
      ],
      [
        "Open and verify",
        "Check the app version, account and store content. Contact your operator if the required build is unavailable.",
      ],
    ],
    androidUpdate: [
      [
        "Finish the current session",
        "Wait for active photo, generation or live fitting tasks to finish. Save photos and maintain power and connectivity.",
      ],
      [
        "Check for updates in the app",
        "Tap the top-left logo on the home screen seven times to open the profile. Record the current version and select Check for updates.",
      ],
      [
        "Complete installation with the updater",
        "In LightChain Updater, select “检查并更新” (Check and update). Follow the download and installation prompts. Open the updater from the desktop if needed.",
      ],
      [
        "Return to the app",
        "Verify that the installed version matches the release notice. Check connectivity and retry if checking fails. Contact your operator if the problem persists.",
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
      "Both platforms need reliable access to business, live video and media-upload services. Prefer Ethernet for fixed terminals or stable 5GHz Wi-Fi for tablets. For Decart live video, the project recommends at least 10 Mbps available upload and download per device. Multiply by concurrent devices.",
    networkDetail: "Deployment and network configuration",
    networkDetailText:
      "Validate the UDP, WebSocket and domain access required for real-time media. Obtain the environment-specific allowlist from your deployment team and test live sessions at the planned concurrency.",
    faqIntro: "Answers for the V1.1–V1.2 installation and update workflow.",
    faqs: [
      [
        "Where can I find the app version?",
        "Tap the top-left logo on the home screen seven times. Find Current version in the profile and compare it with the release notice.",
      ],
      [
        "Why does installation fail on Android?",
        "Check for Android 12 or later and existing legacy terminal and updater apps. Ask your operator whether legacy replacement applies before removing anything.",
      ],
      [
        "TestFlight is installed. Where is the terminal app?",
        "Return to the iPad guide and select Install LightChain AI Fitting Terminal. Open the invitation in TestFlight, accept and install.",
      ],
      [
        "The updater says up to date, but the app version is unchanged.",
        "Check the version inside the terminal app and ensure the system installation confirmation was completed. Send the app version, updater business version and screenshots to your operator if needed.",
      ],
      [
        "TestFlight has no installation button or required build.",
        "Record the message, device model and OS version. Ask your operator to check eligibility, capacity and build validity.",
      ],
      [
        "Can I use an app store?",
        "This guide covers the updater and TestFlight channels. Official store links and migration instructions will be included with the relevant version guide after release.",
      ],
      [
        "What should I provide if updates keep failing?",
        "Send your device model, OS version, app version, installation channel and a complete screenshot of the message to your operator.",
      ],
    ],
  },
  ja: {
    lang: "ja",
    brand: "LightChain",
    manual: "AI試着端末ユーザーガイド",
    support: "製品サポート",
    nav: ["インストールと更新", "動作環境", "よくある質問"],
    home: "ガイドのホーム",
    heading: "LightChain AI試着端末",
    intro: "お使いのデバイスに合った手順で、インストールからアップデートまで。",
    choose: "デバイスを選択",
    devices: ["iPad", "Android端末", "Androidタブレット"],
    channels: [
      "TestFlightでインストール・更新",
      "LightChain更新アシスタントを使用",
      "LightChain更新アシスタントを使用",
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
    footer: "LightChain AI試着端末 · ユーザーガイド",
    updated: "V1.1–V1.2 対応 · 2026年11月5日更新",
    skip: "本文へ移動",
    scenes: ["初めてのインストール", "旧版からの入れ替え", "アプリの更新"],
    preparation: "開始前に確認",
    ipadPrep:
      "iPadOS 16.4以降のiPad、Apple Account、安定したネットワークを用意してください。電源と空き容量も確認します。",
    androidPrep:
      "Android 12以降であることを確認し、電源とネットワークを確保してください。動作環境を確認し、運営担当者から案内されたアカウントを用意します。",
    legacy: "対象バージョンの確認が必要です",
    legacyAndroid:
      "旧版からの入れ替えでは、旧試着端末アプリと更新アシスタントの削除が必要です。担当者に対象バージョンか確認し、写真の保存とアカウント情報を確認してから、以下の手順を進めてください。",
    legacyIpad:
      "iPadの旧版アプリを削除する必要があるかは、現時点の資料では確定していません。担当者に確認後、初回インストール手順に従ってください。",
    installed: "完了後の確認",
    installedText:
      "試着端末アプリを開き、バージョンをリリース案内と照合します。アカウント、店舗情報、カメラ権限も確認してください。TestFlightや更新アシスタントの導入後、試着端末アプリ自体のインストールも完了させます。",
    video: "動画ガイド",
    videoText: "準備中です。現在は上記の手順をご利用ください。",
    ipadSteps: [
      [
        "TestFlightをインストール",
        "App StoreでApple提供のTestFlightを入手し、起動して初期設定を完了します。",
        "TestFlightを入手",
        "https://apps.apple.com/app/testflight/id899247664",
      ],
      [
        "LightChain AI試着端末のインストール招待を開く",
        "TestFlightの初期設定後、下の「AI試着端末をインストール」ボタンをタップし、招待ページで「TestFlightで表示」を選択します。",
        "AI試着端末をインストール",
        "https://testflight.apple.com/join/NdJvT2Gt",
      ],
      [
        "招待を承認してインストール",
        "アプリ名を確認します。初回は「承認」を選択し、「インストール」をタップします。",
      ],
      [
        "試着端末アプリを開く",
        "完了後に「開く」をタップするか、ホーム画面の試着端末アプリを開きます。",
      ],
    ],
    androidSteps: [
      [
        "更新アシスタントをダウンロード",
        "対象のAndroidデバイスでダウンロードページを開き、「下载 Updater App」を選択します。",
        "ダウンロードページへ",
        "https://tryon-mirror.lightchainai.com/d",
      ],
      [
        "更新アシスタントをインストール",
        "ブラウザのダウンロード履歴またはファイル管理からAPKを開きます。必要に応じて提供元からのインストールを許可します。管理対象デバイスは管理者にご相談ください。",
      ],
      [
        "試着端末アプリをインストール",
        "更新アシスタントを開き、「检查并更新」（更新を確認）を選択します。必要な権限を許可し、ダウンロードとインストールを完了します。",
      ],
      [
        "アプリとバージョンを確認",
        "試着端末アプリを開き、アプリ内のバージョンを確認します。更新アシスタントの業務バージョンは調査用の情報です。",
      ],
    ],
    ipadUpdate: [
      ["利用中の操作を終了", "写真を保存し、ネットワークと電源を確保します。"],
      [
        "TestFlightで更新",
        "TestFlightで試着端末アプリを見つけ、「アップデート」を選択します。「開く」と表示される場合は、案内されたバージョンか確認してください。",
      ],
      [
        "再起動して確認",
        "アプリのバージョン、アカウント、店舗情報を確認します。対象ビルドがない場合は担当者にご連絡ください。",
      ],
    ],
    androidUpdate: [
      [
        "利用中の操作を終了",
        "撮影、画像生成、リアルタイム試着の終了を確認し、写真を保存します。電源とネットワークを維持してください。",
      ],
      [
        "アプリで更新を確認",
        "ホーム画面左上のロゴを7回タップして個人ページを開きます。現在のバージョンを記録し、更新確認を選択します。",
      ],
      [
        "更新アシスタントでインストール",
        "「检查并更新」（更新を確認）を選択し、案内に従ってダウンロードとインストールを完了します。自動で開かない場合はデスクトップから起動してください。",
      ],
      [
        "アプリに戻って確認",
        "リリース案内とバージョンを照合します。確認に失敗した場合は通信状態を確認して再試行し、解消しない場合は担当者にご連絡ください。",
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
      "両プラットフォームとも業務サービス、リアルタイム映像、メディアアップロードへの安定した接続が必要です。固定端末は有線、タブレットは安定した5GHz Wi-Fiを推奨します。Decart利用時は1台あたり上り・下り各10Mbps以上の実効帯域を推奨し、同時利用台数分を確保してください。",
    networkDetail: "現場導入とネットワーク設定",
    networkDetailText:
      "リアルタイム映像に必要なUDP、WebSocket、関連ドメインへの接続を確認してください。導入担当者から環境に応じた許可リストを入手し、予定する同時利用台数で実際の試着を検証します。",
    faqIntro: "V1.1–V1.2のインストールと更新に関するご案内です。",
    faqs: [
      [
        "アプリのバージョンはどこで確認できますか？",
        "ホーム画面左上のロゴを7回タップし、個人ページの現在のバージョンを確認します。リリース案内と照合してください。",
      ],
      [
        "Androidでインストールに失敗します。",
        "Android 12以降か、旧版アプリと更新アシスタントが残っていないかを確認します。削除前に担当者へ入れ替え対象か確認してください。",
      ],
      [
        "TestFlightを入れましたが、試着端末アプリがありません。",
        "iPadガイドに戻り、「AI試着端末をインストール」を選択します。招待からTestFlightに移動し、承認とインストールを完了してください。",
      ],
      [
        "更新アシスタントでは最新ですが、アプリのバージョンが変わりません。",
        "システムのインストール確認を完了したか確認します。解消しない場合はアプリのバージョン、業務バージョン、画面の画像を担当者に送ってください。",
      ],
      [
        "TestFlightにインストールボタンや対象ビルドがありません。",
        "メッセージ、機種、OSバージョンを記録し、担当者にテスト資格、定員、有効期限の確認を依頼してください。",
      ],
      [
        "公式ストアからインストールできますか？",
        "本ガイドは更新アシスタントとTestFlightを対象としています。公式ストアの入口と移行手順は、正式公開後に該当バージョンのガイドでご案内します。",
      ],
      [
        "更新に失敗し続ける場合は？",
        "機種、OSバージョン、アプリのバージョン、インストール経路、メッセージ全体のスクリーンショットを担当者にお送りください。",
      ],
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
function stepImage(t, ipad, index) {
  let filename;
  if (ipad && state.scene !== "update" && index === 1)
    filename = "ipad-invitation.png";
  if (!ipad && state.scene !== "update" && index === 0)
    filename = "android-download.png";
  if (!ipad && index === 2) filename = "android-updater.png";
  if (!filename) return "";
  const captions = {
    zh: "现有中文界面示意。截图中的版本、系统要求与旧登录描述以本手册正文及实际发布通知为准。点击查看原图。",
    en: "Existing Chinese interface reference. Follow this guide and the release notice for current versions, system requirements and sign-in instructions. Open the original image.",
    ja: "既存の中国語画面の参考画像です。バージョン、動作要件、ログイン方法は本文とリリース案内をご確認ください。原寸画像を開けます。",
  };
  return /* HTML */ `<figure class="tutorial-image">
    <a href="./assets/${filename}" target="_blank" rel="noopener noreferrer"
      ><img
        src="./assets/${filename}"
        alt="${ipad ? t.ipadSteps[1][0] : index === 0 ? t.androidSteps[0][0] : t.androidSteps[2][0]}"
        loading="lazy"
    /></a>
    <figcaption>${captions[state.locale]}</figcaption>
  </figure>`;
}
function renderGuide(t) {
  const ipad = state.device === "ipad";
  let steps = ipad ? t.ipadSteps : t.androidSteps;
  if (state.scene === "update") steps = ipad ? t.ipadUpdate : t.androidUpdate;
  return /* HTML */ `<h1>
      ${t.devices[deviceKeys.indexOf(state.device)]} · ${t.nav[0]}
    </h1>
    <p class="lede">${t.channels[deviceKeys.indexOf(state.device)]}</p>
    <div class="tabs" aria-label="${t.nav[0]}">
      ${sceneKeys.map((scene, i) => `<button data-scene="${scene}" aria-pressed="${state.scene === scene}">${t.scenes[i]}</button>`).join("")}
    </div>
    <div class="note">
      <strong>${t.preparation}</strong>${ipad ? t.ipadPrep : t.androidPrep}
    </div>
    ${state.scene === "legacy" ? `<div class="note"><strong>${t.legacy}</strong>${ipad ? t.legacyIpad : t.legacyAndroid}</div>` : ""}
    <h2>${t.scenes[sceneKeys.indexOf(state.scene)]}</h2>
    <ol class="steps">
      ${steps.map((step, index) => `<li><h3>${step[0]}</h3><p>${step[1]}</p>${step[2] ? `<a class="action" href="${step[3]}" target="_blank" rel="noopener noreferrer">${step[2]} <span aria-hidden="true">↗</span></a>` : ""}${stepImage(t, ipad, index)}</li>`).join("")}
    </ol>
    <div class="note"><strong>${t.installed}</strong>${t.installedText}</div>
    <div class="video">
      <span class="play" aria-hidden="true">▷</span>
      <div>
        <h3>${t.video}</h3>
        <p>${t.videoText}</p>
      </div>
    </div>
    ${link("faq", `${t.faqLink} ›`)}`;
}
function renderSpecs(t) {
  const ipad = state.device === "ipad";
  return /* HTML */ `<h1>${t.nav[1]}</h1>
    <p class="lede">${t.specIntro}</p>
    <div class="tabs" aria-label="${t.choose}">
      ${deviceKeys.map((key, i) => `<button data-device="${key}" aria-pressed="${state.device === key}">${t.devices[i]}</button>`).join("")}
    </div>
    <h2>${t.devices[deviceKeys.indexOf(state.device)]}</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            ${t.headers.map((h) => `<th scope="col">${h}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${(ipad ? t.ipadRows : t.androidRows).map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
    ${ipad ? `<p class="note">${t.ipadCaution}</p>` : ""}
    <h2>${t.network}</h2>
    <p>${t.networkText}</p>
    <details>
      <summary>${t.networkDetail}</summary>
      <p>${t.networkDetailText}</p>
    </details>`;
}
function renderArticle(t) {
  const labels = { guide: t.nav[0], specs: t.nav[1], faq: t.nav[2] };
  const body =
    state.page === "guide"
      ? renderGuide(t)
      : state.page === "specs"
        ? renderSpecs(t)
        : `<h1>${t.nav[2]}</h1><p class="lede">${t.faqIntro}</p>${t.faqs.map(([q, a], i) => `<details ${i === 0 ? "open" : ""}><summary>${q}</summary><p>${a}</p></details>`).join("")}`;
  return /* HTML */ `<main id="main" class="wrap">
    <div class="breadcrumb">
      ${link("home", t.home)} <span aria-hidden="true">›</span> V1.1–V1.2
      <span aria-hidden="true">›</span> ${labels[state.page]}
    </div>
    <div class="article-layout">
      <aside class="sidebar">
        <p>V1.1–V1.2</p>
        ${deviceKeys.map((key, i) => `<a href="${href("guide", key)}" ${state.page === "guide" && state.device === key ? 'aria-current="page"' : ""}>${t.devices[i]}</a>`).join("")}<a
          href="${href("specs")}"
          ${state.page === "specs" ? 'aria-current="page"' : ""}
          >${t.nav[1]}</a
        ><a
          href="${href("faq")}"
          ${state.page === "faq" ? 'aria-current="page"' : ""}
          >${t.nav[2]}</a
        >
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
  };
  const t = translations[state.locale];
  document.documentElement.lang = t.lang;
  document.title = `${state.page === "home" ? t.manual : t.nav[["guide", "specs", "faq"].indexOf(state.page)]} · LightChain`;
  document.getElementById("app").innerHTML =
    /* HTML */
    `<a class="skip" href="#main">${t.skip}</a>
      <header>
        <div class="topbar">
          ${link("home", `<img src="./assets/lightchain-logo.svg" alt="${t.brand}" width="117" height="24">`, undefined, undefined, "brand")}
          <div class="utility">
            <span>${t.support}</span
            ><select id="language" aria-label="Language / 语言 / 言語">
              ${[
                ["zh", "简体中文"],
                ["ja", "日本語"],
                ["en", "English"],
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
    location.hash = href(state.page);
  });
  document.querySelectorAll("[data-scene]").forEach((button) =>
    button.addEventListener("click", () => {
      location.hash = href("guide", state.device, button.dataset.scene);
    }),
  );
  document.querySelectorAll("[data-device]").forEach((button) =>
    button.addEventListener("click", () => {
      location.hash = href("specs", button.dataset.device);
    }),
  );
  document.querySelector(".skip").addEventListener("click", (event) => {
    event.preventDefault();
    const main = document.getElementById("main");
    main.tabIndex = -1;
    main.focus();
  });
}
window.addEventListener("hashchange", () => {
  render();
  window.scrollTo(0, 0);
});
render();
