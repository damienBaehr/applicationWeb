export interface Projet {
    id: string;
    title: string;
    tasks: Task[];

};

export interface Task {
    title: string;
    description: string;
    status: State;
    start: string;
    end: string;
}

export interface ProjetColomn{
    state: State[];
}

export interface State{
    inProgress : 'in progress',
    todo : 'todo',
    done : 'done',
}