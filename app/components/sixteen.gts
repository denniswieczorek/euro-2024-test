import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { getCountry } from 'euro-2024/helpers';
import { mapping } from 'euro-2024/models/mapping';
import { Match, MatchType } from 'euro-2024/models/match';
import { PredictionModel } from 'euro-2024/models/prediction';

interface Signature {
  Args: {
    model: PredictionModel
    round: MatchType
  }
}


function isEqual(a?: string, b?: string) {
  return a === b
}

export class SixteenView extends Component<Signature> {
  @action pickTeam(match: Match, team: string) {
    match.predictedWinner = team
    const relevant = this.args.model.matches.find(entry => entry.id === match.id)
    if (relevant) {
      relevant.predictedWinner = team
      this.args.model.updatedMatches()
    }
    this.args.model.save()
  }

  get matches() {
    console.log('re run')
    return this.args.model.matches.filter(entry => entry.type === this.args.round)
  }

  <template>
    <div class='ba pa-4 flex-column ma-2' >
      <div class='flex-row flex-wrap mt-1'>
        {{#each this.matches as |match|}}
          <div class='ba pa-4'>
        
          {{#let (getTeam 'a' match @model) as |team|}}
            {{#if team}}
              <div class='pa-2 ba mr-1 f-7 w-3 mh-auto flex-row justify-center
                {{if (isEqual match.predictedWinner team.id) 'bg-secondary'}}
              '
                {{on 'click' (fn this.pickTeam match team.id)}}
                > 
                {{team.name}}
              </div>
            {{/if}}
          {{/let}}
          {{#let (getTeam 'b' match @model) as |team|}}
            {{#if team}}
              <div class='pa-2 ba mr-1 f-7 w-3 mh-auto flex-row justify-center
                {{if (isEqual match.predictedWinner team.id) 'bg-secondary'}}
              '
                
                      {{on 'click' (fn this.pickTeam match team.id)}}

                > 
                {{team.name}}
              </div>
            {{/if}}
          {{/let}}
          </div>  

        {{/each}}
      </div>
    </div>
    
  </template>

}

function getTeam(rule: 'a' | 'b', match: Match, model: PredictionModel) {
  const teamRule = rule === 'a' ? match.teamARule : match.teamBRule
  if ('group' in teamRule) {
    const group = model.groups.find(entry => entry.name === teamRule.group)
    const f = group?.ranking[teamRule.position]
    return f ? getCountry(f) : undefined
  } else if ('groups' in teamRule) {
    console.log('as')
    const pickedThirdGroups = model.pickedThirdGroups
    const t = mapping.find(r => r.predicted.every(y => pickedThirdGroups.includes(y)))
    if (t) {
      const groupName = t.map[match.id as 39 | 40 | 43 | 41] as string // model.groups.find(entry => entry.name === teamRule.group)
      const group = model.groups.find(entry => entry.name === groupName)
      const thirdTeam = group?.ranking[2]
      console.log('hit')
      return thirdTeam ? getCountry(thirdTeam) : undefined
    }
    return undefined
  } else {
    // const a = teamRule.winnerOf
    const relevantMatch = model.matches.find(entry => entry.id === teamRule.winnerOf)
    if (relevantMatch?.predictedWinner) {
      return getCountry(relevantMatch.predictedWinner)
    }
    return undefined
  }
  return undefined

}




// function isIn(a: string, b: string[]) {
//   return b.includes(a)
// }