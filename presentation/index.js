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

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#00a3da"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1}>
              Building a GraphQL Server in Node.js
            </Heading>
            <Heading size={1} fit caps lineHeight={1}>
              Code Walkthrough
            </Heading>
          </Slide>

          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1}>
              Table of Contents
            </Heading>
            <List textColor="white">
              <Appear><ListItem>package.json</ListItem></Appear>
              <Appear><ListItem>server.js</ListItem></Appear>
              <Appear><ListItem>schema.js</ListItem></Appear>
            </List>
          </Slide>

          {/* Next slides */}

          <CodeSlide
            transition={["spin", "slide"]}
            lang="js"
            code={require("raw!../assets/code/package.json")}
            ranges={[
              { loc: [0, 999], title: "package.json" },
              { loc: [11, 19], note: "These are all of our installed packages" },
              { loc: [16, 18], note: "These are our GraphQL dependencies" }
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/schema")}
            ranges={[

              // Post type
              { loc: [0, 999], title: "schema.js" },
              { loc: [0, 10], note: "Import the GraphQL types we're going to use." },
              { loc: [10, 11], note: "Import our data store." },
              { loc: [12, 29], note: "The Post type" },
              { loc: [12, 15], note: "Start by defining some metadata." },
              { loc: [15, 21], note: "Annotate fields with their types." },
              { loc: [21, 27], note: "Links to other, non-leaf nodes need resolver functions which tell GraphQL where to pull data from." },

              // Query type
              { loc: [30, 31], note: "The 'Query' type." },
              { loc: [30, 33], note: "The 'Query' type defines the valid starting point of our queries." },
              { loc: [33, 44], note: "Define one of the possible roots: 'posts'" },
              { loc: [34, 36], note: "'posts' returns a list of type 'Post'" },
              { loc: [36, 39], note: "'args' lets us specify acceptable arguments for a particular node" },
              { loc: [39, 42], note: "Our resolve function can make use of arguments" },

              // Schema
              { loc: [57, 62], note: "Return the schema, for GraphQL to use." },
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/server")}
            ranges={[
              { loc: [0, 999], title: "server.js" },
              { loc: [0, 2], note: "Use the graphql library" },
              { loc: [3, 4], note: "Point to our schema" },
              { loc: [5, 6] },
              { loc: [7, 11], note: "Use the graphql middleware for the route 'graphql', with the given schema" },
              { loc: [12, 15], note: "Start the server" },
              // ...
            ]}
          />

          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1}>
              Praise the demo gods
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
