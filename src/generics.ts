const identity = <T>(arg: T): T => arg;

identity<number>(3);

identity(3);

type TableProps<T> = {
  items: T[];
};

function Table<T>(props: TableProps<T>) {
  return null;
}

<Table<Person> {...props} />
