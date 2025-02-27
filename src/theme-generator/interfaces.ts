import {IVscodeJsonThemeSetting} from './rules';
export interface IThemeGenerator {
  generateTheme: (name: string, colorSet: IColorSet, semanticHighlighting: boolean) => string;
}
export interface IBaseColorSet {
  /** The default background color */
  background?: string;
  /** The default foreground color */
  foreground?: string;
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
}

export interface IColorSet {
  type?: 'light' | 'dark';
  semanticHighlighting: boolean;
  base: IBaseColorSet;
  syntax?: {
    boolean?: string;
    function?: string;
    functionCall?: string;
    identifier?: string;
    keyword?: string;
    number?: string;
    storage?: string;
    string?: string;
    stringEscape?: string;
    comment?: string;
    class?: string;
    classMember?: string;
    type?: string;
    modifier?: string;
    cssClass?: string;
    cssId?: string;
    cssTag?: string;
    cssProperties?: string;
    markdownQuote?: string;
    punctuation?: string;
    variable?: string;
    otherKeyword?: string;
  };
  ui?: {
    /** The color of the editor cursor/caret */
    cursor?: string;
    /** Visible whitespace (editor.renderWhitespace) */
    invisibles?: string;
    /** Indent guide */
    guide?: string;
    /** Line highlight, this will remove the line borders in favor of a solid highlight */
    lineHighlight?: string;
    findMatchHighlight?: string;
    currentFindMatchHighlight?: string;
    /** Highlights the line(s) of the current find match, this also applies to things like find symbol */
    findRangeHighlight?: string;
    /** Highlights strings that match the current selection, excluding the selection itself */
    rangeHighlight?: string;
    selectionHighlight?: string;
    selection?: string;
    wordHighlight?: string;
    wordHighlightStrong?: string;
    activeLinkForeground?: string;
  };
  terminal?: {
    black?: string;
    red?: string;
    green?: string;
    yellow?: string;
    blue?: string;
    magenta?: string;
    cyan?: string;
    white?: string;
    brightBlack?: string;
    brightRed?: string;
    brightGreen?: string;
    brightYellow?: string;
    brightBlue?: string;
    brightMagenta?: string;
    brightCyan?: string;
    brightWhite?: string;
  };
  workbench?: {
    [key: string]: string;
  };
  customTokens?: IVscodeJsonThemeSetting[];
}

