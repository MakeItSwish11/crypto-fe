/**
 * Color intention that you want to use in your theme
 * @param {JsonObject} theme Theme customization object
 */
interface ThemeColors {
  [key: string]: string;
}

interface ThemePalette {
  mode: string | undefined;
  common: {
    black: string;
  };
  primary: {
    light: string;
    main: string;
    dark: string;
    200: string;
    800: string;
  };
  secondary: {
    light: string;
    main: string;
    dark: string;
    200: string;
    800: string;
  };
  error: {
    light: string;
    main: string;
    dark: string;
  };
  orange: {
    light: string;
    main: string;
    dark: string;
  };
  warning: {
    light: string;
    main: string;
    dark: string;
  };
  success: {
    light: string;
    200: string;
    main: string;
    dark: string;
  };
  grey: {
    50: string;
    100: string;
    500: string;
    600: string;
    700: string;
    900: string;
  };
  dark: {
    light: string;
    main: string;
    dark: string;
    800: string;
    900: string;
  };
  text: {
    primary: string;
    secondary: string;
    dark: string;
    hint: string;
  };
  background: {
    paper: string;
    default: string;
  };
}

export default function themePalette(theme: {
  customization?: {
    navType?: string;
  };
  colors?: ThemeColors;
  heading?: string;
  darkTextPrimary?: string;
  darkTextSecondary?: string;
  textDark?: string;
  paper?: string;
  backgroundDefault?: string;
}): ThemePalette {
  return {
    mode: theme?.customization?.navType,
    common: {
      black: theme.colors?.darkPaper || '#000000',
    },
    primary: {
      light: theme.colors?.primaryLight || '#eef2f6',
      main: theme.colors?.primaryMain || '#2196f3',
      dark: theme.colors?.primaryDark || '#1e88e5',
      200: theme.colors?.primary200 || '#90caf9',
      800: theme.colors?.primary800 || '#1565c0',
    },
    secondary: {
      light: theme.colors?.secondaryLight || '#ede7f6',
      main: theme.colors?.secondaryMain || '#673ab7',
      dark: theme.colors?.secondaryDark || '#5e35b1',
      200: theme.colors?.secondary200 || '#b39ddb',
      800: theme.colors?.secondary800 || '#4527a0',
    },
    error: {
      light: theme.colors?.errorLight || '#ef9a9a',
      main: theme.colors?.errorMain || '#f44336',
      dark: theme.colors?.errorDark || '#c62828',
    },
    orange: {
      light: theme.colors?.orangeLight || '#fbe9e7',
      main: theme.colors?.orangeMain || '#ffab91',
      dark: theme.colors?.orangeDark || '#d84315',
    },
    warning: {
      light: theme.colors?.warningLight || '#fff8e1',
      main: theme.colors?.warningMain || '#ffe57f',
      dark: theme.colors?.warningDark || '#ffc107',
    },
    success: {
      light: theme.colors?.successLight || '#b9f6ca',
      200: theme.colors?.success200 || '#69f0ae',
      main: theme.colors?.successMain || '#00e676',
      dark: theme.colors?.successDark || '#00c853',
    },
    grey: {
      50: theme.colors?.grey50 || '#F8FAFC',
      100: theme.colors?.grey100 || '#EEF2F6',
      500: theme.darkTextSecondary || '#000000',
      600: theme.heading || '#000000',
      700: theme.darkTextPrimary || '#000000',
      900: theme.textDark || '#000000',
    },
    dark: {
      light: theme.colors?.darkTextPrimary || '#000000',
      main: theme.colors?.darkLevel1 || '#29314f',
      dark: theme.colors?.darkLevel2 || '#212946',
      800: theme.colors?.darkBackground || '#1a223f',
      900: theme.colors?.darkPaper || '#111936',
    },
    text: {
      primary: theme.darkTextPrimary || '#000000',
      secondary: theme.darkTextSecondary || '#000000',
      dark: theme.textDark || '#000000',
      hint: theme.colors?.grey100 || '#000000',
    },
    background: {
      paper: theme.paper || '#ffffff',
      default: theme.backgroundDefault || '#ffffff',
    },
  };
}
