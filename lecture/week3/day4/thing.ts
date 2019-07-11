class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete(): void {
    this.completed = true;
  }

  getName(): string {
    return this.name;
  }

  getCompleted(): boolean {
    return this.completed;
  }

  letItBe(): string {
    if (this.getCompleted()) {
      return '[x] ' + this.getName();
    } else {
      return '[ ] ' + this.getName();
    }
  }
}

export { Thing };