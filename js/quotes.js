const quotes = [
    {
      quote: "지금 많이 울렴 아가야. 어른이 되면 속으로 울어야 돼",
      author: "침착맨",
    },
    {
      quote: "가랑비는 맞는다. 하지만 폭풍은 내것이야 ",
      author: "김성모 작가",
    },
    {
      quote:
        "배는 항구에 있을 때 가장 안전하지만 그것이 배의 존재 이유는 아니잖아요?",
      author: "calmdown man",
    },
    {
      quote: "여봐요, 누군데 그리 바삐 가십니까? - 너의 20대",
      author: "이말년 시리즈 中",
    },
    {
      quote: "빵애애요",
      author: "이병건",
    }
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;