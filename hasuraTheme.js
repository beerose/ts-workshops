const colors = {
  primary: '#1b1653',
  turquise: '#24c3b8',
  darkBlue: '#001934',
  pink: '#ff3264',
  orange: '#fd9540',
  gray: '#99a3ae',
  lightGray: '#f8fafb',
};

const theme = {
  colors: {
    background: colors.lightGray,
    text: colors.primary,
    primary: colors.pink,
  },
  styles: {
    CodeSurfer: {
      pre: {
        color: 'text',
        backgroundColor: 'background',
      },
      code: {
        color: 'black',
      },
      tokens: {
        changed: {
          color: 'rgb(255, 238, 128)',
        },
        deleted: {
          color: 'rgba(239, 83, 80, 0.56)',
        },
        inserted: {
          color: 'rgb(173, 219, 103)',
        },
        comment: {
          color: colors.gray,
          fontStyle: 'italic',
          opacity: 0.8,
        },
        punctuation: {
          color: colors.gray,
          opacity: 0.6,
        },
        constant: {
          color: colors.orange,
        },
        'string url': {
          color: colors.turquise,
        },
        variable: {
          color: colors.turquise,
        },
        'number boolean': {
          color: colors.orange,
        },
        'attr-name': {
          color: 'rgb(255, 180, 84)',
        },
        'keyword operator property namespace tag selector doctype': {
          color: colors.pink,
        },
        'builtin char constant function class-name': {
          color: 'rgb(250, 208, 0)',
        },
      },
      title: {
        backgroundColor: 'background',
        color: 'text',
      },
      subtitle: {
        color: 'white',
        backgroundColor: '#2D2A55',
      },
      unfocused: {
        opacity: 0.1,
      },
    },
  },
};

export default theme;
