const specificationUpdates = {
  "zh": {
    "modelTitle": "推荐型号范围",
    "models": [
      "iPad：第 10 代（A14）及后续型号。",
      "iPad Air：第 4 代（A14）及后续型号；高频使用优先第 5 代（M1、8GB）及更新 M 系列。",
      "iPad mini：第 6 代（A15）及后续型号；采购前确认小屏幕适合现场操作。",
      "iPad Pro：11 英寸从第 3 代（M1）开始，12.9 英寸从第 5 代（M1）开始，以及后续 M 系列型号。"
    ],
    "ipadRows": [
      [
        "系统",
        "iPadOS 16.4 及以上；iPad 专用，竖屏全屏",
        "iPadOS 26.0 及以上"
      ],
      [
        "芯片与内存",
        "低于 A14，请与技术人员确认安装条件；内存按机型核对",
        "A14 及更新 A 系列／M 系列；高频、长时间运行或双路录制优先 M 系列、8GB 及以上"
      ],
      [
        "存储",
        "64GB，并保留安装、更新所需空间",
        "新采购 128GB 及以上，日常保留 20GB 可用空间；无 128GB 档位时选更高容量"
      ],
      [
        "摄像头与屏幕",
        "相机可被 App 调用并已授权",
        "持续采集 1080p／30fps；优先 10.9 英寸及以上，mini 用于紧凑场景；竖屏固定、全身取景、均匀照明"
      ]
    ],
    "androidRows": [
      [
        "系统",
        "Android 12 及以上",
        "Android 15 及以上，使用与交付 App 验证匹配的稳定固件"
      ],
      [
        "处理器",
        "需结合整机实测，无统一最低型号",
        "RK3588 级别或同档平板处理器"
      ],
      [
        "内存",
        "8GB（最低选型建议）",
        "8GB 及以上；高频与多任务可选 12GB 及以上"
      ],
      [
        "存储",
        "64GB，并为更新、缓存及待上传录像保留空间",
        "64GB 及以上；平板新采购优先 128GB，日常保留 20GB 可用空间"
      ],
      [
        "尺寸",
        "无固定英寸安装限制；满足取景、文字可读性和触控操作",
        "一体机 10.5–55 英寸；平板展示优先 10.5 英寸及以上"
      ],
      [
        "屏幕／触控",
        "系统正常识别，点击、滑动与多点触控可用",
        "红外／电容，多点触控"
      ],
      [
        "分辨率",
        "无统一最低像素要求，需实测",
        "1K–4K，核对面板实际像素；高分屏不代表模型输出分辨率更高"
      ],
      [
        "网络",
        "可稳定访问业务、模型实时视频和媒体上传服务",
        "有线／无线；固定场地优先有线，平板优先稳定的 5GHz Wi-Fi"
      ],
      [
        "接口",
        "相机与网络接口可用；外接 USB 相机验证驱动及 App 调用",
        "一体机具备网口／USB；平板使用内置相机，外接时验证 USB 接入能力"
      ],
      [
        "摄像头",
        "App 可识别并持续采集，按 1080p／30fps 验证；授予摄像头、麦克风权限",
        "一体机：影石 Insta360 Link 2C；平板：实测内置相机，核对取景、旋转与镜像"
      ]
    ],
    "processorTitle": "安卓平板处理器选型范围",
    "processorNote": "以下是候选范围，不代表所有搭载这些芯片的设备都已通过验证。按实际内存、固件、相机与完整试衣流程验收；型号中的“+”“s”须完整核对。",
    "processorHeaders": [
      "类别",
      "候选处理器",
      "选型说明"
    ],
    "processorRows": [
      [
        "一体机基准",
        "瑞芯微 RK3588",
        "4×Cortex-A76＋4×Cortex-A55；Mali-G610 MP4"
      ],
      [
        "相近档位：高通",
        "骁龙 860、865、865+、870",
        "新选型优先 865／870；860 作为较旧存量候选单独测试。参考：小米平板 6，选择 8GB 版本"
      ],
      [
        "相近档位：联发科",
        "天玑 8020",
        "平板候选平台，需整机验证"
      ],
      [
        "升级候选：高通",
        "骁龙 7+ Gen 3、8 Gen 1、8+ Gen 1、8 Gen 2、8s Gen 3、8 Gen 3、8s Gen 4、8 Elite、8 Elite Gen 5",
        "参考：小米平板 7、7 Pro、8"
      ],
      [
        "升级候选：联发科",
        "天玑 8100、8200、8300、8350（含 8350 Elite）、9000、9300／9300+、9400+、9500",
        "参考：OPPO Pad 3、荣耀平板 V9、Galaxy Tab S11 系列"
      ]
    ],
    "recording": "运行限制：摄像头须能被系统及 App 正常枚举、打开和采集。本地双路录制需要可用的 H.264 Surface 编码器及 EGL14。",
    "networkTitle": "Pro 模型实时视频：带宽与网络质量",
    "networkHeaders": [
      "项目",
      "基本要求／质量参考",
      "推荐目标"
    ],
    "networkRows": [
      [
        "上下行带宽",
        "每个并发会话上行、下行各至少 3.5 Mbps；计入协议开销按各 4 Mbps 配置，双向同时使用",
        "本项目每台上行 ≥10 Mbps、下行 ≥10 Mbps 的实际可用带宽"
      ],
      [
        "媒体链路 RTT",
        "150–300ms：fair；300–500ms：poor；>500ms：critical（各区间不含下限）",
        "≤150ms：good"
      ],
      [
        "丢包率",
        ">0.1% 至 1%：fair；>1% 至 5%：poor；>5%：critical",
        "≤0.1%：good"
      ],
      [
        "接收视频帧率",
        "12 至不足 20fps：fair；5 至不足 12fps：poor；<5fps：critical",
        "≥20fps：good，持续播放无卡住"
      ]
    ],
    "capacity": "N 台同时使用，上行和下行分别预留至少 N × 10 Mbps。这里指实际可用带宽，不是多台共用 10 Mbps，也不是宽带套餐标称速率。RTT 指媒体链路往返延迟。",
    "deployment": [
      "允许业务 API、鉴权、实时信令、遥测和媒体服务的 TCP 443／HTTPS／WSS 出站连接及返回流量，支持 WebSocket 升级与长连接。区域信令域名须按官方交付清单完整放行。",
      "实时媒体放行 UDP 7882（WebRTC），动态 TURN 中继放行 UDP 3478；当前网络探测使用 stun.l.google.com 的 UDP 19302。允许 ICE／STUN／TURN、DTLS／SRTP。仅放行 TCP 443 不足以满足要求。",
      "媒体与 TURN 地址随会话变化，不要把一次 DNS 结果固定为永久 IP 白名单。无需关闭整个防火墙或开放公网入站监听端口。具体域名和动态服务策略请向官方技术人员获取。",
      "不要将媒体流强制送入无法转发 UDP 的 HTTP／HTTPS 代理；不要解密检查 DTLS／SRTP。相关中继服务须排除 TLS 解密检查。不得因实时音视频、P2P 或 AI 服务分类而拦截或限速。",
      "同时验证交付环境业务 API、OSS／CDN 的 HTTPS 图片与录像上传下载。实际设备、现场网络和计划并发量下连续观察真实会话 2–3 分钟：质量保持 good、最差 fair，无停滞或带宽受限；记录抖动、重连并验证录像上传。网页、测速和 API 连通不能替代媒体验收。"
    ],
    "source": "规格依据：展会与外销问题跟进文档；同步于 2026 年 11 月 6 日。候选配置需实机验证，网络基础设施变化后应复核。"
  },
  "en": {
    "modelTitle": "Recommended iPad models",
    "models": [
      "iPad: 10th generation (A14) and later.",
      "iPad Air: 4th generation (A14) and later. For intensive use, prefer 5th generation (M1, 8GB) or newer M-series models.",
      "iPad mini: 6th generation (A15) and later. Confirm that the smaller screen suits on-site operation before purchase.",
      "iPad Pro: 11-inch from 3rd generation (M1), 12.9-inch from 5th generation (M1), and later M-series models."
    ],
    "ipadRows": [
      [
        "System",
        "iPadOS 16.4 or later; iPad only, portrait and full screen",
        "iPadOS 26.0 or later"
      ],
      [
        "Chip & memory",
        "For chips older than A14, confirm installation suitability with technical support. Check memory by model.",
        "A14 or newer A-series / M-series. Prefer M-series with at least 8GB for intensive use, long sessions or dual-stream recording."
      ],
      [
        "Storage",
        "64GB, with free space for installation and updates",
        "Buy 128GB or more and keep 20GB free. Choose a higher capacity if 128GB is unavailable."
      ],
      [
        "Camera & screen",
        "Camera accessible to the app, with permission granted",
        "Continuous 1080p / 30fps. Prefer 10.9 inches or larger; mini for compact spaces. Mount in portrait with full-body framing and even lighting."
      ]
    ],
    "androidRows": [
      [
        "System",
        "Android 12 or later",
        "Android 15 or later with firmware validated against the delivered app"
      ],
      [
        "Processor",
        "Validate the complete device; no universal minimum model",
        "RK3588-class or comparable tablet processor"
      ],
      [
        "Memory",
        "8GB minimum selection guideline",
        "8GB or more; 12GB or more for intensive use and multitasking"
      ],
      [
        "Storage",
        "64GB; reserve space for updates, cache and pending video uploads",
        "64GB or more; prefer 128GB for new tablets and keep 20GB free"
      ],
      [
        "Size",
        "No fixed installation size; ensure readable text, usable touch targets and suitable framing",
        "All-in-one: 10.5–55 inches; tablet displays: preferably 10.5 inches or larger"
      ],
      [
        "Screen / touch",
        "System recognition, taps, swipes and multitouch must work",
        "Infrared / capacitive multitouch"
      ],
      [
        "Resolution",
        "No universal minimum pixel count; validate on device",
        "1K–4K; verify actual panel pixels. Higher display resolution does not increase model output resolution."
      ],
      [
        "Network",
        "Reliable access to business, live model video and media-upload services",
        "Wired / wireless; prefer Ethernet for fixed installations and stable 5GHz Wi-Fi for tablets"
      ],
      [
        "Interfaces",
        "Working camera and network interfaces; validate USB camera drivers and app access",
        "All-in-one: Ethernet / USB. Tablets: built-in camera; validate USB access for external cameras."
      ],
      [
        "Camera",
        "Recognized by the app; continuous 1080p / 30fps capture validation; camera and microphone permissions",
        "All-in-one: Insta360 Link 2C. Tablets: tested built-in cameras; verify framing, rotation and mirroring."
      ]
    ],
    "processorTitle": "Android tablet processor candidates",
    "processorNote": "These are candidates, not a list of certified devices. Validate memory, firmware, camera and the complete fitting flow. Check every “+” and “s” suffix.",
    "processorHeaders": [
      "Category",
      "Candidate processors",
      "Selection notes"
    ],
    "processorRows": [
      [
        "All-in-one baseline",
        "Rockchip RK3588",
        "4×Cortex-A76 + 4×Cortex-A55; Mali-G610 MP4"
      ],
      [
        "Comparable: Qualcomm",
        "Snapdragon 860, 865, 865+, 870",
        "Prefer 865 / 870 for new selections. Test older 860 devices separately. Example: Xiaomi Pad 6, 8GB variant."
      ],
      [
        "Comparable: MediaTek",
        "Dimensity 8020",
        "Tablet candidate; validate the complete device"
      ],
      [
        "Upgrade candidates: Qualcomm",
        "Snapdragon 7+ Gen 3, 8 Gen 1, 8+ Gen 1, 8 Gen 2, 8s Gen 3, 8 Gen 3, 8s Gen 4, 8 Elite, 8 Elite Gen 5",
        "Examples: Xiaomi Pad 7, 7 Pro, 8"
      ],
      [
        "Upgrade candidates: MediaTek",
        "Dimensity 8100, 8200, 8300, 8350 (including 8350 Elite), 9000, 9300 / 9300+, 9400+, 9500",
        "Examples: OPPO Pad 3, HONOR Pad V9, Galaxy Tab S11 series"
      ]
    ],
    "recording": "Runtime requirements: the system and app must enumerate, open and capture from the camera. Local dual-stream recording requires a working H.264 Surface encoder and EGL14.",
    "networkTitle": "Pro model live video: bandwidth and quality",
    "networkHeaders": [
      "Metric",
      "Baseline / quality bands",
      "Recommended target"
    ],
    "networkRows": [
      [
        "Upload & download",
        "At least 3.5 Mbps in each direction per concurrent session; provision 4 Mbps each including protocol overhead. Both directions operate simultaneously.",
        "At least 10 Mbps available upload and 10 Mbps download per device"
      ],
      [
        "Media RTT",
        "150 < RTT ≤300ms: fair; 300 < RTT ≤500ms: poor; >500ms: critical",
        "≤150ms: good"
      ],
      [
        "Packet loss",
        ">0.1% to 1%: fair; >1% to 5%: poor; >5%: critical",
        "≤0.1%: good"
      ],
      [
        "Received video frame rate",
        "12 to <20fps: fair; 5 to <12fps: poor; <5fps: critical",
        "≥20fps: good, without playback freezes"
      ]
    ],
    "capacity": "For N concurrent devices, reserve at least N × 10 Mbps in each direction. This means available bandwidth, not 10 Mbps shared by all devices or the advertised plan speed. RTT is the media round-trip latency.",
    "deployment": [
      "Allow outbound TCP 443 / HTTPS / WSS and return traffic for business APIs, authentication, signalling, telemetry and media services. Support WebSocket upgrades and persistent connections. Allow all regional signalling domains in the official deployment list.",
      "Allow UDP 7882 for WebRTC media, UDP 3478 for dynamic TURN relays and UDP 19302 to stun.l.google.com for the current connection probe. Permit ICE / STUN / TURN and DTLS / SRTP. TCP 443 alone is insufficient.",
      "Media and TURN addresses vary by session. Do not turn a single DNS result into a permanent IP allowlist. There is no need to disable the entire firewall or expose inbound listening ports. Obtain exact domains and dynamic-service policies from official technical support.",
      "Do not force media through HTTP / HTTPS proxies that cannot forward UDP. Do not decrypt DTLS / SRTP; exclude the relevant relay service from TLS inspection. Avoid blocking or throttling based on real-time video, P2P or AI service categories.",
      "Also validate HTTPS image and video transfers to the delivered business API and OSS / CDN endpoints. Test actual devices at the site and planned concurrency for 2–3 minutes: good quality, fair at worst, no stalls or bandwidth limitation. Record jitter and reconnects and verify video uploads. Web browsing, speed tests and API connectivity do not replace media acceptance tests."
    ],
    "source": "Source: exhibition and overseas deployment issue tracker. Synced November 6, 2026. Validate candidate devices and recheck network rules when infrastructure changes."
  },
  "ja": {
    "modelTitle": "推奨iPadモデル",
    "models": [
      "iPad：第10世代（A14）以降。",
      "iPad Air：第4世代（A14）以降。高頻度利用では第5世代（M1、8GB）以降のMシリーズを優先。",
      "iPad mini：第6世代（A15）以降。購入前に小型画面が現場操作に適しているか確認してください。",
      "iPad Pro：11インチは第3世代（M1）、12.9インチは第5世代（M1）以降のMシリーズ。"
    ],
    "ipadRows": [
      [
        "OS",
        "iPadOS 16.4以降。iPad専用、縦向き・全画面",
        "iPadOS 26.0以降"
      ],
      [
        "チップ・メモリ",
        "A14より前のチップは技術担当者に導入条件を確認。メモリは機種ごとに確認。",
        "A14以降のAシリーズ／Mシリーズ。高頻度利用、長時間稼働、2系統録画にはMシリーズ・8GB以上を優先。"
      ],
      [
        "ストレージ",
        "64GB。インストールと更新用の空き容量が必要",
        "新規購入は128GB以上、日常的に20GBの空きを確保。128GBモデルがなければ上位容量を選択。"
      ],
      [
        "カメラ・画面",
        "アプリからカメラを利用でき、権限が許可されていること",
        "1080p／30fpsの連続撮影。10.9インチ以上を優先し、省スペース用途ではminiも候補。縦向き固定、全身の画角、均一な照明。"
      ]
    ],
    "androidRows": [
      [
        "OS",
        "Android 12以降",
        "Android 15以降。納品アプリとの動作確認済みの安定したファームウェア"
      ],
      [
        "プロセッサ",
        "端末全体で実測。共通の最低型番指定はなし",
        "RK3588相当、または同等クラスのタブレット向けプロセッサ"
      ],
      [
        "メモリ",
        "8GB（最低選定目安）",
        "8GB以上。高頻度利用やマルチタスクでは12GB以上も候補"
      ],
      [
        "ストレージ",
        "64GB。更新、キャッシュ、未送信動画用の空きを確保",
        "64GB以上。新規タブレットは128GBを優先し、日常的に20GBの空きを確保"
      ],
      [
        "サイズ",
        "固定のインチ制限なし。画角、文字の読みやすさ、タッチ操作を確認",
        "一体型：10.5–55インチ。タブレット展示：10.5インチ以上を優先"
      ],
      [
        "画面・タッチ",
        "OSが認識し、タップ、スワイプ、マルチタッチが動作すること",
        "赤外線／静電容量式、マルチタッチ対応"
      ],
      [
        "解像度",
        "共通の最低画素数指定なし。実機検証が必要",
        "1K–4K。パネルの実画素数を確認。高解像度画面でもモデル出力の解像度は上がりません。"
      ],
      [
        "ネットワーク",
        "業務、モデルのリアルタイム映像、メディア送信サービスに安定接続",
        "有線／無線。固定設置は有線、タブレットは安定した5GHz Wi-Fiを優先"
      ],
      [
        "インターフェース",
        "カメラと通信が動作。外付けUSBカメラはドライバとアプリからの利用を検証",
        "一体型：LAN／USB。タブレット：内蔵カメラ。外付け時はUSB接続能力を確認"
      ],
      [
        "カメラ",
        "アプリによる認識と1080p／30fpsの連続撮影を検証。カメラ・マイク権限を許可",
        "一体型：Insta360 Link 2C。タブレット：実測済み内蔵カメラ。画角、回転、ミラー表示を確認"
      ]
    ],
    "processorTitle": "Androidタブレットのプロセッサ候補",
    "processorNote": "以下は選定候補であり、搭載端末すべての動作保証ではありません。メモリ、ファームウェア、カメラ、試着の全工程を実機検証してください。「+」「s」も含めて型番を確認します。",
    "processorHeaders": [
      "分類",
      "候補プロセッサ",
      "選定上の注意"
    ],
    "processorRows": [
      [
        "一体型の基準",
        "Rockchip RK3588",
        "4×Cortex-A76＋4×Cortex-A55、Mali-G610 MP4"
      ],
      [
        "同等クラス：Qualcomm",
        "Snapdragon 860、865、865+、870",
        "新規選定は865／870を優先。旧860端末は個別に検証。例：Xiaomi Pad 6の8GB版"
      ],
      [
        "同等クラス：MediaTek",
        "Dimensity 8020",
        "タブレット向け候補。端末全体で検証"
      ],
      [
        "上位候補：Qualcomm",
        "Snapdragon 7+ Gen 3、8 Gen 1、8+ Gen 1、8 Gen 2、8s Gen 3、8 Gen 3、8s Gen 4、8 Elite、8 Elite Gen 5",
        "例：Xiaomi Pad 7、7 Pro、8"
      ],
      [
        "上位候補：MediaTek",
        "Dimensity 8100、8200、8300、8350（8350 Eliteを含む）、9000、9300／9300+、9400+、9500",
        "例：OPPO Pad 3、HONOR Pad V9、Galaxy Tab S11シリーズ"
      ]
    ],
    "recording": "動作条件：OSとアプリからカメラを列挙・起動し、映像を取得できること。ローカルの2系統録画には、利用可能なH.264 SurfaceエンコーダとEGL14が必要です。",
    "networkTitle": "Proモデルのリアルタイム映像：帯域と品質",
    "networkHeaders": [
      "項目",
      "基本要件・品質目安",
      "推奨目標"
    ],
    "networkRows": [
      [
        "上り・下り帯域",
        "同時セッションごとに上り・下り各3.5 Mbps以上。通信オーバーヘッドを含め各4 Mbpsで設計。上下同時に使用。",
        "端末ごとに上り10 Mbps以上、下り10 Mbps以上の実効帯域"
      ],
      [
        "メディアRTT",
        "150 < RTT ≤300ms：fair、300 < RTT ≤500ms：poor、>500ms：critical",
        "≤150ms：good"
      ],
      [
        "パケット損失率",
        ">0.1%～1%：fair、>1%～5%：poor、>5%：critical",
        "≤0.1%：good"
      ],
      [
        "受信映像フレームレート",
        "12～20fps未満：fair、5～12fps未満：poor、5fps未満：critical",
        "20fps以上：good、映像停止なし"
      ]
    ],
    "capacity": "N台同時利用では上り・下りそれぞれN × 10 Mbps以上を確保します。全端末で10 Mbpsを共有する意味ではなく、回線契約の公称値ではなく実効帯域です。RTTはメディア経路の往復遅延です。",
    "deployment": [
      "業務API、認証、シグナリング、テレメトリ、メディアサービスへのTCP 443／HTTPS／WSSの送信と応答を許可します。WebSocketへの切替と長時間接続に対応し、公式の導入リストにある地域別ドメインも許可してください。",
      "WebRTC映像用UDP 7882、動的TURN中継用UDP 3478、現在の接続確認先stun.l.google.comへのUDP 19302を許可します。ICE／STUN／TURN、DTLS／SRTPにも対応が必要です。TCP 443だけでは不十分です。",
      "メディアとTURNのアドレスはセッションごとに変わります。一度のDNS結果を恒久的なIP許可リストにしないでください。ファイアウォール全停止や外部向け受信ポート開放は不要です。具体的なドメインと動的サービスの設定は公式技術サポートから取得してください。",
      "UDP転送に対応しないHTTP／HTTPSプロキシへメディア通信を強制しないでください。DTLS／SRTPを復号検査せず、該当する中継サービスをTLS検査の対象外とします。リアルタイム映像、P2P、AIの分類で遮断・制限しないでください。",
      "納品環境の業務API、OSS／CDNへのHTTPS画像・動画送受信も検証します。実機、現場ネットワーク、予定同時台数で2–3分間の実セッションを確認し、good、最低でもfairを維持し、停止・帯域制限がないことを確認します。ジッター、再接続、動画アップロードも記録します。Web閲覧、速度測定、API疎通だけでは代替できません。"
    ],
    "source": "出典：展示会・海外導入の課題追跡文書。2026年11月6日同期。候補端末は実機で検証し、通信基盤変更時は設定を再確認してください。"
  }
};
