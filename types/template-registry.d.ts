import '@glint/environment-ember-loose';
import '@glint/environment-ember-template-imports';
import { PageTitle } from 'ember-page-title'

declare module '@glint/environment-ember-loose/registry' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export default interface Registry /* other addon registries */ {
    // local entries
    'page-title': typeof PageTitle
  }
}
