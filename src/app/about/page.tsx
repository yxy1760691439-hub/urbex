export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 页面标题 */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-light text-white mb-6">
            About <span className="text-terminal-green">/</span> 关于
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            关于 Urbex Notes 的理念与声明
          </p>
        </div>

        {/* 主要内容 */}
        <div className="space-y-16">
          {/* 项目简介 */}
          <section>
            <h2 className="text-2xl font-display font-light text-white mb-6 border-b border-gray-900 pb-4">
              项目简介
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Urbex Notes 是一个专注于记录和分享中国城市探险（Urban Exploration）内容的影像档案平台。
                我们致力于通过影像和文字，记录那些正在消失或即将被遗忘的城市空间，保存它们的最后样貌。
              </p>
              <p>
                每一处废弃建筑都是城市历史的见证者，承载着时代变迁的印记。
                我们希望通过这个平台，让更多人了解这些空间背后的故事，思考城市发展与历史保护的平衡。
              </p>
            </div>
          </section>

          {/* 核心理念 */}
          <section>
            <h2 className="text-2xl font-display font-light text-white mb-6 border-b border-gray-900 pb-4">
              核心理念
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-dark-800 border border-gray-800 rounded">
                <h3 className="text-lg font-display text-terminal-green mb-3">
                  记录与保护
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  用影像记录那些即将消失的空间，为城市留下历史的痕迹。
                  我们不鼓励破坏和商业开发，而是希望通过记录引发对历史建筑保护的思考。
                </p>
              </div>

              <div className="p-6 bg-dark-800 border border-gray-800 rounded">
                <h3 className="text-lg font-display text-terminal-green mb-3">
                  尊重与责任
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  遵循&ldquo;Take nothing but photographs, leave nothing but footprints&rdquo;的原则，
                  尊重建筑本身，尊重历史，尊重周边社区，对自己的行为负责。
                </p>
              </div>

              <div className="p-6 bg-dark-800 border border-gray-800 rounded">
                <h3 className="text-lg font-display text-terminal-green mb-3">
                  教育与传播
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  分享城市探险的知识、伦理和安全指导，帮助探险者正确认识这项活动，
                  培养对历史建筑的敬畏之心。
                </p>
              </div>

              <div className="p-6 bg-dark-800 border border-gray-800 rounded">
                <h3 className="text-lg font-display text-terminal-green mb-3">
                  社区与分享
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  建立一个理性、负责任的探险者社区，通过分享经验和故事，
                  让更多人理解城市探险的意义和价值。
                </p>
              </div>
            </div>
          </section>

          {/* 我们不是什么 */}
          <section>
            <h2 className="text-2xl font-display font-light text-white mb-6 border-b border-gray-900 pb-4">
              我们不是什么
            </h2>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-start gap-3">
                <span className="text-red-500 mt-1">×</span>
                <span>我们不是&ldquo;废墟旅游&rdquo;指南，不鼓励将探险地点商业化或娱乐化</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-500 mt-1">×</span>
                <span>我们不公开具体位置信息，以保护遗址免遭破坏</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-500 mt-1">×</span>
                <span>我们不鼓励违法行为，所有内容仅供记录和教育用途</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-500 mt-1">×</span>
                <span>我们不是专业的安全指导机构，探险者需自行评估风险</span>
              </p>
            </div>
          </section>

          {/* 版权声明 */}
          <section>
            <h2 className="text-2xl font-display font-light text-white mb-6 border-b border-gray-900 pb-4">
              版权声明
            </h2>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>
                本网站展示的所有照片、文字和设计元素均受版权保护。
                未经许可，不得用于商业用途、转载或二次创作。
              </p>
              <p>
                如需使用本站内容，请通过页面底部的联系方式与我们取得联系。
              </p>
            </div>
          </section>

          {/* 免责声明 */}
          <section className="p-8 bg-red-950/20 border border-red-900/30 rounded">
            <h2 className="text-xl font-display font-light text-red-400 mb-6 flex items-center gap-2">
              <span>⚠️</span>
              免责声明
            </h2>
            <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
              <p>
                <strong className="text-red-400">法律责任：</strong>
                城市探险可能涉及非法侵入私有财产。本网站不鼓励、不教唆、不协助任何违法行为。
                访问者需自行了解并遵守当地法律法规，对自己的行为承担全部法律责任。
              </p>
              <p>
                <strong className="text-red-400">人身安全：</strong>
                废弃建筑存在结构不稳定、有毒物质、坠落等多种危险。
                本网站提供的信息仅供参考，不构成专业安全指导。
                探险者需自行评估风险，采取适当防护措施，对自身安全负责。
              </p>
              <p>
                <strong className="text-red-400">内容准确性：</strong>
                本网站力求提供准确的信息，但不对内容的完整性、准确性或时效性作任何保证。
                建筑状态可能随时间变化，访问者需自行核实。
              </p>
              <p className="text-red-400 font-medium pt-2">
                因使用本网站信息而导致的任何法律纠纷、人身伤害、财产损失或其他后果，
                本网站及其运营者概不承担任何责任。
              </p>
            </div>
          </section>

          {/* 联系方式 */}
          <section className="text-center py-8 border-t border-gray-900">
            <h2 className="text-xl font-display font-light text-white mb-6">
              联系我们
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              如有任何问题、建议或合作意向，欢迎通过以下方式联系：
            </p>
            <div className="inline-block px-6 py-3 bg-dark-800 border border-gray-800 rounded font-mono text-sm text-terminal-green">
              contact@urbexnotes.com
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
