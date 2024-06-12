import { tracked } from "@glimmer/tracking"

interface GroupRule {
  group: string,
  position: 0 | 1
}

interface GameWinnerRule {
  winnerOf: number,
}

interface ThirdRule {
  groups: string[],
}

export type PojoMatch = { id: number, type: MatchType, teamARule: GroupRule | GameWinnerRule | ThirdRule, teamBRule: GroupRule | GameWinnerRule | ThirdRule, predictedWinner?: string }

export type MatchType = 'firstRound' | 'quarter' | 'semi' | 'final'

export class Match {
  id: number
  type: MatchType
  teamARule: GroupRule | GameWinnerRule | ThirdRule
  teamBRule: GroupRule | GameWinnerRule | ThirdRule
  @tracked predictedWinner?: string

  constructor({
    id,
    teamARule,
    teamBRule,
    type,
    predictedWinner,
  }: {
    id: number,
    teamARule: GroupRule | GameWinnerRule | ThirdRule,
    teamBRule: GroupRule | GameWinnerRule | ThirdRule
    type: MatchType
    predictedWinner?: string
  }) {
    this.id = id
    this.teamARule = teamARule
    this.teamBRule = teamBRule
    this.type = type
    this.predictedWinner = predictedWinner
  }

  static serialize(match: Match): PojoMatch {
    return { id: match.id, type: match.type, teamARule: match.teamARule, teamBRule: match.teamBRule, predictedWinner: match.predictedWinner }
  }

  static deserialize(match: PojoMatch): Match {
    return new Match({ id: match.id, teamARule: match.teamARule, teamBRule: match.teamBRule, type: match.type, predictedWinner: match.predictedWinner })
  }
}

export const roundof16 = [
  new Match({
    id: 37,
    type: 'firstRound',
    teamARule: {
      group: 'A',
      position: 0
    },
    teamBRule: {
      group: 'C',
      position: 1
    }

  }),
  new Match({
    id: 38,
    type: 'firstRound',
    teamARule: {
      group: 'A',
      position: 1
    },
    teamBRule: {
      group: 'B',
      position: 1
    }
  }),
  new Match({
    id: 39,
    type: 'firstRound',
    teamARule: {
      group: 'B',
      position: 0,
    },
    teamBRule: {
      groups: ['A','D','E','F']
    }
  }),
  new Match({
    id: 40,
    type: 'firstRound',
    teamARule: {
      group: 'C',
      position: 0
    },
    teamBRule: {
      groups: ['D','E','F']
    }
  }),
  new Match({
    id: 41,
    type: 'firstRound',
    teamARule: {
      group: 'F',
      position: 0
    },
    teamBRule: {
      groups: ['A','B','C']
    }
  }),
  new Match({
    id: 42,
    type: 'firstRound',
    teamARule: {
      group: 'D',
      position: 1
    },
    teamBRule: {
      group: 'E',
      position: 1
    }

  }),
  new Match({
    id: 43,
    type: 'firstRound',
    teamARule: {
      group: 'E',
      position: 0
    },
    teamBRule: {
      groups: ['A','B','C','D']
    }
  }),
  new Match({
    id: 44,
    type: 'firstRound',
    teamARule: {
      group: 'D',
      position: 0
    },
    teamBRule: {
      group: 'F',
      position: 1
    }
  })
]

export const quarters = [
  new Match({
    id: 45,
    type: 'quarter',
    teamARule: { winnerOf: 37 },
    teamBRule: { winnerOf: 39 },
  }),
  new Match({
    id: 46,
    type: 'quarter',
    teamARule: { winnerOf: 41 },
    teamBRule: { winnerOf: 42 },
  }),
  new Match({
    id: 47,
    type: 'quarter',
    teamARule: { winnerOf: 43 },
    teamBRule: { winnerOf: 44 },
  }),
  new Match({
    id: 48,
    type: 'quarter',
    teamARule: { winnerOf: 40 },
    teamBRule: { winnerOf: 38 },
  }),
]

export const semi = [
  new Match({
    id: 49,
    type: 'semi',
    teamARule: { winnerOf: 45 },
    teamBRule: { winnerOf: 46 },
  }),
  new Match({
    id: 50,
    type: 'semi',
    teamARule: { winnerOf: 47 },
    teamBRule: { winnerOf: 48 },
  }),
]

export const final = new Match({
  id: 51,
  type: 'final',
  teamARule: { winnerOf: 49 },
  teamBRule: { winnerOf: 50 },
})



export const DefaultMatches = [
  ...roundof16,
  ...quarters,
  ...semi,
  final
]