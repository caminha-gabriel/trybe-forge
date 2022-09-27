interface Logger {
  log(param: string): void;
}

interface Database {
  logger: Logger;

  save(key: string, value: string): void;
}

class ConsoleLogger implements Logger {
  log(toLog: string) {
    console.log(toLog, '| Logged at 1');
  }
}

class ConsoleLogger2 implements Logger {
  log(toLog: string) {
    console.log(toLog, '| Logged at 2');
  }
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) { }

  save(key: string, value: string) {
    this.logger.log(`key: ${key} value: ${value}`);
  }
}

const logging1 = new ConsoleLogger();
const logging2 = new ConsoleLogger2();

const db1 = new ExampleDatabase(logging1);
const db2 = new ExampleDatabase(logging2);
const db3 = new ExampleDatabase();

db1.save('du', 'dudu');
db2.save('michael', 'passo');
db3.save('ghost', 'face');