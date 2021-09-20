module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '768px',
      'md': '960px',
      'lg': '1210px',
    },
    container: {
      center: true,
      padding: '15px',
    },
    extend: {
      spacing: {
        px: '1px',
        small: 'var(--size-small)',
        xs: 'var(--size-xs)',
        sm: 'var(--size-sm)',
        md: 'var(--size-md)',
        lg: 'var(--size-lg)',
        xl: 'var(--size-xl)',
        xxl: 'var(--size-xxl)',
        big: 'var(--size-big)',
        max: 'var(--size-max)'
      },
      fontSize: {
        small: 'var(--size-small)',
        xs: 'var(--size-xs)',
        sm: 'var(--size-sm)',
        18: '18px',
        22: '22px',
        md: 'var(--size-md)',
        lg: 'var(--size-lg)',
        xl: 'var(--size-xl)',
        xxl: 'var(--size-xxl)',
        big: 'var(--size-big)',
        max: 'var(--size-max)',
      },
      colors: {
        first: {
          300: 'var(--cl-first-300)',
          400: 'var(--cl-first-400)',
          DEFAULT: 'var(--cl-first-500)',
          600: 'var(--cl-first-600)',
        },
        primary: 'rgba(var(--primary), var(--tw-bg-opacity, 1))',
        secondary: 'rgba(var(--secondary), var(--tw-bg-opacity, 1))',
        tertiary: 'rgba(var(--tertiary), var(--tw-bg-opacity, 1))',
        additional: 'rgba(var(--additional), var(--tw-bg-opacity, 1))',
        neutral: 'rgba(var(--neutral), var(--tw-bg-opacity, 1))',
        link: 'rgba(var(--link), var(--tw-bg-opacity, 1))',
        gray: {
          '1' : 'rgba(var(--gray-1), var(--tw-bg-opacity, 1))',
          '2' : 'rgba(var(--gray-2), var(--tw-bg-opacity, 1))',
        }
      },
      maxWidth: {
        '180': '180px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
