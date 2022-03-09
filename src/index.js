import confirm from './confirm'
import replace from './replace'
import fail from './fail'
import mock from './mock'
import normalize from './normalize'
import trigger from './trigger'
import { anything } from './anything'
import { increaseBlock, getCurrentBlock, resetCurrentBlock, setBlockData } from './block'
import { resetMocks } from './mocks'
import { setCurrentNetwork as connect } from './network'

export {
  mock,
  trigger,
  resetMocks,
  confirm,
  fail,
  increaseBlock,
  getCurrentBlock,
  resetCurrentBlock,
  setBlockData,
  anything,
  normalize,
  replace,
  connect
}
