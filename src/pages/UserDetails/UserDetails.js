import React, { useState } from "react";
import styled from "styled-components";
// import StyleUserDetails from "./StyleUserDetails";

const UserDetails = () => {
    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProfileImage(file);

        // You can also add code to preview the image if needed.
        // For example:
        // const reader = new FileReader();
        // reader.onload = (e) => {
        //   setProfileImagePreview(e.target.result);
        // };
        // reader.readAsDataURL(file);
    };
    return (
        <StyleUserDetails>
            <div className="ud-body">
                <div className="container">
                    <div className="title">Registration</div>
                    <div className="content">
                        <form action="#">
                            {/* Rounded Profile Image Selection with Camera Icon */}
                            <div
                                className="profile-image-box"
                                onClick={() => document.getElementById("profile-image").click()}
                            >
                                <label htmlFor="profile-image" className="profile-image-label">
                                    {profileImage ? (
                                        <img
                                            src={URL.createObjectURL(profileImage)}
                                            alt="Profile Preview"
                                            className="profile-image-preview"
                                        />
                                    ) : (
                                        <div className="default-profile-image">
                                            <i className="fas fa-camera"></i>
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        id="profile-image"
                                        accept=".jpg, .jpeg, .png"
                                        onChange={handleImageChange}
                                    />
                                </label>
                            </div>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Full Name</span>
                                    <input type="text" placeholder="Enter your name" required />
                                </div>
                                <div class="input-box">
                                    <span class="details">Description</span>
                                    <input type="text" placeholder="Enter your username" required />
                                </div>
                                <div class="input-box">
                                    <span class="details">Birth Date</span>
                                    <input type="text" placeholder="Enter your email" required />
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
                                <input type="submit" value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </StyleUserDetails>
    )
}

const StyleUserDetails = styled.section`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
  }

.ud-body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.container {
    max-width: 700px;
    width: 100%;
    background-color: #fff;
    padding: 25px 30px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}

.container .title {
    font-size: 25px;
    font-weight: 500;
    position: relative;
}

.container .title::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    border-radius: 5px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.content form .user-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0 12px 0;
}

form .user-details .input-box {
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);
}

form .input-box span.details {
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
}

.user-details .input-box input {
    height: 45px;
    width: 100%;
    outline: none;
    font-size: 16px;
    border-radius: 5px;
    padding-left: 15px;
    border: 1px solid #ccc;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
}

.user-details .input-box input:focus,
.user-details .input-box input:valid {
    border-color: #9b59b6;
}

form .gender-details .gender-title {
    font-size: 20px;
    font-weight: 500;
}

form .category {
    display: flex;
    width: 80%;
    margin: 14px 0;
    justify-content: space-between;
}

form .category label {
    display: flex;
    align-items: center;
    cursor: pointer;
}

form .category label .dot {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    margin-right: 10px;
    background: #d9d9d9;
    border: 5px solid transparent;
    transition: all 0.3s ease;
}

#dot-1:checked~.category label .one,
#dot-2:checked~.category label .two,
#dot-3:checked~.category label .three {
    background: #9b59b6;
    border-color: #d9d9d9;
}

form input[type="radio"] {
    display: none;
}

form .button {
    height: 45px;
    margin: 35px 0
}

form .button input {
    height: 100%;
    width: 100%;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

form .button input:hover {
    /* transform: scale(0.99); */
    background: linear-gradient(-135deg, #71b7e6, #9b59b6);
}

@media(max-width: 584px) {
    .container {
        max-width: 100%;
    }

    form .user-details .input-box {
        margin-bottom: 15px;
        width: 100%;
    }

    form .category {
        width: 100%;
    }

    .content form .user-details {
        max-height: 300px;
        overflow-y: scroll;
    }

    .user-details::-webkit-scrollbar {
        width: 5px;
    }
}

@media(max-width: 459px) {
    .container .content .category {
        flex-direction: column;
    }
}

.profile-image-box {
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .profile-image-label {
    display: inline-block;
    position: relative;
  }

  .profile-image-preview,
  .default-profile-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }

  .default-profile-image i {
    color: #666;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .container {
      max-width: 100%;
    }

    .content form .user-details .input-box {
      width: 100%;
    }

    .profile-image-box {
      margin-bottom: 10px;
    }

    .profile-image-preview,
    .default-profile-image {
      width: 80px;
      height: 80px;
      font-size: 18px;
    }
  }
`;

export default UserDetails;