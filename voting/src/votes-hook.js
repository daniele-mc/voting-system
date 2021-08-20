import { useState } from 'react'

export default function useVotingData() {
  const [voting, setVoting] = useState([])

  const createVoting = () => {
    setVoting([...voting, { statement: '', options: [] }])
  }

  const updateVoting = (chooseVoting, index) => {
    setVoting([
      ...voting.slice(0, index),
      chooseVoting,
      ...voting.slice(index + 1)
    ])
  }

  const deleteVoting = (index) => {
    setVoting([...voting.slice(0, index), ...voting.slice(index + 1)])
  }

  return { voting, createVoting, updateVoting, deleteVoting }
}
