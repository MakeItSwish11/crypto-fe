import React, { forwardRef, ReactNode } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';

// constant
const headerSX = {
  '& .MuiCardHeader-action': { marginRight: 0 },
};

// ==============================|| CUSTOM MAIN CARD ||============================== //

interface MainCardProps {
  border?: boolean;
  boxShadow?: boolean;
  children: ReactNode;
  content?: boolean;
  contentClass?: string;
  contentSX?: Record<string, unknown>;
  darkTitle?: boolean;
  secondary?: ReactNode | string | object;
  shadow?: string;
  sx?: Record<string, unknown>;
  title?: any;
}

const MainCard = forwardRef<HTMLDivElement, MainCardProps>(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentClass = '',
      contentSX = {},
      darkTitle,
      secondary,
      shadow,
      sx = {},
      title,
      ...others
    },
    ref
  ) => {
    const theme = useTheme();

    return (
      <Card
        ref={ref}
        {...others}
        sx={{
          border: border ? '1px solid' : 'none',
          borderColor: theme.palette.primary.light, // Using 'light' variant
          ':hover': {
            boxShadow: boxShadow
              ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)'
              : 'inherit',
          },
          ...sx,
        }}
      >
        {/* card header and action */}
        {title && (
          <CardHeader
            sx={headerSX}
            title={
              darkTitle ? <Typography variant="h3">{title}</Typography> : title
            }
          />
        )}

        {/* content & header divider */}
        {title && <Divider />}

        {/* card content */}
        {content && (
          <CardContent sx={contentSX} className={contentClass}>
            {children}
          </CardContent>
        )}
        {!content && children}
      </Card>
    );
  }
);

export default MainCard;
