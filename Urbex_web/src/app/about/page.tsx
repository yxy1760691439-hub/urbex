export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-6 lg:px-8 min-h-screen bg-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-display font-light text-white mb-12">
          About / 关于
        </h1>

        <div className="space-y-12">
          {/* 背景 */}
          <section>
            <h2 className="text-2xl font-medium text-white mb-4">Background / 背景</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                城市废墟探索（Urban Exploration）是一种记录和探索被遗忘、废弃或即将消失的城市空间的活动。
                这些空间承载着城市的历史记忆，见证着时代的变迁。
              </p>
              <p>
                本网站致力于以客观、尊重的方式记录这些空间，通过影像和文字，保存那些即将消失的城市记忆。
              </p>
            </div>
          </section>

          {/* 目标 */}
          <section>
            <h2 className="text-2xl font-medium text-white mb-4">Objective / 目标</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                我们的目标是：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>记录城市废墟的现状和历史背景</li>
                <li>通过影像和文字保存城市记忆</li>
                <li>提高对城市历史建筑保护的关注</li>
                <li>分享探索过程中的安全知识和经验</li>
              </ul>
            </div>
          </section>

          {/* 方法 */}
          <section>
            <h2 className="text-2xl font-medium text-white mb-4">Method / 方法</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                我们遵循以下原则：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>安全第一：</strong>始终将安全放在首位，不冒险进入危险区域</li>
                <li><strong>尊重空间：</strong>不破坏、不盗窃，只记录不带走</li>
                <li><strong>客观记录：</strong>如实记录空间现状，不夸大不渲染</li>
                <li><strong>保护隐私：</strong>不公开具体地址，避免引起不必要的关注</li>
              </ul>
            </div>
          </section>

          {/* 联系 */}
          <section className="pt-8 border-t border-gray-800">
            <h2 className="text-2xl font-medium text-white mb-4">Contact / 联系</h2>
            <p className="text-gray-300">
              Email: <a href="mailto:contact@example.com" className="text-white underline hover:text-gray-400 transition-colors">contact@example.com</a>
            </p>
          </section>

          {/* 声明 */}
          <section className="pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500 leading-relaxed">
              本网站仅用于记录个人城市探索历程，无任何引导或教学性质。
              所有内容均为个人记录，不构成任何形式的建议或指导。
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mt-2">
              This website is for personal documentation purposes only and does not provide guidance or instruction.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
