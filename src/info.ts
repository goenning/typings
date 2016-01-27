import {
  search,
  getVersions,
  SearchResults,
  ProjectVersion
} from './lib/registry'

export interface Options {
  name: string
  source: string
}

export interface InfoResult {
  name: string
  source: string
  versions: ProjectVersion[]
}

/**
 * Get defailed info about typing definition
 */
export function info (source: string, name: string) {
  var ambient = source === "dt"
  var infoResult:InfoResult

  return search({source, name, limit: "1", ambient}).then(results => {
    if (results.results.length === 1) {
      return results.results[0]
    }
  }).then(result => {
    infoResult = {
      name: result.name,
      source: result.source,
      versions: []
    }

    return getVersions(result.source, result.name)
  }).then(result => {
    infoResult.versions = result.versions
    return infoResult
  })

}
