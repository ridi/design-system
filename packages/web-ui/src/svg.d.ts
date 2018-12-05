declare module '*.svg' {
  /**
   * Exported by `url-loader`.
   * `url-loader` transforms SVG files into base64 URI string.
   */
  const content: string;
  export default content;

  /**
   * Exported by `@svgr/webpack`.
   */
  export const ReactComponent: React.ReactType;
}
