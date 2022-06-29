# ⚛️ React Native: Telas de compra dos produtos educacionais da Escola Matriz

Essa é a aplicação do Fábio Mori após concluir o projeto do curso **Criando Menu e Navegando entre Telas** da formação em **React Native** na [Alura](https://www.alura.com.br/).

## 📱 Projeto

Neste projeto foi aplicado todo aprendizado para fazer telas de compra dos produtos educacionais da Escola Matriz, uma edtech para crianças, jovens e adultos se alfabetizarem tecnologicamente e ficarem por dentro do novo mercado de trabalho.

**********COLOCAR PRINTS AQUI!!!!!**********

## 🧑‍💻 Técnicas e Tecnologias

As técnicas e tecnologias ensinadas pela [Alura](https://www.alura.com.br/) no projeto são:

- React Navigation
  - Navegação Stack
  - Navegação Tab
  - Navegação Drawer
  - Navegação Deep link

Para instalar o React Navigation (ver informações completas na documentação oficial):
```
npm install @react-navigation/native
```
Se usar Expo precisa instalar outras dependências também.
Para fazer o Tab Navigation (ver informações completas na documentação oficial):
```
npm install @react-navigation/bottom-tabs
```
Para usar o stack, temos que instalar também (ver informações completas na documentação oficial):
```
npm install @react-navigation/stack
```
Sempre que você instalar uma biblioteca nova, pare sua aplicação e rode novamente com:
```
npm start
npm run android
```

## 📲 O aprendizado do aluno Fábio Mori
### Indrodução da história

A aplicação do conteúdo ensinado neste curso da [Alura](https://www.alura.com.br/) para o aplicativo da Escola Matriz foi a criação das telas onde os usuários poderão escolher os produtos educacionais e tornarem-se alunos através da realização da compra. Para as crianças a partir de 6 anos de idade que desejam ter sua primeira experiência com programação, podem adquirir o MatrizKIDS: a Linguagem do Futuro, onde vão aprender a criar jogos com Scratch e ter a mentalidade do programador. Para as crianças com pouco mais de experiência com programação, ou alunos recém formador da Linguagem do Futuro, podem adquirir também o MatrizKIDS: Scratch com Arduíno, onde vão ter sua primeira experiência com circuitos eletrônicos e aprenderão a aplicar seus algoritmos nas placas do Arduíno. Agora se o público são os jovens do ensino médio, o MatrizCast é o canal de comunicação que veio para conectar os jovens com o mercado de trabalho. Sendo um membro do MatrizCaster, o aluno poderá ter acesso a conteúdos e entrevistas exclusivas com diversos profissionais, além de poder interagir com eles mandando suas perguntas. Agora se o assunto é mentoria, um programa de 3 meses do MatrizCast Club vai preparar os jovens para o mercado de trabalho, ensinando conceitos fundamentais para a sua construção como profissional e também pessoal. Para os que tem a partir de 50 anos, temos duas opções de alfabetização digital, a primeira focada no dia a dia, ensinando como utilizar os principais aplicatrivos na internet, já a segunda opção, preparamos nossos alunos para utilziar ferramentas low code, que são a nova tendência do mercado de trabalho.

### Tags e comandos React Native

Propriedades do Navigation para serem usados a partir de qualquer tipo de navegação:
- ``navigation.navigate()``: faz a navegação de uma tela para a outra.
- ``navigation.reset()``: reinicia a navegação por completo, escolhendo ainda uma tela para iniciar uma nova navegação totalmente limpa.
- ``navigation.goBack()``: fecha a tela atual e volta a tela anterior.
- ``navigation.setParams()``: muda os parâmetros recebidos pela tela atual e não envia esses parâmetros para outras telas.
- ``navigation.setOptions()``: para mudar as oções da tela como títulos gerados pela navegação.

Propriedades do Navigation para serem usados na navegação Stack (pilha):
- Há dois tipos de navegação em pilha na biblioteca ``react-navigation``, o Native Stack e o Stack. Ambos têm os mesmos métodos de navegação, mas a diferença principal é que a Stack possibilita animações customizadas, pois é construída diretamente em Java Script, já a Native Stack utiliza navegação nativa do Android e do iOS, sendo mais performática, mas perdendo esta customização.
- ``navigation.replace()``: substitui a tela atual (topo da pilha), por outra tela.
- ``navigation.push()``: adiciona uma nova tela no topo da pilha e navega para ela (assim como o ``navigation.navigate()``).
- ``navigation.pop()``: remove uma ou mais telas no topo da pilha, ou seja, volta a quantidade de telas desejada (assim como o ``navigation.goBack()``).
- ``navigation.popToTop()``: remove todas as telas até sobrar apenas a tela inicial da pilha.

Propriedades do Navigation para serem usados na navegação Tabs (abas):
- A biblioteca ``react-navigation`` dá suporte para 3 tipos de navegação em abas: Bottom Tabs, Material Bottom Tabs e Material Top Tabs. Todos eles apresentam a mesma opção de navegação.
- ``navigation.jumpTo()``: muda a aba para a aba desejada, podendo passar parâmetros.

Propriedades do Navigation para serem usados na navegação Drawer (menu lateral):
- Também podemos usar o ``jumpTo`` em navegações do tipo Drawer e o comportamento é o mesmo. Mas além dessa opção ainda há opções para controlar o próprio menu, como: ``openDrawer``, ``closeDrawer`` e ``toggleDrawer``. 

Propriedades Flex e relacionadas:
- ``flexDirection``: altera o fluxo dos componentes, da vertical (coluna), para a horizontal (linha).
- ``justifyContent``: distribui o espaço entre os componentes.
- ``height``: define a altura, "auto" significa altura mínima necessária para mostrar o componente.
- ``width``: define a largura, "auto" significa ocupar o máximo de espaço disponível.

### Conceitos aprendidos

- Navegação Stack: conhecido como a "navegação em pilha", nela podemos navegar entre telas de tal forma que as telas anteriores ainda são acessíveis, caso pressionarmos o botão voltar.
- Navegação Tab: existe um menu visível na parte inferior ou superior da tela. Ao clicr em alguma opção, navegamos para a respectiva tela.
- Navegação Drawer:  onde clicamos em um ícone de menu fazendo o menu se abrir lateralmente. Clicando em uma das opções do menu, navegamos para a outra tela.
- Navegação Deep Link: conseguimos abrir uma página específica da aplicação, por meio de uma outra aplicação externa.
- SVG (Scalable Vector Grafhics): para utilizar este tipo de imagem no seu programa é necessário instalar 2 bibliotecas a parte: ``react-native-svg`` e ``react-native-svg-transformer``
   - Instalando o ``react-native-svg`` sem Expo:
      - ``npm install react-native-svg``
      - ``npx pod-install ios`` (se for iOS)
   - Instalando o ``react-native-svg`` com Expo:
      - ``expo install react-native-svg``
   - Para adicionar o SVG diretamente importanto o arquivo (com ou sem Expo):
      - ``npm instal --save-dev react-native-svg-transformer`` 
      - Além de incluir um código no arquivo ``metro.config.js`` (ver na documentação oficial)
- Propriedades SVG:
   - color: usado para definir uma cor geral que pode ser acessada por meio do valor *current color*.
   - fill: usado para definir a cor de preenchimento de um elemento no SVG.
   - stroke: usado para definir a cor de borda de um elemento no SVG.
 - Ícones e animações em Apps com React Native:
    - Instalar a biblioteca: ``npm install --save react-native-vector-icons`` 
    - Para fazer as animações:
       - lottiefiles.com
          - baixar as animações em arquivos .json e salvá-los na parta assets do projeto
       - Instalar a biblioteca ``lottie-react-native``:
          ```
          npm i --save lottie-react-native
          npm i --save lottie-ios@3.2.3
          ```
- Método de navegação ``reset``: quando usamos ele, toda a navegação da aplicação é reiniciada, como se a aplicação tivesse sido aberta novamente. Podemos passar parâmetros para esta tela incial.
- Método de navegação ``popToPop``: podemos desempilhar todas as telas e voltar ao início da pilha, porém, não conseguimos passar parâmetros usando ele.
- Método de navegação ``navigate``: em geral ele é o que mais usamos para navegar de uma tela para outra, mas quando usamos ele para uma tela que já existe na stack, ao invés de empilhar outra tela igual, o ``react-navigation`` reabre aquela tela específica. O efeito é semelhante ao ``pop`` ou ``popToTop``, entretanto, conseguimos passar parâmetros ao utilizar o ``navigate``.
- Posicionando elementos com Flex: 
   - O problema: cada dispositivo tem um tamanho de tela diferente e cada tela tem uma resolução diferente. Além disso, uma tela é medida em polegadas e a resolução de uma tela é medida em pixels (uma polegada não necessariamente tem um número fixo de pixels). Quanto escrevemos "tamanho" no código, utilizamos a unidade de medida pixel. Uma opção de solução para isso é utilizar unidades de medida em porcentagem.
   - A melhor solução: o Flex é uma das ferramentas mais importantes para trabalhar com posicionamento de elemetos, semelhante ao ``Flexbox`` do CSS. Quando utilizamos ele em um componente, ele se transforma em um flex container. A propriedade Flex diz qual o tamanho proporcional que o componente vai ocipar. Por padrão, o valor é 0 (zero), ou seja, o componente só vai ocupar o espaço necessário para mostrar o conteúdo.
      - ``flex:1`` (ocupa todo o espaço)
      - ``flex:0`` (ocupa apenas o espaço necessário)
  
### ▶️ Rodando o Projeto

Com a pasta do projeto no computador no terminal, digite:
```
npm install
```
Agora, digite para iniciar o projeto:
```
npm start
```
Em seguida abra outro terminal no mesmo local e digite para conectar com o emulador:
```
npm run android
```
Lembrar de habilitar o Android Studio antes de rodar este terminal.
