export { install, installDependency, InstallOptions, InstallDependencyOptions } from './install'
export { uninstallDependency } from './uninstall'
export { init } from './init'
export { bundle } from './bundle'
export { search } from './search'
export { info } from './info'

/**
 * Export version as a function, can't implement as a `getter` for lazy loading.
 */
export const VERSION = require('../package.json').version
