export interface Account {
    id: number,
    username: string,
    password: string,
    role: string,
    staff_id: number,
    censor_id: number,
}

export interface Censor {
    id: number;
    name: string;
    email: string;
    level: number;
    digitalSignature: string;
    fullName: string;
    department: string;
}

export interface Staff {
    id: number;
    name: string;
    email: string;
    department: string;
    digitalSignature: string;
    fullName: string;
}

export enum Status {
    PENDING = 'pending',
    APPROVED = 'approved',
    REJECTED = 'rejected',
}

export interface Document {
    id: number;
    title: string;
    sender: string;
    file: string;
    base_url: string;
    original_url: string;
    level1: Status;
    level2: Status;
    level3: Status;
    level1_updateAt: Date;
    level2_updateAt: Date;
    level3_updateAt: Date;
    finalstatus: Status;
    staff_id: number;
    censor_id: number[];
    created_at: Date;
    updated_at: Date;
}

export interface Notification {
    id: number;
    title: string;
    content: string;
    personal_send: number[];
    department_send: string;
    file: string;
    censor_id: number;
    created_at: Date;
}

export interface Form {
    id: number;
    title: string;
    url: string;
    censor_id: number;
}

export interface DefaultDocument {
    id: number;
    title: string;
    url: string;
    department: string;
    censor_id: number;
    created_at: Date;
    updated_at: Date;
}