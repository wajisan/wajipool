import { makeObservable, observable, action, computed } from "mobx"

import AsyncStorage from '@react-native-async-storage/async-storage';//use it soon
import { Account } from "../types/account";

export class AccountsStore {
    accounts: Account[] = []
    
    constructor () {
        makeObservable(this, {
            accounts: observable,
            setAccounts: action,
            addAccount: action,
            removeAccount: action,
            initAccounts: action,
            saveAccounts: action
        })
    }
    async initAccounts () {
        const json = await AsyncStorage.getItem('test-stakeAdress');
        const arr_str = JSON.parse(json);
        arr_str?.forEach(element => {
            this.addAccount(element);
        });
    }
    setAccounts (value: Account[]): void {
        this.accounts = value;
    }

    async saveAccounts (): Promise<void> {
        await AsyncStorage.setItem('test-stakeAdress', JSON.stringify(this.accounts));
    }

    addAccount(element: Account): void {
        if (element.stakeAddress === undefined || element.stakeAddress === null) {
            element.stakeAddress = '';
        }
        if (element.id === undefined || element.id === null) {
            element.id = this.accounts.length;
        }
        const newAccount : Account = {
            'stakeAddress': element.stakeAddress,
            'id': element.id
        }
        let tmpArr : Account[] = this.accounts;
        tmpArr.unshift(newAccount);
        this.accounts = tmpArr;
        this.saveAccounts();
    }

    removeAccount(id: number): void {
        this.accounts = this.accounts.filter(function( obj ) {
            return obj.id !== id;
        });
        this.saveAccounts();
    }
}

