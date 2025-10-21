# 🛒 Carrinho de Compras (JS)

> Projeto desenvolvido no curso **Lógica de Programação com JavaScript** da [Alura](https://www.alura.com.br/).

Aplicação simples em **HTML, CSS e JavaScript** que simula um carrinho: adiciona itens, calcula **subtotal** por item e **total geral**, e permite **limpar** o carrinho. O foco é praticar **manipulação do DOM** e **tratamento de strings** em JS.

---

## ✨ Funcionalidades

* Seleção de produto com preço embutido (ex.: `Celular - R$1400`).
* Campo de **quantidade** com validação mínima.
* Exibição de itens adicionados (quantidade × nome × subtotal).
* Cálculo e atualização do **Total** em tempo real.
* Botão **Limpar** que zera lista e total.

---

## 🧠 O que foi praticado

* `split()` para separar trechos de uma string por delimitadores (`-` e `R$`).
* Leitura de valores de formulário via `.value`.
* Atualização do HTML com `.innerHTML`.
* **Template Strings** (`` `${}` ``) para montar textos dinâmicos.
* Seletores do DOM: `getElementById`, `getElementsByClassName`, `querySelector`.
* Criação e inserção de elementos (`document.createElement`, `.appendChild`).

---

## 🗂️ Estrutura do projeto

```
carrinho-compras/
├─ assets/
│  ├─ arrow-down.svg
│  ├─ carrinho-cinza.svg
│  ├─ grafismo-azul.svg
│  ├─ icone-carrinho.svg
│  └─ oculos.png
├─ js/
│  └─ app.js
├─ index.html
├─ style.css
└─ README.md
```

---

## ⚙️ Como executar

1. Faça o clone ou baixe o repositório.
2. Abra o arquivo **`index.html`** no navegador.
3. Selecione um produto, defina a quantidade e clique em **Adicionar**.

---

## 🧩 Lógica principal (resumo)

* O valor selecionado no `<select>` vem em uma string como `"Celular - R$1400"`.
* No JS:

  ```js
  const produto = document.getElementById('produto').value;
  const nomeProduto = produto.split('-')[0].trim();      // "Celular"
  const valorUnitario = parseFloat(produto.split('R$')[1]); // 1400
  const subtotal = valorUnitario * quantidade;
  total += subtotal;
  ```
* O item é renderizado com `innerHTML` e o total é atualizado na tela.

---

## 🧰 Tecnologias Utilizadas

| Tecnologia                  | Finalidade                                |
| --------------------------- | ----------------------------------------- |
| **HTML5**             | Estrutura da página                      |
| **CSS3**              | Estilização visual e classes dinâmicas |
| **JavaScript (ES6+)** | Lógica e manipulação do DOM            |-

## 👨‍💻 Autor

**Weslley Chaves**

📎 [GitHub](https://github.com/Weslley-Chaves) | 💼 [LinkedIn](https://www.linkedin.com/in/weslley-s-chaves-789890228/)

🗓️ Última atualização: **20/10/2025**
