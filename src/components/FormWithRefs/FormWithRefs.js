import React from "react";

const FormWithRefs = ({ handleSubmitRefs }) => {
  const formRef = React.createRef();

  const clickHandler = () => {
    const form = formRef.current;
    console.log("form", form);
    let city = form.city.value;
    handleSubmitRefs(city);
    form.reset();
  };

  return (
    <form ref={formRef}>
      <label>Enter a City</label>
      <input type="text" name="city" required />
      <button type="button" onClick={clickHandler}>
        Enter
      </button>
    </form>
  );
};

export default FormWithRefs;
