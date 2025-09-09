export interface User {
    id: number;
    username: string;
    password: string;
    roleId: number;
}

export interface Role {
    id: number;
    name: string;
}

export interface InventoryItem {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
}

export interface Bill {
    id: number;
    items: InventoryItem[];
    totalAmount: number;
    createdAt: Date;
}

export class Bill {
    items: InventoryItem[] = [];
    totalAmount: number = 0;
}
