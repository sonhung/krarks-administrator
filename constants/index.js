import DefaultImage from '../assets/images/landzone-logo.png'

export const DEFAULT_IMAGE = DefaultImage

export const HOUSE_TYPE = {
  'nha-dat': 'Nhà đất',
  'can-ho': 'Căn hộ chung cư',
  'phong-tro': 'Phòng trọ',
  'biet-thu': 'Biệt thự',
}

export const PLACES_TYPE = [
  {
    type: 'school',
    text: 'Trường học',
  },
  {
    type: 'hospital',
    text: 'Bệnh viện',
  },
  {
    type: 'supermaket',
    text: 'Siêu thị',
  },
  {
    type: 'market',
    text: 'Chợ',
  },
  {
    type: 'park',
    text: 'Công viên',
  },
  {
    type: 'drink_food',
    text: 'Ăn/Uống',
  },
]

export const TYPE = [
  {
    value: 'bat-dong-san',
    label: 'Tất cả loại bất động sản',
  },
  {
    value: 'nha-dat',
    label: 'Nhà đất',
  },
  {
    value: 'can-ho',
    label: 'Căn hộ',
  },
  {
    value: 'biet-thu',
    label: 'Biệt thự',
  },
  {
    value: 'phong-tro',
    label: 'Phòng trọ',
  },
]

export const SEARCH_TYPE = { ...HOUSE_TYPE }

export const PAGE_SIZE = 20
