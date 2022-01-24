import { ActionType } from "../action-types";

interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: number
}

interface WithdrawAction {
    type: ActionType.WITHDRAW,
    payload: number
}

interface BackruptAction {
    type: ActionType.BACKRUPT
}

export type Action = DepositAction | WithdrawAction | BackruptAction