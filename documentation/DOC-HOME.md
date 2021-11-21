# Guia de Padrões React

Um guia de padrões React em Português.

Baseado no [Original](https://reactpatterns.com) por Michael Chan [@chantastic](https://github.com/chantastic)

Traduzido para Português e revisado por [@rubenmarcus](https://github.com/rubenmarcus)

com Contribuição de [@LhuizF](https://github.com/LhuizF), [@matheusinfo](https://github.com/matheusinfo), [@luizwbr](https://github.com/luizwbr)

## Conteúdo

  - [Traduções](#traduções)
  - [Elementos](#elementos)
  - [Componentes](#componentes)
  - [Fragmentos](#fragmentos)
    - [Sintaxe curta](#sintaxe-curta)
    - [Exemplo com lista de componentes](#exemplo-com-lista-de-componentes)
  - [Expressões](#expressões)
  - [Props (Propriedades)](#props-propriedades)
  - [defaultProps (Propriedades Padrão)](#defaultprops-propriedades-padrão)
  - [Desestruturando props](#desestruturando-props)
  - [Atributos de spread JSX](#atributos-de-spread-jsx)
  - [Mergeando props desestruturadas com outros valores](#mergeando-props-desestruturadas-com-outros-valores)
  - [Renderização Condicional](#renderização-condicional)
    - [`if`](#if)
    - [`unless` (ao menos que)](#unless-ao-menos-que)
    - [`if-else` (Operador Ternário)](#if-else-operador-ternário)
  - [Tipos de filhos (Children Types)](#tipos-de-filhos-children-types)
    - [`String`](#string)
    - [`Array`](#array)
  - [Array como filho (Array as children)](#array-como-filho-array-as-children)
  - [Função como filha (Function as children)](#função-como-filha-function-as-children)
  - [Render prop](#render-prop)
  - [Passando um Filho (Children)](#passando-um-filho-children)
  - [Componente Proxy](#componente-proxy)
  - [Estilizando componentes](#estilizando-componentes)
  - [Switch de Eventos](#switch-de-eventos)
  - [Componente de Layout](#componente-de-layout)
  - [Container Components](#container-components)
  - [Higher-order components](#higher-order-components)
  - [Elevando o state (state hoisting)](#elevando-o-state-state-hoisting)
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

Um [Fragmento](https://pt-br.reactjs.org/docs/fragments.html) é defindo por uma função que declarada retorna um ou uma lista de [Elemento(s)](#elementos) React, mas sem adicionar nós extras ao DOM.

```jsx
function MeuComponente() {
  return <React.Fragment>Olá Mundo</React.Fragment>;
}
```

### Sintaxe curta

```jsx
function MeuComponente() {
  return <>Olá Mundo</>;
}
```

### Exemplo com lista de componentes

```jsx
function MeuComponente() {
  return <React.Fragment>
    <td>Olá</td>
    <td>Mundo</td>
  </React.Fragment>;
}
```

## Expressões

Use chaves para [Incorporar expressões](https://pt-br.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx) no [JSX](https://pt-br.reactjs.org/docs/glossary.html#jsx).

```jsx
function OlaUsuario() {
  const nome = "Ruben";

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

[Atribuição via desestruturação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) é um recurso do Javascript moderno.

Foi adicionado a linguagem no ES2015.

```js
const usuario = { nome: "Ruben" };
const { nome } = usuario;
```

Funciona com Array também.

```js
const numeros = ["um", "dois"];
const [um, dois] = numeros;
```
Atribuição via desestruturação (Destructuring assignment) é usado muito em [componentes funcionais](#function-component).
Essas declarações de componente são equivalentes.

```jsx
function Olá(props) {
  return <div>Olá {props.name}!</div>;
}

function Olá({ name }) {
  return <div>Olá {name}!</div>;
}
```

Existe uma sintaxe para atribuir as `props` restantes em um objeto.
Se chama [Parâmetros](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters) e parece assim:

```jsx
function Olá({ name, ...restProps }) {
  return <div>Olá {name}!</div>;
}
```

Esses três pontos (`...`) pegam todas a props que faltam e atribuem ao parâmetro `restProps`.

Então o que fazer com `restProps` quando você o tem?

Continue lendo...

---

## Atributos de spread JSX

Atributos de Spread é uma feature do [JSX](https://pt-br.reactjs.org/docs/introducing-jsx.html).
É uma sintaxe para fornecer as propriedades de um objeto como atributos JSX.

Seguindo o exemplo de [Destructuring props](#desestruturando-props),
Podemos fazer **spread** com `restProps` em nossa `<div>`.

```jsx
function Olá({ name, ...restProps }) {
  return <div {...restProps}>Hi {name}!</div>;
}
```

Isso torna a função `Hello` super flexível.
Podemos passar atributos DOM para `Hello` e que eles vão ser passados a nossa `div`.

```jsx
<Olá name="Fancy pants" className="fancy-greeting" id="user-greeting" />
```

Atribuição via desestruturação é popular porque fornece uma maneira de separar props específicas de componentes, de atributos específicos de plataforma / DOM.

```jsx
function Greeting({ name, ...platformProps }) {
  return <div {...platformProps}>Hi {name}!</div>;
}
```

---

## Mergeando props desestruturadas com outros valores

Componentes são abstrações.
Boas abstrações permitem extensão.

Considere esse componente que usa um atributo `class` para estilizar um  `button`.

```jsx
function MyButton(props) {
  return <button className="btn" {...props} />;
}
```

Isso funciona muito bem até tentarmos extendê-lo com outra classe.

```jsx
<MyButton className="delete-btn">Delete...</MyButton>
```

Nesse caso, `delete-btn` substitui `btn`.

A ordem importa para [Atributos de spread JSX](#atributos-de-spread-jsx).
O `props.className` sendo passado, substitui o `className` do nosso componente.

Podemos mudar a ordem, mas agora o `className` **nunca**  vai ser nada além de `btn`.

```jsx
function MyButton(props) {
  return <button {...props} className="btn" />;
}
```

Precisamos usar a atribuição via desestruturação para obter o `className` e mergear com o `className` base.
Podemos fazer isso simplesmente adicionando todos os valores a uma array e juntando-os com um espaço..

```jsx
function MyButton({ className, ...props }) {
  const classNames = ["btn", className].join(" ");

  return <button className={classNames} {...props} />;
}
```

Para não ter problemas com `undefined` aparecendo no seu `className`, você pode atualizar sua lógica para pegar valores booleanos `falso`:

```jsx
function MyButton({ className, ...props }) {
  const classNames = ["btn", className].filter(Boolean).join(" ").trim();

  return <button className={classNames} {...props} />;
}
```

Porém, lembre-se de que, se um objeto vazio for passado, ele também será incluído na classe, resultando em: `btn [object Object]`.

A melhor abordagem é fazer uso de packages disponíveis, como [classnames](https://www.npmjs.com/package/classnames) ou [clsx](https://www.npmjs.com/package/clsx),que poderia ser usado para unir nomes de classe, evitando que você tenha que lidar com isso manualmente .

## Renderização Condicional

Você não consegue usar if else em suas declarações de componente..
Então vocês pode usar o operador ternário [conditional (ternary) operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) ou [short-circuit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation) tranquilamente.

### `if`

```jsx
{
  !!condition && <span>Irá renderizar quando for `verdadeiro`</span>;
}
```

Dica não utilize if dessa maneira:
```jsx
{
  condition && <span>Renderiza quando `verdadeiro`</span>;
}
```

O React pode imprimir um `0` no seu componente. Quando vem `0` nos seus dados, ele não considera sua variável como falsa, utilizando o !! , ele converte 0 para falso

### `unless` (ao menos que)

```jsx
{
  condition || <span>Renderizado quando `falso`</span>;
}
```

### `if-else` (Operador Ternário)

```jsx
{
  condition ? (
    <span>Renderizado quando for `verdadeiro`</span>
  ) : (
    <span>Renderizado quando for `falso`</span>
  );
}
```

## Tipos de filhos (Children Types)

O React consegue renderizar `children` da maioria dos tipos.
Na maioria dos casos é um `array` ou uma `string`.

### `String`

```jsx
<div>Olá Mundo!</div>
```

### `Array`

```jsx
<div>{["Olá ", <span>Mundo</span>, "!"]}</div>
```

## Array como filho (Array as children)

Prover um array como `children` é muito comum.
É como as listas são renderizadas no React.

Usamos o método `map()`  para criar um array de elementos React para cada valor da array.

```jsx
<ul>
  {["primeiro", "segundo"].map((item) => (
    <li>{item}</li>
  ))}
</ul>
```

Esse é o equivalente a renderizar um `array` literal.

```jsx
<ul>{[<li>primeiro</li>, <li>segundo</li>]}</ul>
```

Este padrão pode ser combinado com desestruturação, Atributos de Spread JSX e outros componentes, para alguma coesão mais séria.

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

## Render prop

Aqui um componente que utiliza `render callback`.
Não é útil, mas é um exemplo fácil para começar.

```jsx
const Width = ({ children }) => children(500);
```

Esse componente chama `children` como função, com alguns argumentos, nesse caso o número `500`.

Para usar esse componente estamos utilizando uma [Função como filha (Function as children)](#função-como-filha-function-as-children).

```jsx
<Width>{(width) => <div>window é {width}</div>}</Width>
```
Recebemos esse output.

```jsx
<div>window é 500</div>
```

Com esta configuração, podemos usar essa prop `width` para fazer decisões de renderização.

```jsx
<Width>
  {(width) => (width > 600 ? <div>condição de largura mínima atingida!</div> : null)}
</Width>
```

Se planejamos usar muito essa condição, podemos definir outros componentes para encapsular a lógica reutilizada.

```jsx
const MinWidth = ({ width: minWidth, children }) => (
  <Width>{(width) => (width > minWidth ? children : null)}</Width>
);
```
Claro que um componente `Width` estático não é útil, mas aquele que observa o window do navegador é. Aqui está um exemplo de implementação.

```jsx
function WindowWidth({ children }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", ({ target }) =>
      setWidth(target.innerWidth)
    );
  }, []);

  return children(width);
}
```

Muitos desenvolvedores preferem [Higher Order Components](#higher-order-components) para este tipo de funcionalidade. É uma questão de preferência.

## Passando um Filho (Children)

Você pode criar um componente projetado para usar `context` e renderizar `children`.

```jsx
class SomeContextProvider extends React.Component {
  getChildContext() {
    return { some: "context" };
  }

  render() {
    // como retornamos children?
  }
}
```

Você está diante de uma decisão. Envolver os `filhos` em uma `<div />` estranha que retorne o  `children` diretamente. As primeiras opções adicionam marcação extra (que pode quebrar alguns css). O segundo resultará em erros inúteis.


```jsx
// option 1: extra div
return <div>{children}</div>;

// option 2: erros inúteis
return children;
```

É melhor tratar `children` como um tipo de dados opaco. O React fornece `React.Children` para lidar com `children` apropriadamente.

```jsx
return React.Children.only(this.props.children);
```

## Componente Proxy

 *(Não tenho certeza se esse nome faz sentido)*

Os botões estão em todos os lugares nos aplicativos da web. E cada um deles deve ter o atributo `type` definido como `button` .
```jsx
<button type="button">
```

Escrever este atributo centenas de vezes pode trazer muitos erros.
Podemos escrever um High Level Component para passar `props` para um componente de `button` de nível inferior.

```jsx
const Button = props =>
  <button type="button" {...props}>
```

Podemos usar `Button` no lugar `button` e garantir que o atributo `type` vai ser sempre aplicado.

```jsx
<Button />
// <button type="button"><button>

<Button className="CTA">Enviar Dinheiro</Button>
// <button type="button" class="CTA">Enviar Dinheiro</button>
```

## Estilizando componentes

Esse é um [Proxy component](#proxy-component) aplicado às práticas de estilo.

Então temos um botão. Ele usa classes para serem estilizadas como um botão "principal".

```jsx
<button type="button" className="btn btn-primary">
```

Podemos gerar esse resultado usando alguns componentes de propósito único.

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
Pode ajudar a visualizar isso.

```jsx
PrimaryBtn()
  ↳ Btn({primary: true})
    ↳ Button({className: "btn btn-primary"}, type: "button"})
      ↳ '<button type="button" class="btn btn-primary"></button>'
```

Usando esses componentes, todos eles resultam no mesmo resultado.

```jsx
<PrimaryBtn />
<Btn primary />
<button type="button" className="btn btn-primary" />
```

Isso pode ser uma grande vantagem para a manutenção do estilo. Ele isola todas as preocupações de estilo em um único componente.

## Switch de Eventos

Quando criamos Event Handlers (Controladores de Eventos) é comum nomeá-los assim:`handle{eventName}`.

```jsx
handleClick(e) { /* do something */ }
```
Para componentes que controlam vários tipos de eventos, essas funções podem ser tornar repetitivas.
os nomes podem não trazer muito valor, pois na verdade são proxy de outras ações/funções.

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

Os componentes de layout resultam em alguma forma de elemento DOM estático. Pode não ser necessário atualizar com frequência, ou nunca.

Considere um componente que renderize dois `children` lado a lado

```jsx
<HorizontalSplit
  startSide={<SomeSmartComponent />}
  endSide={<AnotherSmartComponent />}
/>
```

Podemos otimizar agressivamente esse componente.

Embora `HorizontalSplit` seja `pai` para ambos os componentes, nunca será seu `dono`. Podemos dizer para ele nunca atualizar, sem interromper o `lifecycle` dos componentes internos.


```jsx
function HorizontalSplit() {
  return (
    <FlexContainer>
      <div>{this.props.startSide}</div>
      <div>{this.props.endSide}</div>
    </FlexContainer>
  );
}

export default React.memo(HorizontalSplit);
```

## Container Components

"Um container faz a busca de dados e, em seguida, renderiza seu subcomponente correspondente. É isso."  -  [Jason Bonta](https://twitter.com/jasonbonta)

Olhando esse componente `CommentList`.

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

Podemos criar um novo componente responsável por buscar dados e renderizar o componente `CommentList`

```jsx
import React, {useEffect, useState} from 'react';

function CommentListContainer() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    $.ajax({
      url: "/my-comments.json",
      dataType: 'json',
      success: myComments =>
        setComments(myComments)
    })
  }, []);

  return(
    <CommentList comments={comments} />
  );
}
```
Podemos escrever diferentes containers para diferentes contextos de aplicação.

## Higher-order components

Uma [higher-order function](https://pt-br.reactjs.org/docs/higher-order-components.html) é uma função que recebe e / ou retorna uma função. Não é mais complicado do que isso. Então, o que é um High Order Component?

Se você já estiver usando [componentes container](#container-component), esses são apenas containers genéricos, envolvidos em uma função.

Vamos começar com nosso componente `Hello` .

```jsx
const Hello = ({ name }) => {
  if (!name) {
    return <div>Conectando...</div>;
  }

  return <div>Olá {name}!</div>;
};
```

Se obtiver `props.name`, ele renderizará esses dados. Caso contrário, irá renderizar que é "Conectando ...". 

Agora, para o dado de ordem superior.

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

Esta é apenas uma função que retorna o componente que renderiza o componente que passamos como um argumento.

Última etapa, precisamos envolver nosso componente `Hello` em `Connect`.

```jsx
const ConnectedMyComponent = Connect(Greeting);
```

Este é um padrão poderoso para fazer requisições ( fetch ) e fornecer dados para qualquer número de componentes funcionais.

## Elevando o state (state hoisting)

Aqui temos um componente contador, que vai passar seu state para o componente pai

```jsx
import React, { useState } from "react";

function Counter(props) {
  const {
    count: [count, setCount]
  } = {
    count: useState(0),
    ...(props.state || {})
  };

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
na nossa função App, escutamos o state através da props state do componente `Counter`

```jsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>Estado</h2>
      <Counter state={{ count: [count, setCount] }} />
    </div>
  );
}
```

na teoria poderiamos passar esse estado do componente filho, para qualquer outro componente irmão dele.

## Inputs Controlados

É difícil falar sobre inputs controlados em abstrato.
Vamos começar com um input não controlado (normal) e partir daí.

```jsx
<input type="text" />
```

Quando você mexe com esse input no navegador, você vê suas alterações.

Isto é o normal.

Um input controlado desabilita as mutações do DOM que tornam isso possível.
Você seta o `value` do input no escopo do Componente e ele não altera no escopo do DOM.

```jsx
<input type="text" value="Isso não será alterado. Tente." />
```

Obviamente, os inputs estáticos não são muito úteis para seus usuários.
Então derivamos o `value` do state.

```jsx
function ControlledNameInput () {
  const [name, setName] = useState("")

  return <input type="text" value={name} />;
}
```
Então, mudar o input é uma questão de mudar o estado do componente.

```jsx
return (
  <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
);
```
Este é um input controlado.
Ele apenas atualiza o DOM quando o estado é alterado em nosso componente.
Isso é inestimável ao criar interfaces de usuário consistentes.

_Se está usando componentes funcionais para elementos de form,
leia sobre [state hoisting](#state-hoisting) para mover o state do componente acima no tree._

