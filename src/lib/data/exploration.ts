import { GalleryImage } from '../types'

/**
 * 探险地点数据
 * 基于暗房文件夹整理的探险类地点
 */

// 探险地点按类型和地区分类整理
export const explorationImages: GalleryImage[] = [
  // ==================== 工业类 (Industrial) ====================
  {
    id: 'industrial-1',
    src: '/images/exploration/2021.9.19昌平南口玻璃厂/L1005315.JPG',
    title: '昌平南口玻璃厂',
    city: '北京',
    province: '华北',
    type: 'industrial',
    year: 2021,
    status: 'abandoned',
    tags: ['工厂', '工业', '废墟', '玻璃厂'],
    description: '北京昌平南口地区的废弃玻璃厂，工业废墟探险。巨大的车间、斑驳的墙面、废弃的机器，展现了那个时代的工业辉煌。',
  },
  {
    id: 'industrial-2',
    src: '/images/exploration/2022.12.8木城涧/L1000770.JPG',
    title: '木城涧煤矿',
    city: '北京',
    province: '华北',
    type: 'industrial',
    year: 2022,
    status: 'abandoned',
    tags: ['煤矿', '工业', '废墟', '地下'],
    description: '京西木城涧煤矿，曾经的煤炭生产基地，现在成为探险者的目的地。废弃的矿道、锈迹斑斑的设备，诉说着工业时代的故事。',
  },
  {
    id: 'industrial-3',
    src: '/images/exploration/2025.7.9中固水泥厂/',
    title: '中固水泥厂',
    city: '公主岭',
    province: '东北',
    type: 'industrial',
    year: 2025,
    status: 'abandoned',
    tags: ['水泥厂', '工业', '废墟', '吉林'],
    description: '吉林公主岭的中固水泥厂，废弃的工业建筑群。巨大的水泥罐、废弃的生产车间，充满了后工业时代的美感。',
  },
  {
    id: 'industrial-4',
    src: '/images/exploration/2025.9.27娘子关发电厂/',
    title: '娘子关发电厂',
    city: '阳泉',
    province: '华北',
    type: 'industrial',
    year: 2025,
    status: 'abandoned',
    tags: ['发电厂', '电力', '工业', '山西', '废弃'],
    description: '山西娘子关发电厂，曾经为当地提供电力的大型工厂。宏伟的锅炉房、冷却塔、发电设备，展现了工业建筑的壮观。',
  },

  // ==================== 学校类 (School) ====================
  {
    id: 'school-1',
    src: '/images/exploration/2021.10.25诗社废墟/_DSC2013.jpg',
    title: '诗社废墟',
    city: '北京',
    province: '华北',
    type: 'school',
    year: 2021,
    status: 'abandoned',
    tags: ['学校', '废墟', '诗社', '废弃'],
    description: '央美诗社废墟探险，废弃的教室、走廊，充满了艺术气息。斑驳的墙上还有当年的创作痕迹。',
  },
  {
    id: 'school-2',
    src: '/images/exploration/2021.10.4诗社先驱小队废墟/',
    title: '诗社先驱小队废墟',
    city: '北京',
    province: '华北',
    type: 'school',
    year: 2021,
    status: 'abandoned',
    tags: ['学校', '废墟', '诗社', '先锋'],
    description: '诗社先驱小队的探险记录，探索废弃校舍的每一个角落。',
  },
  {
    id: 'school-3',
    src: '/images/exploration/2021.10.5废墟先锋小队/',
    title: '废墟先锋小队',
    city: '北京',
    province: '华北',
    type: 'school',
    year: 2021,
    status: 'abandoned',
    tags: ['学校', '废墟', '先锋', '探险'],
    description: '废墟先锋小队的探险记录，发现被遗忘的空间。',
  },
  {
    id: 'school-4',
    src: '/images/exploration/2025.3.31学校遛狗unitree/',
    title: '废弃学校',
    city: '北京',
    province: '华北',
    type: 'school',
    year: 2025,
    status: 'abandoned',
    tags: ['学校', '废墟', '探险', 'unitree'],
    description: '带unitree机器人在废弃学校探险，有趣的人机互动场景。',
  },

  // ==================== 宗教类 (Religious) ====================
  {
    id: 'religious-1',
    src: '/images/exploration/2024.1.14哈尔滨索菲亚大教堂/',
    title: '哈尔滨索菲亚大教堂',
    city: '哈尔滨',
    province: '东北',
    type: 'other',
    year: 2024,
    status: 'preserved',
    tags: ['教堂', '宗教', '建筑', '索菲亚', '哈尔滨'],
    description: '哈尔滨索菲亚大教堂，建筑宏伟，是哈尔滨的标志性建筑。虽然已经改造为建筑艺术博物馆，但其历史价值和文化意义依然重大。',
  },
  {
    id: 'religious-2',
    src: '/images/exploration/2024.3.24仰山栖隐寺/',
    title: '仰山栖隐寺',
    city: '北京',
    province: '华北',
    type: 'other',
    year: 2024,
    status: 'renovated',
    tags: ['寺庙', '佛教', '建筑', '仰山', '栖隐寺'],
    description: '北京仰山栖隐寺，深山中的古寺，虽然经过修缮，但依然保持着寺庙的庄严肃穆。',
  },
  {
    id: 'religious-3',
    src: '/images/exploration/2024.3.3天泉寺鬼笑石/DSC06334.JPG',
    title: '天泉寺 鬼笑石',
    city: '北京',
    province: '华北',
    type: 'other',
    year: 2024,
    status: 'preserved',
    tags: ['寺庙', '道教', '奇石', '天泉寺', '鬼笑石'],
    description: '北京天泉寺，著名的鬼笑石所在地。夜晚风声掠过石缝，发出如笑声般的声音。',
  },
  {
    id: 'religious-4',
    src: '/images/exploration/202512.1蓟县独乐寺/',
    title: '蓟县独乐寺',
    city: '蓟县',
    province: '华北',
    type: 'other',
    year: 2025,
    status: 'preserved',
    tags: ['寺庙', '佛教', '古建筑', '独乐寺', '天津'],
    description: '天津蓟县独乐寺，中国现存最古老的木结构建筑之一。寺内观音阁和山门都是珍贵的古建筑。',
  },
  {
    id: 'religious-5',
    src: '/images/exploration/蓟县教堂/',
    title: '蓟县教堂',
    city: '蓟县',
    province: '华北',
    type: 'other',
    year: undefined,
    status: 'preserved',
    tags: ['教堂', '天主教', '西式建筑', '蓟县'],
    description: '天津蓟县的老教堂，见证了天主教在当地的发展历史。',
  },
  {
    id: 'religious-6',
    src: '/images/exploration/2022.2.22石佛寺村/',
    title: '石佛寺村',
    city: '北京',
    province: '华北',
    type: 'other',
    year: 2022,
    status: 'preserved',
    tags: ['村庄', '寺庙', '石佛', '古村落'],
    description: '北京石佛寺村，因村中石佛而得名。古老的村落与寺庙相依，充满了历史气息。',
  },
  {
    id: 'religious-7',
    src: '/images/exploration/2023.2.4池核千佛崖白宝寺/',
    title: '千佛崖 白宝寺',
    city: '北京',
    province: '华北',
    type: 'other',
    year: 2023,
    status: 'preserved',
    tags: ['寺庙', '石窟', '佛像', '千佛崖'],
    description: '北京池核地区的千佛崖白宝寺，岩壁上的佛像雕刻，展现了佛教艺术的精髓。',
  },

  // ==================== 洞穴/地下类 (Caves/Underground) ====================
  {
    id: 'cave-1',
    src: '/images/exploration/2023.7.1防空洞蹦迪/L1004195.JPG',
    title: '防空洞蹦迪',
    city: '北京',
    province: '华北',
    type: 'other',
    year: 2023,
    status: 'abandoned',
    tags: ['防空洞', '地下', '娱乐', '蹦迪', '北京'],
    description: '北京废弃防空洞内的特别活动，地下空间变成了派对场所。特殊的声学效果和氛围，创造出独特的体验。',
  },
  {
    id: 'cave-2',
    src: '/images/exploration/2022.9.10聚仙洞小聚/L1000120.jpg',
    title: '聚仙洞小聚',
    city: '北京',
    province: '华北',
    type: 'other',
    year: 2022,
    status: 'abandoned',
    tags: ['洞穴', '溶洞', '聚会', '探险'],
    description: '北京聚仙洞，自然形成的溶洞景观。钟乳石、石笋等喀斯特地貌，大自然的鬼斧神工。',
  },
  {
    id: 'cave-3',
    src: '/images/exploration/2023.12.3家庭出油大集+聚仙洞/',
    title: '聚仙洞家庭活动',
    city: '北京',
    province: '华北',
    type: 'other',
    year: 2023,
    status: 'abandoned',
    tags: ['洞穴', '家庭', '聚会', '探险'],
    description: '在聚仙洞举办的家庭活动，地下空间充满了温馨的氛围。',
  },
  {
    id: 'cave-4',
    src: '/images/exploration/2023.8.8山洞蘑菇火锅/',
    title: '山洞蘑菇火锅',
    city: '北京',
    province: '华北',
    type: 'other',
    year: 2023,
    status: 'abandoned',
    tags: ['洞穴', '溶洞', '美食', '蘑菇', '火锅'],
    description: '在天然山洞中享用蘑菇火锅，新奇又有趣的体验。',
  },

  // ==================== 住宅/村落类 (Residential) ====================
  {
    id: 'residential-1',
    src: '/images/exploration/2025.7.9公主岭鬼楼/DJI_20250709173950_0078_D.JPG',
    title: '公主岭鬼楼',
    city: '公主岭',
    province: '东北',
    type: 'residential',
    year: 2025,
    status: 'abandoned',
    tags: ['住宅', '鬼楼', '废弃', '吉林', '公主岭'],
    description: '吉林公主岭的废弃住宅楼，因长期无人居住而被探险者称为"鬼楼"。空荡的走廊、破败的房间，充满了神秘氛围。',
  },
  {
    id: 'residential-2',
    src: '/images/exploration/2025.1.23肉丘坟和鬼子村/DSCF5972.JPG',
    title: '肉丘坟和鬼子村',
    city: '东北',
    province: '东北',
    type: 'residential',
    year: 2025,
    status: 'abandoned',
    tags: ['村落', '废弃', '历史', '东北'],
    description: '东北地区的废弃村落，见证了那个特殊年代的历史。',
  },
  {
    id: 'residential-3',
    src: '/images/exploration/2023.7.23丹江渔村/',
    title: '丹江渔村',
    city: '丹江口',
    province: '华中',
    type: 'residential',
    year: 2023,
    status: 'abandoned',
    tags: ['渔村', '河流', '废弃', '湖北'],
    description: '丹江口水库边的废弃渔村，曾经的渔民家园。现在因为水库建设而搬迁，留下寂静的村落。',
  },
  {
    id: 'residential-4',
    src: '/images/exploration/2021.12.30田村飞机/',
    title: '田村飞机',
    city: '北京',
    province: '华北',
    type: 'other',
    year: 2021,
    status: 'abandoned',
    tags: ['飞机', '军事', '废弃', '田村'],
    description: '北京田村地区的废弃飞机，可能是退役的军用飞机。',
  },
  {
    id: 'residential-5',
    src: '/images/exploration/2023.7.6美术馆&泰姬楼/',
    title: '美术馆&泰姬楼',
    city: '北京',
    province: '华北',
    type: 'other',
    year: 2023,
    status: 'abandoned',
    tags: ['美术馆', '建筑', '仿制', '泰姬陵'],
    description: '废弃的美术馆，其中还有仿制泰姬陵建筑的"泰姬楼"。',
  },

  // ==================== 其他探险地点 ====================
  {
    id: 'other-1',
    src: '/images/exploration/2024.3.9威海/',
    title: '威海探险',
    city: '威海',
    province: '华东',
    type: 'other',
    year: 2024,
    status: 'abandoned',
    tags: ['海边', '城市', '探险', '山东'],
    description: '山东威海的城市探索，发现被遗忘的空间和建筑。',
  },
  {
    id: 'other-2',
    src: '/images/exploration/2025.8.10温榆河/',
    title: '温榆河探险',
    city: '北京',
    province: '华北',
    type: 'other',
    year: 2025,
    status: 'abandoned',
    tags: ['河流', '自然', '探险', '北京'],
    description: '北京温榆河地区的探索，发现河边的废弃建筑和设施。',
  },
  {
    id: 'other-3',
    src: '/images/exploration/2025.8.17恐龙谷/',
    title: '恐龙谷',
    city: '北京',
    province: '华北',
    type: 'other',
    year: 2025,
    status: 'abandoned',
    tags: ['主题公园', '废弃', '恐龙', '北京'],
    description: '北京废弃的主题公园，恐龙主题的游乐设施。',
  },
  {
    id: 'other-4',
    src: '/images/exploration/2025.8.30开业/',
    title: '开业',
    city: '未知',
    province: '未知',
    type: 'other',
    year: 2025,
    status: 'abandoned',
    tags: ['探险', '未知'],
    description: '新的探险记录，等待进一步了解。',
  },
  {
    id: 'other-5',
    src: '/images/exploration/2025.9.25河北美院/',
    title: '河北美院',
    city: '石家庄',
    province: '华北',
    type: 'school',
    year: 2025,
    status: 'abandoned',
    tags: ['学校', '美术学院', '废弃', '河北'],
    description: '河北美术学院的探索，发现艺术院校特有的空间氛围。',
  },
  {
    id: 'other-6',
    src: '/images/exploration/2025.9.26白宫天坛/',
    title: '白宫天坛',
    city: '北京',
    province: '华北',
    type: 'other',
    year: 2025,
    status: 'abandoned',
    tags: ['仿制', '建筑', '天坛', '北京'],
    description: '仿制天坛造型的建筑，被称为"白宫天坛"。',
  },
  {
    id: 'other-7',
    src: '/images/exploration/2025.9.3于雪拍摄/',
    title: '于雪拍摄',
    city: '未知',
    province: '未知',
    type: 'other',
    year: 2025,
    status: 'abandoned',
    tags: ['人像', '拍摄', '探险'],
    description: '配合人像拍摄的探险记录。',
  },
  {
    id: 'other-8',
    src: '/images/exploration/2025.10.30密云不老泉别墅/',
    title: '密云不老泉别墅',
    city: '密云',
    province: '华北',
    type: 'residential',
    year: 2025,
    status: 'abandoned',
    tags: ['别墅', '度假', '废弃', '密云', '北京'],
    description: '北京密云区的废弃别墅区，可能因为某些原因而被废弃。',
  },
  {
    id: 'other-9',
    src: '/images/exploration/2025.10.30怀河会所/',
    title: '怀河会所',
    city: '怀柔',
    province: '华北',
    type: 'commercial',
    year: 2025,
    status: 'abandoned',
    tags: ['会所', '商业', '废弃', '怀柔', '北京'],
    description: '北京怀柔区的废弃会所，位于怀河附近。',
  },
  {
    id: 'other-10',
    src: '/images/exploration/2025.10.30密云国际会议中心/',
    title: '密云国际会议中心',
    city: '密云',
    province: '华北',
    type: 'commercial',
    year: 2025,
    status: 'abandoned',
    tags: ['会议中心', '商业', '废弃', '密云', '北京'],
    description: '北京密云区废弃的国际会议中心，宏伟的建筑却无人使用。',
  },
  {
    id: 'other-11',
    src: '/images/exploration/2025.10.6博哥打坐/',
    title: '博哥打坐',
    city: '未知',
    province: '未知',
    type: 'other',
    year: 2025,
    status: 'abandoned',
    tags: ['探险', '人物', '冥想'],
    description: '探险中的人物记录。',
  },
  {
    id: 'other-12',
    src: '/images/exploration/2025.2.1锦屏/',
    title: '锦屏',
    city: '未知',
    province: '未知',
    type: 'other',
    year: 2025,
    status: 'abandoned',
    tags: ['探险', '未知'],
    description: '新的探险地点记录。',
  },
  {
    id: 'other-13',
    src: '/images/exploration/2025.2.22龙门大峡谷/',
    title: '龙门大峡谷',
    city: '洛阳',
    province: '华中',
    type: 'other',
    year: 2025,
    status: 'abandoned',
    tags: ['峡谷', '自然', '探险', '河南'],
    description: '洛阳龙门大峡谷，自然形成的壮观的峡谷地貌。',
  },
  {
    id: 'other-14',
    src: '/images/exploration/2025.2.8姥姥家航拍/',
    title: '姥姥家航拍',
    city: '未知',
    province: '未知',
    type: 'other',
    year: 2025,
    status: 'preserved',
    tags: ['航拍', '住宅', '农村'],
    description: '航拍记录的农村老宅。',
  },
  {
    id: 'other-15',
    src: '/images/exploration/2025.4.4矩兴航拍/',
    title: '矩兴航拍',
    city: '未知',
    province: '未知',
    type: 'other',
    year: 2025,
    status: 'preserved',
    tags: ['航拍', '未知'],
    description: '航拍记录的探索。',
  },
  {
    id: 'other-16',
    src: '/images/exploration/2025.7.11彤在长春/',
    title: '彤在长春',
    city: '长春',
    province: '东北',
    type: 'other',
    year: 2025,
    status: 'abandoned',
    tags: ['城市', '人像', '长春', '吉林'],
    description: '长春城市探索与人像拍摄。',
  },
  {
    id: 'other-17',
    src: '/images/exploration/2025.7.13同建小区&宽平花园/',
    title: '同建小区&宽平花园',
    city: '长春',
    province: '东北',
    type: 'residential',
    year: 2025,
    status: 'abandoned',
    tags: ['住宅', '小区', '废弃', '长春', '吉林'],
    description: '长春废弃的住宅小区。',
  },
  {
    id: 'other-18',
    src: '/images/exploration/2025.7.24姥姥家玩耍/',
    title: '姥姥家玩耍',
    city: '未知',
    province: '未知',
    type: 'residential',
    year: 2025,
    status: 'preserved',
    tags: ['住宅', '农村', '家庭'],
    description: '农村老宅的家庭聚会记录。',
  },
  {
    id: 'other-19',
    src: '/images/exploration/2025.8.19和于渺老师拍摄/',
    title: '和于渺老师拍摄',
    city: '未知',
    province: '未知',
    type: 'other',
    year: 2025,
    status: 'abandoned',
    tags: ['拍摄', '人像', '探险'],
    description: '配合摄影师于渺老师的拍摄记录。',
  },
  {
    id: 'other-20',
    src: '/images/exploration/2025.8.1琉璃庙洪水/',
    title: '琉璃庙洪水',
    city: '北京',
    province: '华北',
    type: 'other',
    year: 2025,
    status: 'abandoned',
    tags: ['洪水', '灾害', '琉璃庙', '北京'],
    description: '北京琉璃庙地区洪水过后的景象。',
  },
  {
    id: 'other-21',
    src: '/images/exploration/2025.9.29曲阳/',
    title: '曲阳',
    city: '保定',
    province: '华北',
    type: 'other',
    year: 2025,
    status: 'abandoned',
    tags: ['县城', '探索', '河北', '曲阳'],
    description: '河北曲阳县城探索。',
  },
  {
    id: 'other-22',
    src: '/images/exploration/2025.10.26思巴鲁/',
    title: '思巴鲁',
    city: '未知',
    province: '未知',
    type: 'other',
    year: 2025,
    status: 'abandoned',
    tags: ['探险', '未知'],
    description: '新的探险记录。',
  },
  {
    id: 'other-23',
    src: '/images/exploration/2026.1.6山海关姜女石/',
    title: '山海关姜女石',
    city: '秦皇岛',
    province: '华北',
    type: 'other',
    year: 2026,
    status: 'preserved',
    tags: ['海边', '历史', '山海关', '秦皇岛', '河北'],
    description: '秦皇岛山海关景区的姜女石传说。',
  },
]

// 获取所有城市
export const cities = Array.from(
  new Set(
    explorationImages
      .filter((img) => img.city)
      .map((img) => img.city!)
  )
).sort()

// 获取所有省份
export const provinces = Array.from(
  new Set(
    explorationImages
      .filter((img) => img.province)
      .map((img) => img.province!)
  )
).sort()

// 获取所有类型
export const types = [
  'industrial',
  'school',
  'residential',
  'hospital',
  'commercial',
  'other',
] as const

// 获取所有状态
export const statuses = [
  'abandoned',
  'demolished',
  'renovated',
  'preserved',
] as const

// 获取所有年份（降序排列）
export const years = Array.from(
  new Set(
    explorationImages
      .filter((img) => img.year)
      .map((img) => img.year!)
  )
)
  .sort((a, b) => (b || 0) - (a || 0))
  .filter(Boolean)

// 获取所有标签
export const allTags = Array.from(
  new Set(
    explorationImages.flatMap((img) => img.tags || [])
  )
).sort()

// 按城市分组的探险记录
export const locationsByCity = cities.reduce(
  (acc, city) => {
    acc[city] = explorationImages.filter((img) => img.city === city)
    return acc
  },
  {} as Record<string, GalleryImage[]>
)

// 按年份分组的探险记录
export const locationsByYear = years.reduce(
  (acc, year) => {
    acc[year!] = explorationImages.filter((img) => img.year === year)
    return acc
  },
  {} as Record<number, GalleryImage[]>
)

// 按类型分组的探险记录
export const locationsByType = types.reduce(
  (acc, type) => {
    acc[type] = explorationImages.filter((img) => img.type === type)
    return acc
  },
  {} as Record<string, GalleryImage[]>
)

// 按状态分组的探险记录
export const locationsByStatus = statuses.reduce(
  (acc, status) => {
    acc[status] = explorationImages.filter((img) => img.status === status)
    return acc
  },
  {} as Record<string, GalleryImage[]>
)
