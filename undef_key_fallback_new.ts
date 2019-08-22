// @ts-check

interface IConfig {
  headerText: string;
  animationDuration: number;
  showSplashScreen: boolean;
}
const config: IConfig = {
  headerText: '',
  animationDuration: 0,
  showSplashScreen: false,
};

const headerText: string =
  config.headerText ??
  'header fallback';
const animationDuration: number =
  config.animationDuration ??
  300;
const showSplashScreen: boolean =
  config.showSplashScreen ??
  true;

console.log({
  headerText,
  animationDuration,
  showSplashScreen,
});

/*
{
  headerText: '',
  animationDuration: 0,
  showSplashScreen: false
}
*/

export {};
