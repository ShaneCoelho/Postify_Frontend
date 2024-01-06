import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StyleUserDetails from "./StyleUserDetails";
import styled from "styled-components";
import ChangeProfilePhoto from "../../components/ChangeProfilePhoto";

const UserDetails = () => {
    const [birthDate, setBirthDate] = useState(null);

    return (
        <StyleUserDetails>
            <div className="ud-body">
                <div className="container">
                    <div className="title">Personal Details</div>
                    <div className="content">
                        <form action="#">
                            <ChangeProfilePhoto />
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Full Name</span>
                                    <input type="text" placeholder="Enter your name" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Description</span>
                                    <input type="text" placeholder="Enter your username" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Birth Date</span>
                                    <StyledDatePicker
                                        selected={birthDate}
                                        onChange={(date) => setBirthDate(date)}
                                        dateFormat="yyyy-MM-dd"
                                        placeholderText="Select your birth date"
                                        showYearDropdown
                                        scrollableYearDropdown
                                        yearDropdownItemNumber={15}
                                        required
                                    />
                                </div>
                            </div>
                            <div class="gender-details">
                                <input type="radio" name="gender" id="dot-1" />
                                <input type="radio" name="gender" id="dot-2" />
                                <input type="radio" name="gender" id="dot-3" />
                                <span class="gender-title">Gender</span>
                                <div class="category">
                                    <label for="dot-1">
                                        <span class="dot one"></span>
                                        <span class="gender">Male</span>
                                    </label>
                                    <label for="dot-2">
                                        <span class="dot two"></span>
                                        <span class="gender">Female</span>
                                    </label>
                                    <label for="dot-3">
                                        <span class="dot three"></span>
                                        <span class="gender">Prefer not to say</span>
                                    </label>
                                </div>
                            </div>
                            <div class="button">
                                <input type="submit" value="Save Details" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </StyleUserDetails>
    )
}

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export default UserDetails;