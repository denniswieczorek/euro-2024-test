import { action } from '@ember/object'
import Component from '@glimmer/component';
import { PredictionModel } from 'euro-2024/models/prediction';
import { ThirdView } from './thirds';
import { GroupStage } from './group-stage';
import { SixteenView } from './sixteen';
import { getCountry } from 'euro-2024/helpers';
import { on } from '@ember/modifier';
import html2pdf from 'html2pdf.js'
import { Bracket } from './bracket';


class Main extends Component {
  model = new PredictionModel();
  @action onSave() {
    this.model.save()
  }

  get euroWinner() {
    const winner = this.model.matches.find(e => e.type === 'final')?.predictedWinner
    if (winner) {
      return getCountry(winner)
    }
    return undefined
  }

  @action print() {
    var element = document.getElementById('fooBar');
    var opt = {
      margin:       1,
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: .5 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();
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
      <div id='fooBar' class='flex-row flex-wrap w-100 justify-center'>
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
          <div class='items-center justify-start flex-row w-100 bb pv-2' >
        <div class='f-2 mr-4'>
          Knockout round
        </div>

      </div>
      <Bracket @model={{this.model}}/>
     {{#if this.euroWinner}}
        <div class='items-center mt-7 justify-start flex-row w-100 bb pv-2' >
          <div class='f-2 mr-4'>
            Your Winner
          </div>
          <div class='f-6'>
            Pick the 4 best third place teams (order doesn't matter)
          </div>
        </div>
        <div class='flex-column items-center mb-7 flex-wrap w-100 justify-center'>
          <div class='pa-2 mt-4 ba mr-1 f-7 w-3 mh-auto flex-row justify-center
              '
                > 
                {{this.euroWinner.name}}
              </div>
        <div class='mt-4'
          
          {{on 'click' this.print}}  
        >
          Print
        </div>
        </div>  

      {{/if}}

  </template>
}


export default Main

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Main': typeof Main;
  }
}





