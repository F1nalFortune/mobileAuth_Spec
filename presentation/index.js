// Import React
import React from "react";


// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  background: require("../assets/background.jpg"),
  graphs: require("../assets/graphs.png")
};

preloader(images);

const newTheme = createTheme({
  primary: '#559aa94f',
  secondary: "#24415c"
});

var tag = {
  fontFamily: "Raleway, 'sans-serif'",
  marginTop: '519px',
  marginLeft: '670px',
  color: 'black',
  fontSize: '22px'
};

var newTag = {
  fontFamily: "Orbitron, 'sans-serif'",
  marginTop: '75px',
  marginLeft: '670px',
  color: 'white',
  fontSize: '22px'
};

var fontStyle = {
  fontFamily: "Raleway, 'sans-serif'",
  color: 'black'
}

var newStyle = {
  fontFamily: "Orbitron, 'sans-serif'",
  color: 'black'
}

var mainTitle = {
  fontFamily: "Orbitron, 'sans-serif'",
  color: '#87d9e9',
  fontWeight: 'unset',
  textShadow: '2px 2px 4px #000000'
}

var newTitle = {
  fontFamily: "Orbitron, 'sans-serif'",
  color: '#24415c',
  fontWeight: 'unset',
  textShadow: '2px 2px 4px #000000'
}

var sources = {
  fontSize: '24px'
}

var bgColor = {
  color: '#5da6b740',
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={newTheme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress={'pacman'}>
          <Slide transition={["zoom"]} bgImage={images.background}>
            <Heading size={4} Fit cap lineHeight={1} style={mainTitle}>
              Toward mobile authentication with keystroke dynamics on mobile phones and tablets
            </Heading>
            <Text style={newTag} lineHeight={1} textColor="black">
              Brian__Phelps
            </Text>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2} Fit cap lineHeight={1} style={newTitle}>
              Overview
            </Heading>
            <List style={fontStyle}>

            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2} Fit cap lineHeight={1} style={newTitle}>
              Introduction
            </Heading>
            <List style={fontStyle}>

            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2} Fit cap lineHeight={1} style={newTitle}>
              Related Work
            </Heading>
            <List style={fontStyle}>
                1985-1990: Auth via keystroke methods<br/><br/>
            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={4} Fit cap lineHeight={1} style={newTitle}>
              ...Related Work
            </Heading>
            <List style={fontStyle}>
                FRR: False Reject Rate (disadvantage of biometry)<br/><br/>
                FAR: False Acceptance Rate<br/><br/>
                ERR: FAR = FAR<br/><br/>
            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={4} Fit cap lineHeight={1} style={newTitle}>
              ...Related Work
            </Heading>
            <List style={fontStyle}>
              1985 study: FAR rate of 6%<br/><br/>
              1990 study: FAR rate of .5%<br/><br/>
              ----------<br/><br/>
              2006: Studies moved focus to authentication of mobile devices
            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]}>
            <Heading size={2} Fit cap lineHeight={1} style={newTitle}>
                Biometric Auth
            </Heading>
            <List style={fontStyle}>
              Works in two phases: enrollment & authentication
            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2} Fit cap lineHeight={1} style={newTitle}>
              Basic Features
            </Heading>
            <List style={fontStyle}>
              <Appear><ListItem style={fontStyle}>Digraph - Logs characteristics during typing two characters</ListItem></Appear>
              <Appear><ListItem style={fontStyle}>Trigraph - Three characters</ListItem></Appear>
              <Appear><ListItem>Keyhold Time</ListItem></Appear>
              <Appear><ListItem>Error Rate</ListItem></Appear>
              <Appear><ListItem>Shift Key</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]}>
            <Heading size={2} Fit cap lineHeight={1} style={newTitle}>
              New Features for Smartphone
            </Heading>
            <List style={fontStyle}>
              Pressure during typing<br/><br/>
              Fingertip size<br/><br/>
              Physics of the mobile device<br/><br/>
            </List>
          </Slide>


          <Slide transition={["zoom", "slide"]} bgImage={images.graphs}>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2} Fit cap lineHeight={1} style={newTitle}>
              Conclusion
            </Heading>
            <List style={fontStyle}>
              Keystroke dynamics has a lot of advantages<br/><br/>
              Adds to the authentication process an additional factor<br /><br/>
              <br/><br/>
              With additional sensors smartphones have today, more features can be extracted<br/><br/>
            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2} Fit cap lineHeight={1} style={newTitle}>
              Current Events
            </Heading>
            <List style={fontStyle}>
              Samsung display UNIST Center<br/><br/>
              Ulsan National Institute of Science & Technology<br/><br/>
            </List>
          </Slide>


          <Slide transition={["zoom", "slide"]}>
            <Heading size={2} Fit cap lineHeight={1.5} style={newTitle}>
              ?s
            </Heading>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2} Fit cap lineHeight={1.5} style={newTitle}>
              Sources
            </Heading>
            <List style={sources}>
              http://vkansee.com/heres-how-easily-hackers-can-copy-your-fingerprints/<br/>
              https://www.theverge.com/2016/5/2/11540962/iphone-samsung-fingerprint-duplicate-hack-security<br/>
              https://www.nature.com/articles/s41467-018-04906-1<br/>
              https://www.techradar.com/news/the-fingerprint-scanner-on-your-next-phone-might-check-your-temperature<br/>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={4} Fit cap lineHeight={1.5} style={newTitle}>
            <i className="fas fa-code-branch"></i>
              gitHub
            </Heading>
            <Text lineHeight={2} style={fontStyle}>
              https://github.com/F1nalFortune/mobileAuth_Spec
            </Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
