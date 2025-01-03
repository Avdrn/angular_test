export interface Cell {
    value: string;
    unit: string;
    color: string;
}

export interface RowData {
    key: string;
    interactive: boolean;
    cells: Cell[];
}
