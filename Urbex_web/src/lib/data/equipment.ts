export interface Equipment {
  id: string
  name: string
  category: 'lighting' | 'protection' | 'photography' | 'navigation' | 'other'
  icon: string
  description: string
}

export const equipment: Equipment[] = [
  {
    id: '1',
    name: '头灯',
    category: 'lighting',
    icon: '💡',
    description: '提供稳定的照明，解放双手进行探索和拍摄。',
  },
  {
    id: '2',
    name: '手电筒',
    category: 'lighting',
    icon: '🔦',
    description: '强光手电，适合远距离照明和信号传递。',
  },
  {
    id: '3',
    name: '口罩',
    category: 'protection',
    icon: '😷',
    description: '防护粉尘、霉菌和有害气体，保护呼吸系统。',
  },
  {
    id: '4',
    name: '手套',
    category: 'protection',
    icon: '🧤',
    description: '防止割伤、刺伤，保护双手安全。',
  },
  {
    id: '5',
    name: '相机',
    category: 'photography',
    icon: '📷',
    description: '记录探索过程，捕捉废墟的细节和氛围。',
  },
  {
    id: '6',
    name: '三脚架',
    category: 'photography',
    icon: '📐',
    description: '稳定拍摄，支持长时间曝光和低光环境拍摄。',
  },
  {
    id: '7',
    name: 'GPS设备',
    category: 'navigation',
    icon: '🧭',
    description: '定位和导航，确保安全返回。',
  },
  {
    id: '8',
    name: '对讲机',
    category: 'navigation',
    icon: '📻',
    description: '团队通讯，保持联系和协调。',
  },
]

