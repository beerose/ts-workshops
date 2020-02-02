type Props = {
  title: string;
  isOpen: boolean;
};

declare const props: Props;

declare const fun: (p: Record<string, string>) => void;

fun(props); // OK

type Props = {
  // Error
  content: string;
};

const propsV2: Props = {
  title: 'Main page',
  isOpen: true,
  content: 'Lorem ipsum', // Error
};

type ExtendedProps = Props & {
  onClick: () => void;
};
