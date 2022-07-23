import { Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

import commentCardStyle from "./comment.module.scss";

const regex = {
    name: /^[a-zA-Z]+$/,
    email: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
}

const CommentCard = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const submitForm = (data) => {
        console.log(data);
        reset({
            name: "",
            email: "",
            comment: ""
        })
    };

    return <div className={commentCardStyle.comment_section}>
        <p className={commentCardStyle.comment_title}>Leave a Comment:</p>
        <form onSubmit={handleSubmit(submitForm)}>
            <Box className={commentCardStyle.comment_formField}>
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        className={`form-control ${errors.name && commentCardStyle.error_input}`}
                        {...register("name", {
                            required: "Name is required.", pattern: {
                                value: regex.name,
                                message: "Name must be only alphabet."
                            }
                        })} />
                    <p className={`text-danger ${commentCardStyle.error_text}`}>{errors.name?.message}</p>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your Email"
                        name="email"
                        className={`form-control ${errors.email && commentCardStyle.error_input}`}
                        {...register("email", {
                            required: "Email is required.", pattern: {
                                value: regex.email,
                                message: "Email is not valid."
                            }
                        })} />
                    <p className={`text-danger ${commentCardStyle.error_text}`}>{errors.email?.message}</p>
                </div>
            </Box>
            <textarea
                placeholder="Your Message"
                name="comment"
                className={`form-control ${errors.comment && commentCardStyle.error_input}`}
                {...register("comment", {
                    required: "Comment is required.",
                    minLength: {
                        value: 15,
                        message: "Message must be greater then 15 character."
                    }
                })} />
            <p className={`text-danger ${commentCardStyle.error_text}`}>{errors.comment?.message}</p>
            <Button className={commentCardStyle.postComment_btn} type="submit">Post comment</Button>
        </form>
    </div>
}
export default CommentCard;