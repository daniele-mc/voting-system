import { reactive, readonly, computed } from 'vue'

const vtList = reactive([])

export const votings = readonly(vtList)
export const size = computed(() => vtList.length)

export function createVoting() {
  vtList.push({ statement: '', options: [] })
}

export function updateVoting(voting, index) {
  vtList[index] = voting
}

export function deleteVoting(index) {
  vtList.splice(index, 1)
}