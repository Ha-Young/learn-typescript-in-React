function merge<T1, T2>(a: T1, b: T2) {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 2, foobar: 3 });

function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap(10);

wrapped.param;

// 위 코드를 보면 any를 쓰는 것보다 Generics를 쓰는 것이 타입을 유추 할 수 있다.

interface Items<T, V> {
  list: T[];
  value: V;
}

const items: Items<number, string> = {
  list: [1, 2, 3],
  value: "aaaa",
};

class Queue<T> {
  list: T[] = [];

  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(0);
queue.enqueue(0);
queue.enqueue(0);
queue.enqueue(0);
queue.enqueue(0);

while (queue.length > 0) {
  console.log(queue.dequeue());
}
