# ⚡ Zap Recall

**Zap Recall** é um app de flashcards desenvolvido com React, onde você pode praticar e revisar seus conhecimentos de forma dinâmica e interativa. Cada flashcard contém uma pergunta ou afirmação, e ao tentar lembrar da resposta, você obtém um "Zap!" ⚡.

O objetivo deste projeto é oferecer um aprendizado de maneira divertida, com decks de flashcards que podem ser personalizados com qualquer tema de interesse. Ao responder corretamente, você recebe um feedback com três opções: "Não lembrei", "Quase não lembrei", e "Zap!". 

📱 Acesse aqui: [https://vercel.com/marcelo-ribeiros-projects-cdcb9c89/zap-recall](https://zap-recall-six-eta.vercel.app/)

---

## 💡 Sobre o projeto

O app Zap Recall possui um deck de pelo menos 8 flashcards. Ao interagir com os cartões, o usuário pode ver as perguntas e tentar lembrar as respostas. O estado do flashcard é alterado conforme a resposta do usuário, com um contador de perguntas respondidas.

Funcionalidades principais incluem:
- Exibição dos flashcards virados para baixo.
- Ao clicar, a pergunta aparece, e ao virar o cartão, a resposta é exibida.
- Feedback após a resposta: "Não lembrei", "Quase não lembrei" ou "Zap!".
- O contador de conclusão exibe quantas perguntas o usuário já respondeu.

---

## 🔧 Tecnologias usadas

- **React** (para construção da interface)
- **JavaScript** (lógica de funcionamento)
- **Vite** (para criação e execução do projeto)
- **Styled-components** (para estilização da interface)

---

## 🚀 Funcionalidades principais

- **Deck de Flashcards:** Conjunto de 8 flashcards interativos.
- **Exibição de Flashcards:** Cartões virados para baixo, com interação para revelar a pergunta e a resposta.
- **Botões de Resposta:** "Não lembrei", "Quase não lembrei", "Zap!" para marcar o progresso do flashcard.
- **Contador de Perguntas Respondidas:** Mostra quantas perguntas o usuário já respondeu.

---

## 📜 Requisitos

- **React** (para a construção da interface)
- **JavaScript puro** (sem uso de Context ou Router)
- **Uso de `styled-components` para estilização**
- **Armazenamento via estados (sem localStorage ou context)**

---

## 🛠 Como rodar

Se quiser testar localmente, siga os seguintes passos:

```bash
git clone https://github.com/MarceloRbarbosa/zap-recall.git
cd zap-recall
npm install
npm run dev
