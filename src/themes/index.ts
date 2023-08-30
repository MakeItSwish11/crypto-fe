import { createTheme } from '@mui/material/styles';

// assets
import colors from '@/styles/themes-vars.module.css';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

const theme = (customization: any) => {
  const color = colors;

  const themeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
    customization,
  };

  const themeOptions: any = {
    direction: 'ltr',
    palette: themePalette(themeOption) as any,
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px',
        },
      },
    },
    typography: themeTypography(themeOption) as any,
    components: componentStyleOverrides(themeOption),
  };

  const themes = createTheme(themeOptions);

  return themes;
};

export default theme;
