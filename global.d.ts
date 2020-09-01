import('@testing-library/jest-dom/extend-expect')

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
