export interface LevelData {
    level: string,
    description: string,
    elements: WorkbookItem[],
}

export interface WorkbookItem {
    tagName: string,
    class: string | null,
    id: string | null,
    attribute?: string,
    animation: boolean, 
    elCode: string,
}