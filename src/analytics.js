import ReactGA from "react-ga4";

export const iniciarAnalytics = () => {

  ReactGA.initialize("G-KD1SCQVJ3T");

  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });

};