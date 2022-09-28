# Stellar WebApp
## Tech stacks
### Languages
- HTML5: Hypertext Markup Language revision 5 (HTML5) is markup language for the structure and presentation of World Wide Web contents.

- CSS3: A cascading style sheet (CSS) is a Web page derived from multiple sources with a defined order of precedence where the definitions of any style element conflict.

- Javascript: An object-oriented computer programming language commonly used to create interactive effects within web browsers.

- TypeScript: TypeScript is a typed subset of Javascript that compiles to plain JavaScript. Any browser, any host, any OS. Open-source.

### Frameworks & tools
- [React v18](https://facebook.github.io/react/): A JavaScript library for building user interface.

- [NextJs](https://nextjs.org/): The React Framework for Production

- [Styled-components](https://styled-components.com/): Styled components are enhanced CSS for styling React component systems

- [Axios](https://github.com/axios/axios): Styled components are enhanced CSS for styling React component systems

- [SWR](https://swr.vercel.app/): React Hooks for data fetching 

- [Storybook](https://storybook.js.org): The UI Development Environment.

### Unit test frameworks
- [Jest](https://jestjs.io/en/): Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

- [Testing React](https://reactjs.org/docs/testing.html): React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components. 

## Pages
- Welcome
- Landing
- Sign Up
- Login
- Subscription
- Marketing
- Goals
- AddBank
- Dashboard

## How to install and run app
1. Clone repo:
```
git clone git@gitlab.asoft-python.com:grimer/stellar-webapp.git
```
2. Checkout branch
```
git checkout develop
```
3. Move to `stellar-webapp` folder
```
cd stellar-webapp
```
4. Install package
```
yarn install
```
5. Start Project
```
yarn dev
```
6. Run storybook
```
yarn storybook
```
7. Run unit test and coverage:
```
yarn test && yarn test:coverage
```