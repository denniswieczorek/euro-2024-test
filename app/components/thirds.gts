import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { action } from '@ember/object'
import Component from '@glimmer/component';
import { getCountry, isIn } from 'euro-2024/helpers';
import { PredictionModel } from 'euro-2024/models/prediction';

interface Signature {
  Args: {
    model: PredictionModel
  }
}


export class ThirdView extends Component<Signature> {
  @action toggleTeam(id: string) {
    this.args.model.toggleTeam(id)
  }
 

  <template>
    <div class='ba pa-4 flex-column w-7 ma-2' >
        <div class='flex-row mt-1'>
        {{#each @model.thirdPlaceTeams as |teamId|}}
          {{#let (getCountry teamId) as |team|}}

            <div class='pa-2 ba mr-1 f-7 w-3 mh-auto flex-row justify-center
              {{if (isIn teamId @model.pickedThirds) 'bg-primary'}}
            '
              {{on 'click' (fn this.toggleTeam team.id)}}
              > 
              {{team.shortName}}
            </div>
          {{/let}}
        {{/each}}
    </div>
    </div>
    
  </template>

}

// function isIn(a: string, b: string[]) {
//   return b.includes(a)
// }