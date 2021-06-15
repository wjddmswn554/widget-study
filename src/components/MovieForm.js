import React, { useState } from 'react';
import InputField from './InputField';

const MovieForm = ({addMovie}) => { 
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');

    const resetForm = () => {
        setMovieTitle('');
        setMovieYear('');
    }

    const validateFrom = () =>{
        resetErrors();
        let validated = true;
        if(!movieTitle){
            setTitleError('영화 제목을 입력해주세요.');
            validated = false;
        }
        if(!movieYear){
            setYearError('영화 년도를 입력해주세요.');
            validated = false;
        }
        return validated;
    }

    const resetErrors = () => {
        setTitleError('');
        setYearError('');
    }

    const onSubmit = (event) => {
        event.preventDefault(); //submit을 누를 때 href나 새로고침 실행을 막아줌
        if(validateFrom()) { //validateFrom이 성공했을 때
            addMovie({
                id : Date.now(),
                title: movieTitle,  
                year: movieYear,
            });
            resetErrors();
            resetForm();
        } 
      };

    return (
        <form onSubmit={onSubmit}><br />
            <h1>movie list</h1>
            <InputField 
                type="text"
                value={movieTitle}
                placeholder="영화제목"
                onChange={e => setMovieTitle(e.target.value)}
                errorMessage={titleError}
            />
            <InputField 
                type="number"
                value={movieYear}
                placeholder="개봉년도"
                onChange={e => setMovieYear(e.target.value)}
                errorMessage={yearError}
            />
          <button type="submit">영화추가</button>
        </form>
    );
}

export default MovieForm;