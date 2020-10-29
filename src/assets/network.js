import * as ethUtil from 'ethereumjs-util'
import validateWgrAddress from 'wagerr-address-validation'
import validateBtcAddress from 'bitcoin-address-validation'

export default {
  'wgr': {
    name: 'Wagerr',
    type: 'network',
    code: 'WGR',
    color: '#f7931a',
    decimals: 8,
    fees: {
      unit: 'sat/b'
    },
    // TODO: include network types in validation
    isValidAddress: (address) => !!validateWgrAddress(address),
    formatAddress: address => address
  },
  'btc': {
    name: 'Bitcoin',
    type: 'network',
    code: 'BTC',
    color: '#f7931a',
    decimals: 8,
    fees: {
      unit: 'sat/b'
    },
    // TODO: include network types in validation
    isValidAddress: (address) => !!validateBtcAddress(address),
    formatAddress: address => address
  },
  'eth': {
    name: 'Ether',
    type: 'network',
    code: 'ETH',
    color: '#627eea',
    decimals: 18,
    fees: {
      unit: 'gwei'
    },
    isValidAddress: ethUtil.isValidAddress,
    formatAddress: ethUtil.toChecksumAddress
  }
}
