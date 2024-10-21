import styled from "styled-components";
import { TOUR_REDUCER_TYPE } from "../../utils/constans";

import { axiosInstance } from "../../config/axiosInsTance";
import { useDispachTour } from "../../hook/useDispachTour";
import { toast } from "react-toastify";

const TourForm = () => {
  const [
    state,
    dispach,
    titleChangeHandler,
    imageChangeHandler,
    priceChangeHandler,
    dateChangeHandler,
    descriptionChangeHandler,
  ] = useDispachTour();



  return (
    <FormStyles onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Введите название тура"
        value={state.title}
        onChange={titleChangeHandler}
      />
      <StyledInput
        type="url"
        placeholder="Вставьте ссылку тура"
        value={state.image}
        onChange={imageChangeHandler}
      />
      <StyledInput
        type="number"
        placeholder="Введите стоимость тура"
        value={state.price}
        onChange={priceChangeHandler}
      />
      <StyledInput
        type="date"
        placeholder="Выберите дату "
        value={state.date}
        onChange={dateChangeHandler}
      />
      <StyledInput
        type="text"
        placeholder="Введите описание тура"
        value={state.description}
        onChange={descriptionChangeHandler}
      />
      <Button type="submit">Add Tour</Button>
    </FormStyles>
  );
};

export default TourForm;

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 350px;
  height: fit-content;
  padding: 20px;
  box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.5);
  margin: 100px auto;
  border-radius: 10px;
`;

const StyledInput = styled.input`
  height: 45px;
  border-radius: 6px;
  padding-left: 15px;
  padding-right: 10px;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid gainsboro;
`;

const Button = styled.button`
  height: 45px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  background-color: #000;
  cursor: pointer;
`;
