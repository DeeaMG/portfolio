import React, { useEffect } from "react";
import "./Experience.scss";

export default function Experience() {
  useEffect(() => {
    const stack = document.querySelector(".stack") as HTMLElement; // Select the parent div

    // Function to generate random positions
    const getRandomPosition = (min: number, max: number) => Math.random() * (max - min) + min;

    // Loop through each image and set random positions with spacing
    const images = stack.querySelectorAll("img");
    const spacing = 20; // Adjust the spacing as needed
    let topOffset = 0;

    images.forEach((img) => {
      const top = topOffset + getRandomPosition(0, stack.clientHeight - img.clientHeight);
      const left = getRandomPosition(0, stack.clientWidth - img.clientWidth);
      img.style.position = "absolute";
      img.style.top = `${top}px`;
      img.style.left = `${left}px`;
      topOffset += spacing; // Increase top offset for spacing
    });
  }, []);

  return (
    <div className='experience-container'>
      <div className='description'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad officia voluptatibus voluptas
        magni aspernatur laboriosam officiis quos veniam mollitia quae labore sed, provident
        architecto dignissimos voluptatum illo quibusdam, earum iste..
      </div>
      <div className='stack' style={{ position: "relative" }}>
        <img src='https://img.icons8.com/color/48/000000/react-native.png' alt='React' />
        <img src='https://img.icons8.com/color/48/000000/javascript.png' alt='JavaScript' />
        <img src='https://img.icons8.com/color/48/000000/typescript.png' alt='TypeScript' />
        <img src='https://img.icons8.com/color/48/000000/sass.png' alt='Sass' />
        <img src='https://img.icons8.com/color/48/000000/material-ui.png' alt='Material UI' />
        <img src='https://img.icons8.com/color/48/000000/redux.png' alt='Redux' />
        <img src='https://img.icons8.com/color/48/000000/nodejs.png' alt='NodeJS' />
        <img src='https://img.icons8.com/color/48/000000/mongodb.png' alt='MongoDB' />
        <img src='https://img.icons8.com/color/48/000000/firebase' alt='Firebase' />
        <img src='https://img.icons8.com/color/48/000000/git.png' alt='Git' />
        <img src='https://img.icons8.com/color/48/000000/npm.png' alt='NPM' />
        <img src='https://img.icons8.com/color/48/000000/figma--v1.png' alt='Figma' />
        <img src='https://img.icons8.com/color/48/000000/adobe-photoshop.png' alt='Photoshop' />
      </div>
    </div>
  );
}
