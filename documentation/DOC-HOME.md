# Guia de Padrões React

Um guia de padrões React em Português.

Baseado no [Original](https://reactpatterns.com) por Michael Chan [@chantastic](https://github.com/chantastic)

Traduzido para Português e revisado por [@rubenmarcus](https://github.com/rubenmarcus)

## Conteúdo

  - [Traduções](#traduções)
  - [Elementos](#elementos)
  - [Componentes](#componentes)
  - [Fragmentos](#fragmentos)
  - [Expressões](#expressões)
  - [Props (Propriedades)](#props-propriedades)
  - [defaultProps (Propriedades Padrão)](#defaultprops-propriedades-padrão)
  - [Desestruturando props](#desestruturando-props)
  - [Atributos de spread JSX](#atributos-de-spread-jsx)
  - [Mergeando props desestruturadas com outros valores](#mergeando-props-desestruturadas-com-outros-valores)
  - [Renderização Condicional](#renderização-condicional)
    - [`if`](#if)
    - [`unless`](#unless)
    - [`if-else`](#if-else)
  - [Tipos de Filho (Children Types)](#tipos-de-filho-children-types)
    - [`String`](#string)
    - [`Array`](#array)
  - [Array como filho (Array as children)](#array-como-filho-array-as-children)
  - [Função como filha (Function as children)](#função-como-filha-function-as-children)
  - [Renderizando uma prop](#renderizando-uma-prop)
  - [Passando um Filho (Children)](#passando-um-filho-children)
  - [Component Proxy](#component-proxy)
  - [Component de estilo](#component-de-estilo)
  - [Switch de Eventos](#switch-de-eventos)
  - [Componente de Layout](#componente-de-layout)
  - [Componente Container](#componente-container)
  - [Higher-order component](#higher-order-component)
  - [Elevando o State (State Hoisting)](#elevando-o-state-state-hoisting)
  - [Passando props de Componente filho para  Componente pai](#passando-props-de-componente-filho-para--componente-pai)
  - [Inputs Controlados](#inputs-controlados)

## Traduções

Traduções não verificadas, e links não significam que são aprovadas.

[Chinese](https://reactpatterns.cn)

## Elementos

[Elementos](https://pt-br.reactjs.org/docs/glossary.html#elements) são tudo que está envolvido por <>.

```jsx
<div></div>
<MeuComponente />
```

[Componentes](#componentes) retornam Elementos.

## Componentes

Um [Componente](https://pt-br.reactjs.org/docs/glossary.html#components) é defindo por uma função que declarada retorna um [Elemento](#elementos) React .

```jsx
function MeuComponente() {
  return <div>Olá Mundo</div>;
}
```

## Fragmentos

Um [Componente](https://pt-br.reactjs.org/docs/glossary.html#components) é defindo por uma função que declarada retorna um [Elemento](#elementos) React .

```jsx
function MeuComponente() {
  return <div>Olá Mundo</div>;
}
```


## Expressões

Use chaves para  [Incorporar expressões](https://pt-br.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx) no [JSX](https://pt-br.reactjs.org/docs/glossary.html#jsx).

```jsx
function OlaUsuario() {
  let nome = "Ruben";

  return <div>Olá {nome}!</div>;
}
```

## Props (Propriedades)

Entenda como `props` como um argumento externo para possibilitar customizações para seu Componente.

```jsx
function DigaOla(props) {
  return <div>Olá {props.nome}!</div>;
}
```

## defaultProps (Propriedades Padrão)

Especificar valores padrão de `props` com `defaultProps`.

```jsx
function OlaUsuario(props) {
  return <div>Olá {props.nome}!</div>;
}
OlaUsuario.defaultProps = {
  nome: "Visitante",
};
```

---

## Desestruturando props

[Atribuição via desestruturação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) é um recurso do  

Foi adicionado a linguagem no ES2015.

```js
let usuario = { nome: "Ruben" };
let { nome } = usuario;
```

Funciona com Array também.

```js
let numeros = ["um", "dois"];
let [um, dois] = numeros;
```
Atribuição via desestruturação (Destructuring assignment) é usado muito em [componentes funcionais](#function-component).  
Essas declarações de componente são equivalentes.

```jsx
function Hello(props) {
  return <div>Olá {props.name}!</div>;
}

function Hello({ name }) {
  return <div>Olá {name}!</div>;
}
```

Existe uma sintaxe para atribuir as `props` restantes em um objeto.  
Se chama [Paramêtros](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters) e parece assim:

```jsx
function Hello({ name, ...restProps }) {
  return <div>Olá {name}!</div>;
}
```

Esses três pontos (`...`) pegam todas a props que falam e atribuem ao paramêtro `restProps`.

Então o que fazer com `restProps` quando você o tem?  
Continue lendo...

---

## Atributos de spread JSX

Atributos de Spread é uma feature do JSX [JSX](https://pt-br.reactjs.org/docs/introducing-jsx.html).  
It's a syntax for providing an object's properties as JSX attributes.

Following the example from [Destructuring props](#destructuring-props),  
We can **spread** `restProps` over our `<div>`.

```jsx
function Hello({ name, ...restProps }) {
  return <div {...restProps}>Hi {name}!</div>;
}
```

This makes `Greeting` super flexible.  
We can pass DOM attributes to `Greeting` and trust that they'll be passed through to `div`.

```jsx
<Greeting name="Fancy pants" className="fancy-greeting" id="user-greeting" />
```

Avoid forwarding non-DOM `props` to components.  
Destructuring assignment is popular because it gives you a way to separate component-specific props from DOM/platform-specific attributes.

```jsx
function Greeting({ name, ...platformProps }) {
  return <div {...platformProps}>Hi {name}!</div>;
}
```

---

## Mergeando props desestruturadas com outros valores

Components are abstractions.  
Good abstractions allow for extension.

Consider this component that uses a `class` attribute for style a `button`.

```jsx
function MyButton(props) {
  return <button className="btn" {...props} />;
}
```

This works great until we try to extend it with another class.

```jsx
<MyButton className="delete-btn">Delete...</MyButton>
```

In this case, `delete-btn` replaces `btn`.

Order matters for [JSX spread attributes](#jsx-spread-attributes).  
The `props.className` being spread is overriding the `className` in our component.

We can change the order but now the `className` will **never** be anything but `btn`.

```jsx
function MyButton(props) {
  return <button {...props} className="btn" />;
}
```

We need to use destructuring assignment to get the incoming `className` and merge with the base `className`.  
We can do this simply by adding all values to an array and joining them with a space.

```jsx
function MyButton({ className, ...props }) {
  let classNames = ["btn", className].join(" ");

  return <button className={classNames} {...props} />;
}
```

To guard from `undefined` showing up as a className, you could update your logic to filter out `falsy` values:

```jsx
function MyButton({ className, ...props }) {
  let classNames = ["btn", className].filter(Boolean).join(" ").trim();

  return <button className={classNames} {...props} />;
}
```

Bear in mind though that if an empty object is passed it'll be included in the class as well, resulting in: `btn [object Object]`.

The better approach is to make use of available packages, like [classnames](https://www.npmjs.com/package/classnames) or [clsx](https://www.npmjs.com/package/clsx), that could be used to join classnames, relieving you from having to deal with it manually.

## Renderização Condicional

Você não consegue usar if else em suas declarações de componente..  
Então pode usar o operador ternário [conditional (ternary) operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) ou [short-circuit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation) are your friends.

### `if`

```jsx
{
  !!condition && <span>Irá renderizar quando for `truthy`</span>;
}
```

Dica não utilize if dessa maneira:
```jsx
{
  condition && <span>Rendereiza quando `truthy`</span>;
}
```

O React pode imprimir um 0 no seu componente. Quando vem 0 nos seus dados, ele não considera sua variável como falsa, utilizando o !! , ele converte 0 para falsy

### `unless` (ao menos que)

```jsx
{
  condition || <span>Renderizado quando `falsy`</span>;
}
```

### `if-else` (Operador Ternãrio)

```jsx
{
  condition ? (
    <span>Renderizado quando for `truthy`</span>
  ) : (
    <span>Renderizado quando for `falsy`</span>
  );
}
```

## Tipos de Filho (Children Types)

React can render `children` from most types.  
In most cases it's either an `array` or a `string`.

### `String`

```jsx
<div>Hello World!</div>
```

### `Array`

```jsx
<div>{["Hello ", <span>World</span>, "!"]}</div>
```

## Array como filho (Array as children)

Providing an array as `children` is a very common.  
It's how lists are drawn in React.

We use `map()` to create an array of React Elements for every value in the array.

```jsx
<ul>
  {["first", "second"].map((item) => (
    <li>{item}</li>
  ))}
</ul>
```

That's equivalent to providing a literal `array`.

```jsx
<ul>{[<li>first</li>, <li>second</li>]}</ul>
```

This pattern can be combined with destructuring, JSX Spread Attributes, and other components, for some serious terseness.

```jsx
<ul>
  {arrayOfMessageObjects.map(({ id, ...message }) => (
    <Message key={id} {...message} />
  ))}
</ul>
```

## Função como filha (Function as children)

Componentes React não suportam funções como `children`.
Porém com o padrão, [render props](#render-prop) conseguimos criar componentes que tomam funções como  `children` filhas.

## Renderizando uma prop

Here's a component that uses a render callback.  
It's not useful, but it's an easy illustration to start with.

```jsx
const Width = ({ children }) => children(500);
```

The component calls `children` as a function, with some number of arguments. Here, it's the number `500`.

To use this component, we give it a [function as `children`](#function-as-children).

```jsx
<Width>{(width) => <div>window is {width}</div>}</Width>
```

We get this output.

```jsx
<div>window is 500</div>
```

With this setup, we can use this `width` to make rendering decisions.

```jsx
<Width>
  {(width) => (width > 600 ? <div>min-width requirement met!</div> : null)}
</Width>
```

If we plan to use this condition a lot, we can define another components to encapsulate the reused logic.

```jsx
const MinWidth = ({ width: minWidth, children }) => (
  <Width>{(width) => (width > minWidth ? children : null)}</Width>
);
```

Obviously a static `Width` component isn't useful but one that watches the browser window is. Here's a sample implementation.

```jsx
class WindowWidth extends React.Component {
  constructor() {
    super();
    this.state = { width: 0 };
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth }, () =>
      window.addEventListener("resize", ({ target }) =>
        this.setState({ width: target.innerWidth })
      )
    );
  }

  render() {
    return this.props.children(this.state.width);
  }
}
```

Many developers favor [Higher Order Components](#higher-order-component) for this type of functionality. It's a matter of preference.

## Passando um Filho (Children)

You might create a component designed to apply `context` and render its `children`.

```jsx
class SomeContextProvider extends React.Component {
  getChildContext() {
    return { some: "context" };
  }

  render() {
    // how best do we return `children`?
  }
}
```

You're faced with a decision. Wrap `children` in an extraneous `<div />` or return `children` directly. The first options gives you extra markup (which can break some stylesheets). The second will result in unhelpful errors.

```jsx
// option 1: extra div
return <div>{children}</div>;

// option 2: unhelpful errors
return children;
```

It's best to treat `children` as an opaque data type. React provides `React.Children` for dealing with `children` appropriately.

```jsx
return React.Children.only(this.props.children);
```

## Component Proxy

_(I'm not sure if this name makes sense)_

Buttons are everywhere in web apps. And every one of them must have the `type` attribute set to "button".

```jsx
<button type="button">
```

Writing this attribute hundreds of times is error prone. We can write a higher level component to proxy `props` to a lower-level `button` component.

```jsx
const Button = props =>
  <button type="button" {...props}>
```

We can use `Button` in place of `button` and ensure that the `type` attribute is consistently applied everywhere.

```jsx
<Button />
// <button type="button"><button>

<Button className="CTA">Send Money</Button>
// <button type="button" class="CTA">Send Money</button>
```

## Component de estilo

This is a [Proxy component](#proxy-component) applied to the practices of style.

Say we have a button. It uses classes to be styled as a "primary" button.

```jsx
<button type="button" className="btn btn-primary">
```

We can generate this output using a couple single-purpose components.

```jsx
import classnames from "classnames";

const PrimaryBtn = (props) => <Btn {...props} primary />;

const Btn = ({ className, primary, ...props }) => (
  <button
    type="button"
    className={classnames("btn", primary && "btn-primary", className)}
    {...props}
  />
);
```

It can help to visualize this.

```jsx
PrimaryBtn()
  ↳ Btn({primary: true})
    ↳ Button({className: "btn btn-primary"}, type: "button"})
      ↳ '<button type="button" class="btn btn-primary"></button>'
```

Using these components, all of these result in the same output.

```jsx
<PrimaryBtn />
<Btn primary />
<button type="button" className="btn btn-primary" />
```

This can be a huge boon to style maintenance. It isolates all concerns of style to a single component.

## Switch de Eventos

Quando criamos Event Handlers (Controladores de Eventos) é comum nomeá-los assim:`handle{eventName}`.

```jsx
handleClick(e) { /* do something */ }
```

Para componentes que controlam vários tipos de eventos, essas funções podem ser tornar repetitivas.
os Nomes podem não trazer muito valor, pois na verdade são proxy de outras ações/funções.


```jsx
handleClick() { require("./actions/doStuff")(/* action stuff */) }
handleMouseEnter() { this.setState({ hovered: true }) }
handleMouseLeave() { this.setState({ hovered: false }) }
```

Considere escrever um unico Controlador de eventos e fazer o switch com o `event.type`.

```jsx
handleEvent({type}) {
  switch(type) {
    case "click":
      return require("./actions/doStuff")(/* action dates */)
    case "mouseenter":
      return this.setState({ hovered: true })
    case "mouseleave":
      return this.setState({ hovered: false })
    default:
      return console.warn(`No case for event type "${type}"`)
  }
}
```

Para componentes simples você pode chamar funções importadas de componentes direto, usando arrow functions.


```jsx
<div onClick={() => someImportedAction({ action: "DO_STUFF" })}
```


##  Componente de Layout

Layout components result in some form of static DOM element. It might not need to update frequently, if ever.

Consider a component that renders two `children` side-by-side.

```jsx
<HorizontalSplit
  startSide={<SomeSmartComponent />}
  endSide={<AnotherSmartComponent />}
/>
```

We can aggressively optimize this component.

While `HorizontalSplit` will be `parent` to both components, it will never be their `owner`. We can tell it to update never, without interrupting the lifecycle of the components inside.

```jsx
class HorizontalSplit extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <FlexContainer>
        <div>{this.props.startSide}</div>
        <div>{this.props.endSide}</div>
      </FlexContainer>
    );
  }
}
```

## Componente Container

"A container does data fetching and then renders its corresponding sub-component. That’s it."&mdash;[Jason Bonta](https://twitter.com/jasonbonta)

Given this reusable `CommentList` component.

```jsx
const CommentList = ({ comments }) => (
  <ul>
    {comments.map((comment) => (
      <li>
        {comment.body}-{comment.author}
      </li>
    ))}
  </ul>
);
```

We can create a new component responsible for fetching data and rendering the `CommentList` function component.

```jsx
class CommentListContainer extends React.Component {
  constructor() {
    super()
    this.state = { comments: [] }
  }

  componentDidMount() {
    $.ajax({
      url: "/my-comments.json",
      dataType: 'json',
      success: comments =>
        this.setState({comments: comments});
    })
  }

  render() {
    return <CommentList comments={this.state.comments} />
  }
}
```

We can write different containers for different application contexts.

## Higher-order component (Componentes de Ordem Superior)

Uma [higher-order function](https://pt-br.reactjs.org/docs/higher-order-components.html) é uma função que recebe e / ou retorna uma função. Não é mais complicado do que isso. Então, o que é um componente de ordem superior?

If you're already using [container components](#container-component), these are just generic containers, wrapped up in a function.

Vamos começar com nosso componente `Hello` .

```jsx
const Hello = ({ name }) => {
  if (!name) {
    return <div>Conectando...</div>;
  }

  return <div>Olá {name}!</div>;
};
```

If it gets `props.name`, it's gonna render that data. Otherwise it'll say that it's "Connecting...". Now for the the higher-order bit.

```jsx
const Connect = (ComposedComponent) =>
  class extends React.Component {
    constructor() {
      super();
      this.state = { name: "" };
    }

    componentDidMount() {
      // this would fetch or connect to a store
      this.setState({ name: "Michael" });
    }

    render() {
      return <ComposedComponent {...this.props} name={this.state.name} />;
    }
  };
```

This is just a function that returns component that renders the component we passed as an argument.

Last step, we need to wrap our `Greeting` component in `Connect`.

```jsx
const ConnectedMyComponent = Connect(Greeting);
```

This is a powerful pattern for providing fetching and providing data to any number of [function components](#function-component).

## Elevando o State (State Hoisting)

[function-component](#function-component) don't hold state (as the name implies).

Events are changes in state.
Their data needs to be passed to stateful [container components](#container-component) parents.

This is called "state hoisting".
It's accomplished by passing a callback from a container component to a child component.

```jsx
class NameContainer extends React.Component {
  render() {
    return <Name onChange={(newName) => alert(newName)} />;
  }
}

const Name = ({ onChange }) => (
  <input onChange={(e) => onChange(e.target.value)} />
);
```

`Name` receives an `onChange` callback from `NameContainer` and calls on events.

The `alert` above makes for a terse demo but it's not changing state.
Let's change the internal state of `NameContainer`.

```jsx
class NameContainer extends React.Component {
  constructor() {
    super();
    this.state = { name: "" };
  }

  render() {
    return <Name onChange={(newName) => this.setState({ name: newName })} />;
  }
}
```

The state is _hoisted_ to the container, by the provided callback, where it's used to update local state.
This sets a nice clear boundary and maximizes the re-usability of function component.

This pattern isn't limited to function components.
Because function components don't have lifecycle events,
you'll use this pattern with component classes as well.

_[Controlled input](#controlled-input) is an important pattern to know for use with state hoisting_

_(It's best to process the event object on the stateful component)_


## Passando props de Componente filho para  Componente pai
Lorem Ipsum

## Inputs Controlados

It's hard to talk about controlled inputs in the abstract.
Let's start with an uncontrolled (normal) input and go from there.

```jsx
<input type="text" />
```

When you fiddle with this input in the browser, you see your changes.
This is normal.

A controlled input disallows the DOM mutations that make this possible.
You set the `value` of the input in component-land and it doesn't change in DOM-land.

```jsx
<input type="text" value="This won't change. Try it." />
```

Obviously static inputs aren't very useful to your users.
So, we derive a `value` from state.

```jsx
class ControlledNameInput extends React.Component {
  constructor() {
    super();
    this.state = { name: "" };
  }

  render() {
    return <input type="text" value={this.state.name} />;
  }
}
```

Then, changing the input is a matter of changing component state.

```jsx
return (
  <input
    value={this.state.name}
    onChange={(e) => this.setState({ name: e.target.value })}
  />
);
```

This is a controlled input.
It only updates the DOM when state has changed in our component.
This is invaluable when creating consistent UIs.

_If you're using [function components](#function-component) for form elements,
read about using [state hoisting](#state-hoisting) to move new state up the component tree._
