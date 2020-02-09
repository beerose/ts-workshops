{
  type Props = {
    title: string;
    isOpen: boolean;
  };

  declare const props1: Props;

  declare const fun1: (p: Record<string, string | boolean>) => void;

  fun1(props1); // ✅

  type Props = {
    // ❌
    content: string;
  };

  const propsV2: Props = {
    title: 'Main page',
    isOpen: true,
    content: 'Lorem ipsum', // ❌
  };

  type ExtendedProps = Props & {
    onClick: () => void;
  };
}
