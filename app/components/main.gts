import { action } from '@ember/object'
import Component from '@glimmer/component';
import { PredictionModel } from 'euro-2024/models/prediction';
import { ThirdView } from './thirds';
import { GroupStage } from './group-stage';

class Main extends Component {
  model = new PredictionModel();
  @action onSave() {
    this.model.save()
  }
  <template> 
    <div class='flex-column items-center justify-center hv-100'>
      <div class='items-center justify-start flex-row w-100 bb pv-2' >
        <div class='f-2 mr-4'>
          Group Stage
        </div>
        <div class='f-6'>
          What do
        </div>
      </div>
      <div class='flex-row flex-wrap w-100 justify-center'>
        {{#each this.model.groups as |group|}}
          <GroupStage @group={{group}} @model={{this.model}} @onSave={{this.onSave}} />
        {{/each}}
      </div>  


      <div class='items-center justify-start flex-row w-100 bb pv-2' >
        <div class='f-2 mr-4'>
          Top thirds
        </div>
        <div class='f-6'>
          Pick the 4 best third place teams (order doesn't matter)
        </div>
      </div>
      <div class='flex-row flex-wrap w-100 justify-center'>
        <ThirdView @model={{this.model}} />
      </div>  
    </div>  

  </template>
}


export default Main

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Main': typeof Main;
  }
}





