import flatten from 'flat'

import en_US from './locale/en_US.json'
import zh_TW from './locale/zh_TW.json'

const appLanguages = {
  'en-US': flatten(en_US),
  'zh-TW': flatten(zh_TW),
}

export default appLanguages
