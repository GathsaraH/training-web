import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import NewCardForm from "../Components/NewCardForm";
import CardGrid from "../Components/CardGrid";


const notes = [
    {
        title: "Tisstle",
        name: 'Jhon Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula odio at diam dictum porttitor. Pellentesque lectus arcu, egestas sit amet mattis a, facilisis non magnac'
    },
    {
        title: "Title",
        name: 'Jhon Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula odio at diam dictum porttitor. Pellentesque lectus arcu, egestas sit amet mattis a, facilisis non magnac'
    }
]

function DiaryHome() {
    const [diaryNotes, setNotes] = useState(notes)
    const addNote = (title, content, author) => {
        setNotes([...diaryNotes, {title: title, name: author, description: content}])
    }
    return (
            <Row className={'justify-content-center p-3 vh-100'}>
                <Col className={'col-12'}>
                    <NewCardForm onClickAdd={addNote}/>
                    <CardGrid diaryNotesList={diaryNotes}/>
                </Col>
            </Row>
    );
}

export default DiaryHome;
