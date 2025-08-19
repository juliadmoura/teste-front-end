# 🚀 Teste Econverse

Projeto front-end em **React** com **TypeScript** que consome uma API simulada usando **json-server**. 

Foi seguida a metodologia **Atomic Design** para organização dos componentes, garantindo maior **reutilização, consistência e manutenção** do código.   
---
**Observações: Não foi aplicado responsividade no projeto, ele foi desenvolvido com base no layout do figma em que a largura era de 1440px.**


---

## 🛠 Tecnologias

- **React**  
- **TypeScript**  
- **Sass / SCSS**  
- **json-server**  

---

## ⚙️ Pré-requisitos

- Node.js >= 16.x  
- npm ou yarn  

---

## 💾 Instalação

Clone o repositório:

```bash
git clone https://github.com/juliadmoura/teste-front-end.git
cd teste-front-end
```

Instale as dependências:

```bash
npm install
```

---

## 🖥 Rodando a API (json-server)

O projeto utiliza o json-server para simular a API.

```bash
npx json-server --watch db.json --port 3001
```

A API estará disponível em: <http://localhost:3001>

## ⚡ Rodando o Front-end

```bash
npm run dev
```
O app será aberto em http://localhost:5173/ e consumirá a API do json-server na porta 3001.

