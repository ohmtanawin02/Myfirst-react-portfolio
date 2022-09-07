import TypeIt from "typeit-react";

function Intro() {
  return (
    <TypeIt
      // speed="10"
      // autoStart = "true"
      getBeforeInit={(instance) => {
        instance
          .type("I'm a Developer.")
          .pause(750)       // Remember to return it!
        return instance;
      }}
    />
  );
}

export default Intro;
