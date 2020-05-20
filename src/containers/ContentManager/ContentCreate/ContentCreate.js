import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import { updateObject } from "../../../common/utility";
import { checkValidity } from "../../../common/validations";
import styles from "./ContentCreate.module.css";
import { addContent } from "../../../store/actions/content";

class ContentCreate extends Component {
  state = {
    contentForm: {
      title: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Title",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      body: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Description",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
  };

  saveHandler = (event) => {
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in this.state.contentForm) {
      formData[formElementIdentifier] = this.state.contentForm[
        formElementIdentifier
      ].value;
    }
    this.props.onAddContent(formData);
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(
      this.state.contentForm[inputIdentifier],
      {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.contentForm[inputIdentifier].validation
        ),
        touched: true,
      }
    );

    const updatedContentForm = updateObject(this.state.contentForm, {
      [inputIdentifier]: updatedFormElement,
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedContentForm) {
      formIsValid = updatedContentForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      contentForm: updatedContentForm,
      formIsValid: formIsValid,
    });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.contentForm) {
      formElementsArray.push({
        id: key,
        config: this.state.contentForm[key],
      });
    }

    let form = (
      <form onSubmit={this.saveHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
          Save
        </Button>
      </form>
    );

    return (
      <div className={styles.ContactCreate}>
        <h4>Content information</h4>
        {form}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddContent: (contentData) => {
      dispatch(addContent(contentData));
    },
  };
};

export default connect(null, mapDispatchToProps)(ContentCreate);
