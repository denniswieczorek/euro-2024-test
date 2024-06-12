import Component from "@glimmer/component";
import { Country } from "euro-2024/models/countries";
import { fn, hash } from '@ember/helper'
import { PredictionModel } from "euro-2024/models/prediction";
import { Match, MatchType } from "euro-2024/models/match";
import { getCountry } from "euro-2024/helpers";
import { mapping } from "euro-2024/models/mapping";
import { action } from "@ember/object";
import { on } from "@ember/modifier";

function filterByRound(matches: Match[], round: MatchType) {
  return matches.filter(entry => entry.type === round)
}

export class Bracket extends Component<{ Args: { model: PredictionModel }}> {

  get matches() {
    return this.args.model.matches
  }


  get roundOf16() { 
    const   kk = [39, 37, 41, 42, 43, 44, 40, 38]
    return kk.map(x => this.args.model.matches.find(y => y.id === x))
  }
  get quarters() { return filterByRound(this.args.model.matches, 'quarter') }
  get semi() { return filterByRound(this.args.model.matches, 'semi') }
  get final() { return filterByRound(this.args.model.matches, 'final') }

  <template>
    <div class="container">
  <div class="tournament-bracket tournament-bracket--rounded">                                                     
    <div class="tournament-bracket__round tournament-bracket__round--16">
      <h3 class="tournament-bracket__round-title">Round of 16</h3>
      <ul class="tournament-bracket__list">
        {{#each this.roundOf16 as |match|}}
          <MatchUp @match={{match}} @model={{@model}}/>
        {{/each}}
      </ul>
    </div>
    <div class="tournament-bracket__round tournament-bracket__round--quarterfinals">
      <h3 class="tournament-bracket__round-title">Quarterfinals</h3>
      <ul class="tournament-bracket__list">
        {{#each this.quarters as |match|}}
          <MatchUp @match={{match}} @model={{@model}}/>
        {{/each}}
      </ul>
    </div>
    <div class="tournament-bracket__round tournament-bracket__round--semifinals">
      <h3 class="tournament-bracket__round-title">Semifinals</h3>
      <ul class="tournament-bracket__list">
        {{#each this.semi as |match|}}
          <MatchUp @match={{match}} @model={{@model}}/>
        {{/each}}
      </ul>
    </div>
    <div class="tournament-bracket__round ">
      <h3 class="tournament-bracket__round-title">Bronze medal game</h3>
      <ul class="tournament-bracket__list">
        {{#each this.final as |match|}}
          <MatchUp @match={{match}} @model={{@model}}/>
        {{/each}}
      </ul>
    </div>

  </div>
</div>
  </template>
}

interface Signature {
  Args: {
    match: Match
    model: PredictionModel
  }
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

class MatchUp extends Component<Signature> {
  @action pickTeam(match: Match, team?: Country) {
    if (team) {
      match.predictedWinner = team.id
      const relevant = this.args.model.matches.find(entry => entry.id === match.id)
      if (relevant) {
        relevant.predictedWinner = team.id
        this.args.model.updatedMatches()
      }
      this.args.model.save()

    }
  }

  get home() {
    return getTeam('a', this.args.match, this.args.model)
  }
  get away() {
    return getTeam('b', this.args.match, this.args.model)
  }
  <template>
        <li class="tournament-bracket__item">
          <div class="tournament-bracket__match" >
            <div class='flex-column w-100 justify-center items-center'>
              <MatchUpTeam
                {{on 'click' (fn this.pickTeam @match this.home)}}

               @team={{this.home}} 
               
               class='pv-1 bb
                    {{if (isEqual @match.predictedWinner this.home.id) 'bg-secondary'}}
               
               '
              />
              <MatchUpTeam @team={{this.away}}
                {{on 'click' (fn this.pickTeam @match this.away)}}
                     class=' pv-1
                    {{if (isEqual @match.predictedWinner this.away.id) 'bg-secondary'}}
               
               '
              
              />
            </div>
          </div>
        </li>
       

  </template>
}

class MatchUpTeam extends Component<{Args: { team?: Country }, Element: HTMLDivElement}> {

  <template>
    <div ...attributes class='flex-row justify-start items-center w-100

    
    '>
      {{#if @team}}
        <span class="tournament-bracket__flag  fi  fi-{{@team.code}}" aria-label="Flag"></span>
        <div class='f-6 ml-2'>
          {{@team.name}}
        </div>
      {{else}}
        TBD 
      {{/if}}
    </div>
      

  </template>
}
function isEqual(a?: string, b?: string) {
  return a === b
}