import { makeObservable, observable, action } from "mobx"

export class RewardsStore {
    rewards: number =  0.0;
    
    constructor () {
        makeObservable(this, {
            rewards: observable,
            setRewards: action,
            addRewards: action,
            subRewards: action,
            getRewards: action,
        })
    }

    setRewards (value: number): void {
        this.rewards = value
    }

    addRewards (value: number): void {
        this.rewards += value;
    }

    subRewards (value: number): void {
        if ((this.rewards - value) < 0)
            this.rewards = 0
        else {
            this.rewards -= value;
        }
    }

    getRewards(): number {
        return this.rewards
    }
}

