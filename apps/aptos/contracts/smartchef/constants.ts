import { ADDRESS as _SMARTCHEF_ADDRESS, SMART_CHEF_MODULE_NAME } from '../generated/smartchef'

export const SMARTCHEF_ADDRESS = _SMARTCHEF_ADDRESS

export const SAMRTCHEF_ADDRESS_MODULE = `${_SMARTCHEF_ADDRESS}::${SMART_CHEF_MODULE_NAME}` as const
export const SMARTCHEF_POOL_INFO_TYPE_TAG = `${SAMRTCHEF_ADDRESS_MODULE}::PoolInfo` as const
export const SMARTCHEF_USER_INFO_TYPE_TAG = `${SAMRTCHEF_ADDRESS_MODULE}::UserInfo` as const