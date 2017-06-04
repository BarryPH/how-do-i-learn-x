import { injectGlobal } from 'styled-components';

injectGlobal`
html {font-size: 1em;}

body {
  background-color: white;
  font-family: 'Anonymous Pro';
  font-weight: 400;
  line-height: 1.45;
  color: #333;
}

p {margin-bottom: 1.3em;}

h1, h2, h3, h4 {
  margin: 1.414em 0 0.5em;
  font-weight: bold;
  line-height: 1.2;
}

h1 {
  margin-top: 0;
  font-size: 3.998em;
}

h2 {font-size: 2.827em;}

h3 {font-size: 1.999em;}

h4 {font-size: 1.414em;}

small, .font_small {font-size: 0.707em;}


*, *:before, *:after {
	box-sizing: border-box;
}

body {
	margin: 0;
}

a {
	text-decoration: none;
	color: inherit;
}

hr {
	border: 0;
	border-bottom: 1px solid inherit;
}
`;
