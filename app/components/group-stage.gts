import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import { action } from "@ember/object";
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { addOne, getCountry } from "euro-2024/helpers";
import { Group } from "euro-2024/models/group";
import { PredictionModel } from "euro-2024/models/prediction";

interface Signature {
  Args: {
    model: PredictionModel
    group: Group
    onSave: () => void
  }
}

export class GroupStage extends Component<Signature> {
  @tracked statusText = "";
  @tracked overDropZone = false;
  @tracked draggedItem?: string

  @action dragHasStarted(c: DragEvent) {
    const dragged = (c.target as HTMLElement)
    this.draggedItem = dragged.id.split('-')[1]
    this.statusText = "Drag has started";
    dragged.classList.add('bg-surface')
  }

  @action dropItem(dragEvent: DragEvent) {
    dragEvent.preventDefault();
    console.log('here')
    const target = (dragEvent.target as HTMLElement).id.split('-')[1]
    this.statusText = "Drop Has Completed";
    this.overDropZone = false;

    if (this.draggedItem && target) {
      this.args.group.swapRank(this.draggedItem, target) 
      this.args.model.cleanThirdPlace()
      this.args.onSave()
    }

    dragEvent.target.classList?.remove('bg-secondary')
  }

  @action dragOver(dragEvent: DragEvent) {
    dragEvent.preventDefault();
  
    if (dragEvent.dataTransfer) {
      dragEvent.dataTransfer.dropEffect = "move";
    }
    dragEvent.target.classList.add('bg-secondary')
    dragEvent.target.classList.remove('bg-surface')
  }

  @action dropLeave(dragEvent) {
    this.statusText = "Drag has left drop zone";

    this.overDropZone = false;
    dragEvent.target.classList.remove('bg-secondary')
  }

    @action dropEnter(dragEvent) {
        this.statusText = "Drag is entered Drop Zone";
        this.overDropZone = true;
        dragEvent.target.classList.add('bg-secondary')
        dragEvent.target.classList.remove('bg-surface')
    }

  @action addSelection(id: string) {
    this.args.group.rankNext(id)
    this.args.model.cleanThirdPlace()

    this.args.onSave()
  }

  get order() {
    return Array.from({ length: 4}, (_, i) => {
      const ranking = this.args.group.ranking[i]
      if (ranking) {
        return ranking
      }
      return undefined
    })
  }



  <template>
    <div class='ba pa-4 flex-column w-7 ma-2' >

          <div class='f-4'>
          Group {{@group.name}}
        </div>
        <div class='flex-row mt-1'>
        {{#each @group.teams as |teamId|}}
          {{#let (getCountry teamId) as |team|}}

            <div class='pa-2 ba mr-1 f-7 w-3 mh-auto flex-row justify-center'
              {{on 'click' (fn this.addSelection team.id)}}
              > 
              {{team.shortName}}
            </div>
          {{/let}}
        {{/each}}
    </div>
    <div class='ba mt-2'>
        {{#each this.order as |selection index|}}
        {{#if selection}}
        <div
            id='{{@group.name}}-{{selection}}'
                  {{on "drop" this.dropItem}} 
        {{on "dragover" this.dragOver}}
        {{on "dragleave" this.dropLeave}}
        {{on "dragenter" this.dropEnter}}
        class="pa-2 bb"
          role="button"
            {{on "dragstart" this.dragHasStarted}}
            draggable="true"
          >
            {{addOne index}}. {{selection}}
          </div>
        {{else}}
          <div
          class="pa-2 bb"
          >
            {{addOne index}}. {{selection}}
          </div>
        {{/if}}
          

        {{/each}}
        </div>
      </div>
  </template>

}

