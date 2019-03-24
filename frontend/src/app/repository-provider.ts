import { RepositoryDetailInformation, RepositoryInformation } from './wiki-entry/wikientry.service';
import { environment } from 'src/environments/environment';

export class RepositoryProvider {
    constructor() {
        this.Repositories = [
            {
                markdownUrl: 'https://cdn.jsdelivr.net/gh/dhbwstudienarbeit2019/CSO@1.2/dist/README.md',
                name: 'Cat Swarm Optimization',
                owner: 'Laura Kaipl',
                description: `Cat swarm optimization (CSO) is one of the new 
                heuristic optimization algorithm which based on swarm intelligence.
                CSO is generated by observing the behaviors of cats, and composed of two sub-models, 
                i.e. tracing mode and seeking mode, which model upon the behaviors of cats.`,
                lastUpdated: new Date().toDateString(),
                parameterJsonUrl: 'https://cdn.jsdelivr.net/gh/dhbwstudienarbeit2019/CSO@1.2/dist/parameters.json',
                webworkerUrl: 'https://cdn.jsdelivr.net/gh/dhbwstudienarbeit2019/CSO@1.2/dist/index.js',
                repository: '',
            }
        ];
        if (environment.production) {
            this.Repositories.push({
                markdownUrl: 'http://localhost:4201/README.md',
                name: 'Localhost:4201',
                owner: 'you',
                description: `your algorithm repository for testing.
                Parameters url: http://localhost:4201/parameters.json
                Markdown url: http://localhost:4201/README.md
                Webworker url: http://localhost:4201/index.js`,
                lastUpdated: new Date().toDateString(),
                parameterJsonUrl: 'http://localhost:4201/parameters.json',
                webworkerUrl: 'http://localhost:4201/index.js',
                repository: ''
            });
        }
    }
    public readonly Repositories: RepositoryDetailInformation[];
}
