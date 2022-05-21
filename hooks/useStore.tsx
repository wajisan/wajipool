import React from 'react'

import { stores, storesContext} from "../stores"

export const useStore = <T extends keyof typeof stores>(store: T): typeof stores[T] => {
    return React.useContext(storesContext)[store]
}