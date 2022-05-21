import React from 'react'

// Stores
import { RewardsStore } from "./rewards"
import { AccountsStore } from "./accounts"

export const stores = {
    rewardStore: new RewardsStore(),
    accountsStore: new AccountsStore()
}

export const storesContext = React.createContext(stores)
export const StoresProvider = storesContext.Provider

