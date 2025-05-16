import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

const Form = ({onSubmit}) => {
  
  const handleSubmit = (event) => {
    const inputValue = event.target.elements.search.value;

    event.preventDefault();
    if (inputValue !== "") {
      onSubmit(inputValue);
    } else {
      alert("Please, type something✨")
    }
    event.target.reset();

    localStorage.setItem(JSON.stringify('TODO', inputValue));
  }
  

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />
    </form>
  );
};

export default Form;
