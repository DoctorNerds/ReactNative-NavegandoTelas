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
- Também podemos usar o ``jumpTo`` em navegações do tipo Drawer e o comportamento é o mesmo. Mas além dessa opção ainda há opções para controlar o próprio menu, como: ``openDrawer``, ``closeDrawer`` e `toggleDrawer``.




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
