import { tracked } from "@glimmer/tracking"
import { Albania, Austria, Belgium, Croatia, Czechia, Denmark, England, France, Georgia, Germany, Hungary, Italy, Netherlands, Poland, Portugal, Romania, Scotland, Serbia, Slovakia, Slovenia, Spain, Switzerland, Turkey, Ukraine } from "./countries"
import { Group } from "./group"
import { action } from "@ember/object"

const CacheKey = 'Euro2024-Bracket-Key'
const CacheKeyThirds = 'Euro2024-Bracket-Key-Thirds'


export class PredictionModel {

  constructor() {
    const cached = localStorage.getItem(CacheKey)
    const cachedThirds = localStorage.getItem(CacheKeyThirds)
    if (cached) {
      const groups = (JSON.parse(cached) as { id: string, teams: string[], ranking: string[]}[]).map(entry => Group.deserialize(entry))
      this.groups = groups
    } else {
      this.groups = [
        new Group({ 
          name: 'A', 
          teams: [
            Germany.id,
            Scotland.id,
            Hungary.id,
            Switzerland.id,
          ]
        }),
        new Group({ 
          name: 'B', 
          teams: [
            Spain.id,
            Croatia.id,
            Italy.id,
            Albania.id,
          ]
        }),
        new Group({
          name: 'C',
          teams: [
            Slovenia.id,
            Denmark.id,
            Serbia.id,
            England.id,
          ]
        }),
        new Group({
          name: 'D',
          teams: [
            Poland.id,
            Netherlands.id,
            Austria.id,
            France.id,
          ]
        }),
          new Group({
          name: 'E',
          teams: [
            Belgium.id,
            Slovakia.id,
            Romania.id,
            Ukraine.id,
          ]
        }),
        new Group({
          name: 'F',
          teams: [
            Turkey.id,
            Georgia.id,
            Portugal.id,
            Czechia.id,
          ]
        })
      ]
    }
    if (cachedThirds) {
      this.pickedThirds = JSON.parse(cachedThirds).map((entry: string) => entry)
      console.log(cachedThirds)
    } else {
      this.pickedThirds = []
    }
  }

  @tracked groups: Group[] = []

  @action save() {
    const model = this.groups.map(entry => Group.serialize(entry))
    localStorage.setItem(CacheKey, JSON.stringify(model))
    localStorage.setItem(CacheKeyThirds, JSON.stringify(this.pickedThirds))
  }

  @action cleanThirdPlace() {
    const invalidTeams = this.pickedThirds.filter(entry => !this.thirdPlaceTeams.includes(entry))
    console.log('invalid', invalidTeams)
    this.pickedThirds = this.pickedThirds.filter(entry => !invalidTeams.includes(entry))
  }

  get thirdPlaceTeams() {
    return this.groups.map(entry => entry.ranking?.[2])
  }

  @tracked pickedThirds: string[]

  @action toggleTeam(id: string) {
    if (this.pickedThirds.includes(id)) {
      this.removeThirdPlaceTeams(id)
    } else if (this.pickedThirds.length < 4) {
      this.addThirdPlaceTeams(id)
    }
    this.save()
  }
  @action addThirdPlaceTeams(id: string) {
    this.pickedThirds = [...this.pickedThirds, id]
  }
  @action removeThirdPlaceTeams(id: string) {
    this.pickedThirds = this.pickedThirds.filter(entry => entry !== id)
  }

}
