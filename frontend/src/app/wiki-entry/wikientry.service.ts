import { OptimizationAlgorithmInterface } from '../algorithms/optimization-algorithm.interface';

export class WikientryService {
  constructor() {

  }

  public getUrls(repository: string): RepositoryInformation {

    const cdnUrl = 'https://cdn.jsdelivr.net/gh/';
    const githubBaseUrl = 'https://github.com/';
    if (!repository.startsWith(githubBaseUrl)) {
      console.log({ 'Invalid Url:': repository });
      throw new Error(repository + ' is invalid');
    }
    const repoLocation = repository.substr(repository.length);
    const parts = repoLocation.split('/');

    return <RepositoryInformation>{
      owner: parts[0],
      name: parts[1],
      markdownUrl: cdnUrl + repoLocation + 'readme.md',
      webworkerUrl: cdnUrl + repoLocation + 'index.js',
      parameterJsonUrl: cdnUrl + repoLocation + 'parameters.json'
    };
  }

}

export interface RepositoryInformation {
  markdownUrl: string;
  webworkerUrl: string;
  parameterJsonUrl: string;
  owner: string;
  name: string;
}
