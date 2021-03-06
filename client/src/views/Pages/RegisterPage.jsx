import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// material-ui components
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// material-ui-icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import LockOutlined from "@material-ui/icons/LockOutlined";
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "components_material/Grid/GridContainer.jsx";
import ItemGrid from "components_material/Grid/ItemGrid.jsx";
import RegularCard from "components_material/Cards/RegularCard.jsx";
import Button from "components_material/CustomButtons/Button.jsx";
import IconButton from "components_material/CustomButtons/IconButton.jsx";
import CustomInput from "components_material/CustomInput/CustomInput.jsx";
import InfoArea from "components_material/InfoArea/InfoArea.jsx";

import registerPageStyle from "./registerPageStyle";

const RegisterPage = (props) => {
  const { classes } = props;
  const [state, setState] = useState({
    checked: [],
    cardAnimaton: "cardHidden",
  });
  const { checked } = state;

  useEffect(() => {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(function () {
      setState({ cardAnimaton: "" });
    }, 100);
  }, []);

  function handleToggle(value) {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setState({
      checked: newChecked,
    });
  }
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <ItemGrid xs={12} sm={12} md={10}>
          <RegularCard
            cardTitle="Register"
            titleAlign="center"
            customCardTitleClasses={classes.cardTitle}
            customCardClasses={classes[state.cardAnimaton]}
            content={
              <GridContainer justify="center">
                <ItemGrid xs={12} sm={12} md={5}>
                  <InfoArea
                    title="Marketing"
                    description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                    icon={Timeline}
                    iconColor="rose"
                  />
                  <InfoArea
                    title="Fully Coded in HTML5"
                    description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                    icon={Code}
                    iconColor="primary"
                  />
                  <InfoArea
                    title="Built Audience"
                    description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                    icon={Group}
                    iconColor="info"
                  />
                </ItemGrid>
                <ItemGrid xs={12} sm={8} md={5}>
                  <div className={classes.center}>
                    <IconButton color="twitter">
                      <i className="fab fa-twitter" />
                    </IconButton>
                    {` `}
                    <IconButton color="dribbble">
                      <i className="fab fa-dribbble" />
                    </IconButton>
                    {` `}
                    <IconButton color="facebook">
                      <i className="fab fa-facebook-f" />
                    </IconButton>
                    {` `}
                    <h4 className={classes.socialTitle}>or be classical</h4>
                  </div>
                  <form className={classes.form}>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "First Name...",
                      }}
                    />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <Email className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "Email...",
                      }}
                    />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <LockOutlined
                              className={classes.inputAdornmentIcon}
                            />
                          </InputAdornment>
                        ),
                        placeholder: "Password...",
                      }}
                    />
                    <FormControlLabel
                      classes={{
                        root: classes.checkboxLabelControl,
                        label: classes.checkboxLabel,
                      }}
                      control={
                        <Checkbox
                          tabIndex={-1}
                          onClick={() => handleToggle(1)}
                          checkedIcon={
                            <Check className={classes.checkedIcon} />
                          }
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                          }}
                        />
                      }
                      label={
                        <span>
                          I agree to the{" "}
                          <a href="#pablo">terms and conditions</a>.
                        </span>
                      }
                    />
                    <div className={classes.center}>
                      <Button round color="primary">
                        Get started
                      </Button>
                    </div>
                  </form>
                </ItemGrid>
              </GridContainer>
            }
          />
        </ItemGrid>
      </GridContainer>
    </div>
  );
};

RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(registerPageStyle)(RegisterPage);
