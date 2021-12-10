import raise from '../../raise'
import { findMock } from './findMock'

let watchAsset = function ({ blockchain, params, provider }) {
  let mock = findMock({ blockchain, type: 'watchAsset', params, provider })

  if (mock && mock.watchAsset?.return) {
    mock.calls.add(params)
    if (mock?.watchAsset?.return instanceof Error) {
      return Promise.reject(mock.watchAsset.return)
    } else {
      return Promise.resolve(mock.watchAsset.return)
    }
  } else {
    raise(
      'Web3Mock: Please mock the wallet_watchAsset request: ' +
      JSON.stringify({
        blockchain: blockchain,
        watchAsset: {
          params,
          return: 'PUT SUCCESS BOOLEAN HERE',
        },
      })
    )
  }
}

export { watchAsset }
