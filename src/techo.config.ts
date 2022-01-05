declare interface Config {
  stubs: {
    [key: string]: {
      name: string;
      stubPath: string;
      newFilePath: string;
    };
  };
  addStubs: {
    [key: string]: {
      name: string;
      stubPath: string;
    };
  };
  editor: string | null;
}

const config: Config = {
  stubs: {
    Component: {
      name: 'Component',
      stubPath: './stubs/Component.tsx.stub',
      newFilePath: './src/components/{Name}/index.tsx',
    },
    Page: {
      name: 'Page',
      stubPath: './stubs/Page.tsx.stub',
      newFilePath: './src/pages/{Name}Page/index.tsx',
    },
    Service: {
      name: 'Service',
      stubPath: './stubs/service.ts.stub',
      newFilePath: './src/services/{Name}/index.ts',
    },
    Composable: {
      name: 'Composable',
      stubPath: './stubs/composable.tsx.stub',
      newFilePath: './src/composables/{Name}/index.tsx',
    },
    Icon: {
      name: 'Icon',
      stubPath: './stubs/Icon.tsx.stub',
      newFilePath: './src/icons/{Name}Icon/index.tsx',
    },
    Layout: {
      name: 'Layout',
      stubPath: './stubs/Layout.tsx.stub',
      newFilePath: './src/layouts/{Name}Layout/index.tsx',
    },
  },
  addStubs: {
    AddComponent: {
      name: 'Component',
      stubPath: './stubs/AddComponent.tsx.stub',
    },
    AddIcon: {
      name: 'Icon',
      stubPath: './stubs/AddIcon.tsx.stub',
    },
  },
  editor: null,
};

export default config;
