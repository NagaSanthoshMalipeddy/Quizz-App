import './App.css';
import StartQuiz from './Components/StartQuiz';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import QuizApp from './Components/QuizApp';
import Questions from './Components/Questions';
import { useState } from 'react';
import Results from './Components/Results';

function App() {

  const [res,setRes] = useState(0);

  const setResults = (results) => {
    setRes(results);
  }

  const router = createBrowserRouter([
    {path:'/', element:<QuizApp></QuizApp>, children :[
      {path:'',element:<StartQuiz></StartQuiz>},
      {path:'ques',element:<Questions res={setResults}></Questions>},
      {path:'results',element:<Results res={res}></Results>}
    ]}
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
