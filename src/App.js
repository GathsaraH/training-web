import './App.css';
import DiaryCard from './components/Diarycard'
import { CardForm } from './components/CardForm'

function App() {
    return ( <div className = "App" >
        {/* <DiaryCard 
        title = 'Card Title'
        subTitle = 'card Subtitle'
        body = 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovelyIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a doc'
        color = 'royalblue' 
        /> */}
        <CardForm></CardForm>
        </div>


    );
}

export default App;