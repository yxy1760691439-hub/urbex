export default function GuidePage() {
  const sections = [
    {
      title: '什么是城市探险',
      titleEn: 'What is Urban Exploration',
      icon: '🏚️',
      content: [
        '城市探险（Urbex）是探索人造结构的活动，通常是那些被遗弃或隐藏的建筑。这不仅仅是摄影，更是对城市历史和记忆的记录。',
        '探险者通过镜头记录那些即将消失的空间，保存它们最后的样子。每一处废墟都承载着一段故事，见证着时代的变迁。'
      ]
    },
    {
      title: '核心伦理',
      titleEn: 'Core Ethics',
      icon: '⚖️',
      content: [
        '"Take nothing but photographs, leave nothing but footprints"（除了照片什么都不带走，除了脚印什么都不留下）',
        '不破坏：不损坏任何物品，不留下涂鸦或垃圾',
        '不偷窃：不带走任何物品，包括看似废弃的物件',
        '不打扰：尊重周边居民，保持低调，不制造噪音',
        '不公开具体位置：保护遗址免遭破坏和商业开发'
      ]
    },
    {
      title: '安全指南',
      titleEn: 'Safety Guide',
      icon: '⚠️',
      content: [
        '结伴同行：至少两人以上，互相照应',
        '提前踩点：了解建筑结构和周边环境',
        '装备齐全：手电、口罩、手套、急救包',
        '注意结构安全：避开腐朽地板、不稳定墙体',
        '警惕环境风险：石棉、霉菌、有毒物质',
        '保持联络：告知他人行程，携带通讯工具',
        '懂得放弃：遇到危险立即撤离，没有照片值得冒生命危险'
      ]
    },
    {
      title: '法律边界',
      titleEn: 'Legal Boundaries',
      icon: '📜',
      content: [
        '城市探险在许多地方处于法律灰色地带。大多数废弃建筑仍有产权归属，擅自闯入可能构成非法侵入。',
        '了解当地法律：不同地区对私有财产和非法侵入的定义不同',
        '尊重禁止标识：明确的"禁止入内"标识意味着法律风险',
        '承担后果：如果被发现，配合执法，承担相应责任',
        '本网站内容仅供记录和教育用途，不鼓励违法行为'
      ]
    },
    {
      title: '摄影技巧',
      titleEn: 'Photography Tips',
      icon: '📷',
      content: [
        '充分利用自然光：废墟中的光影往往最动人',
        '注意构图：寻找对称、线条、框架等元素',
        '捕捉细节：锈迹、剥落的墙皮、遗留的物品',
        '使用三脚架：低光环境下保证画面清晰',
        '后期克制：保持真实感，避免过度处理',
        '记录而非摆拍：保留现场的原始状态'
      ]
    },
    {
      title: '常见风险',
      titleEn: 'Common Hazards',
      icon: '☠️',
      content: [
        '结构坍塌：楼板、屋顶、楼梯可能随时垮塌',
        '尖锐物品：玻璃碎片、生锈钉子、金属边缘',
        '有毒物质：石棉、铅漆、霉菌孢子',
        '生物危害：流浪动物、蛇、昆虫',
        '环境危险：积水坑洞、黑暗空间、狭窄通道',
        '社会风险：遇到其他不明身份人员'
      ]
    },
    {
      title: '推荐装备',
      titleEn: 'Essential Gear',
      icon: '🎒',
      content: [
        '照明：强光手电、头灯（备用电池）',
        '防护：口罩/防毒面具、护目镜、厚手套',
        '服装：长袖长裤、耐磨鞋/登山靴',
        '工具：多功能工具刀、绳索',
        '记录：相机、备用存储卡、充电宝',
        '急救：急救包、常用药物',
        '通讯：手机、对讲机'
      ]
    },
    {
      title: '探险礼仪',
      titleEn: 'Explorer Etiquette',
      icon: '🤝',
      content: [
        '保密原则：不公开具体位置和路线',
        '尊重先来者：遇到其他探险者，保持友好',
        '保护遗址：劝阻破坏行为，但不要冲突',
        '分享知识：与社区分享经验和安全建议',
        '承认历史：理解建筑背后的历史和文化意义',
        '反对商业化：不为牟利而破坏或公开遗址'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 页面标题 */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-light text-white mb-6">
            Guide <span className="text-terminal-green">/</span> 指南
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            城市探险的知识、伦理与安全指导
          </p>
        </div>

        {/* 引言 */}
        <div className="mb-16 p-8 bg-dark-800 border-l-4 border-terminal-green rounded">
          <p className="text-gray-300 leading-relaxed mb-4">
            城市探险是一项充满魅力但也伴随风险的活动。在探索废弃空间时，我们不仅要保护自己的安全，更要尊重这些建筑的历史，遵守探险者的伦理准则。
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            本指南旨在帮助你了解城市探险的基本知识，培养正确的探险态度，并在探索中保护自己和遗址。
          </p>
        </div>

        {/* 章节内容 */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={index} className="border-b border-gray-900 pb-12 last:border-0">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl">{section.icon}</span>
                <div>
                  <h2 className="text-2xl font-display font-light text-white mb-2">
                    {section.title}
                  </h2>
                  <p className="text-sm text-gray-600 font-mono">{section.titleEn}</p>
                </div>
              </div>

              <div className="space-y-4 pl-16">
                {section.content.map((paragraph, pIndex) => (
                  <p 
                    key={pIndex}
                    className={`leading-relaxed ${
                      paragraph.startsWith('"') || paragraph.startsWith('·')
                        ? 'text-terminal-green/80 font-light italic'
                        : 'text-gray-400'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* 免责声明 */}
        <div className="mt-16 p-8 bg-red-950/20 border border-red-900/30 rounded">
          <h3 className="text-xl font-display font-light text-red-400 mb-4 flex items-center gap-2">
            <span>⚠️</span>
            免责声明
          </h3>
          <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
            <p>
              本网站提供的信息仅供教育和记录用途。城市探险可能涉及法律风险、人身安全风险和财产风险。
            </p>
            <p>
              我们不鼓励任何违法行为。在探索任何地点前，请务必了解当地法律法规，获得必要许可，并对自己的行为负责。
            </p>
            <p className="text-red-400 font-medium">
              任何因参考本指南而产生的法律责任、人身伤害或其他损失，本网站及作者概不负责。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
