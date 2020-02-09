{
  interface Props {
    title: string;
    isOpen: boolean;
  }

  declare const props: Props;

  declare const fun: (p: Record<string, string | boolean>) => void;

  fun(props);
  // Error:
  // Index signature is missing in type 'Props'.ts(2345)

  interface Props {
    title: string;
    isOpen: boolean;
    [propName: string]: any;
  }

  interface Props {
    content: string;
  }

  const propsV2: Props = {
    title: 'Main page',
    isOpen: true,
    content: 'Lorem ipsum',
  }; // ✅

  interface ExtendedProps extends Props {
    onClick: () => void;
  }
}
