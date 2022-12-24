declare type CounterSliceState = {
    value: number;
    status: 'idle' | 'loading' | 'failed';
};

declare type UnusefulArguments = {
    u1: string;
    u2: number;
};
