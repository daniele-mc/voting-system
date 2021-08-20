import { writable } from 'svelte/store'

export const votingList = writable([])

export function createVotingList() {
  const { subscribe, update } = writable([])

  function create() {
    const newVt = { statement: '', options: [] }
    update((list) => [...list, newVt])
  }

  function change(voting, index) {
    update((list) => [
      ...list.slice(0, index), 
      voting,
      ...list.slice(index + 1) 
    ])
  }

  function remove(index) {
    update((list) => [
      ...list.slice(0, index), 
      ...list.slice(index + 1)
    ])
  }

  return { subscribe, create, change, remove }
}
