type ConditionalStyle = {
  style: any;
  enabled?: boolean;
};

const conditionalStyles = (styles: ConditionalStyle[]): any[] => {
  return styles
    .filter(({ enabled }) => enabled === undefined || enabled === true)
    .map(({ style }) => style);
};

export default conditionalStyles;
