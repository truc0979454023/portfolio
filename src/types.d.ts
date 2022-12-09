declare module "*.png";
declare module "*.jpg";
declare module "*.pdf";
declare module "aos";

type GlobalContextProps = {
  isTheme: {
    isToggleTheme: boolean;
    setIsToggleTheme: React.Dispatch<React.SetStateAction<boolean>>;
  };
  isTranslate: {
    isToggleTranslate: boolean;
    setIsToggleTranslate: React.Dispatch<React.SetStateAction<boolean>>;
  };
};
