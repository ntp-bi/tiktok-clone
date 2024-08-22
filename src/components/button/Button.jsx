import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./button.scss";

const Button = ({
    to,
    href,
    children,
    onClick,
    className,
    leftIcon,
    rightIcon,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    small = false,
    large = false,
    rounded = false,
    ...passProps
}) => {

    // Define class names
    const primaryClass = primary ? "btn__primary" : "";
    const outlineClass = outline ? "btn__outline" : "";
    const textClass = text ? "btn__text" : "";
    const disabledClass = disabled ? "btn__disabled" : "";
    const smallClass = small ? "btn__small" : "";
    const largeClass = large ? "btn__large" : "";
    const roundedClass = rounded ? "btn__rounded" : "";

    // Combine all class names
    const classes =
        `btn ${primaryClass} ${outlineClass} ${textClass} ${disabledClass} ${smallClass} ${largeClass} ${roundedClass} ${
            className || ""
        }`.trim();

    let Component = "button";
    let buttonProps = {
        onClick,
        ...passProps,
    };

    // Remove event listeners when clicked
    if (disabled) {
        Object.keys(buttonProps).forEach((key) => {
            if (key.startsWith("on") && typeof buttonProps[key] === "function") {
                delete buttonProps[key];
            }
        });
    }

    if (to) {
        buttonProps.to = to;
        Comp = Link;
    } else if (href) {
        buttonProps.href = href;
        Comp = "a";
    }

    return (
        <Component className={classes} {...buttonProps}>
            {leftIcon && <span className="btn__icon">{leftIcon}</span>}
            <span className="btn__title">{children}</span>
            {rightIcon && <span className="btn__icon">{rightIcon}</span>}
        </Component>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    rounded: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};

export default Button;
