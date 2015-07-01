Input on www.json-generator.com

news
´´´
[
  '{{repeat(12)}}',
  {
    index: '{{index()}}',
    title: '{{lorem(5, "words")}}',
    thumb: 'http://placehold.it/300x200',
    picture: 'http://placehold.it/300x200',
    excerpt: '{{lorem(2, "sentences")}}',
    date: '{{date(new Date(2015, 0, 1), new Date(),"dd/MM/YYYY")}}',
    tags: [
      '{{repeat(2)}}',
      '{{lorem(1, "words")}}'
    ],
    author: {
      first: '{{firstName()}}',
      last: '{{surname()}}'
    }
  }
]
´´´

activities
´´´
[
  '{{repeat(12)}}',
  {
    index: '{{index()}}',
    title: '{{lorem(5, "words")}}',
    location: '{{company()}}',
    street: '{{street()}}',
    city: '{{city()}}',
    date: '{{date(new Date(2015, 0, 1), new Date(),"dd/MM/YYYY")}}'
  }
]
´´´
