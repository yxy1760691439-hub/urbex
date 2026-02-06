/**
 * 探险现场记录数据
 * 基于暗房文件夹整理的探险类地点
 */

export interface OnSiteLocation {
  id: string
  name: string
  zone: 'Industrial' | 'School' | 'Residential' | 'Hospital' | 'Others'
  description: string
  date: string
  coverImage: string
  city: string
  province: string
  type: string
  status: 'abandoned' | 'demolished' | 'renovated' | 'preserved'
  tags: string[]
  year?: number
}

// 从exploration数据生成的现场记录
export const onsiteLocations: OnSiteLocation[] = [
  // ==================== 工业类 (Industrial) ====================
  {
    id: 'industrial-1',
    name: '昌平南口玻璃厂',
    zone: 'Industrial',
    description: '北京昌平南口地区的废弃玻璃厂，工业废墟探险。巨大的车间、斑驳的墙面、废弃的机器，展现了那个时代的工业辉煌。',
    date: '2021-09-19',
    coverImage: '/images/exploration/2021.9.19昌平南口玻璃厂/L1005315.JPG',
    city: '北京',
    province: '华北',
    type: 'industrial',
    status: 'abandoned',
    tags: ['工厂', '工业', '废墟', '玻璃厂'],
    year: 2021,
  },
  {
    id: 'industrial-2',
    name: '木城涧煤矿',
    zone: 'Industrial',
    description: '京西木城涧煤矿，曾经的煤炭生产基地，现在成为探险者的目的地。废弃的矿道、锈迹斑斑的设备，诉说着工业时代的故事。',
    date: '2022-12-08',
    coverImage: '/images/exploration/2022.12.8木城涧/L1000770.JPG',
    city: '北京',
    province: '华北',
    type: 'industrial',
    status: 'abandoned',
    tags: ['煤矿', '工业', '废墟', '地下'],
    year: 2022,
  },
  {
    id: 'industrial-3',
    name: '中固水泥厂',
    zone: 'Industrial',
    description: '吉林公主岭的中固水泥厂，废弃的工业建筑群。巨大的水泥罐、废弃的生产车间，充满了后工业时代的美感。',
    date: '2025-07-09',
    coverImage: '/images/exploration/2025.7.9中固水泥厂/',
    city: '公主岭',
    province: '东北',
    type: 'industrial',
    status: 'abandoned',
    tags: ['水泥厂', '工业', '废墟', '吉林'],
    year: 2025,
  },
  {
    id: 'industrial-4',
    name: '娘子关发电厂',
    zone: 'Industrial',
    description: '山西娘子关发电厂，曾经为当地提供电力的大型工厂。宏伟的锅炉房、冷却塔、发电设备，展现了工业建筑的壮观。',
    date: '2025-09-27',
    coverImage: '/images/exploration/2025.9.27娘子关发电厂/',
    city: '阳泉',
    province: '华北',
    type: 'industrial',
    status: 'abandoned',
    tags: ['发电厂', '电力', '工业', '山西', '废弃'],
    year: 2025,
  },

  // ==================== 学校类 (School) ====================
  {
    id: 'school-1',
    name: '诗社废墟',
    zone: 'School',
    description: '央美诗社废墟探险，废弃的教室、走廊，充满了艺术气息。斑驳的墙上还有当年的创作痕迹。',
    date: '2021-10-25',
    coverImage: '/images/exploration/2021.10.25诗社废墟/_DSC2013.jpg',
    city: '北京',
    province: '华北',
    type: 'school',
    status: 'abandoned',
    tags: ['学校', '废墟', '诗社', '废弃'],
    year: 2021,
  },
  {
    id: 'school-2',
    name: '诗社先驱小队废墟',
    zone: 'School',
    description: '诗社先驱小队的探险记录，探索废弃校舍的每一个角落。',
    date: '2021-10-04',
    coverImage: '/images/exploration/2021.10.4诗社先驱小队废墟/',
    city: '北京',
    province: '华北',
    type: 'school',
    status: 'abandoned',
    tags: ['学校', '废墟', '诗社', '先锋'],
    year: 2021,
  },
  {
    id: 'school-3',
    name: '废墟先锋小队',
    zone: 'School',
    description: '废墟先锋小队的探险记录，发现被遗忘的空间。',
    date: '2021-10-05',
    coverImage: '/images/exploration/2021.10.5废墟先锋小队/',
    city: '北京',
    province: '华北',
    type: 'school',
    status: 'abandoned',
    tags: ['学校', '废墟', '先锋', '探险'],
    year: 2021,
  },
  {
    id: 'school-4',
    name: '废弃学校探险',
    zone: 'School',
    description: '带unitree机器人在废弃学校探险，有趣的人机互动场景。',
    date: '2025-03-31',
    coverImage: '/images/exploration/2025.3.31学校遛狗unitree/',
    city: '北京',
    province: '华北',
    type: 'school',
    status: 'abandoned',
    tags: ['学校', '废墟', '探险', 'unitree'],
    year: 2025,
  },

  // ==================== 宗教类 (Others) ====================
  {
    id: 'religious-1',
    name: '哈尔滨索菲亚大教堂',
    zone: 'Others',
    description: '哈尔滨索菲亚大教堂，建筑宏伟，是哈尔滨的标志性建筑。虽然已经改造为建筑艺术博物馆，但其历史价值和文化意义依然重大。',
    date: '2024-01-14',
    coverImage: '/images/exploration/2024.1.14哈尔滨索菲亚大教堂/',
    city: '哈尔滨',
    province: '东北',
    type: 'other',
    status: 'preserved',
    tags: ['教堂', '宗教', '建筑', '索菲亚', '哈尔滨'],
    year: 2024,
  },
  {
    id: 'religious-2',
    name: '仰山栖隐寺',
    zone: 'Others',
    description: '北京仰山栖隐寺，深山中的古寺，虽然经过修缮，但依然保持着寺庙的庄严肃穆。',
    date: '2024-03-24',
    coverImage: '/images/exploration/2024.3.24仰山栖隐寺/',
    city: '北京',
    province: '华北',
    type: 'other',
    status: 'renovated',
    tags: ['寺庙', '佛教', '建筑', '仰山', '栖隐寺'],
    year: 2024,
  },
  {
    id: 'religious-3',
    name: '天泉寺 鬼笑石',
    zone: 'Others',
    description: '北京天泉寺，著名的鬼笑石所在地。夜晚风声掠过石缝，发出如笑声般的声音。',
    date: '2024-03-03',
    coverImage: '/images/exploration/2024.3.3天泉寺鬼笑石/DSC06334.JPG',
    city: '北京',
    province: '华北',
    type: 'other',
    status: 'preserved',
    tags: ['寺庙', '道教', '奇石', '天泉寺', '鬼笑石'],
    year: 2024,
  },
  {
    id: 'religious-4',
    name: '蓟县独乐寺',
    zone: 'Others',
    description: '天津蓟县独乐寺，中国现存最古老的木结构建筑之一。寺内观音阁和山门都是珍贵的古建筑。',
    date: '2025-12-01',
    coverImage: '/images/exploration/202512.1蓟县独乐寺/',
    city: '蓟县',
    province: '华北',
    type: 'other',
    status: 'preserved',
    tags: ['寺庙', '佛教', '古建筑', '独乐寺', '天津'],
    year: 2025,
  },
  {
    id: 'religious-5',
    name: '蓟县教堂',
    zone: 'Others',
    description: '天津蓟县的老教堂，见证了天主教在当地的发展历史。',
    date: '',
    coverImage: '/images/exploration/蓟县教堂/',
    city: '蓟县',
    province: '华北',
    type: 'other',
    status: 'preserved',
    tags: ['教堂', '天主教', '西式建筑', '蓟县'],
    year: undefined,
  },
  {
    id: 'religious-6',
    name: '石佛寺村',
    zone: 'Others',
    description: '北京石佛寺村，因村中石佛而得名。古老的村落与寺庙相依，充满了历史气息。',
    date: '2022-02-22',
    coverImage: '/images/exploration/2022.2.22石佛寺村/',
    city: '北京',
    province: '华北',
    type: 'other',
    status: 'preserved',
    tags: ['村庄', '寺庙', '石佛', '古村落'],
    year: 2022,
  },

  // ==================== 洞穴/地下类 (Others) ====================
  {
    id: 'cave-1',
    name: '防空洞蹦迪',
    zone: 'Others',
    description: '北京废弃防空洞内的特别活动，地下空间变成了派对场所。特殊的声学效果和氛围，创造出独特的体验。',
    date: '2023-07-01',
    coverImage: '/images/exploration/2023.7.1防空洞蹦迪/L1004195.JPG',
    city: '北京',
    province: '华北',
    type: 'other',
    status: 'abandoned',
    tags: ['防空洞', '地下', '娱乐', '蹦迪', '北京'],
    year: 2023,
  },
  {
    id: 'cave-2',
    name: '聚仙洞小聚',
    zone: 'Others',
    description: '北京聚仙洞，自然形成的溶洞景观。钟乳石、石笋等喀斯特地貌，大自然的鬼斧神工。',
    date: '2022-09-10',
    coverImage: '/images/exploration/2022.9.10聚仙洞小聚/L1000120.jpg',
    city: '北京',
    province: '华北',
    type: 'other',
    status: 'abandoned',
    tags: ['洞穴', '溶洞', '聚会', '探险'],
    year: 2022,
  },

  // ==================== 住宅/村落类 (Residential) ====================
  {
    id: 'residential-1',
    name: '公主岭鬼楼',
    zone: 'Residential',
    description: '吉林公主岭的废弃住宅楼，因长期无人居住而被探险者称为"鬼楼"。空荡的走廊、破败的房间，充满了神秘氛围。',
    date: '2025-07-09',
    coverImage: '/images/exploration/2025.7.9公主岭鬼楼/DJI_20250709173950_0078_D.JPG',
    city: '公主岭',
    province: '东北',
    type: 'residential',
    status: 'abandoned',
    tags: ['住宅', '鬼楼', '废弃', '吉林', '公主岭'],
    year: 2025,
  },
  {
    id: 'residential-2',
    name: '肉丘坟和鬼子村',
    zone: 'Residential',
    description: '东北地区的废弃村落，见证了那个特殊年代的历史。',
    date: '2025-01-23',
    coverImage: '/images/exploration/2025.1.23肉丘坟和鬼子村/DSCF5972.JPG',
    city: '东北',
    province: '东北',
    type: 'residential',
    status: 'abandoned',
    tags: ['村落', '废弃', '历史', '东北'],
    year: 2025,
  },
  {
    id: 'residential-3',
    name: '丹江渔村',
    zone: 'Residential',
    description: '丹江口水库边的废弃渔村，曾经的渔民家园。现在因为水库建设而搬迁，留下寂静的村落。',
    date: '2023-07-23',
    coverImage: '/images/exploration/2023.7.23丹江渔村/',
    city: '丹江口',
    province: '华中',
    type: 'residential',
    status: 'abandoned',
    tags: ['渔村', '河流', '废弃', '湖北'],
    year: 2023,
  },
]

// 获取所有地区
export const zones = ['Industrial', 'School', 'Residential', 'Hospital', 'Others'] as const

// 获取所有城市
export const onsiteCities = Array.from(
  new Set(onsiteLocations.filter((loc) => loc.city).map((loc) => loc.city))
).sort()

// 获取所有省份
export const onsiteProvinces = Array.from(
  new Set(
    onsiteLocations.filter((loc) => loc.province).map((loc) => loc.province)
  )
).sort()

// 获取所有年份
export const onsiteYears = Array.from(
  new Set(onsiteLocations.filter((loc) => loc.year).map((loc) => loc.year!))
)
  .sort((a, b) => (b || 0) - (a || 0))
  .filter(Boolean)

// 按城市分组
export const locationsByCity = onsiteCities.reduce(
  (acc, city) => {
    acc[city] = onsiteLocations.filter((loc) => loc.city === city)
    return acc
  },
  {} as Record<string, OnSiteLocation[]>
)

// 按地区分组
export const locationsByZone = zones.reduce(
  (acc, zone) => {
    acc[zone] = onsiteLocations.filter((loc) => loc.zone === zone)
    return acc
  },
  {} as Record<string, OnSiteLocation[]>
)

// 按年份分组
export const locationsByYear = onsiteYears.reduce(
  (acc, year) => {
    acc[year!] = onsiteLocations.filter((loc) => loc.year === year)
    return acc
  },
  {} as Record<number, OnSiteLocation[]>
)
