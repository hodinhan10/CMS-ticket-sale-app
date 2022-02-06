export const GET_CHECKING_GROUP = 'GET_CHECKING_GROUP';

export interface TicketGroup {
    id?: string;
    BookingCode: string;
    CheckIn: number;
    DateTicket: any;
    DateUsed: any;
    TicketNember: string;
    UsageStatus: number;
    eventName: string
}

export interface TicketState {
    ticket: TicketGroup[];
    loaded: boolean;
}

interface TicketGroupAction {
    type: typeof GET_CHECKING_GROUP;
    payload: TicketGroup[];
}

export type TicketAction = TicketGroupAction;



// --------------------------- //
export const GET_CHECKING_MN = 'GET_CHECKING_MN';

export interface TicketMn {
    id?: string;
    CheckIn: number;
    DateUsed: any;
    UsageStatus: number;
    TicketNember: string;
    eventName: string;
    TicketName: string;
}  

interface TicketMnAction {
    type: typeof GET_CHECKING_MN;
    payload: TicketMn[];
}

export type TicketManageAction = TicketMnAction;
