const identity = <T extends unknown>(arg: T): T => arg;

identity<number>(3);

identity(3);

type TableProps<T> = {
  items: T[];
  onChange: (item: T) => void;
};

function Table<T>(props: TableProps<T>) {
  return null;
}

const jon: Person = { id: 1, name: 'Jon', age: 20 };

<Table<Person> items={[jon]} onChange={x => console.log(x)} />;

<Table items={[jon]} onChange={x => console.log(x)} />;
