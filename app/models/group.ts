import { action } from "@ember/object"
import { tracked } from "@glimmer/tracking"


type GroupTeams = [string, string, string, string]
export class Group {
  teams: GroupTeams
  name: string
  @tracked ranking: string[]
  constructor({ name, teams, ranking = []}: { name: string, teams: GroupTeams, ranking?: string[] }) {
    this.name = name
    this.teams = teams
    this.ranking = ranking
  }

  @action rankNext(id: string) {
    if (this.ranking.includes(id)) {
      return
    }
    this.ranking = [...this.ranking, id]
  }
  @action swapRank(a: string, b: string) {
    const indexA = this.ranking.indexOf(a)
    const indexB = this.ranking.indexOf(b)
    if (indexA >= 0 && indexB >= 0) {
      this.ranking[indexA] = b
      this.ranking[indexB] = a
      this.ranking = this.ranking
    }
  }

  static serialize(group: Group): { ranking: string[], id: string, teams: string[] } {
    return { ranking: group.ranking, id: group.name, teams: group.teams }
  }

  static deserialize(group: { ranking: string[], id: string, teams: string[] }): Group {
    return new Group({ name: group.id, teams: group.teams as GroupTeams, ranking: group.ranking })
  }
}

