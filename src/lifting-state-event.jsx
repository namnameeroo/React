function Forms({ handleFormSubmit }) {
  // form 제출 시 수행할 이벤트를 파라미터로 받음
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="name" placeholder="입력해주세요" />
      <button type="submit">생성</button>
    </form>
  );
};


const Title = (props) => {
  // console.log(props);
  return <h1>{props.children}</h1>;

}


const App = () =>{
  const IMG1 = 'https://newsimg-hams.hankookilbo.com/2021/11/09/15423494-2006-403b-a665-6969a7b1aaa1.jpg';
  const IMG2 = 'https://dimg.donga.com/ugc/CDB/WEEKLY/Article/5b/4c/05/82/5b4c05820a99d2738de6.jpg';
  
  const [counter, setCounter] = React.useState(1);
  const [mainImg, setMainImg] = React.useState(IMG1);
  
  // 변경 이벤트
  function handleFormSubmit(e){
    e.preventDefault();
    setCounter(counter+1); // counter 변수를 +1 수행
    setMainImg(IMG2);      // IMG 변경 수행
  }
  
  return (
    <div>
          <Title>{counter}번째 클릭!</Title>
          <Forms handleFormSubmit={handleFormSubmit} />
          <MainCard img={mainImg} />
          <Favorites />
        </div>
  
  ) 
}

const 여기다가그려 = document.querySelector('#app');
ReactDOM.render(<App />, 여기다가그려);
