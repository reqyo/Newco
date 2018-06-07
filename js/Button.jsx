import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import style from './Button.css';

const textDecor = {
  'text-decoration': 'none'
};

const ProjectButton = props => (
  <Link to={props.link} style={textDecor}>
    <button className={style.button}>{props.name}</button>
  </Link>
);

ProjectButton.propTypes = {
  link: string.isRequired,
  name: string.isRequired
};

export default ProjectButton;
