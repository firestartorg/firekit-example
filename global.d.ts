// Purpose: Define global types for the project.
type Providers = (typeof import('./firekit.config'))['default']['providers'];
declare interface ConfigProviders extends Providers {}
