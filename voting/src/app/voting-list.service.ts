import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class VotingService {
  votes: { statement: string; votes: any[] }[] = [];

  createVoting() {
    this.votes.push({ statement: '', votes: [] });
  }

  updateVoting(vote: any, index: number) {
    this.votes[index] = vote;
  }

  deleteVoting(index: number) {
    this.votes.splice(index, 1);
  }
}
