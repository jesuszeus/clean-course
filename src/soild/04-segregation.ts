interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): number;
}

interface RunningBird {
    run(): void;
}

interface SwimmingBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    public fly(): number { return 100; }
    public eat(): void { }
}

class Hummingbird implements Bird, FlyingBird {
    public fly(): number { return Number.MAX_SAFE_INTEGER; }
    public eat(): void { }
}

class Ostrich implements Bird, RunningBird {
    public eat(): void { }
    public run(): void { }
}


class Penguin implements Bird, SwimmingBird {
    public eat(): void { }
    public swim(): void { }
}
